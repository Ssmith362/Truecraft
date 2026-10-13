# TrueCraft Home Repair: launch checklist

The site builds, passes its checks and can be shown to Matt today. It must not be
indexed until the items in section 1 are settled. Indexing is off by default
(`NEXT_PUBLIC_ALLOW_INDEXING` is not `true`), so nothing here can leak into Google
by accident.

Everything below is edited in one of four files:

| What | File |
|---|---|
| Phone, email, hours, licence wording, estimate policy, social links, logo | `src/data/site.ts` |
| Which services are live, and their copy | `src/data/services/*.ts` |
| Service areas | `src/data/areas.ts` |
| Reviews / project photos | `src/data/reviews.ts`, `src/data/projects.ts` |

---

## 1. Launch blockers

### 1a. Facts that are on the site but not confirmed by Matt

- [ ] **Phone number `509-362-2925`.** Taken from the homepage concept image. The
      business card photo did not come through with the brief, and no listing for
      TrueCraft Home Repair could be found online to check it against. Confirm,
      then set `phone.verified: true`.
- [ ] **"Free" estimates.** The concept says "Get a Free Estimate" and the site
      follows it. If estimates are not always free, set `estimates.free: false` and
      every button changes to "Request an Estimate".
- [ ] **Photo assessments.** The carpet pages invite people to send photos for a
      first read. If Matt is not comfortable with that, set
      `estimates.photoAssessments: false` (removes the upload field and rewords the
      buttons).
- [ ] **Service areas.** Spokane, Spokane Valley, Liberty Lake, Mead, plus Airway
      Heights, Cheney, Medical Lake and Nine Mile Falls are a sensible default, not
      Matt's list. Edit `src/data/areas.ts`, then set `areasConfirmed = true`.
- [ ] **"Locally owned"** in the top bar. Almost certainly true; confirm.

### 1b. Services that need a yes or no

Confirmed by Matt already: flooring installation (residential and commercial),
carpet repair including pet damage, carpet restretching.

Published on the strength of "he is a jack of all trades" and the approved
concept, but not individually confirmed. Each has `confirmed: false` and a
`confirmNote` in its data file saying exactly what to ask:

- [ ] Vinyl plank & laminate installation (does he install these specifically?)
- [ ] Handyman services (is he happy with the word, and with the examples: TV
      mounting, shelving, hardware, weatherstripping?)
- [ ] Drywall repair and texture matching
- [ ] Trim & baseboards
- [ ] Door installation & repair (interior only, or exterior too?)
- [ ] Blinds & window coverings
- [ ] Interior painting (and up to what size of job?)
- [ ] Siding repair (which siding types, and how high will he work?)
- [ ] Fence & deck repair

To switch one off: set `published: false`. It leaves the nav, the listings, the
sitemap and the build in one move. Then run `npm run og`.

### 1c. Held back on purpose: light fixture installation

The page is written but **unpublished** (`published: false`), even though it is in
the concept Matt approved. In Washington, electrical work done for hire, including
replacing a light fixture, requires an electrical contractor licence and a
certified electrician (RCW 19.28), and L&I cites contractors for *advertising*
electrical work without one. Publish it only if Matt confirms he holds that
licence. Otherwise leave it off. The handyman page already tells visitors that
electrical and plumbing go to licensed trades.

### 1d. Licence, bond and insurance

The concept says "Licensed & Bonded". **That wording is not on the site.** Nothing
about licensing, bonding or insurance renders until `credentials.verified` is
`true`.

