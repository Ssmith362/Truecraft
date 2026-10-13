import type { MetadataRoute } from "next";
import { hasProjectsContent, hasReviewsContent } from "@/data/flags";
import { servicePath, services } from "@/data/services";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

/**
 * Only pages that should be indexed are listed. Unpublished services are
 * already excluded by `services`; Reviews and Projects join the sitemap the
 * moment they have real content.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/services", priority: 0.9 },
    ...services.map((s) => ({
      path: servicePath(s.slug),
      priority: s.tier === "primary" ? 0.9 : 0.7,
    })),
    { path: "/contact", priority: 0.8 },
    { path: "/for-property-managers", priority: 0.7 },
    { path: "/service-areas", priority: 0.7 },
    { path: "/about", priority: 0.6 },
    ...(hasReviewsContent ? [{ path: "/reviews", priority: 0.6 }] : []),
    ...(hasProjectsContent ? [{ path: "/projects", priority: 0.6 }] : []),
    { path: "/privacy-policy", priority: 0.2 },
  ];

  return pages.map(({ path, priority }) => ({ url: absoluteUrl(path), priority }));
}
