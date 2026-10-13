/**
 * THE ONE PLACE business facts live.
 *
 * Every phone link, schema block, footer line and CTA label reads from here.
 * Change a value once and the whole site follows.
 *
 * VERIFICATION RULE
 * Anything marked `verified: false` came from the homepage concept image or a
 * reasonable assumption, NOT from Matt directly. Each one is listed in
 * LAUNCH-CHECKLIST.md and must be confirmed (or corrected) before the site is
 * indexed. Facts that are `null` are simply not rendered anywhere: no hours
 * line, no address, no licence badge, no rating markup.
 */

const env = (value: string | undefined) => (value && value.trim() ? value.trim() : undefined);

export const site = {
  name: "TrueCraft Home Repair",
  shortName: "TrueCraft",
  /** Used in the hero eyebrow and schema description. */
  tagline: "Flooring, carpet repair and the home repairs you've been putting off, handled.",
  locale: "en_US",

  /** Canonical origin. Set NEXT_PUBLIC_SITE_URL in production. */
  url: env(process.env.NEXT_PUBLIC_SITE_URL) ?? "http://localhost:3000",

  owner: {
    firstName: "Matt",
    /** CONFIRM: last name, and whether he wants it published. */
    lastName: null as string | null,
  },

  phone: {
    /** CONFIRM: taken from the homepage concept, not from Matt. */
    display: "509-362-2925",
    e164: "+15093622925",
    verified: false,
    /** CONFIRM: does Matt take texts (and photos) on this number? */
    acceptsTexts: false,
  },

  /** CONFIRM: public email address. null = not shown; the form still works. */
  email: null as string | null,

  /**
   * Service-area business: no storefront. Leave `showPublicly` false unless
   * Matt wants a street address on the site. City/region are used for schema.
   */
  address: {
    showPublicly: false,
    street: null as string | null,
    city: "Spokane",
    region: "WA",
    postalCode: null as string | null,
    country: "US",
  },

  /** Short phrase used in headers and CTAs. */
  areaPhrase: "Spokane and surrounding areas",

  /**
   * CONFIRM: business hours. Empty = no hours shown and no openingHours schema.
   * Example entry: { days: ["Monday","Tuesday"], opens: "08:00", closes: "17:00" }
   */
  hours: [] as { days: string[]; opens: string; closes: string }[],

  estimates: {
    /** CONFIRM: the concept says "Free Estimate". Set false to drop "Free". */
    free: true,
    verified: false,
    /** CONFIRM: is Matt comfortable giving a first read from photos? */
    photoAssessments: true,
  },

  /**
   * CONFIRM before showing ANY of this. Washington requires contractors to be
   * registered, bonded and insured with L&I, so the accurate phrase and the
   * registration number should come from Matt's L&I record, not from a mockup.
   * While `verified` is false no licence/bond/insurance wording renders.
   */
  credentials: {
    verified: false,
    label: "Licensed, bonded & insured",
    contractorRegistration: null as string | null,
  },

  social: {
    /** CONFIRM: the real Google Business Profile URL (share link from GBP). */
    googleBusinessProfile: null as string | null,
    /** The "write a review" short link from GBP, if Matt wants it on the site. */
    googleReviewLink: null as string | null,
    facebook: null as string | null,
    instagram: null as string | null,
    nextdoor: null as string | null,
  },

  /** Logo file in /public/brand. null = the typeset wordmark is used instead. */
  logo: null as { src: string; width: number; height: number; alt: string } | null,
};

export const telHref = `tel:${site.phone.e164}`;
export const smsHref = `sms:${site.phone.e164}`;

/** "Get a Free Estimate" only while estimates are confirmed free. */
export const estimateCta = site.estimates.free ? "Get a Free Estimate" : "Request an Estimate";
export const estimateNoun = site.estimates.free ? "free estimate" : "estimate";

/**
 * Dev-only "awaiting content" notes. Always on in `npm run dev`; off in a
 * production build unless NEXT_PUBLIC_SHOW_PLACEHOLDERS=true.
 */
export const showPlaceholders =
  process.env.NEXT_PUBLIC_SHOW_PLACEHOLDERS === "true" ||
  (process.env.NODE_ENV === "development" && process.env.NEXT_PUBLIC_SHOW_PLACEHOLDERS !== "false");

/** Indexing is opt-in. See .env.example. */
export const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";
