import type { StaticImageData } from "next/image";

/**
 * Project gallery.
 *
 * REAL WORK ONLY. Every entry here must be a job TrueCraft actually did,
 * photographed by Matt or the customer. Stock images never go in this file.
 * While the list is empty the gallery shows nothing on the public site.
 *
 * To add a project:
 *   1. Put the photos in src/assets/projects/
 *   2. import them at the top of this file
 *   3. add an entry below
 *
 * Before-and-after pairs must be the same room, same job.
 */
export type ProjectCategory = "Flooring" | "Carpet Repair" | "Carpet Restretching" | "Home Repairs";

export type Project = {
  title: string;
  category: ProjectCategory;
  /** City or neighborhood only. Never a street address. */
  location?: string;
  description: string;
  photos: { src: StaticImageData; alt: string; label?: "Before" | "After" }[];
};

export const projects: Project[] = [];

export const projectCategories: ProjectCategory[] = [
  "Flooring",
  "Carpet Repair",
  "Carpet Restretching",
  "Home Repairs",
];
