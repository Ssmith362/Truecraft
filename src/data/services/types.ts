import type { ImageKey } from "@/data/images";

export type ServiceGroup = "flooring" | "carpet" | "repairs";

export type Service = {
  slug: string;
  /** Full service name, used in H1 context, schema and listings. */
  name: string;
  /** Short label for navigation and compact lists. */
  navLabel: string;
  group: ServiceGroup;
  /** Primary services lead the homepage and the services overview. */
  tier: "primary" | "secondary";

  /**
   * Has Matt confirmed he offers this, in these words?
   * `false` does not hide the page; it puts it on the launch checklist.
   */
  confirmed: boolean;
  confirmNote?: string;
  /**
   * The real switch. `false` removes the page from the nav, the listings, the
   * sitemap and the build (it 404s), while keeping the content ready to go.
   */
  published: boolean;

  image: ImageKey;
  secondaryImage?: ImageKey;

  seo: { title: string; description: string };
  eyebrow: string;
  h1: string;
  lede: string;
  /** One or two sentences for cards and index lists. */
  blurb: string;
  ctaLabel: string;

  intro: string[];
  problems: { heading: string; intro?: string; items: { title: string; body: string }[] };
  scope: { heading: string; intro?: string; items: string[] };
  /** Optional side-by-side: when a repair is worth exploring vs. when it is not. */
  compare?: {
    heading: string;
    intro: string;
    left: { label: string; items: string[] };
    right: { label: string; items: string[] };
    note?: string;
  };
  cost: { heading: string; intro: string; factors: { title: string; body: string }[] };
  process: { heading: string; steps: { title: string; body: string }[] };
  estimate: { heading: string; intro?: string; items: string[] };
  limits: { heading: string; body: string[] };
  faqs: { q: string; a: string }[];
  /** Slugs of related services for internal links. */
  related: string[];
};
