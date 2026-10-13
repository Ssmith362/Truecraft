import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui";
import { site, telHref } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy | TrueCraft Home Repair",
  description:
    "How TrueCraft Home Repair handles the details you send through the estimate request form: what is collected, why, and who it is shared with.",
  path: "/privacy-policy",
});

/** Update this when the policy text changes. */
const LAST_UPDATED = "October 13, 2026";

const analyticsOn = Boolean(process.env.NEXT_PUBLIC_GA_ID?.trim());

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "Privacy Policy", href: "/privacy-policy" }]}
        eyebrow="Privacy"
        title="Privacy policy"
        lede={`The short version: ${site.name} uses what you send only to reply to you and do the work. It is not sold or used for anyone else's marketing.`}
      />

      <section className="py-14 sm:py-20">
        <Container>
          <div className="max-w-3xl space-y-12 text-lg leading-relaxed text-ink">
            <p className="text-[0.95rem] text-ink-soft">Last updated: {LAST_UPDATED}</p>

            <Block title="What is collected">
              <p>When you send an estimate request through this website, the form collects:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Your name and phone number</li>
                <li>Your email address, if you choose to give one</li>
                <li>Your ZIP code or neighborhood</li>
                <li>The service you are asking about and your description of the project</li>
                <li>Any photos you choose to attach</li>
                <li>How you would prefer to be contacted</li>
              </ul>
              <p className="mt-4">
                If you call or text instead, your number and anything you say or send are received in the
                ordinary way.
              </p>
            </Block>

            <Block title="How it is used">
              <p>
                Your details are used to respond to your request, prepare a quote, schedule and carry out
                work, and keep ordinary business records. They are not sold, rented or shared for
                advertising.
              </p>
            </Block>

            <Block title="Who else handles it">
              <p>
                Running a website involves a small number of service providers who process data on{" "}
                {site.shortName}&apos;s behalf:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  <strong>Email delivery.</strong> Form submissions are sent to {site.shortName} by email
                  through a transactional email provider (Resend).
                </li>
                <li>
                  <strong>Website hosting.</strong> The hosting provider processes standard technical
                  information such as IP address and browser type in order to serve the site and keep it
                  secure.
                </li>
                {analyticsOn && (
                  <li>
                    <strong>Analytics.</strong> Google Analytics is used to understand in aggregate how the
                    site is used, such as which pages are visited. It may set cookies in your browser.
                  </li>
                )}
              </ul>
              <p className="mt-4">
                Information may also be disclosed where the law requires it.
              </p>
            </Block>

            <Block title="Cookies and tracking">
              {analyticsOn ? (
                <p>
                  This site uses Google Analytics, which may set cookies to distinguish visitors. You can
                  block these in your browser settings or with Google&apos;s opt-out browser add-on. The
                  site works the same either way.
                </p>
              ) : (
                <p>
                  This site does not currently use advertising or analytics cookies. If that changes, this
                  page will be updated to say so.
                </p>
              )}
            </Block>

            <Block title="Photos you send">
              <p>
                Photos attached to the form are resized in your browser before they are sent and are used
                only to assess your project. Photos of your home will never be published without your
                permission.
              </p>
            </Block>

            <Block title="How long it is kept">
              <p>
                Requests and related messages are kept for as long as needed to deal with your enquiry and
                any work that follows, and for ordinary record-keeping after that. You can ask for your
                details to be deleted at any time.
              </p>
            </Block>

            <Block title="Your choices">
              <p>
                To ask what information {site.shortName} holds about you, to have it corrected, or to have
                it deleted, call{" "}
                <a href={telHref} className="font-semibold text-navy-900 underline underline-offset-4">
                  {site.phone.display}
                </a>
                {site.email ? (
                  <>
                    {" "}
                    or email{" "}
                    <a
                      href={`mailto:${site.email}`}
                      className="font-semibold text-navy-900 underline underline-offset-4"
                    >
                      {site.email}
                    </a>
                  </>
                ) : null}
                .
              </p>
            </Block>

            <Block title="Children">
              <p>This website is intended for adults and is not directed at children under 13.</p>
            </Block>

            <Block title="Changes to this policy">
              <p>
                If this policy changes, the updated version will be posted on this page with a new date at
                the top.
              </p>
            </Block>
          </div>
        </Container>
      </section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-3xl text-navy-900">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
