/**
 * Whole-site check against a RUNNING server.
 *
 *   npm run build && npm run start          (in one terminal)
 *   npm run check:site                      (in another)
 *   npm run check:site -- http://localhost:3211
 *
 * For every page in the sitemap it verifies:
 *   - HTTP 200
 *   - a unique <title> of sensible length and a unique meta description
 *   - a canonical that points at the page itself
 *   - exactly one <h1>, and no skipped heading levels
 *   - og:title, og:description and an og:image that actually loads
 *   - every JSON-LD block parses
 *   - every image has alt text and its file loads
 *   - every internal link resolves (200, or a redirect to a 200)
 * plus robots.txt, the sitemap itself, the 404 page and the form endpoint.
 *
 * Exits non-zero if anything fails, so it can gate a deploy.
 */

const BASE = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");

const problems = [];
const warnings = [];
const fail = (page, message) => problems.push(`${page}  ${message}`);
const warn = (page, message) => warnings.push(`${page}  ${message}`);

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

const statusCache = new Map();
async function status(url) {
  if (!statusCache.has(url)) {
    statusCache.set(
      url,
      fetch(url, { redirect: "follow" })
        .then((r) => {
          r.body?.cancel();
          return r.status;
        })
        .catch(() => 0),
    );
  }
  return statusCache.get(url);
}

const attr = (tag, name) => {
  const m = tag.match(new RegExp(`${name}="([^"]*)"`, "i"));
  return m ? decode(m[1]) : null;
};

const meta = (html, key, value) => {
  const tag = (html.match(/<meta[^>]+>/gi) ?? []).find((t) => attr(t, key) === value);
  return tag ? attr(tag, "content") : null;
};

/* ----------------------------- sitemap + robots ---------------------------- */

const robotsRes = await fetch(`${BASE}/robots.txt`).catch(() => null);
if (!robotsRes?.ok) {
  console.error(`Cannot reach ${BASE}. Is the server running?`);
  process.exit(1);
}
const robots = await robotsRes.text();
const indexingOn = !/Disallow:\s*\/\s*$/m.test(robots);
console.log(`robots.txt: ${indexingOn ? "indexing ALLOWED" : "indexing BLOCKED (preview mode)"}`);
if (indexingOn && !/Sitemap:/i.test(robots)) fail("/robots.txt", "indexing is on but no Sitemap line");

const sitemapXml = await (await fetch(`${BASE}/sitemap.xml`)).text();
const sitemapUrls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => decode(m[1]));
if (sitemapUrls.length === 0) fail("/sitemap.xml", "no URLs found");
const origin = sitemapUrls[0] ? new URL(sitemapUrls[0]).origin : BASE;
if (origin !== BASE) {
  warn("/sitemap.xml", `URLs use ${origin}, checking the same paths on ${BASE} instead`);
}
const paths = sitemapUrls.map((u) => new URL(u).pathname);
console.log(`sitemap.xml: ${paths.length} URLs`);

/* --------------------------------- pages ---------------------------------- */

const titles = new Map();
const descriptions = new Map();
const internalLinks = new Set();
const assets = new Set();
let schemaBlocks = 0;

