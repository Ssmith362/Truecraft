/**
 * Customer reviews.
 *
 * RULES
 *  - Only real reviews, copied word for word from Matt's Google Business
 *    Profile, with the reviewer's permission where a full name is shown.
 *  - Never invent, paraphrase into something better, or "tidy up" a quote.
 *  - `aggregate` stays null until the live rating and count are read off the
 *    profile. While it is null, no star rating appears anywhere on the site.
 *
 * Self-serving review/rating structured data is NOT emitted even when these
 * are filled in: Google does not show review stars for a business's own
 * reviews of itself, and marking them up risks a manual action. The reviews
 * are displayed for people, not for rich results.
 */
export type Review = {
  name: string;
  /** e.g. "Carpet repair". Only if obvious from the review. */
  service?: string;
  /** e.g. "South Hill". Only if the reviewer said so. */
  location?: string;
  /** ISO date the review was posted, if known. */
  date?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  source: "Google";
};

export const reviews: Review[] = [];

/** Read these off the live profile. Do not estimate. */
export const aggregate: { rating: number; count: number; asOf: string } | null = null;
