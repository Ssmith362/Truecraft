import Link from "next/link";
import { FaqList, JsonLd, Photo } from "@/components/bits";
import { CtaBand } from "@/components/chrome";
import { PageHeader } from "@/components/PageHeader";
import { ArrowChip, ButtonLink, Container, Eyebrow, Icon, PhoneLink, Ruler } from "@/components/ui";
import { images } from "@/data/images";
import { getService, servicePath } from "@/data/services";
import { faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Repairs for Spokane Landlords, Realtors & Property Managers",
  description:
    "Carpet repair, flooring and make-ready repairs for Spokane-area rentals and homes going on the market. One reliable contact for the whole list.",
  path: "/for-property-managers",
});

const turnoverSlugs = [
  "carpet-repair",
  "pet-damage-carpet-repair",
  "carpet-restretching",
  "vinyl-plank-and-laminate-flooring",
  "drywall-repair",
  "door-installation-and-repair",
  "trim-and-baseboards",
  "blinds-and-window-coverings",
  "interior-painting",
];

const faqs = [
  {
    q: "Can you repair carpet between tenants instead of replacing it?",
    a: "Often, yes. Pet damage at doorways, pulled edges, open seams and ripples can frequently be repaired or restretched. Send photos and you will get an honest view on whether repair is realistic for that carpet.",
  },
  {
    q: "Can you work to a move-in or listing date?",
    a: "Tell Matt the date at the start. He will tell you plainly whether the work fits before then, so you can plan around a real answer.",
  },
  {
    q: "Do I need to be at the property?",
    a: "Not necessarily. Let Matt know how access works for the property and who the on-site contact is, and it can be arranged around that.",
  },
  {
    q: "Can you handle a list from a home inspection?",
    a: "Yes, for the repair items that fall within the work TrueCraft does. Send the relevant pages and Matt will mark which items he can take care of and which need a licensed specialist, such as electrical or plumbing work.",
  },
  {
    q: "Do you work with more than one property?",
    a: "Yes. If you manage several units, say so. Knowing how your properties are set up makes each visit quicker.",
  },
];

export default function PropertyManagersPage() {
  const turnover = turnoverSlugs.map(getService).filter((s) => s !== undefined);

  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <PageHeader
        crumbs={[{ name: "Landlords & Realtors", href: "/for-property-managers" }]}
        eyebrow="Landlords · Realtors · Property owners"
        title="One reliable call for the repairs between tenants and before a sale"
        lede="A vacant unit costs money every day it sits. A listing with a chewed doorway photographs badly. Both problems are usually smaller and cheaper to fix than they look."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" arrow>
            Send a Property Repair List
          </ButtonLink>
          <PhoneLink />
        </div>
      </PageHeader>

      {/* Landlords */}
      <section id="landlords" className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Photo image={images.emptyRoom} sizes="(min-width: 1024px) 46vw, 100vw" />
          </div>
          <div>
            <Eyebrow className="text-forest-700">For landlords and property managers</Eyebrow>
            <h2 className="mt-4 text-4xl text-navy-900 sm:text-[2.9rem]">
              Repair the carpet. Skip the full replacement.
            </h2>
            <div className="prose-tc mt-6 text-lg leading-relaxed text-ink">
              <p>
                The most expensive line on a turnover is often carpet, and it is often unnecessary. A
                tenant&apos;s pet damages one doorway and the whole unit gets recarpeted. In many cases that
                doorway can be patched and the rest of the carpet restretched, and the unit is ready to
                show sooner.
              </p>
              <p>
                TrueCraft handles carpet repair, flooring and the general repairs a turnover throws up,
                so you are coordinating one person instead of three.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* What gets handled */}
      <section className="bg-cream-100">
        <Container className="py-16 sm:py-24">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-end lg:gap-16">
            <h2 className="text-4xl text-navy-900 sm:text-[2.9rem]">What a make-ready visit can cover</h2>
            <p className="text-lg text-ink-soft">
              Send the list as it is. Matt will sort out which items he can do, what order makes sense and
              anything that needs a licensed trade.
            </p>
          </div>
          <ul className="mt-12 grid gap-x-10 border-t border-navy-900/20 sm:grid-cols-2 lg:grid-cols-3">
            {turnover.map((service) => (
              <li key={service.slug} className="border-b border-navy-900/20">
                <Link href={servicePath(service.slug)} className="group flex items-center gap-4 py-5">
                  <span className="min-w-0 flex-1 font-serif text-[1.35rem] font-bold leading-snug text-navy-900 group-hover:text-gold-700">
                    {service.navLabel}
                  </span>
                  <ArrowChip className="h-9! w-9!" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Realtors */}
      <section id="realtors" className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="lg:order-2">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Photo image={images.stagedLiving} sizes="(min-width: 1024px) 46vw, 100vw" />
            </div>
          </div>
          <div>
            <Eyebrow className="text-forest-700">For realtors and sellers</Eyebrow>
            <h2 className="mt-4 text-4xl text-navy-900 sm:text-[2.9rem]">
              The small fixes that change how a listing shows
            </h2>
            <div className="prose-tc mt-6 text-lg leading-relaxed text-ink">
              <p>
                Buyers notice floors first. Rippled carpet, a damaged threshold or scuffed baseboards read
                as deferred maintenance, and buyers tend to price that in generously. Most of it is quick to put right.
              </p>
              <p>
                Before listing, or after an inspection report lands, send the items over. You get a clear
                answer on what can be done and when, so you can give your client a real plan.
              </p>
            </div>
            <ul className="mt-8 space-y-3">
              {[
                "Carpet restretched and repaired before photos",
                "Flooring replaced in the rooms that need it",
                "Doors, trim, drywall and paint touch-ups",
                "Repair items from an inspection report",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <Icon name="check" className="mt-1 h-5 w-5 text-forest-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* How to work together */}
      <section className="bg-navy-900 text-cream-50">
        <Container className="py-16 sm:py-24">
          <h2 className="max-w-2xl text-4xl sm:text-[2.9rem]">How to hand off a property</h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              {
                title: "Send the list, photos and dates",
                body: "Everything that needs attention, a photo of each, and the date you are working toward.",
              },
              {
                title: "Get one quote for the lot",
                body: "A single scope and price, with anything that needs a licensed trade clearly called out.",
              },
              {
                title: "It gets done when promised",
                body: "You are told when the work will happen, and told straight away if anything changes.",
              },
            ].map((step, index) => (
              <li key={step.title}>
                <p aria-hidden="true" className="font-serif text-6xl font-bold leading-none text-navy-700">
                  {index + 1}
                </p>
                <Ruler className="mt-4 text-gold-300" />
                <h3 className="mt-5 text-2xl">{step.title}</h3>
                <p className="mt-2 text-navy-100">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <h2 className="text-4xl text-navy-900 sm:text-[2.9rem]">Questions from owners and agents</h2>
          <FaqList items={faqs} />
        </Container>
      </section>

      <CtaBand
        heading="Got a unit or a listing that needs work?"
        body="Send the list and the date. You will get a straight answer on what can be done and when."
        ctaLabel="Send a Property Repair List"
      />
    </>
  );
}
