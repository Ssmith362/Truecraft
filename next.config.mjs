/**
 * Plain .mjs on purpose (same reasoning as the other Flourish Now builds): no
 * compile step for the config, so it loads on any host.
 *
 * If TrueCraft ever replaces an older website, add its URLs to
 * `legacyRedirects` so existing links and rankings carry over. There is no
 * previous site on record, so the list starts empty.
 */

/** @type {{ from: string; to: string }[]} */
export const legacyRedirects = [];

/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,

  async redirects() {
    return [
      // The estimate form lives on /contact. Keep the obvious alias working.
      { source: "/request-an-estimate", destination: "/contact", statusCode: 301 },
      { source: "/estimate", destination: "/contact", statusCode: 301 },
      ...legacyRedirects.map(({ from, to }) => ({ source: from, destination: to, statusCode: 301 })),
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
