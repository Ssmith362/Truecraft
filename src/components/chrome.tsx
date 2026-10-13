import Image from "next/image";
import Link from "next/link";
import { coreAreas } from "@/data/areas";
import { hasProjectsContent, hasReviewsContent } from "@/data/flags";
import { groups, servicesByGroup, servicePath } from "@/data/services";
import type { ServiceGroup } from "@/data/services";
import { estimateCta, showPlaceholders, site, telHref } from "@/data/site";
import { MobileNav } from "./MobileNav";
import { ButtonLink, Container, Icon, PhoneLink, Ruler } from "./ui";

// Reviews and Projects only earn a nav slot once they have real content. In
// dev they show so the pages can be worked on. See data/flags.ts.
export { hasProjectsContent, hasReviewsContent };

const groupOrder: ServiceGroup[] = ["flooring", "carpet", "repairs"];

export const primaryNav = [
  { href: "/services", label: "Services" },
  { href: "/for-property-managers", label: "Landlords & Realtors" },
  { href: "/about", label: "About" },
  ...(hasReviewsContent || showPlaceholders ? [{ href: "/reviews", label: "Reviews" }] : []),
  ...(hasProjectsContent || showPlaceholders ? [{ href: "/projects", label: "Projects" }] : []),
  { href: "/contact", label: "Contact" },
];

/* -------------------------------------------------------------------------- */
/* Wordmark                                                                   */
/* -------------------------------------------------------------------------- */

/**
 * Typeset wordmark. This is deliberately NOT a drawn logo: no logo file has
 * been supplied yet, and inventing one is not our call. When Matt's real logo
 * arrives, put it in /public/brand and fill in `site.logo`; this component
 * switches to it automatically.
 */
