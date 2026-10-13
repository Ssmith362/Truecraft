import { projects } from "./projects";
import { reviews } from "./reviews";
import { site } from "./site";

/**
 * Reviews and Projects only become public (nav link, sitemap entry, indexable)
 * once they hold real content, or in the case of reviews a verified Google
 * profile to link to. Until then the pages exist but stay out of the way.
 */
export const hasReviewsContent = reviews.length > 0 || Boolean(site.social.googleBusinessProfile);
export const hasProjectsContent = projects.length > 0;
