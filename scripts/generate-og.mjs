/**
 * Generates the 1200x630 share cards into /public/og:
 *
 *   default.png            used by every page without its own card
 *   <service-slug>.png     one per service page
 *
 * Built as static files rather than a runtime image route: zero per-request
 * cost, nothing to break on the host, and the result is visible in git.
 *
 * Usage:   npm run og
 * Needs:   Node 22.18+ (it imports the TypeScript service data directly) and
 *          sharp. Text is drawn with Georgia and Arial, which ship with
 *          Windows and macOS.
 *
 * Re-run after adding, renaming or publishing a service. The cards carry no
 * phone number, rating or photo on purpose, so nothing on them can go stale or
 * pass a stock image off as TrueCraft work.
 */
import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { carpetServices } from "../src/data/services/carpet.ts";
import { flooringServices } from "../src/data/services/flooring.ts";
import { repairServices } from "../src/data/services/repairs.ts";

const OUT = path.join(process.cwd(), "public", "og");
const W = 1200;
const H = 630;

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Greedy word wrap by character count. Good enough for short headlines. */
function wrap(text, max) {
  const lines = [];
  let line = "";
  for (const word of text.split(" ")) {
    if (line && (line + " " + word).length > max) {
      lines.push(line);
      line = word;
    } else {
      line = line ? `${line} ${word}` : word;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function card({ eyebrow, title }) {
  const size = title.length > 40 ? 68 : 82;
  const lines = wrap(title, title.length > 40 ? 28 : 22);
  const lineHeight = size * 1.1;
  const blockHeight = lines.length * lineHeight;
  const top = 300 - blockHeight / 2 + size * 0.8;

  // The ruler motif: a short tick every 8px, a long one every 40px.
  let ticks = "";
  for (let x = 72; x <= W - 72; x += 8) {
    const long = (x - 72) % 40 === 0;
    ticks += `<rect x="${x}" y="508" width="1.5" height="${long ? 16 : 8}" fill="#b9c8d6" opacity="0.55"/>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#11273a"/>
  <text x="72" y="104" font-family="Arial, Helvetica, sans-serif" font-size="40" font-weight="800" fill="#fcfaf5" letter-spacing="2">TRUECRAFT</text>
  <text x="74" y="134" font-family="Arial, Helvetica, sans-serif" font-size="17" font-weight="700" fill="#e3c67f" letter-spacing="8">HOME REPAIR</text>
  <text x="72" y="${top - size - 4}" font-family="Arial, Helvetica, sans-serif" font-size="21" font-weight="700" fill="#e3c67f" letter-spacing="5">${esc(eyebrow.toUpperCase())}</text>
  ${lines
    .map(
      (line, i) =>
        `<text x="70" y="${top + i * lineHeight}" font-family="Georgia, 'Times New Roman', serif" font-size="${size}" font-weight="700" fill="#fcfaf5">${esc(line)}</text>`,
    )
    .join("\n  ")}
  <path d="M74 ${top + (lines.length - 1) * lineHeight + 34} c70 -9 150 -12 250 -8" stroke="#b08a2e" stroke-width="7" stroke-linecap="round" fill="none"/>
  ${ticks}
  <text x="72" y="566" font-family="Arial, Helvetica, sans-serif" font-size="24" fill="#dfe7ee">Flooring  ·  Carpet repair  ·  Home repairs  ·  Spokane and surrounding areas</text>
</svg>`;
}

await mkdir(OUT, { recursive: true });

const cards = [
  {
    file: "default",
    eyebrow: "Spokane-area home repair specialists",
    title: "Reliable home repairs. Done right and on time.",
  },
  ...[...flooringServices, ...carpetServices, ...repairServices].map((s) => ({
    file: s.slug,
    eyebrow: "TrueCraft Home Repair · Spokane area",
    title: s.name,
  })),
];

for (const c of cards) {
  const info = await sharp(Buffer.from(card(c))).png({ compressionLevel: 9, palette: true }).toFile(path.join(OUT, `${c.file}.png`));
  console.log(`${c.file}.png  ${(info.size / 1024).toFixed(0)}KB`);
}
