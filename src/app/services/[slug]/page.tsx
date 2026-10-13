import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, FaqList, JsonLd, Photo } from "@/components/bits";
import { CtaBand } from "@/components/chrome";
import { ArrowChip, ButtonLink, Container, Eyebrow, Icon, PhoneLink, Ruler } from "@/components/ui";
import { images } from "@/data/images";
import { getService, groups, servicePath, services } from "@/data/services";
import { estimateNoun, site } from "@/data/site";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

// Only published services are built. Anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: servicePath(service.slug),
    image: `/og/${service.slug}.png`,
  });
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const contactHref = `/contact?service=${service.slug}`;
  const related = service.related.map(getService).filter((s) => s !== undefined);
  const sections = [
    { id: "problems", label: service.problems.heading },
    ...(service.compare ? [{ id: "compare", label: service.compare.heading }] : []),
    { id: "scope", label: service.scope.heading },
    { id: "cost", label: service.cost.heading },
    { id: "process", label: service.process.heading },
    { id: "estimate", label: service.estimate.heading },
    { id: "faqs", label: "Common questions" },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: service.name,
            description: service.seo.description,
            path: servicePath(service.slug),
          }),
          faqSchema(service.faqs),
        ]}
      />

      {/* Hero */}
      <section className="bg-cream-100">
        <Container className="grid gap-12 pb-16 pt-8 sm:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:pb-24">
          <div>
            <Breadcrumbs
              crumbs={[
                { name: "Services", href: "/services" },
                { name: service.navLabel, href: servicePath(service.slug) },
              ]}
            />
            <Eyebrow className="mt-10 text-forest-700">{service.eyebrow}</Eyebrow>
            <h1 className="mt-4 text-[2.5rem] text-navy-900 sm:text-[3.4rem]">{service.h1}</h1>
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-ink">{service.lede}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={contactHref} arrow>
                {service.ctaLabel}
              </ButtonLink>
              <PhoneLink />
            </div>
          </div>
          <div className="relative">
            {/* Offset gold frame: a quiet echo of a picture rail. */}
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 hidden h-full w-full border border-gold-500 sm:block"
            />
            <div className="relative aspect-[5/4] overflow-hidden">
              <Photo image={images[service.image]} priority sizes="(min-width: 1024px) 46vw, 100vw" />
            </div>
          </div>
        </Container>
        <Ruler className="text-navy-800" />
      </section>

      {/* Introduction, with a jump list on wide screens */}
      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.7fr_1fr] lg:gap-20">
          <div className="prose-tc max-w-3xl text-lg leading-relaxed text-ink">
            {service.intro.map((paragraph, index) => (
              <p
                key={index}
                className={index === 0 ? "font-serif text-[1.45rem] leading-snug text-navy-900" : ""}
              >
                {paragraph}
              </p>
            ))}
          </div>
          <nav aria-label="On this page" className="hidden self-start border-l border-navy-900/20 pl-7 lg:block">
            <p className="eyebrow text-gold-700">On this page</p>
            <ul className="mt-4 space-y-2.5 text-[0.97rem]">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-navy-900 underline-offset-4 hover:underline">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </section>

      {/* Problems */}
      <section id="problems" className="pb-16 sm:pb-24">
        <Container>
          <h2 className="max-w-3xl text-4xl text-navy-900 sm:text-[2.9rem]">{service.problems.heading}</h2>
          {service.problems.intro && (
            <p className="mt-5 max-w-2xl text-lg text-ink-soft">{service.problems.intro}</p>
          )}
          <ul className="mt-12 grid gap-x-14 gap-y-10 md:grid-cols-2">
            {service.problems.items.map((item, index) => (
              <li key={item.title} className="grid grid-cols-[auto_1fr] gap-5">
                <span className="font-serif text-xl italic text-gold-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="border-t border-navy-900/20 pt-3">
                  <h3 className="text-[1.45rem] text-navy-900">{item.title}</h3>
                  <p className="mt-2 text-ink-soft">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Repair or replace */}
      {service.compare && (
        <section id="compare" className="bg-forest-900 text-cream-50">
          <Container className="py-16 sm:py-24">
            <h2 className="max-w-3xl text-4xl sm:text-[2.9rem]">{service.compare.heading}</h2>
            <p className="mt-5 max-w-2xl text-lg text-sage-100">{service.compare.intro}</p>
            <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-0">
              <div className="md:pr-12">
                <Ruler className="text-gold-300" />
                <h3 className="mt-5 text-2xl text-gold-300">{service.compare.left.label}</h3>
                <ul className="mt-5 space-y-3 text-sage-100">
                  {service.compare.left.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Icon name="check" className="mt-1 h-5 w-5 text-gold-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:border-l md:border-white/15 md:pl-12">
                <Ruler className="text-sage-200" />
                <h3 className="mt-5 text-2xl text-sage-100">{service.compare.right.label}</h3>
                <ul className="mt-5 space-y-3 text-sage-200">
                  {service.compare.right.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-sage-200" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {service.compare.note && (
              <p className="mt-10 font-script text-[1.9rem] leading-tight text-gold-300">
                {service.compare.note}
              </p>
            )}
          </Container>
        </section>
      )}

      {/* Scope */}
      <section id="scope" className="bg-cream-100">
        <Container className="grid gap-12 py-16 sm:py-24 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-4xl text-navy-900 sm:text-[2.9rem]">{service.scope.heading}</h2>
            {service.scope.intro && <p className="mt-5 text-lg text-ink-soft">{service.scope.intro}</p>}
            <ul className="mt-9 divide-y divide-navy-900/15 border-y border-navy-900/15">
              {service.scope.items.map((item) => (
                <li key={item} className="flex gap-4 py-3.5">
                  <Icon name="check" className="mt-1 h-5 w-5 text-forest-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-[20rem] overflow-hidden lg:min-h-0">
            <Photo
              image={images[service.secondaryImage ?? service.image]}
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
          </div>
        </Container>
      </section>

      {/* Cost */}
      <section id="cost" className="bg-navy-900 text-cream-50">
        <Container className="grid gap-12 py-16 sm:py-24 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow className="text-gold-300">Pricing, explained</Eyebrow>
            <h2 className="mt-4 text-4xl sm:text-[2.9rem]">{service.cost.heading}</h2>
            <p className="mt-5 text-lg text-navy-100">{service.cost.intro}</p>
            <p className="mt-5 text-navy-200">
              You will always have a quote before any work is booked. If the budget is tight, say so. There
              may be another way to approach it.
            </p>
          </div>
          <dl className="divide-y divide-white/15 border-y border-white/15">
            {service.cost.factors.map((factor) => (
              <div key={factor.title} className="grid gap-2 py-6 sm:grid-cols-[14rem_1fr] sm:gap-8">
                <dt className="font-serif text-[1.35rem] font-bold leading-snug text-cream-50">
                  {factor.title}
                </dt>
                <dd className="text-navy-100">{factor.body}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Process */}
      <section id="process" className="py-16 sm:py-24">
        <Container>
          <h2 className="text-4xl text-navy-900 sm:text-[2.9rem]">{service.process.heading}</h2>
          <ol className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-flow-col lg:auto-cols-fr lg:grid-cols-none">
            {service.process.steps.map((step, index) => (
              <li key={step.title}>
                <p aria-hidden="true" className="font-serif text-6xl font-bold leading-none text-cream-300">
                  {index + 1}
                </p>
                <Ruler className="mt-4 text-navy-800" />
                <h3 className="mt-5 text-[1.4rem] text-navy-900">{step.title}</h3>
                <p className="mt-2 text-[0.98rem] text-ink-soft">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* What to send + honest limits */}
      <section id="estimate" className="pb-16 sm:pb-24">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="border border-line bg-white p-7 sm:p-10">
            <h2 className="text-3xl text-navy-900 sm:text-4xl">{service.estimate.heading}</h2>
            {service.estimate.intro && <p className="mt-4 text-ink-soft">{service.estimate.intro}</p>}
            <ul className="mt-7 space-y-3">
              {service.estimate.items.map((item) => (
                <li key={item} className="flex gap-3.5">
                  <span
                    aria-hidden="true"
                    className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={contactHref} arrow>
                {service.ctaLabel}
              </ButtonLink>
              <PhoneLink />
            </div>
            <p className="mt-5 text-[0.9rem] text-ink-soft">
              {site.estimates.photoAssessments
                ? `You can attach photos to the ${estimateNoun} form.`
                : `Use the ${estimateNoun} form or call.`}
            </p>
          </div>

          <div className="border-l-4 border-gold-500 pl-7 lg:self-center">
            <h2 className="text-3xl text-navy-900">{service.limits.heading}</h2>
            <div className="prose-tc mt-4 text-ink-soft">
              {service.limits.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section id="faqs" className="bg-cream-100">
        <Container className="grid gap-10 py-16 sm:py-24 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <Eyebrow className="text-forest-700">{service.navLabel}</Eyebrow>
            <h2 className="mt-4 text-4xl text-navy-900 sm:text-[2.9rem]">Common questions</h2>
            <p className="mt-5 text-ink-soft">
              Something not covered here? Call{" "}
              <a
                href={`tel:${site.phone.e164}`}
                className="whitespace-nowrap font-semibold text-navy-900 underline underline-offset-4"
              >
                {site.phone.display}
              </a>{" "}
              and ask.
            </p>
          </div>
          <FaqList items={service.faqs} />
        </Container>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 sm:py-20">
          <Container>
            <h2 className="text-3xl text-navy-900">Often done alongside</h2>
            <ul className="mt-8 grid gap-x-10 sm:grid-cols-2">
              {related.map((r) => (
                <li key={r.slug} className="border-t border-navy-900/20 last:border-b sm:[&:nth-last-child(2)]:border-b">
                  <Link href={servicePath(r.slug)} className="group flex items-center gap-5 py-5">
                    <span className="min-w-0 flex-1">
                      <span className="eyebrow block text-gold-700">{groups[r.group].label}</span>
                      <span className="mt-1.5 block font-serif text-2xl font-bold text-navy-900 group-hover:text-gold-700">
                        {r.navLabel}
                      </span>
                    </span>
                    <ArrowChip />
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <CtaBand
        heading={`Ready to talk about ${service.navLabel.toLowerCase()}?`}
        ctaLabel={service.ctaLabel}
        ctaHref={contactHref}
      />
    </>
  );
}
