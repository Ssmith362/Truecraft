import { Awaiting } from "@/components/bits";
import { CtaBand, hasReviewsContent } from "@/components/chrome";
import { PageHeader } from "@/components/PageHeader";
import { ReviewList } from "@/components/ReviewList";
import { Container, Icon, TextLink } from "@/components/ui";
import { aggregate, reviews } from "@/data/reviews";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "TrueCraft Home Repair Reviews | Spokane Customers on Google",
  description:
    "What Spokane-area customers say about TrueCraft Home Repair's flooring, carpet repair and home repair work, in their own words from Google.",
  path: "/reviews",
  // An empty reviews page has nothing for a searcher. It is kept out of the
  // index (and the sitemap and nav) until there is real content on it.
  noIndex: !hasReviewsContent,
});

export default function ReviewsPage() {
  const profile = site.social.googleBusinessProfile;
  const reviewLink = site.social.googleReviewLink;

  return (
    <>
      <PageHeader
        crumbs={[{ name: "Reviews", href: "/reviews" }]}
        eyebrow="Google reviews"
        title="What local customers say"
        lede="Every review here is copied word for word from Google, where anyone can check it. Nothing is edited, trimmed to flatter, or made up."
      >
        {(profile || aggregate) && (
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            {aggregate && (
              <p className="flex items-center gap-3 text-lg text-navy-900">
                <Icon name="star" className="h-7 w-7 fill-current text-gold-500" />
                <span>
                  <strong className="font-serif text-2xl">{aggregate.rating.toFixed(1)}</strong> from{" "}
                  {aggregate.count} Google reviews
                  <span className="block text-[0.85rem] text-ink-soft">as of {aggregate.asOf}</span>
                </span>
              </p>
            )}
            {profile && (
              <a
                href={profile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[3px] border border-navy-900 px-6 font-semibold text-navy-900 hover:bg-navy-900 hover:text-white"
              >
                View on Google
                <Icon name="arrow" className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </PageHeader>

      <section className="py-16 sm:py-24">
        <Container>
          {reviews.length > 0 ? (
            <ReviewList reviews={reviews} />
          ) : (
            <>
              <Awaiting title="No reviews have been added yet">
                Matt has Google reviews, but the profile could not be located and verified from here. To
                finish this page: add the profile URL in <code>src/data/site.ts</code>, then copy real
                reviews, word for word, into <code>src/data/reviews.ts</code>. Until then this page is
                noindexed and left out of the sitemap and the navigation on the live site.
              </Awaiting>
              {profile && (
                <p className="max-w-2xl text-lg text-ink-soft">
                  TrueCraft&apos;s reviews live on Google. Follow the link above to read them there.
                </p>
              )}
            </>
          )}

          {reviewLink && (
            <div className="mt-16 border-t border-navy-900/15 pt-10">
              <h2 className="text-3xl text-navy-900">Worked with TrueCraft?</h2>
              <p className="mt-3 max-w-xl text-ink-soft">
                An honest review helps the next homeowner decide, and it means a lot to a small local
                business.
              </p>
              <a
                href={reviewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-[6px]"
              >
                Leave a review on Google
                <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>
          )}

          {reviews.length === 0 && !profile && (
            <div className="mt-10">
              <TextLink href="/contact" className="text-navy-900">
                Ask Matt about a project
              </TextLink>
            </div>
          )}
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
