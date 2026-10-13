import Link from "next/link";
import { Awaiting, Photo } from "@/components/bits";
import { CtaBand, hasProjectsContent } from "@/components/chrome";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ReviewList } from "@/components/ReviewList";
import {
  ArrowChip,
  Brush,
  ButtonLink,
  Container,
  Eyebrow,
  Icon,
  PhoneLink,
  RuledHeading,
  Ruler,
  TextLink,
  type IconName,
} from "@/components/ui";
import { images } from "@/data/images";
import { reviews } from "@/data/reviews";
import { getService, servicePath, servicesByGroup } from "@/data/services";
import { estimateCta, site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "TrueCraft Home Repair | Flooring & Carpet Repair, Spokane WA",
  description:
    "Flooring installation, carpet repair, carpet restretching and home repairs in the Spokane area. Honest quotes, friendly service, and someone who shows up on time.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Specialists />
      <CarpetOpportunity />
      <MoreWays />
      <WhyTrueCraft />
      <WhoWeHelp />
      <ReviewsSection />
      <ProjectsSection />
      <CtaBand />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* 1. Hero                                                                    */
/* -------------------------------------------------------------------------- */

function Hero() {
  const trust: { icon: IconName; label: string }[] = [
    { icon: "clock", label: "Shows up on time" },
    { icon: "handshake", label: "Honest, flexible quotes" },
    site.credentials.verified
      ? { icon: "shield", label: site.credentials.label }
      : { icon: "plank", label: "Flooring & carpet specialist" },
  ];

  return (
    <section className="relative overflow-hidden bg-cream-100">
      {/* Desktop: the photo fills the right side and dissolves into the page. */}
      <div className="absolute inset-y-0 right-0 hidden w-[60%] lg:block">
        <Photo image={images.heroHome} priority sizes="(min-width: 1024px) 60vw, 100vw" />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-cream-100 via-cream-100/75 to-transparent" />
      </div>

      <Container className="relative py-14 sm:py-20 lg:py-28">
        <div className="max-w-[36rem]">
          <Eyebrow className="text-forest-700">Spokane-area home repair specialists</Eyebrow>
          <h1 className="mt-5 text-[2.7rem] text-navy-900 sm:text-6xl lg:w-[46rem] lg:text-[3.9rem] xl:text-[4.2rem]">
            Reliable home repairs. <br className="hidden lg:block" />
            <span className="relative inline-block">
              Done right
              <Brush className="absolute -bottom-2 left-0 h-3 w-full" />
            </span>{" "}
            and on time.
          </h1>
          <p className="mt-7 max-w-[32rem] text-xl leading-relaxed text-ink">
            Flooring, carpet repair, trim, doors and the home projects that keep getting pushed down your
            list.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" arrow>
              {estimateCta}
            </ButtonLink>
            <PhoneLink />
          </div>
          <ul className="mt-9 flex flex-col gap-x-8 gap-y-3 text-[0.95rem] font-medium text-navy-900 sm:flex-row sm:flex-wrap">
            {trust.map((item) => (
              <li key={item.label} className="flex items-center gap-2.5">
                <Icon name={item.icon} className="h-6 w-6 text-forest-600" />
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </Container>

      {/* Phones and tablets: the same photo as a band under the message. */}
      <div className="relative aspect-[16/10] w-full lg:hidden">
        <Photo image={images.heroHome} priority sizes="100vw" />
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. Flooring & carpet specialists                                           */
/* -------------------------------------------------------------------------- */

function Specialists() {
  const flooring = getService("flooring-installation");
  const repair = getService("carpet-repair");
  const restretch = getService("carpet-restretching");
  if (!flooring || !repair || !restretch) return null;

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <RuledHeading>Flooring & Carpet Specialists</RuledHeading>
        <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-ink-soft">
          Plenty of people will fix a door. Far fewer can lay a floor properly or save a carpet that
          everyone else said had to be replaced. This is where TrueCraft is strongest.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* 01: the lead. Tall, photo-first. */}
          <Link
            href={servicePath(flooring.slug)}
            className="group relative block min-h-[26rem] overflow-hidden bg-navy-900 lg:col-span-7 lg:min-h-[34rem]"
          >
            <Photo
              image={images.flooringInstallation}
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/95 via-navy-950/70 to-transparent p-7 pt-24 text-cream-50 sm:p-10 sm:pt-32">
              <p className="font-serif text-lg italic text-gold-300">No. 01</p>
              <div className="mt-1 flex items-end justify-between gap-6">
                <div>
                  <h3 className="text-3xl sm:text-4xl">{flooring.name}</h3>
                  <p className="mt-3 max-w-md text-navy-100">{flooring.blurb}</p>
                </div>
                <ArrowChip className="h-12! w-12! bg-gold-600! group-hover:bg-cream-50! group-hover:text-navy-900!" />
              </div>
            </div>
          </Link>

          {/* 02 and 03: stacked, text-led, on paper. */}
          <div className="grid gap-6 lg:col-span-5">
            {[
              { service: repair, image: images.carpetRepair, no: "02" },
              { service: restretch, image: images.carpetTexture, no: "03" },
            ].map(({ service, image, no }) => (
              <Link
                key={service.slug}
                href={servicePath(service.slug)}
                className="group grid grid-cols-[38%_1fr] border border-line bg-white transition-colors hover:border-navy-900"
              >
                <div className="relative min-h-[11rem] overflow-hidden">
                  <Photo
                    image={image}
                    sizes="(min-width: 1024px) 16vw, 38vw"
                    className="transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-between p-6 sm:p-7">
                  <div>
                    <p className="font-serif italic text-gold-700">No. {no}</p>
                    <h3 className="mt-1 text-[1.6rem] text-navy-900">{service.navLabel}</h3>
                    <p className="mt-2 text-[0.97rem] text-ink-soft">{service.blurb}</p>
                  </div>
                  <ArrowChip className="mt-5 self-end" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-[0.97rem]">
          {[...servicesByGroup("flooring"), ...servicesByGroup("carpet")]
            .filter((s) => ![flooring.slug, repair.slug, restretch.slug].includes(s.slug))
            .map((s) => (
              <li key={s.slug}>
                <TextLink href={servicePath(s.slug)} className="text-navy-900">
                  {s.navLabel}
                </TextLink>
              </li>
            ))}
        </ul>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 3. The carpet repair opportunity                                           */
/* -------------------------------------------------------------------------- */

function CarpetOpportunity() {
  return (
    <section className="bg-forest-900 text-cream-50">
      <Container className="grid gap-14 py-20 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
        {/* Two overlapping frames: who did it, and what they did it to. */}
        <div className="relative mx-auto w-full max-w-md pb-16 pr-10 lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Photo image={images.petDamageDog} sizes="(min-width: 1024px) 34vw, 80vw" />
          </div>
          <div className="absolute bottom-0 right-0 aspect-square w-[46%] overflow-hidden border-[6px] border-forest-900">
            <Photo image={images.carpetTexture} sizes="(min-width: 1024px) 16vw, 38vw" />
          </div>
          <p className="absolute -left-2 bottom-4 -rotate-6 font-script text-[1.9rem] leading-none text-gold-300">
            Usually fixable.
          </p>
        </div>

        <div>
          <Eyebrow className="text-gold-300">Before you price out new carpet</Eyebrow>
          <h2 className="mt-5 text-4xl sm:text-[3.4rem]">Don&apos;t replace that carpet just yet.</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-sage-100">
            A chewed corner, a clawed doorway or a room full of ripples looks like the end of a carpet. Very
            often it is not. Damaged sections can be patched and loose carpet can be stretched flat again,
            for a fraction of what a new floor costs.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <Ruler className="text-gold-300" />
              <h3 className="mt-4 font-sans text-[0.95rem] font-semibold uppercase tracking-[0.14em] text-gold-300">
                Often worth a repair
              </h3>
              <ul className="mt-4 space-y-2.5 text-sage-100">
                {[
                  "Pet damage at a doorway or corner",
                  "A tear, burn or stain in one spot",
                  "Seams coming apart",
                  "Ripples, wrinkles and loose edges",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <Icon name="check" className="mt-1 h-5 w-5 text-gold-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Ruler className="text-sage-200" />
              <h3 className="mt-4 font-sans text-[0.95rem] font-semibold uppercase tracking-[0.14em] text-sage-200">
                Usually time to replace
              </h3>
              <ul className="mt-4 space-y-2.5 text-sage-200">
                {[
                  "Worn thin through every walkway",
                  "Damage spread across the room",
                  "Backing that is breaking down",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-sage-200" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 max-w-xl text-[0.97rem] text-sage-200">
            Not every carpet can be saved. It depends on the damage, the condition of the carpet and whether
            matching material is available. Matt will tell you honestly which side of the line yours is on.
          </p>

          <div className="mt-9 flex flex-col gap-x-8 gap-y-4 sm:flex-row sm:items-center">
            <ButtonLink href="/contact?service=carpet-repair" arrow>
              {site.estimates.photoAssessments ? "Send Photos for an Assessment" : "Ask About Carpet Repair"}
            </ButtonLink>
            <TextLink href="/services/carpet-repair" className="text-cream-50">
              How carpet repair works
            </TextLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 4. More ways we can help                                                   */
/* -------------------------------------------------------------------------- */

function MoreWays() {
  const repairs = servicesByGroup("repairs");
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.6fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow className="text-forest-700">Home repairs</Eyebrow>
          <h2 className="mt-4 text-4xl text-navy-900 sm:text-5xl">More ways we can help</h2>
          <p className="mt-5 text-lg text-ink-soft">
            The sticking door. The baseboard the dog chewed. The hole behind the handle. Put it all on one
            list and get it dealt with in one go.
          </p>
          <div className="relative mt-8 hidden aspect-[4/3] overflow-hidden lg:block">
            <Photo image={images.trimBaseboards} sizes="28vw" />
          </div>
        </div>

        <ul className="border-t border-navy-900/20">
          {repairs.map((service) => (
            <li key={service.slug} className="border-b border-navy-900/20">
              <Link
                href={servicePath(service.slug)}
                className="group flex items-center gap-5 py-5 sm:gap-7 sm:py-6"
              >
                <span className="relative hidden h-20 w-28 shrink-0 overflow-hidden sm:block">
                  <Photo image={images[service.image]} sizes="112px" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-serif text-2xl font-bold text-navy-900 transition-colors group-hover:text-gold-700 sm:text-[1.7rem]">
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
  );
}

/* -------------------------------------------------------------------------- */
/* 5. Why customers choose TrueCraft                                          */
/* -------------------------------------------------------------------------- */

const commitments = [
  {
    title: "On time, as promised",
    body: "You get a day and a time, and Matt is there. If something truly gets in the way, you hear about it early, not after you have taken the morning off work.",
  },
  {
    title: "Quotes you can follow",
    body: "A clear scope in plain words: what is being done, what it costs and what is not included.",
  },
  {
    title: "Flexible when money is tight",
    body: "If the number does not fit, say so. There is often another way to approach a job, whether that is a different material or doing it in stages. Not every project can bend, but the conversation is always welcome.",
  },
  {
    title: "Your home, treated like one",
    body: "Floors protected, furniture handled with care and the work area cleaned up before he leaves. You should not be able to tell anyone was there, apart from the repair.",
  },
];

function WhyTrueCraft() {
  return (
    <section className="bg-cream-100">
      <Container className="py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:items-end">
          <div>
            <Eyebrow className="text-forest-700">Why people call TrueCraft</Eyebrow>
            <h2 className="mt-4 max-w-2xl text-4xl text-navy-900 sm:text-[3.3rem]">
              Showing up when you said you would should not be a selling point. Around here, it is.
            </h2>
          </div>
          <p className="text-lg text-ink-soft lg:pb-2">
            Ask anyone who has tried to get a small job done. The hard part is rarely the work. It is
            finding someone who answers, turns up and tells you the truth about what it will cost. That is
            the whole idea behind TrueCraft: reliable, friendly and straight with you.
          </p>
        </div>

        <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((item, index) => (
            <div key={item.title}>
              <Ruler className="text-navy-800" />
              <p className="mt-5 font-serif text-lg italic text-gold-700">0{index + 1}</p>
              <h3 className="mt-1 text-[1.45rem] text-navy-900">{item.title}</h3>
              <p className="mt-3 text-[0.98rem] text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-navy-900/15 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-lg text-navy-900">
            <span className="font-semibold">Homes and businesses.</span> Matt has installed flooring in
            both residential and commercial spaces, so a job that needs planning around other people is
            nothing new.
          </p>
          <TextLink href="/about" className="shrink-0 text-navy-900">
            More about Matt and TrueCraft
          </TextLink>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 6. Who TrueCraft helps                                                     */
/* -------------------------------------------------------------------------- */

const audiences = [
  {
    icon: "home",
    title: "Homeowners",
    body: "The repairs and upgrades that make a house feel looked after again, done by someone you are comfortable having in your home.",
    href: "/services",
    link: "Browse services",
  },
  {
    icon: "building",
    title: "Landlords",
    body: "Carpet repaired instead of replaced, floors, doors and walls put right between tenants, on the dates you are working to.",
    href: "/for-property-managers",
    link: "Help for rental properties",
  },
  {
    icon: "key",
    title: "Realtors",
    body: "The pre-listing list and the items an inspection turned up, handled so the sale keeps moving.",
    href: "/for-property-managers#realtors",
    link: "Help before a sale",
  },
] as const;

function WhoWeHelp() {
  return (
    <section className="bg-sage-100">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_2.4fr] lg:gap-16">
          <div>
            <h2 className="text-3xl text-navy-900 sm:text-4xl">
              Helping homeowners, landlords &amp; realtors
            </h2>
            <p className="eyebrow mt-4 text-forest-700">Reliable repairs for the spaces that matter</p>
          </div>
          <ul className="grid gap-10 sm:grid-cols-3 sm:gap-8">
            {audiences.map((a) => (
              <li key={a.title} className="sm:border-l sm:border-navy-900/20 sm:pl-8">
                <Icon name={a.icon} className="h-8 w-8 text-forest-600" />
                <h3 className="mt-4 text-2xl text-navy-900">{a.title}</h3>
                <p className="mt-2 text-[0.97rem] text-ink-soft">{a.body}</p>
                <TextLink href={a.href} className="mt-4 text-[0.95rem] text-navy-900">
                  {a.link}
                </TextLink>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 7. Reviews                                                                 */
/* -------------------------------------------------------------------------- */

function ReviewsSection() {
  const profile = site.social.googleBusinessProfile;

  // Nothing real to show yet: say so in dev, render nothing on the live site.
  if (reviews.length === 0 && !profile) {
    return (
      <Container className="py-10 empty:hidden">
        <Awaiting title="Google reviews">
          Matt has reviews on Google, but the profile could not be found and verified online. Add the
          profile link to <code>site.social.googleBusinessProfile</code> and paste real reviews into{" "}
          <code>src/data/reviews.ts</code>. This section, the Reviews page and its nav link then appear on
          their own. No reviews, ratings or counts are invented in the meantime.
        </Awaiting>
      </Container>
    );
  }

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-6 border border-line bg-white p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div className="flex items-center gap-6">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-cream-100 text-gold-600">
              <Icon name="star" className="h-7 w-7" />
            </span>
            <div>
              <h2 className="text-3xl text-navy-900">See what local customers say</h2>
              <p className="eyebrow mt-2 text-ink-soft">Google reviews</p>
            </div>
          </div>
          {profile ? (
            <a
              href={profile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[3px] border border-navy-900 px-6 font-semibold text-navy-900 hover:bg-navy-900 hover:text-white"
            >
              View on Google
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          ) : (
            <ButtonLink href="/reviews" variant="outline" arrow>
              Read reviews
            </ButtonLink>
          )}
        </div>
        {reviews.length > 0 && <ReviewList reviews={reviews.slice(0, 3)} className="mt-10" />}
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 8. Project gallery                                                         */
/* -------------------------------------------------------------------------- */

function ProjectsSection() {
  if (!hasProjectsContent) {
    return (
      <Container className="pb-16 empty:hidden">
        <Awaiting title="Project gallery">
          Ready for real job photos. Add them in <code>src/data/projects.ts</code> and a gallery appears
          here and on the Projects page, grouped by Flooring, Carpet Repair, Carpet Restretching and Home
          Repairs. Stock photos are never shown as TrueCraft projects.
        </Awaiting>
      </Container>
    );
  }

  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow className="text-forest-700">Recent work</Eyebrow>
            <h2 className="mt-4 text-4xl text-navy-900 sm:text-5xl">Jobs around Spokane</h2>
          </div>
          <TextLink href="/projects" className="text-navy-900">
            See all projects
          </TextLink>
        </div>
        <ProjectGallery limit={6} className="mt-10" />
      </Container>
    </section>
  );
}