for (const path of paths) {
  const res = await fetch(`${BASE}${path}`);
  if (res.status !== 200) {
    fail(path, `returned ${res.status}`);
    continue;
  }
  const html = await res.text();

  const title = decode(html.match(/<title>([^<]*)<\/title>/i)?.[1] ?? "");
  if (!title) fail(path, "missing <title>");
  else {
    if (titles.has(title)) fail(path, `duplicate title (also on ${titles.get(title)})`);
    titles.set(title, path);
    if (title.length > 62) warn(path, `title is ${title.length} characters: "${title}"`);
  }

  const description = meta(html, "name", "description");
  if (!description) fail(path, "missing meta description");
  else {
    if (descriptions.has(description)) fail(path, `duplicate description (also on ${descriptions.get(description)})`);
    descriptions.set(description, path);
    if (description.length < 70 || description.length > 165) {
      warn(path, `description is ${description.length} characters`);
    }
  }

  const canonicalTag = (html.match(/<link[^>]+>/gi) ?? []).find((t) => attr(t, "rel") === "canonical");
  const canonical = canonicalTag ? attr(canonicalTag, "href") : null;
  if (!canonical) fail(path, "missing canonical");
  else if (new URL(canonical).pathname.replace(/\/$/, "") !== path.replace(/\/$/, "")) {
    fail(path, `canonical points elsewhere: ${canonical}`);
  }

  const robotsMeta = meta(html, "name", "robots") ?? "";
  if (indexingOn && /noindex/i.test(robotsMeta)) fail(path, "is in the sitemap but carries noindex");

  // Headings: one h1, no skipped levels.
  const headings = [...html.matchAll(/<h([1-6])[\s>]/gi)].map((m) => Number(m[1]));
  const h1s = headings.filter((h) => h === 1).length;
  if (h1s !== 1) fail(path, `has ${h1s} <h1> elements`);
  for (let i = 1; i < headings.length; i++) {
    if (headings[i] > headings[i - 1] + 1) {
      warn(path, `heading level jumps from h${headings[i - 1]} to h${headings[i]}`);
      break;
    }
  }

  for (const key of ["og:title", "og:description", "og:image", "og:url"]) {
    if (!meta(html, "property", key)) fail(path, `missing ${key}`);
  }
  const ogImage = meta(html, "property", "og:image");
  if (ogImage) assets.add(`${BASE}${new URL(ogImage).pathname}`);

  for (const block of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(block[1]);
      schemaBlocks++;
    } catch {
      fail(path, "JSON-LD block does not parse");
    }
  }
  if (/AggregateRating|"Review"/.test(html)) fail(path, "contains review/rating markup");

  for (const tag of html.match(/<img[^>]+>/gi) ?? []) {
    if (attr(tag, "alt") === null) fail(path, `image without alt: ${tag.slice(0, 80)}`);
    const src = attr(tag, "src");
    if (src?.startsWith("/")) assets.add(`${BASE}${src}`);
  }

  for (const tag of html.match(/<a[^>]+>/gi) ?? []) {
    const href = attr(tag, "href");
    if (!href) continue;
    if (href.startsWith("/")) internalLinks.add(href.split("#")[0] || "/");
    else if (href.startsWith("tel:") && !/^tel:\+1\d{10}$/.test(href)) fail(path, `malformed tel link ${href}`);
  }
}

/* ------------------------------ links + assets ----------------------------- */

for (const href of internalLinks) {
  const code = await status(`${BASE}${href}`);
  if (code !== 200) fail(href, `internal link target returned ${code}`);
}
for (const url of assets) {
  const code = await status(url);
  if (code !== 200) fail(url.replace(BASE, ""), `asset returned ${code}`);
}

/* ---------------------------------- extras --------------------------------- */

const notFound = await fetch(`${BASE}/this-page-does-not-exist`);
if (notFound.status !== 404) fail("/this-page-does-not-exist", `expected 404, got ${notFound.status}`);
else if (!/<h1/.test(await notFound.text())) fail("404 page", "has no h1");

const formStatus = await fetch(`${BASE}/api/estimate`).then((r) => r.json()).catch(() => null);
if (!formStatus) fail("/api/estimate", "status check failed");
else console.log(`estimate form delivery: ${formStatus.configured ? "CONFIGURED" : "NOT configured (form tells visitors to call)"}`);

/* --------------------------------- report ---------------------------------- */

console.log(
  `checked ${paths.length} pages, ${internalLinks.size} internal links, ${assets.size} images, ${schemaBlocks} JSON-LD blocks`,
);
if (warnings.length) {
  console.log(`\n${warnings.length} warning(s):`);
  warnings.forEach((w) => console.log(`  ~ ${w}`));
}
if (problems.length) {
  console.log(`\n${problems.length} problem(s):`);
  problems.forEach((p) => console.log(`  x ${p}`));
  process.exit(1);
}
console.log("\nAll checks passed.");
