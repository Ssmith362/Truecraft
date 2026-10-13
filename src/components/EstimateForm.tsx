"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import type { FormEvent } from "react";
import {
  CONTACT_METHODS,
  LIMITS,
  OTHER_SERVICE,
  validateFields,
  validatePhotos,
  type EstimateFields,
  type FieldErrors,
} from "@/lib/estimate";
import { Icon } from "./ui";

type Props = {
  /** Service names for the dropdown, in display order. */
  serviceOptions: { slug: string; label: string }[];
  phone: { href: string; display: string };
  photosEnabled: boolean;
  submitLabel: string;
};

type Status = "idle" | "sending" | "sent" | "failed" | "unconfigured";

/**
 * Shrinks a phone photo to something sensible to email (longest side 1600px,
 * JPEG). A 5MB camera photo comes out around 300-500KB. If the browser cannot
 * decode the file (some HEIC images outside Safari), the original is returned
 * and the size check decides whether it can be sent.
 */
async function downscale(file: File): Promise<File> {
  try {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, 1600 / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(bitmap.width * scale);
    canvas.height = Math.round(bitmap.height * scale);
    canvas.getContext("2d")?.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close();
    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.8));
    if (!blob) return file;
    return new File([blob], file.name.replace(/\.[^.]+$/, "") + ".jpg", { type: "image/jpeg" });
  } catch {
    return file;
  }
}

const inputClass =
  "mt-2 block w-full rounded-[3px] border border-navy-900/30 bg-white px-4 py-3 text-base text-ink placeholder:text-ink-soft/60 focus:border-navy-900 aria-[invalid=true]:border-red-700";

