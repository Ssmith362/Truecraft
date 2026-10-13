import { Awaiting, Photo } from "@/components/bits";
import { CtaBand } from "@/components/chrome";
import { PageHeader } from "@/components/PageHeader";
import { Brush, Container, Eyebrow, Ruler, TextLink } from "@/components/ui";
import { images } from "@/data/images";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About TrueCraft Home Repair | Matt, Spokane Flooring & Repairs",
  description:
    "TrueCraft Home Repair is Matt's Spokane-area flooring, carpet repair and home repair business, built on three things: reliable, friendly and trustworthy.",
  path: "/about",
});

const values = [
  {
    word: "Reliable",
    body: "When Matt gives you a day and a time, that is when he arrives. Small jobs get the same respect as big ones, because to the person who has been waiting on it, there is no such thing as a small job.",
  },
  {
    word: "Friendly",
    body: "You are letting someone into your home. You should feel comfortable asking questions, changing your mind, or saying you do not understand something, and you should get a patient answer every time.",
  },
  {
    word: "Trustworthy",
    body: "You are told what the job really needs, including when the cheaper option is the right one. If a carpet can be repaired, he will not sell you a new one. If it cannot, he will say that too.",
  },
];

export default function AboutPage() {
  const { firstName } = site.owner;
  return (
    <>
      <PageHeader
        crumbs={[{ name: "About", href: "/about" }]}
        eyebrow={`About ${site.shortName}`}
        title="A home repair business built on doing what it says"
        lede={`${site.name} is ${firstName}'s business. Ask him to describe it and he uses three words: reliable, friendly and trustworthy. Everything else follows from those.`}
      />

      <section className="py-16 sm:py-24">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Photo image={images.flooringRoom} sizes="(min-width: 1024px) 42vw, 100vw" />
            </div>
            <div className="mt-6">
              <Awaiting title={`A photo of ${firstName}`}>
                The image above is a stock room photo standing in for a portrait. Add an{" "}
                <code>about</code> slot with a real photo of {firstName} at work. A real face is the single
                most persuasive thing this page can have, and no stock person is used in its place.
              </Awaiting>
            </div>
          </div>

          <div>
            <Eyebrow className="text-forest-700">What {firstName} does</Eyebrow>
            <h2 className="mt-4 text-4xl text-navy-900 sm:text-[2.9rem]">
              Flooring and carpet first. Then everything else on the list.
            </h2>
            <div className="prose-tc mt-7 text-lg leading-relaxed text-ink">
              <p>
                {firstName} installs flooring in homes and in commercial spaces. He also does something a
                lot of flooring people will not: he repairs carpet. Pet damage at a doorway, a torn
                section, a room full of ripples. Work that usually ends with a homeowner being told to
                replace the lot, when a repair or a restretch would have done the job.
              </p>
              <p>
                Around that sits the general repair work every home needs sooner or later. Trim and
                baseboards, doors, and the other fixes that are too small for a contractor and too fiddly
                to get round to yourself.
              </p>
              <p>
                Two things matter most to him. The first is reliability: showing up on time and taking your
                project seriously, whatever its size. The second is flexibility. If your budget is tight,
                say so. Where a job allows it, {firstName} would rather find a way to make the numbers work
                than leave you with a problem that does not get fixed.
              </p>
            </div>

            <div className="mt-8">
              <Awaiting title={`${firstName}'s story, in his words`}>
                Still needed from {firstName}: how long he has been doing this work, how he got into
                flooring and carpet repair, why he started {site.shortName}, and anything he wants
                customers to know about him. None of that has been guessed at here.
              </Awaiting>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              <TextLink href="/services" className="text-navy-900">
                See all services
              </TextLink>
              <TextLink href="/service-areas" className="text-navy-900">
                Where TrueCraft works
              </TextLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy-900 text-cream-50">
        <Container className="py-16 sm:py-24">
          <h2 className="max-w-3xl text-4xl sm:text-5xl">
            Three words,{" "}
            <span className="relative inline-block">
              taken seriously
              <Brush className="absolute -bottom-2 left-0 h-3 w-full text-gold-400" />
            </span>
          </h2>
          <div className="mt-14 grid gap-12 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.word}>
                <Ruler className="text-gold-300" />
                <h3 className="mt-6 text-[2rem] text-gold-300">{value.word}</h3>
                <p className="mt-3 text-navy-100">{value.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <h2 className="text-4xl text-navy-900 sm:text-[2.9rem]">What that looks like on a job</h2>
          <ul className="divide-y divide-navy-900/15 border-y border-navy-900/15 text-lg">
            {[
              "You know when he is coming, and he comes then.",
              "You get a price before any work starts, and an explanation of what it covers.",
              "If something unexpected turns up, work stops and you are shown it before anything is added.",
              "Your floors and furniture are protected while the work is done.",
              "The work area is cleaned up before he leaves.",
              "If a cheaper fix will do the job properly, that is the one you are offered.",
            ].map((item) => (
              <li key={item} className="py-4 text-ink">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
