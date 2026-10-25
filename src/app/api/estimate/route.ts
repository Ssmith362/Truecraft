import { services } from "@/data/services";
import { site } from "@/data/site";
import {
  CONTACT_METHODS,
  LIMITS,
  OTHER_SERVICE,
  validateFields,
  validatePhotos,
  type EstimateFields,
} from "@/lib/estimate";

/**
 * Estimate-request endpoint. The only part of the site that runs at request
 * time; everything else is prerendered.
 *
 * HONESTY RULE: if delivery is not configured this returns 503 and the form
 * tells the visitor plainly that the message was NOT sent and to call instead.
 * It never reports success for a request that was not delivered.
 *
 * Required environment variables (see .env.example):
 *   RESEND_API_KEY   server-only secret
 *   CONTACT_INBOX    where requests are delivered (Matt's inbox)
 *   MAIL_FROM        verified sender, e.g. "TrueCraft website <estimates@domain>"
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

const allowedServices = [...services.map((s) => s.navLabel), OTHER_SERVICE];

function config() {
  const key = process.env.RESEND_API_KEY?.trim();
  const inbox = process.env.CONTACT_INBOX?.trim();
  const from = process.env.MAIL_FROM?.trim();
  return key && inbox && from ? { key, inbox, from } : null;
}

function clean(value: FormDataEntryValue | null, limit: number) {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

/** Header-injection guard: a line break in any header-bound field is rejected. */
const hasBreak = (value: string) => /[\r\n]/.test(value);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Best-effort throttle: 5 requests per 10 minutes per IP. Serverless instances
 * do not share memory, so this slows a casual flood rather than stopping a
 * determined one. The honeypot and validation do the rest.
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function throttled(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

/** Visible in the host's logs, so dropped submissions can be audited. Holds no personal details. */
function logFiltered(reason: "honeypot" | "too-fast", elapsedMs?: number) {
  console.warn("[spam-filtered]", JSON.stringify({ form: "true-craft-estimate", reason, elapsedMs }));
}

/** Lets you confirm from a browser whether delivery is wired up. No secrets. */
export function GET() {
  return Response.json({ configured: Boolean(config()) });
}

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return Response.json({ error: "Malformed request." }, { status: 400 });
  }

  // Honeypot. Answer 200 so a bot cannot tell it was caught, but send nothing.
  // The field has an unremarkable name on purpose: "company" and "website" get
  // autofilled by browsers, which would silently drop a real inquiry.
  if (clean(form.get("ref_code_x7"), 200)) {
    logFiltered("honeypot");
    return Response.json({ ok: true });
  }

  // Time trap: catches instant bots. Low on purpose, since browser autofill is
  // quick. The form reports how long it was open, measured on the visitor's own
  // device, so a wrong clock cannot make a real person look like a bot. Absent
  // = not judged, so an old cached copy of the form is never turned away.
  const elapsedRaw = clean(form.get("elapsedMs"), 20);
  const elapsed = elapsedRaw === "" ? Number.NaN : Number(elapsedRaw);
  if (elapsed >= 0 && elapsed < 2000) {
    logFiltered("too-fast", elapsed);
    return Response.json({ ok: true });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (throttled(ip)) {
    return Response.json({ error: "Too many requests. Please call instead." }, { status: 429 });
  }

  const fields: EstimateFields = {
    name: clean(form.get("name"), LIMITS.name),
    phone: clean(form.get("phone"), LIMITS.phone),
    email: clean(form.get("email"), LIMITS.email),
    location: clean(form.get("location"), LIMITS.location),
    service: clean(form.get("service"), LIMITS.service),
    message: clean(form.get("message"), LIMITS.message),
    contactMethod: clean(form.get("contactMethod"), 10),
  };
  if (!(CONTACT_METHODS as readonly string[]).includes(fields.contactMethod)) {
    fields.contactMethod = CONTACT_METHODS[0];
  }

  const photos = form.getAll("photos").filter((p): p is File => p instanceof File && p.size > 0);

  const errors = { ...validateFields(fields, allowedServices), photos: validatePhotos(photos) };
  if (hasBreak(fields.name) || hasBreak(fields.email) || hasBreak(fields.location)) {
    errors.name ??= "Please remove any line breaks.";
  }
  if (Object.values(errors).some(Boolean)) {
    return Response.json({ error: "Some details were missing or malformed.", errors }, { status: 422 });
  }

  const cfg = config();
  if (!cfg) {
    console.warn("Estimate request received but delivery is not configured. Nothing was sent.");
    return Response.json({ error: "unconfigured" }, { status: 503 });
  }

  const rows: Array<[string, string]> = [
    ["Name", fields.name],
    ["Phone", fields.phone],
    ["Email", fields.email || "not given"],
    ["ZIP / neighborhood", fields.location],
    ["Service", fields.service],
    ["Prefers", fields.contactMethod],
    ["Project", fields.message],
    ["Photos", photos.length ? `${photos.length} attached` : "none"],
  ];

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const html = `<table cellpadding="6" style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:15px">${rows
    .map(
      ([label, value]) =>
        `<tr><td style="color:#46535e;vertical-align:top;white-space:nowrap"><strong>${label}</strong></td><td style="color:#14212c;white-space:pre-wrap">${escapeHtml(
          value,
        )}</td></tr>`,
    )
    .join("")}</table>`;

  const attachments = await Promise.all(
    photos.map(async (photo, index) => ({
      // Never trust a client-supplied filename in a header.
      filename: `photo-${index + 1}.${photo.type === "image/png" ? "png" : photo.type === "image/webp" ? "webp" : "jpg"}`,
      content: Buffer.from(await photo.arrayBuffer()).toString("base64"),
    })),
  );

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: { Authorization: `Bearer ${cfg.key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: cfg.from,
        to: [cfg.inbox],
        subject: `${site.shortName} estimate request: ${fields.service} (${fields.name}, ${fields.location})`,
        // Lets Matt reply straight to the customer when they gave an address.
        ...(fields.email ? { reply_to: fields.email } : {}),
        text,
        html,
        ...(attachments.length ? { attachments } : {}),
      }),
    });

    if (!response.ok) {
      // Shown in the host's logs. The visitor is told it failed and to call.
      console.error("Resend rejected the estimate email", response.status, await response.text());
      return Response.json({ error: "Could not send." }, { status: 502 });
    }
  } catch (error) {
    console.error("Resend request failed", error);
    return Response.json({ error: "Could not send." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
