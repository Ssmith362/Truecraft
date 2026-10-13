import { Awaiting } from "@/components/bits";
import { CtaBand, hasProjectsContent } from "@/components/chrome";
import { PageHeader } from "@/components/PageHeader";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Container, TextLink } from "@/components/ui";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Flooring & Carpet Repair Projects in Spokane | TrueCraft",
  description:
    "Photos of real flooring, carpet repair, carpet restretching and home repair jobs completed by TrueCraft Home Repair around Spokane.",
  path: "/projects",
  // Kept out of the index, sitemap and nav until real project photos exist.
  noIndex: !hasProjectsContent,
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "Projects", href: "/projects" }]}
        eyebrow="Recent work"
        title="Real jobs, real homes"
        lede="Every photo on this page is work TrueCraft actually did. No stock images and no borrowed before-and-afters."
      />

      <section className="py-16 sm:py-24">
        <Container>
          {hasProjectsContent ? (
            <ProjectGallery grouped />
          ) : (
            <>
              <Awaiting title="The gallery is ready for Matt's photos">
                Add jobs in <code>src/data/projects.ts</code>. They are grouped automatically under
                Flooring, Carpet Repair, Carpet Restretching and Home Repairs, and a category with no jobs
                is not shown. Until the first real project is added, this page is noindexed and left out of
                the sitemap and the navigation on the live site.
                <br />
                <br />
                Most valuable first: a carpet repair before-and-after at a doorway, a restretch
                before-and-after, and a finished flooring install.
              </Awaiting>
              <div className="mt-10">
                <TextLink href="/services" className="text-navy-900">
                  See what TrueCraft does
                </TextLink>
              </div>
            </>
          )}
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