export function Wordmark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  if (site.logo) {
    return (
      <Image
        src={site.logo.src}
        width={site.logo.width}
        height={site.logo.height}
        alt={site.logo.alt}
        priority
        className="h-12 w-auto"
      />
    );
  }

  const main = tone === "dark" ? "text-navy-900" : "text-cream-50";
  const sub = tone === "dark" ? "text-gold-700" : "text-gold-300";

  return (
    <span className="flex flex-col leading-none">
      <span className={`font-sans text-[1.35rem] font-extrabold tracking-[0.04em] ${main}`}>
        TRUE<span className="font-semibold">CRAFT</span>
      </span>
      <span className={`mt-1 text-[0.62rem] font-semibold tracking-[0.34em] ${sub}`}>HOME REPAIR</span>
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/* Header                                                                     */
/* -------------------------------------------------------------------------- */

export function SiteHeader() {
  return (
    <>
      {/* Utility bar: scrolls away, leaving the sticky header behind. */}
      <div className="bg-navy-900 text-cream-100">
        <Container className="flex items-center justify-between gap-4 py-2 text-[0.8rem]">
          <p className="flex items-center gap-2">
            <Icon name="pin" className="h-4 w-4 text-gold-400" />
            <span>
              Proudly serving <span className="font-semibold">{site.areaPhrase}</span>
            </span>
          </p>
          <p className="hidden items-center gap-6 md:flex">
            <span className="flex items-center gap-2">
              <Icon name="home" className="h-4 w-4 text-gold-400" />
              Locally owned
            </span>
            {site.credentials.verified && (
              <span className="flex items-center gap-2">
                <Icon name="shield" className="h-4 w-4 text-gold-400" />
                {site.credentials.label}
              </span>
            )}
            <span className="font-script text-[1.15rem] leading-none text-gold-300">
              Small repairs make a big difference.
            </span>
          </p>
        </Container>
      </div>

      <header className="sticky top-0 z-40 border-b border-line bg-cream-50/95 backdrop-blur supports-[backdrop-filter]:bg-cream-50/85">
        <Container className="flex h-[4.5rem] items-center justify-between gap-6">
          <Link href="/" aria-label={`${site.name} home`} className="shrink-0">
            <Wordmark />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1 text-[0.95rem] font-medium text-navy-900">
              {primaryNav.map((item) =>
                item.href === "/services" ? (
                  <li key={item.href} className="group relative">
                    <Link
                      href="/services"
                      className="flex items-center gap-1 rounded-sm px-3 py-2 hover:text-gold-700"
                    >
                      Services
                      <Icon
                        name="chevron"
                        className="h-4 w-4 transition-transform duration-150 group-hover:rotate-180 group-focus-within:rotate-180"
                      />
                    </Link>
                    <ServicesMenu />
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link href={item.href} className="rounded-sm px-3 py-2 hover:text-gold-700">
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={telHref}
              className="hidden items-center gap-2 rounded-[3px] border border-navy-900 px-4 py-2.5 text-[0.95rem] font-semibold text-navy-900 transition-colors hover:bg-navy-900 hover:text-white sm:inline-flex"
            >
              <Icon name="phone" className="h-[1.1rem] w-[1.1rem]" />
              <span className="whitespace-nowrap">
                <span className="hidden xl:inline">Call </span>
                {site.phone.display}
              </span>
            </a>
            {/* Wrapper carries the breakpoint: the button's own display class would win otherwise. */}
            <div className="hidden md:block">
              <ButtonLink href="/contact" className="min-h-0! px-5! py-3!">
                {estimateCta}
              </ButtonLink>
            </div>
            <MobileNav
              items={primaryNav}
              groups={groupOrder.map((g) => ({
                label: groups[g].label,
                links: servicesByGroup(g).map((s) => ({ href: servicePath(s.slug), label: s.navLabel })),
              }))}
              phone={{ href: telHref, display: site.phone.display }}
              estimateCta={estimateCta}
            />
          </div>
        </Container>
      </header>
    </>
  );
}

/** Desktop services dropdown. CSS only: opens on hover and on keyboard focus. */
function ServicesMenu() {
  return (
    <div className="invisible absolute left-1/2 top-full z-50 w-[46rem] -translate-x-1/3 pt-3 opacity-0 transition-[opacity,visibility] duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
      <div className="border border-line bg-cream-50 shadow-[0_18px_40px_-18px_rgba(11,26,40,0.35)]">
        <div className="grid grid-cols-3 gap-8 p-7">
          {groupOrder.map((g) => (
            <div key={g}>
              <p className="eyebrow text-gold-700">{groups[g].label}</p>
              <Ruler className="mt-3 text-navy-800" />
              <ul className="mt-3 space-y-0.5">
                {servicesByGroup(g).map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={servicePath(s.slug)}
                      className="block rounded-sm py-1.5 text-[0.94rem] text-navy-900 hover:text-gold-700"
                    >
                      {s.navLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Link
          href="/services"
          className="flex items-center justify-between border-t border-line bg-cream-100 px-7 py-3.5 text-[0.94rem] font-semibold text-navy-900 hover:text-gold-700"
        >
          See everything TrueCraft does
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Footer                                                                     */
/* -------------------------------------------------------------------------- */

export function SiteFooter() {
  const year = new Date().getFullYear();
  const social = [
    { label: "Google", href: site.social.googleBusinessProfile },
    { label: "Facebook", href: site.social.facebook },
    { label: "Instagram", href: site.social.instagram },
    { label: "Nextdoor", href: site.social.nextdoor },
  ].filter((s): s is { label: string; href: string } => Boolean(s.href));

  return (
    <footer className="bg-navy-950 text-navy-200">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" aria-label={`${site.name} home`} className="inline-block">
            <Wordmark tone="light" />
          </Link>
          <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed">
            Flooring installation, carpet repair and the home repairs that keep getting pushed down the
            list. Serving {site.areaPhrase}.
          </p>
          <a
            href={telHref}
            className="mt-6 inline-flex items-center gap-2.5 font-serif text-2xl font-bold text-cream-50 hover:text-gold-300"
          >
            <Icon name="phone" className="h-5 w-5 text-gold-400" />
            {site.phone.display}
          </a>
          {site.email && (
            <p className="mt-2">
              <a href={`mailto:${site.email}`} className="hover:text-cream-50">
                {site.email}
              </a>
            </p>
          )}
          {site.hours.length > 0 && (
            <ul className="mt-4 space-y-1 text-[0.9rem]">
              {site.hours.map((h) => (
                <li key={h.days.join()}>
                  {h.days[0]}
                  {h.days.length > 1 ? ` to ${h.days[h.days.length - 1]}` : ""}: {h.opens} to {h.closes}
                </li>
              ))}
            </ul>
          )}
          {site.credentials.verified && (
            <p className="mt-4 text-[0.9rem]">
              {site.credentials.label}
              {site.credentials.contractorRegistration
                ? ` · WA contractor reg. ${site.credentials.contractorRegistration}`
                : ""}
            </p>
          )}
        </div>

        <FooterColumn title="Flooring & carpet">
          {[...servicesByGroup("flooring"), ...servicesByGroup("carpet")].map((s) => (
            <FooterLink key={s.slug} href={servicePath(s.slug)}>
              {s.navLabel}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Home repairs">
          {servicesByGroup("repairs").map((s) => (
            <FooterLink key={s.slug} href={servicePath(s.slug)}>
              {s.navLabel}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="TrueCraft">
          <FooterLink href="/about">About</FooterLink>
          <FooterLink href="/for-property-managers">Landlords & realtors</FooterLink>
          <FooterLink href="/service-areas">Service areas</FooterLink>
          {(hasReviewsContent || showPlaceholders) && <FooterLink href="/reviews">Reviews</FooterLink>}
          {(hasProjectsContent || showPlaceholders) && <FooterLink href="/projects">Projects</FooterLink>}
          <FooterLink href="/contact">{estimateCta}</FooterLink>
        </FooterColumn>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-6 text-[0.85rem] md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. Serving {coreAreas.map((a) => a.name).join(", ")} and nearby.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {social.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-cream-50">
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <Link href="/privacy-policy" className="hover:text-cream-50">
                Privacy policy
              </Link>
            </li>
          </ul>
        </Container>
      </div>
      {/* Clears the fixed mobile call bar. */}
      <div aria-hidden="true" className="h-16 md:hidden" />
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <nav aria-label={title}>
      <h2 className="eyebrow !font-sans text-gold-300">{title}</h2>
      <ul className="mt-5 space-y-2.5 text-[0.95rem]">{children}</ul>
    </nav>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="hover:text-cream-50">
        {children}
      </Link>
    </li>
  );
}

/* -------------------------------------------------------------------------- */
/* Mobile call bar                                                            */
/* -------------------------------------------------------------------------- */

/** Fixed to the bottom of the screen on phones: the two actions, always in reach. */
export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-navy-950/20 shadow-[0_-8px_24px_-12px_rgba(11,26,40,0.45)] md:hidden">
      <a
        href={telHref}
        className="flex min-h-14 items-center justify-center gap-2 bg-navy-900 px-3 text-[0.95rem] font-semibold text-cream-50"
      >
        <Icon name="phone" className="h-[1.1rem] w-[1.1rem] text-gold-300" />
        Call {site.phone.display}
      </a>
      <Link
        href="/contact"
        className="flex min-h-14 items-center justify-center gap-2 bg-gold-600 px-3 text-[0.95rem] font-semibold text-white"
      >
        {estimateCta}
      </Link>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Closing call to action                                                     */
/* -------------------------------------------------------------------------- */

/**
 * The band that ends every page. Navy, with the Inland Northwest tree line
 * along the bottom edge.
 */
export function CtaBand({
  heading = "Let's get your home repair list handled.",
  body = "Tell Matt what needs doing. You will get a straight answer, an honest quote and a time he will actually keep.",
  ctaLabel = estimateCta,
  ctaHref = "/contact",
}: {
  heading?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-cream-50">
      <TreeLine className="pointer-events-none absolute inset-x-0 bottom-0 h-28 w-full text-navy-950 sm:h-36" />
      <Container className="relative grid gap-10 py-20 sm:py-24 lg:grid-cols-[1.5fr_1fr] lg:items-center">
        <div>
          <h2 className="max-w-2xl text-4xl sm:text-5xl">{heading}</h2>
          <p className="mt-5 max-w-xl text-lg text-navy-100">{body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={ctaHref} arrow>
              {ctaLabel}
            </ButtonLink>
            <PhoneLink variant="outlineLight" />
          </div>
        </div>
        <p className="hidden -rotate-3 justify-self-end font-script text-[2.6rem] leading-[1.05] text-gold-300 lg:block">
          Spokane homes,
          <br />
          stronger together.
        </p>
      </Container>
    </section>
  );
}

/** Pine ridge silhouette. Decorative. */
export function TreeLine({ className = "" }: { className?: string }) {
  // One tree, repeated at varied heights across the width.
  const trees = Array.from({ length: 34 }, (_, i) => {
    const x = i * 36 + ((i * 17) % 11);
    const h = 46 + ((i * 37) % 44);
    return { x, h };
  });
  return (
    <svg aria-hidden="true" viewBox="0 0 1200 120" preserveAspectRatio="none" className={className}>
      <g fill="currentColor">
        {trees.map(({ x, h }, i) => (
          <path
            key={i}
            d={`M${x} 120 L${x} ${120 - h * 0.18} L${x - 11} ${120 - h * 0.18} L${x - 3} ${120 - h * 0.42} L${x - 8} ${120 - h * 0.42} L${x - 1.5} ${120 - h * 0.7} L${x - 5} ${120 - h * 0.7} L${x + 2} ${120 - h} L${x + 9} ${120 - h * 0.7} L${x + 5.5} ${120 - h * 0.7} L${x + 12} ${120 - h * 0.42} L${x + 7} ${120 - h * 0.42} L${x + 15} ${120 - h * 0.18} L${x + 4} ${120 - h * 0.18} L${x + 4} 120 Z`}
          />
        ))}
        <rect x="0" y="112" width="1200" height="8" />
      </g>
    </svg>
  );
}
