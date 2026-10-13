# TrueCraft Home Repair website

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4. Every page is
prerendered; the only server code is the estimate form endpoint.

Before launch, read **[LAUNCH-CHECKLIST.md](LAUNCH-CHECKLIST.md)**. The SEO plan
is in **[SEO-ROADMAP.md](SEO-ROADMAP.md)**.

## Commands

```bash
npm install
npm run dev          # http://localhost:3000
npm run check        # typecheck + lint + production build
npm run start        # serve the production build
npm run check:site   # crawl a running server: links, titles, metadata, schema, images
npm run images       # rebuild src/assets/photos from _assets/source
npm run og           # rebuild the share cards in public/og (Node 22.18+)
```

`npm run check:site` takes an optional base URL:
`npm run check:site -- http://localhost:3211`.

## Where things live

```
src/data/site.ts            business facts: phone, hours, credentials, socials, logo
src/data/services/          every service page's content and its published switch
src/data/areas.ts           service areas
src/data/images.ts          the photo map (slot -> file + alt text)
src/data/reviews.ts         real Google reviews only
src/data/projects.ts        real project photos only
src/app/                    routes
src/components/             ui.tsx (buttons, icons, ruler, brushstroke),
                            chrome.tsx (header, footer, call bar, closing band),
                            bits.tsx (breadcrumbs, FAQ, photo, JSON-LD, placeholders)
src/lib/                    seo.ts, schema.ts, estimate.ts (shared form rules)
scripts/                    image pipeline, share-card generator, site check
_assets/source/             original photos + credits.json
```

No phone number, URL or business detail is typed into a component. Change it in
`src/data/site.ts` and every link, label and schema block follows.

## Common updates

**Change the phone number, hours or email:** `src/data/site.ts`.

**Turn a service on or off:** set `published` in its entry under
`src/data/services/`, then `npm run og`. An unpublished service disappears from
the nav, listings, sitemap and build.

**Add a service:** copy an entry in the right file under `src/data/services/`,
give it a new `slug`, write the content, pick an `image` slot, then `npm run og`.
The page, nav link, sitemap entry and schema are generated from the entry.

**Swap a photo:** see section 3 of the launch checklist.

**Add reviews or projects:** fill in `src/data/reviews.ts` or
`src/data/projects.ts`. The pages, nav links and sitemap entries appear by
themselves once there is content.

**Show the logo:** put the file in `public/brand/`, fill in `site.logo`.

## Placeholders

`<Awaiting>` boxes mark content Matt still owes. They show in `npm run dev` and
are not rendered at all in a production build, so an unfinished section can never
be mistaken for a finished one. Set `NEXT_PUBLIC_SHOW_PLACEHOLDERS=true` on a
preview deployment to show them to a client.

## Environment variables

Documented in [.env.example](.env.example).

| Variable | Needed for |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | canonicals, sitemap, Open Graph, schema |
| `NEXT_PUBLIC_ALLOW_INDEXING` | must be exactly `true` for the site to be indexable |
| `RESEND_API_KEY`, `CONTACT_INBOX`, `MAIL_FROM` | estimate form delivery |
| `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GSC_VERIFICATION` | optional analytics and verification |
| `NEXT_PUBLIC_SHOW_PLACEHOLDERS` | optional, shows "awaiting content" boxes on a build |

`NEXT_PUBLIC_*` values are compiled in at build time, so redeploy after changing
them.

## The estimate form

`src/components/EstimateForm.tsx` posts to `src/app/api/estimate/route.ts`, which
emails the request through Resend with any photos attached. Photos are downscaled
in the browser first (longest side 1600px), so a phone photo arrives at a few
hundred KB.

The form never reports a success it did not have. With delivery unconfigured the
endpoint returns 503 and the visitor is told plainly that nothing was sent and to
call. `GET /api/estimate` reports whether delivery is configured.

Spam handling: a honeypot field, server-side validation that mirrors the browser's,
header-injection checks and a light per-IP throttle.

## Design notes

- **Palette:** navy for structure, cream for the page, one gold reserved for the
  primary action, forest green for the carpet story and small details. The button
  gold (`gold-600`) is the lightest that passes WCAG AA with white text.
- **Type:** Source Serif 4 for headlines, Figtree for text, Caveat for two or
  three handwritten phrases.
- **Motifs:** the tape-measure rule (`.ruler`) in place of plain dividers, the
  gold brushstroke under key phrases, and the pine ridge along the closing band.
- Sections are laid out individually rather than as repeated card grids.

## Deploying

Built for Vercel, the same way as the other Flourish Now sites: push to GitHub,
import the repo, set the environment variables, deploy. Leave
`NEXT_PUBLIC_ALLOW_INDEXING` unset until launch day.
