import { JsonLd } from "@/components/bits";
import { EstimateForm } from "@/components/EstimateForm";
import { PageHeader } from "@/components/PageHeader";
import { Container, Icon, Ruler, TextLink } from "@/components/ui";
import { coreAreas } from "@/data/areas";
import { services } from "@/data/services";
import { estimateCta, site, smsHref, telHref } from "@/data/site";
import { contactPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: `${site.estimates.free ? "Get a Free Estimate" : "Request an Estimate"} | TrueCraft Home Repair, Spokane`,
  description:
    "Tell TrueCraft about your flooring, carpet repair or home repair project in the Spokane area. Send details and photos, or call Matt directly.",
  path: "/contact",
});

const nextSteps = [
  {
    title: "Matt reads it himself",
    body: "Your request goes straight to the person who will do the work, not a call center.",
  },
  {
    title: "He gets back to you",
    body: "By call, text or email, whichever you chose. He may ask a question or two, or for another photo.",
  },
  {
    title: "You get a quote",
    body: "A clear price for a clear scope. If it needs a look in person first, he will arrange a time that he then keeps.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema()} />
      <PageHeader
        crumbs={[{ name: "Contact", href: "/contact" }]}
        eyebrow={`Request ${site.estimates.free ? "a free" : "an"} estimate`}
        title="Tell Matt what needs doing"
        lede="A few details and a couple of photos are usually enough to get a useful answer. The more you share, the more accurate the quote."
      />

      <section className="py-14 sm:py-20">
        <Container className="grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <div>
            <h2 className="sr-only">{estimateCta}</h2>
            <EstimateForm
              serviceOptions={services.map((s) => ({ slug: s.slug, label: s.navLabel }))}
              phone={{ href: telHref, display: site.phone.display }}
              photosEnabled={site.estimates.photoAssessments}
              submitLabel={`Send My ${site.estimates.free ? "Free " : ""}Estimate Request`}
            />
          </div>

          <aside className="space-y-10 lg:pt-1">
            <div className="bg-navy-900 p-8 text-cream-50">
              <p className="eyebrow text-gold-300">Rather talk it through?</p>
              <a
                href={telHref}
                className="mt-4 flex items-center gap-3 font-serif text-[2rem] font-bold leading-none hover:text-gold-300"
              >
                <Icon name="phone" className="h-7 w-7 text-gold-400" />
                {site.phone.display}
              </a>
              <p className="mt-4 text-navy-100">
                Call Matt directly. If he is on a job and cannot pick up, leave a message with your name and
                what you need and he will call you back.
              </p>
              {site.phone.acceptsTexts && (
                <a
                  href={smsHref}
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-gold-300 underline underline-offset-4"
                >
                  <Icon name="message" className="h-5 w-5" />
                  Or send a text
                </a>
              )}
              {site.email && (
                <p className="mt-5">
                  <a href={`mailto:${site.email}`} className="font-semibold underline underline-offset-4">
                    {site.email}
                  </a>
                </p>
              )}
              {site.hours.length > 0 && (
                <ul className="mt-6 space-y-1 border-t border-white/15 pt-5 text-[0.95rem] text-navy-100">
                  {site.hours.map((h) => (
                    <li key={h.days.join()}>
                      {h.days[0]}
                      {h.days.length > 1 ? ` to ${h.days[h.days.length - 1]}` : ""}: {h.opens} to {h.closes}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div>
              <h2 className="text-2xl text-navy-900">What happens next</h2>
              <ol className="mt-5 space-y-6">
                {nextSteps.map((step, index) => (
                  <li key={step.title} className="grid grid-cols-[auto_1fr] gap-4">
                    <span className="font-serif text-xl italic text-gold-700">0{index + 1}</span>
                    <div>
                      <h3 className="font-sans text-[1.05rem] font-semibold tracking-normal text-navy-900">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-[0.97rem] text-ink-soft">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <Ruler className="text-navy-800" />
              <h2 className="mt-6 text-2xl text-navy-900">Where TrueCraft works</h2>
              <p className="mt-3 text-[0.97rem] text-ink-soft">
                {coreAreas.map((a) => a.name).join(", ")} and nearby. A little outside that? Ask. It often
                depends on the job.
              </p>
              <TextLink href="/service-areas" className="mt-4 text-[0.95rem] text-navy-900">
                See service areas
              </TextLink>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
