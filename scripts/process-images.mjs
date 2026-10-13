/**
 * Photo pipeline.
 *
 *   _assets/source/<name>.jpg   ->   src/assets/photos/<slot>.jpg
 *
 * Every photo on the site is a "slot" declared in src/data/images.ts. To
 * replace a temporary stock photo with one of Matt's real photos:
 *
 *   1. Drop the new file in _assets/source/
 *   2. Point the slot at it in SLOTS below
 *   3. npm run images
 *   4. In src/data/images.ts set that slot's `stock: false` and rewrite its alt
 *
 * Nothing else changes: components import slots, never file paths.
 * Output is re-encoded (mozjpeg, q82), capped at 2000px wide and stripped of
 * EXIF, so a phone photo with GPS coordinates never ships to the public site.
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC = "_assets/source";
const OUT = "src/assets/photos";
const MAX_WIDTH = 2000;

/** slot name -> source file (without extension) */
const SLOTS = {
  "hero-home": "room-hardwood-b",
  "flooring-installation": "kitchen-plank-floor",
  "flooring-room": "room-hardwood-a",
  "lvp-laminate": "living-fireplace-lvp",
  "laminate-room": "laminate-room",
  "plank-texture": "plank-texture-grey",
  "commercial-flooring": "office-a",
  "commercial-office": "office-c",
  "carpet-repair": "dog-bulldog-carpet",
  "pet-damage-dog": "dog-pitbull-carpet",
  "pet-damage-cat": "cat-calico-carpet",
  "carpet-restretching": "cat-grey-carpet",
  "carpet-texture": "carpet-texture-grey",
  "trim-baseboards": "worker-trim",
  "trim-saw": "worker-miter-saw",
  "doors": "hallway-doors",
  "double-doors": "double-doors",
  "blinds": "blinds-loft",
  "light-fixture": "pendants-kitchen",
  "siding": "siding-gable",
  "drywall": "drywall-room",
  "painting": "white-living-room",
  "fence-deck": "drill-deck-board",
  "deck-boards": "deck-boards",
  "tape-measure": "tape-measure",
  "empty-room": "room-empty-trim",
  "staged-living": "living-staged",
};

await fs.mkdir(OUT, { recursive: true });
const sources = await fs.readdir(SRC);

for (const [slot, source] of Object.entries(SLOTS)) {
  const file = sources.find((f) => f.replace(/\.[^.]+$/, "") === source);
  if (!file) {
    console.warn(`!! ${slot}: no source named "${source}" in ${SRC}`);
    continue;
  }
  const out = path.join(OUT, `${slot}.jpg`);
  const info = await sharp(path.join(SRC, file))
    .rotate() // honour EXIF orientation before the metadata is stripped
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(out);
  console.log(`${slot.padEnd(24)} ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)}KB  <- ${file}`);
}
