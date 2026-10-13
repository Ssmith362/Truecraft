import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink, Container, Eyebrow, PhoneLink, Ruler } from "@/components/ui";
import { featuredSlugs, getService, servicePath } from "@/data/services";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found | TrueCraft Home Repair" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  const featured = featuredSlugs.map(getService).filter((s) => s !== undefined);
  return (
    <section className="bg-cream-100">
      <Container className="py-20 sm:py-28">
        <Eyebrow className="text-forest-700">Error 404</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-[2.6rem] text-navy-900 sm:text-6xl">
          This page has come loose. The rest of the site is nailed down.
        </h1>
        <p className="mt-6 max-w-xl text-xl text-ink">
          The link you followed may be old, or the address may have a typo. Here is where most people
          are headed.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" arrow>
            Back to the Homepage
          </ButtonLink>
          <PhoneLink />
        </div>
        <Ruler className="mt-16 text-navy-800" />
        <ul className="mt-8 flex flex-wrap gap-x-10 gap-y-3 text-lg">
          {featured.map((s) => (
            <li key={s.slug}>
              <Link
                href={servicePath(s.slug)}
                className="font-semibold text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-[6px]"
              >
                {s.navLabel}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/services"
              className="font-semibold text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-[6px]"
            >
              All services
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="font-semibold text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-[6px]"
            >
              Contact
            </Link>
          </li>
        </ul>
      </Container>
    </section>
  );
}
