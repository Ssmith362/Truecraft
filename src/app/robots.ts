import type { MetadataRoute } from "next";
import { allowIndexing } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  /**
   * Indexing is opt-in. Until NEXT_PUBLIC_ALLOW_INDEXING is exactly "true",
   * every crawler is turned away, so a preview or demo build can never be
   * indexed while business details are still being confirmed.
   */
  if (!allowIndexing) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
