import { areas, coreAreas } from "@/data/areas";
import { services, servicePath } from "@/data/services";
import { site } from "@/data/site";
import { absoluteUrl } from "./seo";

/**
 * Structured data helpers.
 *
 * RULES ENFORCED HERE
 *  - No AggregateRating or Review markup, ever. Google does not reward a
 *    business marking up reviews of itself and may penalise it.
 *  - No openingHours unless site.hours has entries.
 *  - No street address unless site.address.showPublicly is true. A
 *    service-area business is described by `areaServed` instead.
 *  - No licence or credential properties until site.credentials.verified.
 *  - FAQPage is only emitted on pages that visibly render the same Q&A.
 */

const BUSINESS_ID = `${absoluteUrl("/")}#business`;

const cityNode = (name: string, region: string) => ({
  "@type": "City",
  name,
  containedInPlace: { "@type": "State", name: region === "WA" ? "Washington" : "Idaho" },
});

export function localBusinessSchema() {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": BUSINESS_ID,
    name: site.name,
    description:
      "Flooring installation, carpet repair, carpet restretching and home repairs for homeowners, landlords and property owners in the Spokane area.",
    url: absoluteUrl("/"),
    telephone: site.phone.e164,
    areaServed: areas.map((a) => cityNode(a.name, a.region)),
    knowsAbout: services.map((s) => s.name),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Flooring, carpet and home repair services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, url: absoluteUrl(servicePath(s.slug)) },
      })),
    },
  };

  if (site.email) schema.email = site.email;
  if (site.logo) {
    schema.logo = absoluteUrl(site.logo.src);
    schema.image = absoluteUrl(site.logo.src);
  }

  // Locality only by default: says where the business is based without
  // publishing a home address.
  schema.address = {
    "@type": "PostalAddress",
    ...(site.address.showPublicly && site.address.street
      ? { streetAddress: site.address.street, postalCode: site.address.postalCode ?? undefined }
      : {}),
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  };

  if (site.hours.length > 0) {
    schema.openingHoursSpecification = site.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    }));
  }

  const sameAs = Object.values(site.social).filter((v): v is string => Boolean(v));
  if (sameAs.length) schema.sameAs = sameAs;

  return schema;
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${absoluteUrl("/")}#website`,
    url: absoluteUrl("/"),
    name: site.name,
    publisher: { "@id": BUSINESS_ID },
    inLanguage: "en-US",
  };
}

export function serviceSchema(opts: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    provider: { "@id": BUSINESS_ID },
    areaServed: coreAreas.map((a) => cityNode(a.name, a.region)),
  };
}

export function breadcrumbSchema(crumbs: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.href),
    })),
  };
}

/** Only call this where the same Q&A pairs are rendered visibly on the page. */
export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: absoluteUrl("/contact"),
    name: `Contact ${site.name}`,
    mainEntity: { "@id": BUSINESS_ID },
  };
}
