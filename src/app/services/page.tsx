import Link from "next/link";
import { Photo } from "@/components/bits";
import { CtaBand } from "@/components/chrome";
import { PageHeader } from "@/components/PageHeader";
import { ArrowChip, ButtonLink, Container, Eyebrow, PhoneLink, TextLink } from "@/components/ui";
import { images } from "@/data/images";
import { groups, servicePath, servicesByGroup } from "@/data/services";
import { estimateCta } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Flooring, Carpet Repair & Home Repair Services in Spokane",
  description:
    "Everything TrueCraft Home Repair does in the Spokane area: flooring installation, carpet repair and restretching, plus doors, trim, drywall and other home repairs.",
  path: "/services",
});

export default function ServicesPage() {
  const flooring = servicesByGroup("flooring");
  const carpet = servicesByGroup("carpet");
  const repairs = servicesByGroup("repairs");

  return (
    <>
      <PageHeader
        crumbs={[{ name: "Services", href: "/services" }]}
        eyebrow="What TrueCraft does"
        title="Floors, carpet and the repairs in between"
        lede="Flooring and carpet are the specialties. Around them sits the everyday repair work that keeps a home or a rental in good order. Pick the job that sounds like yours, or bring the whole list."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" arrow>
            {estimateCta}
          </ButtonLink>
          <PhoneLink />
        </div>
      </PageHeader>

      {/* Flooring: photo-led pair + remaining links */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div>
              <Eyebrow className="text-gold-700">Specialty</Eyebrow>
              <h2 className="mt-4 text-4xl text-navy-900 sm:text-5xl">{groups.flooring.label}</h2>
              <p className="mt-5 text-lg text-ink-soft">{groups.flooring.intro}</p>
            </div>
            <ul className="grid gap-6 sm:grid-cols-2">
              {flooring.map((service, index) => (
                <li key={service.slug} className={index === 0 ? "sm:col-span-2" : ""}>
                  <Link
                    href={servicePath(service.slug)}
                    className="group flex h-full flex-col border border-line bg-white transition-colors hover:border-navy-900"
                  >
                    <div className={`relative overflow-hidden ${index === 0 ? "aspect-[21/9]" : "aspect-[16/9]"}`}>
                      <Photo
                        image={images[service.image]}
                        sizes={index === 0 ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 640px) 30vw, 100vw"}
                        className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="flex flex-1 items-end justify-between gap-6 p-6 sm:p-7">
                      <div>
                        <h3 className="text-2xl text-navy-900 sm:text-[1.7rem]">{service.navLabel}</h3>
                        <p className="mt-2 text-[0.97rem] text-ink-soft">{service.blurb}</p>
                      </div>
                      <ArrowChip />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Carpet: dark band, numbered */}
      <section className="bg-forest-900 text-cream-50">
        <Container className="py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <Eyebrow className="text-gold-300">Specialty</Eyebrow>
              <h2 className="mt-4 text-4xl sm:text-5xl">{groups.carpet.label}</h2>
            </div>
            <p className="text-lg text-sage-100">
              {groups.carpet.intro} Damaged and rippled carpet is repairable far more often than people
              expect.
            </p>
          </div>
          <ol className="mt-12 grid gap-px bg-white/15 md:grid-cols-3">
            {carpet.map((service, index) => (
              <li key={service.slug} className="bg-forest-900">
                <Link
                  href={servicePath(service.slug)}
                  className="group flex h-full flex-col justify-between gap-10 p-7 transition-colors hover:bg-forest-800 sm:p-9"
                >
                  <div>
                    <p className="font-serif text-lg italic text-gold-300">No. 0{index + 1}</p>
                    <h3 className="mt-2 text-[1.75rem]">{service.navLabel}</h3>
                    <p className="mt-3 text-sage-100">{service.blurb}</p>
                  </div>
                  <ArrowChip className="bg-gold-600! group-hover:bg-cream-50! group-hover:text-navy-900!" />
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Repairs: index list */}
      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow className="text-gold-700">Also</Eyebrow>
            <h2 className="mt-4 text-4xl text-navy-900 sm:text-5xl">{groups.repairs.label}</h2>
            <p className="mt-5 text-lg text-ink-soft">{groups.repairs.intro}</p>
            <TextLink href="/contact" className="mt-6 text-navy-900">
              Send your whole list
            </TextLink>
          </div>
          <ul className="border-t border-navy-900/20">
            {repairs.map((service) => (
              <li key={service.slug} className="border-b border-navy-900/20">
                <Link href={servicePath(service.slug)} className="group flex items-center gap-5 py-5 sm:gap-7">
                  <span className="relative hidden h-20 w-28 shrink-0 overflow-hidden sm:block">
                    <Photo image={images[service.image]} sizes="112px" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-serif text-2xl font-bold text-navy-900 group-hover:text-gold-700">
                      {service.navLabel}
                    </span>
                    <span className="mt-1 block text-[0.97rem] text-ink-soft">{service.blurb}</span>
                  </span>
                  <ArrowChip />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand
        heading="Not sure which one your job is?"
        body="Describe it in your own words. Matt will tell you what it involves and whether it is something he can take care of."
      />
    </>
  );
}
