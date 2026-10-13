import { carpetServices } from "./carpet";
import { flooringServices } from "./flooring";
import { repairServices } from "./repairs";
import type { Service, ServiceGroup } from "./types";

export type { Service, ServiceGroup } from "./types";

/**
 * Display order matters: it drives the nav, the services overview and the
 * footer. Flooring and carpet lead because they are what sets TrueCraft apart.
 */
const everyService: Service[] = [...flooringServices, ...carpetServices, ...repairServices];

/** Everything written, including pages held back from publication. */
export const allServices = everyService;

/** Only what the public site shows. Use this everywhere except audits. */
export const services = everyService.filter((s) => s.published);

export const groups: Record<ServiceGroup, { label: string; intro: string }> = {
  flooring: {
    label: "Flooring",
    intro: "New floors for homes and businesses, with the preparation done properly.",
  },
  carpet: {
    label: "Carpet repair & restretching",
    intro: "Find out whether your carpet can be repaired before you pay to replace it.",
  },
  repairs: {
    label: "Home repairs",
    intro: "The repairs and installs that keep getting pushed down the list.",
  },
};

export const servicesByGroup = (group: ServiceGroup) => services.filter((s) => s.group === group);

export const getService = (slug: string) => services.find((s) => s.slug === slug);

/** The three services the homepage leads with. */
export const featuredSlugs = ["flooring-installation", "carpet-repair", "carpet-restretching"] as const;

export const servicePath = (slug: string) => `/services/${slug}`;
