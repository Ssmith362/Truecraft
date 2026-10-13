import Link from "next/link";
import { Awaiting } from "@/components/bits";
import { CtaBand } from "@/components/chrome";
import { PageHeader } from "@/components/PageHeader";
import { ButtonLink, Container, Eyebrow, Icon, PhoneLink, Ruler, TextLink } from "@/components/ui";
import { areas, areasConfirmed } from "@/data/areas";
import { featuredSlugs, getService, servicePath } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Service Areas | Flooring & Home Repair in Spokane County",
  description:
    "TrueCraft Home Repair serves Spokane, Spokane Valley, Liberty Lake, Mead and nearby communities with flooring, carpet repair and home repairs.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  const core = areas.filter((a) => a.core);
  const wider = areas.filter((a) => !a.core);
  const featured = featuredSlugs.map(getService).filter((s) => s !== undefined);

  return (
    <>
      <PageHeader
        crumbs={[{ name: "Service Areas", href: "/service-areas" }]}
        eyebrow="Where TrueCraft works"
        title="Serving Spokane and the communities around it"
        lede="TrueCraft is a local business that comes to you. There is no showroom to visit: the work happens in your home, rental or business."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" arrow>
            Check Your Address
          </ButtonLink>
          <PhoneLink />
        </div>
      </PageHeader>

      {!areasConfirmed && (
        <Container className="pt-10 empty:hidden">
          <Awaiting title="Service areas need Matt's sign-off">
            This list is a reasonable Spokane-area default, not something Matt has confirmed. Edit{" "}
            <code>src/data/areas.ts</code> to match where he actually travels, then set{" "}
            <code>areasConfirmed</code> to true.
          </Awaiting>
        </Container>
      )}

      <section className="py-16 sm:py-24">
        <Container>
          <Eyebrow className="text-forest-700">Regular service area</Eyebrow>
          <ul className="mt-8 grid gap-x-14 gap-y-12 md:grid-cols-2">
            {core.map((area) => (
              <li key={area.name} id={area.name.toLowerCase().replace(/\s+/g, "-")}>
                <Ruler className="text-navy-800" />
                <h2 className="mt-6 flex items-center gap-3 text-4xl text-navy-900">
                  <Icon name="pin" className="h-7 w-7 text-gold-600" />
                  {area.name}, {area.region}
                </h2>
                <p className="mt-4 text-lg text-ink-soft">{area.note}</p>
                {area.neighborhoods && (
                  <p className="mt-4 text-[0.97rem] text-ink">
                    <span className="font-semibold text-navy-900">Including: </span>
                    {area.neighborhoods.join(", ")}.
                  </p>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {wider.length > 0 && (
        <section className="bg-cream-100">
          <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div>
              <h2 className="text-3xl text-navy-900 sm:text-4xl">A little further out</h2>
              <p className="mt-4 text-ink-soft">
                These areas are covered too, though scheduling depends on the size of the job. It is
                always worth asking.
              </p>
            </div>
            <ul className="divide-y divide-navy-900/15 border-y border-navy-900/15">
              {wider.map((area) => (
                <li key={area.name} className="grid gap-1 py-5 sm:grid-cols-[13rem_1fr] sm:gap-8">
                  <h3 className="text-[1.4rem] text-navy-900">
                    {area.name}, {area.region}
                  </h3>
                  <p className="text-ink-soft">{area.note}</p>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <h2 className="text-4xl text-navy-900 sm:text-[2.9rem]">Not sure if you are in range?</h2>
            <p className="mt-5 text-lg text-ink-soft">
              Send your ZIP code with a line about the job. Travel is rarely the deciding factor for a
              flooring project or a full repair list, and you will get a straight yes or no either way.
            </p>
            <TextLink href="/contact" className="mt-6 text-navy-900">
              Ask about your address
            </TextLink>
          </div>
          <div>
            <p className="eyebrow text-gold-700">Flooring and carpet work across the area</p>
            <ul className="mt-5 border-t border-navy-900/20">
              {featured.map((service) => (
                <li key={service.slug} className="border-b border-navy-900/20">
                  <Link href={servicePath(service.slug)} className="group flex items-center justify-between gap-6 py-5">
                    <span>
                      <span className="block font-serif text-2xl font-bold text-navy-900 group-hover:text-gold-700">
                        {service.navLabel} in the Spokane area
                      </span>
                      <span className="mt-1 block text-[0.97rem] text-ink-soft">{service.blurb}</span>
                    </span>
                    <Icon name="arrow" className="h-5 w-5 text-gold-600" />
                  </Link>
                </li>
              ))}
            </ul>
            <TextLink href="/services" className="mt-6 text-navy-900">
              All services
            </TextLink>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
