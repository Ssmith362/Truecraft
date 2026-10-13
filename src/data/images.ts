import type { StaticImageData } from "next/image";

import heroHome from "@/assets/photos/hero-home.jpg";
import flooringInstallation from "@/assets/photos/flooring-installation.jpg";
import flooringRoom from "@/assets/photos/flooring-room.jpg";
import lvpLaminate from "@/assets/photos/lvp-laminate.jpg";
import laminateRoom from "@/assets/photos/laminate-room.jpg";
import plankTexture from "@/assets/photos/plank-texture.jpg";
import commercialFlooring from "@/assets/photos/commercial-flooring.jpg";
import commercialOffice from "@/assets/photos/commercial-office.jpg";
import carpetRepair from "@/assets/photos/carpet-repair.jpg";
import petDamageDog from "@/assets/photos/pet-damage-dog.jpg";
import petDamageCat from "@/assets/photos/pet-damage-cat.jpg";
import carpetRestretching from "@/assets/photos/carpet-restretching.jpg";
import carpetTexture from "@/assets/photos/carpet-texture.jpg";
import trimBaseboards from "@/assets/photos/trim-baseboards.jpg";
import trimSaw from "@/assets/photos/trim-saw.jpg";
import doors from "@/assets/photos/doors.jpg";
import doubleDoors from "@/assets/photos/double-doors.jpg";
import blinds from "@/assets/photos/blinds.jpg";
import lightFixture from "@/assets/photos/light-fixture.jpg";
import siding from "@/assets/photos/siding.jpg";
import drywall from "@/assets/photos/drywall.jpg";
import painting from "@/assets/photos/painting.jpg";
import fenceDeck from "@/assets/photos/fence-deck.jpg";
import deckBoards from "@/assets/photos/deck-boards.jpg";
import tapeMeasure from "@/assets/photos/tape-measure.jpg";
import emptyRoom from "@/assets/photos/empty-room.jpg";
import stagedLiving from "@/assets/photos/staged-living.jpg";

/**
 * THE PHOTO MAP.
 *
 * Components ask for a slot by name (`images.heroHome`) and never touch a file
 * path, so swapping a photo is: replace the file, run `npm run images`, update
 * the alt text here. Static imports give next/image the real width, height and
 * a blur placeholder automatically, so nothing shifts while a photo loads.
 *
 * `stock: true` = temporary CC0 stock (see _assets/source/credits.json).
 * These are generic room and material photos. They are NOT presented anywhere
 * as TrueCraft's own work: stock slots never appear in the Projects gallery,
 * and their alt text describes the scene, not a job Matt did.
 */
export type SiteImage = {
  src: StaticImageData;
  alt: string;
  stock: boolean;
};

const stock = (src: StaticImageData, alt: string): SiteImage => ({ src, alt, stock: true });

export const images = {
  heroHome: stock(heroHome, "Bright living space with warm hardwood flooring and French doors"),
  flooringInstallation: stock(
    flooringInstallation,
    "Open kitchen and dining area with wood-look plank flooring",
  ),
  flooringRoom: stock(flooringRoom, "Empty room with freshly finished hardwood flooring"),
  lvpLaminate: stock(lvpLaminate, "Living room with light wood-look plank flooring and a fireplace"),
  laminateRoom: stock(laminateRoom, "Sunlit empty room with wood-look laminate flooring"),
  plankTexture: stock(plankTexture, "Close view of grey wood-look flooring planks"),
  commercialFlooring: stock(
    commercialFlooring,
    "Open-plan office with wood flooring, a lounge area and a meeting table",
  ),
  commercialOffice: stock(commercialOffice, "Small office common area with light wood flooring"),
  carpetRepair: stock(carpetRepair, "Bulldog resting on a blue carpeted floor"),
  petDamageDog: stock(petDamageDog, "Dog lying on a carpeted floor, looking at the camera"),
  petDamageCat: stock(petDamageCat, "Calico cat stretched out on carpet"),
  carpetRestretching: stock(carpetRestretching, "Cat sitting on wall-to-wall carpet"),
  carpetTexture: stock(carpetTexture, "Close view of grey loop carpet"),
  trimBaseboards: stock(trimBaseboards, "Carpenter laying out white trim boards in a room under renovation"),
  trimSaw: stock(trimSaw, "Carpenter cutting white trim on a mitre saw"),
  doors: stock(doors, "Entry hall with dark wood doors and white panelled trim"),
  doubleDoors: stock(doubleDoors, "White double doors opening onto a room with a pale wood floor"),
  blinds: stock(blinds, "Loft living room with slatted blinds on tall windows"),
  lightFixture: stock(lightFixture, "Three pendant lights hanging from a kitchen ceiling"),
  siding: stock(siding, "Gable end of a house with horizontal lap siding"),
  drywall: stock(drywall, "Room with freshly hung and taped drywall before paint"),
  painting: stock(painting, "Living room with clean, freshly painted white walls"),
  fenceDeck: stock(fenceDeck, "Close view of a drill driving a screw into a deck board"),
  deckBoards: stock(deckBoards, "Weathered wood deck boards"),
  tapeMeasure: stock(tapeMeasure, "Tape measure extended across a white surface"),
  emptyRoom: stock(emptyRoom, "Empty room with wood floors, white baseboards and fresh paint"),
  stagedLiving: stock(stagedLiving, "Staged living room with a fireplace, ready for a showing"),
} satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof images;