export function EstimateForm({ serviceOptions, phone, photosEnabled, submitLabel }: Props) {
  const id = useId();
  const serviceRef = useRef<HTMLSelectElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [photos, setPhotos] = useState<File[]>([]);
  const [preparing, setPreparing] = useState(false);

  const allowed = [...serviceOptions.map((s) => s.label), OTHER_SERVICE];

  // Preselect the service when arriving from a service page (/contact?service=slug).
  // Done on the DOM node rather than in state so the page can stay static.
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("service");
    const match = serviceOptions.find((s) => s.slug === slug);
    if (match && serviceRef.current) serviceRef.current.value = match.label;
  }, [serviceOptions]);

  // Move focus to the outcome so screen-reader and keyboard users land on it.
  useEffect(() => {
    if (status === "sent" || status === "unconfigured") resultRef.current?.focus();
  }, [status]);

  async function onPhotos(files: FileList | null) {
    if (!files?.length) return;
    setPreparing(true);
    const room = LIMITS.maxPhotos - photos.length;
    const prepared = await Promise.all(Array.from(files).slice(0, room).map(downscale));
    const next = [...photos, ...prepared];
    const problem = validatePhotos(next);
    if (problem) {
      setErrors((e) => ({ ...e, photos: problem }));
      // Keep only the ones that are individually acceptable.
      setPhotos(next.filter((p) => !validatePhotos([p])));
    } else {
      setErrors((e) => ({ ...e, photos: undefined }));
      setPhotos(next);
    }
    setPreparing(false);
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const text = (key: string) => String(data.get(key) ?? "").trim();

    const fields: EstimateFields = {
      name: text("name"),
      phone: text("phone"),
      email: text("email"),
      location: text("location"),
      service: text("service"),
      message: text("message"),
      contactMethod: text("contactMethod"),
    };

    const found: FieldErrors = { ...validateFields(fields, allowed), photos: validatePhotos(photos) };
    const firstBad = (Object.keys(found) as (keyof FieldErrors)[]).find((k) => found[k]);
    setErrors(found);
    if (firstBad) {
      form.querySelector<HTMLElement>(`[name="${firstBad}"]`)?.focus();
      return;
    }

    // The file input is not named, so photos are appended explicitly: these
    // are the downscaled copies, not the originals the visitor picked.
    photos.forEach((p) => data.append("photos", p, p.name));

    setStatus("sending");
    try {
      const response = await fetch("/api/estimate", { method: "POST", body: data });
      if (response.ok) setStatus("sent");
      else if (response.status === 503) setStatus("unconfigured");
      else if (response.status === 422) {
        const body = (await response.json().catch(() => null)) as { errors?: FieldErrors } | null;
        setErrors(body?.errors ?? {});
        setStatus("idle");
      } else setStatus("failed");
    } catch {
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <div ref={resultRef} tabIndex={-1} role="status" className="border border-forest-600 bg-white p-8">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-forest-600 text-white">
          <Icon name="check" className="h-6 w-6" />
        </span>
        <h2 className="mt-5 text-3xl text-navy-900">Got it. Your request is with Matt.</h2>
        <p className="mt-3 text-ink-soft">
          He will get back to you the way you asked. If it is urgent, or you would rather just talk it
          through, call{" "}
          <a href={phone.href} className="font-semibold text-navy-900 underline underline-offset-4">
            {phone.display}
          </a>
          .
        </p>
      </div>
    );
  }

  if (status === "unconfigured") {
    return (
      <div ref={resultRef} tabIndex={-1} role="alert" className="border border-gold-600 bg-white p-8">
        <h2 className="text-3xl text-navy-900">Online requests are not switched on yet.</h2>
        <p className="mt-3 text-ink-soft">
          Your message was <strong>not</strong> sent. Please call instead and Matt will take the details
          over the phone.
        </p>
        <a
          href={phone.href}
          className="mt-6 inline-flex min-h-12 items-center gap-2.5 rounded-[3px] bg-gold-600 px-6 font-semibold text-white hover:bg-gold-700"
        >
          <Icon name="phone" className="h-[1.1rem] w-[1.1rem]" />
          Call {phone.display}
        </a>
      </div>
    );
  }

  const err = (key: keyof FieldErrors) =>
    errors[key] ? (
      <p id={`${id}-${key}-error`} className="mt-2 text-[0.92rem] font-medium text-red-800">
        {errors[key]}
      </p>
    ) : null;

  const aria = (key: keyof FieldErrors) => ({
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `${id}-${key}-error` : undefined,
  });

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-6">
      {/* Honeypot. Hidden from people and assistive tech; bots fill it in. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className="font-semibold text-navy-900">
            Your name
          </label>
          <input
            id={`${id}-name`}
            name="name"
            type="text"
            autoComplete="name"
            maxLength={LIMITS.name}
            required
            className={inputClass}
            {...aria("name")}
          />
          {err("name")}
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className="font-semibold text-navy-900">
            Phone
          </label>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            maxLength={LIMITS.phone}
            required
            className={inputClass}
            {...aria("phone")}
          />
          {err("phone")}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-email`} className="font-semibold text-navy-900">
            Email <span className="font-normal text-ink-soft">(optional)</span>
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            maxLength={LIMITS.email}
            className={inputClass}
            {...aria("email")}
          />
          {err("email")}
        </div>
        <div>
          <label htmlFor={`${id}-location`} className="font-semibold text-navy-900">
            ZIP code or neighborhood
          </label>
          <input
            id={`${id}-location`}
            name="location"
            type="text"
            autoComplete="postal-code"
            maxLength={LIMITS.location}
            required
            className={inputClass}
            {...aria("location")}
          />
          {err("location")}
        </div>
      </div>

      <div>
        <label htmlFor={`${id}-service`} className="font-semibold text-navy-900">
          What do you need help with?
        </label>
        <div className="relative">
          <select
            ref={serviceRef}
            id={`${id}-service`}
            name="service"
            defaultValue=""
            required
            className={`${inputClass} appearance-none pr-12`}
            {...aria("service")}
          >
            <option value="" disabled>
              Choose the closest match
            </option>
            {serviceOptions.map((s) => (
              <option key={s.slug} value={s.label}>
                {s.label}
              </option>
            ))}
            <option value={OTHER_SERVICE}>{OTHER_SERVICE}</option>
          </select>
          <Icon
            name="chevron"
            className="pointer-events-none absolute right-4 top-1/2 mt-1 h-5 w-5 -translate-y-1/2 text-navy-900"
          />
        </div>
        {err("service")}
      </div>

      <div>
        <label htmlFor={`${id}-message`} className="font-semibold text-navy-900">
          Tell Matt about the project
        </label>
        <p id={`${id}-message-hint`} className="mt-1 text-[0.92rem] text-ink-soft">
          Which rooms, what is wrong, rough sizes, and any date you are working toward.
        </p>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={6}
          maxLength={LIMITS.message}
          required
          className={inputClass}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={`${id}-message-hint${errors.message ? ` ${id}-message-error` : ""}`}
        />
        {err("message")}
      </div>

      {photosEnabled && (
        <div>
          <label htmlFor={`${id}-photos`} className="font-semibold text-navy-900">
            Photos <span className="font-normal text-ink-soft">(optional, up to {LIMITS.maxPhotos})</span>
          </label>
          <p className="mt-1 text-[0.92rem] text-ink-soft">
            A wide shot of the room and a close-up of the problem are the most useful.
          </p>
          <label
            htmlFor={`${id}-photos`}
            className="mt-2 flex cursor-pointer items-center gap-3 rounded-[3px] border border-dashed border-navy-900/40 bg-white px-4 py-4 text-navy-900 hover:border-navy-900 has-[:focus-visible]:outline has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-gold-500"
          >
            <Icon name="camera" className="h-6 w-6 text-forest-600" />
            <span className="font-medium">
              {preparing ? "Preparing photos…" : photos.length ? "Add another photo" : "Add photos"}
            </span>
            <input
              id={`${id}-photos`}
              type="file"
              accept="image/*"
              multiple
              disabled={photos.length >= LIMITS.maxPhotos || preparing}
              onChange={(e) => {
                void onPhotos(e.target.files);
                e.target.value = "";
              }}
              className="sr-only"
              aria-describedby={errors.photos ? `${id}-photos-error` : undefined}
            />
          </label>
          {photos.length > 0 && (
            <ul className="mt-3 grid gap-2">
              {photos.map((photo, index) => (
                <li
                  key={`${photo.name}-${index}`}
                  className="flex items-center justify-between gap-3 border border-line bg-cream-100 px-3 py-2 text-[0.92rem]"
                >
                  <span className="truncate">
                    {photo.name}{" "}
                    <span className="text-ink-soft">({Math.max(1, Math.round(photo.size / 1024))} KB)</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setPhotos((list) => list.filter((_, i) => i !== index))}
                    className="shrink-0 font-semibold text-navy-900 underline underline-offset-4"
                  >
                    Remove<span className="sr-only"> {photo.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
          {err("photos")}
        </div>
      )}

      <fieldset>
        <legend className="font-semibold text-navy-900">Best way to reach you</legend>
        <div className="mt-3 flex flex-wrap gap-3">
          {CONTACT_METHODS.map((method, index) => (
            <label
              key={method}
              className="flex cursor-pointer items-center gap-2.5 rounded-[3px] border border-navy-900/30 bg-white px-4 py-2.5 has-[:checked]:border-navy-900 has-[:checked]:bg-navy-900 has-[:checked]:text-white has-[:focus-visible]:outline has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-gold-500"
            >
              <input
                type="radio"
                name="contactMethod"
                value={method}
                defaultChecked={index === 0}
                className="sr-only"
              />
              {method}
            </label>
          ))}
        </div>
      </fieldset>

      {status === "failed" && (
        <div role="alert" className="border border-red-700 bg-white p-5 text-red-900">
          <p className="font-semibold">Sorry, that did not go through.</p>
          <p className="mt-1">
            Your message was not sent. Please try again in a moment, or call{" "}
            <a href={phone.href} className="font-semibold underline underline-offset-4">
              {phone.display}
            </a>
            .
          </p>
        </div>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "sending" || preparing}
          className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[3px] bg-gold-600 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-gold-700 disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : submitLabel}
          {status !== "sending" && <Icon name="arrow" className="h-4 w-4" />}
        </button>
        <p className="text-[0.88rem] text-ink-soft">
          Your details are only used to reply to this request. See the{" "}
          <Link href="/privacy-policy" className="underline underline-offset-4 hover:text-navy-900">
            privacy policy
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