- [ ] Get Matt's Washington contractor registration number (L&I) and confirm his
      bond and insurance are current. Verify at
      [secure.lni.wa.gov/verify](https://secure.lni.wa.gov/verify/).
- [ ] Set `credentials.label` to the accurate phrase (Washington's own term is
      "registered, bonded and insured"), add the number, set `verified: true`. It
      then appears in the top bar, the hero and the footer.

This matters commercially as well as legally: it is the single strongest trust
signal the site is currently missing.

### 1e. Things only Spencer or Matt can supply

- [ ] **Domain.** Set `NEXT_PUBLIC_SITE_URL` to the final origin.
- [ ] **Form delivery.** Set `RESEND_API_KEY`, `CONTACT_INBOX` (Matt's inbox) and
      `MAIL_FROM` on the host. Until then the form validates and then tells the
      visitor honestly that it was not sent and to call. Confirm it is live at
      `/api/estimate`, which returns `{"configured":true}`, then send one real test.
- [ ] **Logo.** The header uses a typeset wordmark and the favicon is a plain "TC"
      placeholder. No logo was drawn or invented. Drop the real file in
      `/public/brand`, fill in `site.logo`, replace `src/app/icon.svg`.
- [ ] **Privacy policy.** Written to match what the form actually does. Have Matt
      read it; it is not legal advice.

---

## 2. Content still needed from Matt

Each of these has a dashed "awaiting content" box on the page in `npm run dev`.
Those boxes never render on the live site.

- [ ] **Google Business Profile link** and the "write a review" short link. With
      the profile link alone, the Reviews page, its nav link and the homepage
      review strip all switch on.
- [ ] **Real reviews**, copied word for word into `src/data/reviews.ts`, and the
      live rating and count for `aggregate`.
- [ ] **A photo of Matt** for the About page. Most persuasive single asset.
- [ ] **His story:** how long he has done this, how he got into flooring and
      carpet repair, why he started TrueCraft.
- [ ] **Project photos**, in this order of value: a pet-damage carpet repair
      before/after at a doorway, a restretch before/after, a finished floor.
- [ ] Email address, business hours, last name (if he wants them public).
- [ ] Facebook / Instagram / Nextdoor links if they exist.
- [ ] Flooring specifics: which materials he installs, whether he supplies
      material, whether he does stairs, the kinds of commercial jobs he takes.
- [ ] Carpet specifics: does he move furniture, does he restretch stairs, how does
      he handle urine-soaked pad and subfloor.

---

## 3. Photography

All 27 photos are temporary CC0 stock (no attribution required), sourced through
Openverse and recorded in `_assets/source/credits.json`. They are generic rooms
and materials, never presented as TrueCraft's work, and none appear in the
Projects gallery. No stock person is used to stand in for Matt.

They are small (about 1000px wide), which is fine as placeholders and a little
soft on a large desktop hero. Replacing a photo:

1. Put the new file in `_assets/source/`
2. Point the slot at it in `scripts/process-images.mjs`
3. `npm run images`
4. In `src/data/images.ts`, set `stock: false` and rewrite the alt text

Highest value replacements: `hero-home`, `carpet-repair`, `pet-damage-dog`,
`carpet-restretching`, `flooring-installation`.

---

## 4. Pre-launch run-through

- [ ] Everything in section 1 resolved
- [ ] `npm run check` passes (types, lint, build)
- [ ] `npm run build && npm run start`, then `npm run check:site` passes
- [ ] `npm run og` re-run if any service was added, renamed or unpublished
- [ ] Environment variables set on the host (see `.env.example`)
- [ ] One real form submission received in Matt's inbox, with a photo attached
- [ ] Tap-to-call tested on a real phone
- [ ] `NEXT_PUBLIC_ALLOW_INDEXING=true` set on production only, then redeploy
- [ ] `/robots.txt` shows `Allow: /` and a Sitemap line
- [ ] Sitemap submitted in Google Search Console and Bing Webmaster Tools
- [ ] GA4 ID and Search Console verification added (optional env vars)
- [ ] Google Business Profile: website link updated, services and service areas
      matched to the site, name/phone identical to the site character for character
- [ ] Rich Results Test run on the homepage and one service page
- [ ] PageSpeed Insights run on the homepage and one service page (mobile)
