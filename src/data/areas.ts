/**
 * Service areas.
 *
 * CONFIRM WITH MATT before launch. This list is a sensible Spokane-area
 * default, not something he has signed off. Remove any place he does not
 * travel to and add any he does; the service-areas page, the footer and the
 * `areaServed` schema all follow this file.
 *
 * `core: true` areas are named in schema and the footer. The rest appear only
 * on the service-areas page.
 *
 * No individual city pages exist yet on purpose. A page per city is only worth
 * building once there is something genuinely local to put on it (real jobs,
 * photos and reviews from that area). See the roadmap in README.md.
 */
export type Area = {
  name: string;
  region: "WA" | "ID";
  core: boolean;
  /** One or two honest sentences. No invented local claims. */
  note: string;
  /** Neighborhoods, used for natural local context on the areas page. */
  neighborhoods?: string[];
};

export const areasConfirmed = false;

export const areas: Area[] = [
  {
    name: "Spokane",
    region: "WA",
    core: true,
    note: "The home base. From older homes with original trim and tired carpet to newer builds that need their first round of repairs.",
    neighborhoods: [
      "South Hill",
      "North Side",
      "Five Mile",
      "Indian Trail",
      "Shadle",
      "West Central",
      "Browne's Addition",
      "Logan",
      "Hillyard",
      "Manito",
      "Lincoln Heights",
    ],
  },
  {
    name: "Spokane Valley",
    region: "WA",
    core: true,
    note: "Flooring, carpet repair and home repairs across the Valley.",
    neighborhoods: ["Veradale", "Opportunity", "Greenacres", "Dishman", "Millwood"],
  },
  {
    name: "Liberty Lake",
    region: "WA",
    core: true,
    note: "Newer homes with a lot of carpet and plank flooring, where restretching and pet-damage repairs are common requests.",
  },
  {
    name: "Mead",
    region: "WA",
    core: true,
    note: "Mead, Wandermere and the north Spokane County area.",
  },
  {
    name: "Airway Heights",
    region: "WA",
    core: false,
    note: "West Plains homes and rental properties.",
  },
  {
    name: "Cheney",
    region: "WA",
    core: false,
    note: "Homes and rental properties in Cheney, where repairs between tenants are a regular need.",
  },
  {
    name: "Medical Lake",
    region: "WA",
    core: false,
    note: "Best suited to larger jobs and combined repair lists. Ask about scheduling.",
  },
  {
    name: "Nine Mile Falls",
    region: "WA",
    core: false,
    note: "Best suited to larger jobs and combined repair lists. Ask about scheduling.",
  },
];

export const coreAreas = areas.filter((a) => a.core);
