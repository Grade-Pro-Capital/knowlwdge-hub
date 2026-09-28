# SEO requirements: what each one means, where we stand, and the plan

Checked against the codebase on branch `feat/framer-rebuild` (2026-09-28).

The SEO team's lists as received are in [requests/2026-09-28-seo-team.md](requests/2026-09-28-seo-team.md);
the work is tracked in [BACKLOG.md](BACKLOG.md).

## How our site is built (context for everything below)

There are two parts, and they handle SEO differently:

1. **The blog** (`/blogs`, articles, categories, tags, authors). Content lives in a database and
   is edited in our own admin panel (`/admin`). Most items on the SEO team's list are about this
   part: fields editors can fill in, and what the site does with them.
2. **The main site pages** (home, Support, FAQ, and the legal pages being rebuilt from Framer).
   These are written in code, not edited in the admin. Their titles, descriptions and structured
   data are set by a developer, so "field in the CMS" items don't apply to them unless we add a
   small admin screen for them (proposed in the plan).

**Status labels:** **Done** = works today. **Partial** = some of it exists, gap described.
**Missing** = not built. **Not needed now** = doesn't apply to us yet (reason given).

## Summary

| | Count |
|---|---|
| Done | 23 |
| Partial | 14 |
| Missing | 20 |
| Not needed now | 7 |
| **Total** | **64** |

Most basic per-article fields already exist (SEO title, description, keywords, Open Graph,
Twitter, FAQs). The big gaps are: **redirects** (none are managed; a changed or deleted article
simply breaks), **sitewide settings** (tracking IDs, verification, robots.txt, title suffix are
all hard-coded), **editor tooling** (no previews, checks or reports) and **workflow** (no
scheduling, history or approvals).

## Progress

**Phase 0 (in progress):** B2–B8, B10–B12 are fixed. B1 is fixed for home, Support and FAQ;
the legal pages get their metadata when they are built. B9 needs a decision.

Found while fixing B4: **15 of the 28 published articles have a Canonical URL saved that points
to a page that doesn't exist** — 13 to `www.grade.capital/blog/<short-slug>` (e.g.
`what-happens-if-you-don-t-pay-crypto-tax-in-india` → `/blog/crypto-tax-penalty-india`) and 2 to
`www.blogs.grade.capital/blog/...`. They look like planned shorter URLs. They had no effect
because the field was ignored; emitting them would have made Google drop those 15 articles. So
overrides pointing at our own domain are now ignored (the page's own URL stays canonical) and
only canonicals on other websites are honoured. **Question for the SEO team:** were those
short slugs meant to become the real URLs? If so, that is a slug change + 301 redirect per
article, which the Phase 1 redirect manager handles.

Other changes made while unifying the Organization data: the sitewide search action (it pointed
at a search page the main site doesn't have) and `iso6523Code: "ISO 9001:2015"` (that property
is for organisation identifiers, not certifications) were dropped; navigation data now lists the
real pages (FAQ and Blogs instead of the non-existent /education). Social profiles are the ones
the site footer links to — **please confirm** they are the right accounts.

## Bugs found during the audit (fix first)

These are problems in what already exists, separate from the missing features:

| # | Problem | Why it matters |
|---|---|---|
| B1 | **Home page has no `<title>`, meta description or canonical.** (Main-site metadata is the pending "metadata parity" step of the rebuild; the legal pages still need it too.) | Google invents a title; the most important page has no controlled snippet. Must be done before launch. |
| B2 | **robots.txt still uses the old blog paths** (`/blog/`, `/tag/`, `/author/`) after the move to `/blogs`. The "block tag pages" rule no longer matches anything. | Crawl rules silently stopped working. |
| B3 | **Sitemap lists only the blog.** Home, Support, FAQ and legal pages are missing, and articles set to *noindex* are still included. | Google isn't told about the main pages; it gets mixed signals on noindexed articles. |
| B4 | **The "Canonical URL" field in the article editor is saved but never used.** Articles always use the automatic canonical. | Editors think they are setting it; they aren't. |
| B5 | **Default share image is missing.** Pages fall back to `/og-default.png`, which doesn't exist (only `og-homepage.png` does). | Any article without its own image shares with a broken preview on WhatsApp/LinkedIn/X. |
| B6 | **Article cover image uses the title as alt text** instead of the alt text the editor typed. | The alt field has no effect. |
| B7 | **FAQ page structured data doesn't match the visible questions.** It lists 8 different Q&As (copied from Framer as-is). The home page has FAQ structured data with no visible FAQ at all. | Against Google's structured-data guidelines (markup must match visible content). |
| B8 | **Three different "Organization" blocks** with different social URLs (e.g. LinkedIn `/company/gradecapital` vs `/company/grade-capital`, Instagram `grade.capital` vs `gradecapital`) and a contact link to `grade.capital/contact`, which doesn't exist. | Conflicting entity data for Google's knowledge panel. |
| B9 | **Two different Google Tag Manager containers**: blog `GTM-MWXB6RB3`, main site `GTM-5F27HQZQ`. | Once both live on grade.capital, analytics will be split unless this is intended. Needs a decision from marketing. |
| B10 | Editor shows the slug prefix as `/blog/` (now `/blogs/`); the SEO title counter says "/70" but cuts at 60; description counter says "/170" but cuts at 160. | Misleading to editors. |
| B11 | Sitemap and canonicals use the base URL from `NEXT_PUBLIC_SITE_URL` (currently `blogs.grade.capital`). | Must be switched to `https://grade.capital` at launch, with redirects from the old subdomain (already in the plan's "Later" list). |
| B12 | **Blog home links to only 6 of the 28 published articles** in its HTML. The rest appear only after clicking "Load more", which search engines don't do. | Older articles are only discoverable via the sitemap, related-article links and noindexed category pages, which weakens their ranking. |

---

## 1. Meta & head control

| # | Requirement | What it means | Status | What we have / the gap |
|---|---|---|---|---|
| 1 | SEO title field, separate from the H1 | The title shown in Google results and the browser tab can differ from the heading on the page. | **Done** | Articles: "Meta Title" field, falls back to the article title. Per-language: not applicable (English only). Main pages: set in code; home is missing one (B1). |
| 2 | Meta description, separate from the excerpt | The grey text under the link in Google results, written separately from the summary shown on the site. | **Done** | "Meta Description" field, falls back to the excerpt. |
| 3 | Meta keywords field | Old `<meta name="keywords">` tag. Google ignores it; some tools still read it. | **Done** | Focus keyword + secondary keywords are output as the keywords tag. |
| 4 | Canonical URL override with automatic default | Tells Google which URL is the "real" one when the same content is reachable at several URLs. Automatic normally; override for special cases. | **Done** | Automatic default everywhere. Override honoured when it points to another website (republished articles); ignored with an explanation in the editor when it points to our own domain (see Progress). |
| 5 | Robots meta controls as checkboxes | Per-page instructions to search engines: don't index, don't follow links, don't show a cached copy (noarchive), don't show a snippet (nosnippet), limit snippet length (max-snippet), allow large image previews (max-image-preview). | **Partial** | Only index/noindex and follow/nofollow (dropdowns). No noarchive, nosnippet, max-snippet or max-image-preview. |
| 6 | Open Graph fields with fallbacks | Controls how a link looks when shared on WhatsApp, LinkedIn, Facebook: title, description, image, type, URL, site name. | **Done** | Title, description and image are editable with fallbacks to the SEO fields and a 1200×630 default image. Type, URL and site name are set automatically. |
| 7 | Twitter/X card fields | Same idea for X: card style, title, description, image. | **Partial** | Title, description and image editable with fallbacks. Card style is fixed to "large image" (usually what you want). |
| 8 | Character count and pixel-width preview | Google cuts titles by pixel width (~600px), not by characters: "WWWW" is wider than "iiii". Editors need a live preview of how the result will look. | **Done** | Character counters plus a live width bar (Arial 20px/14px, ~600px title, ~920px description) with the cut-off text Google would show. Measured on what the page outputs, including fallbacks. |
| 9 | Automatic fallbacks | If the SEO title is empty, use the H1; if the description is empty, use body text. | **Done** | Title → article title; description → excerpt (required field, so never empty). |
| 10 | Sitewide title suffix/prefix | " \| Grade Capital" added to every title from one setting, overridable per page. | **Partial** | Hard-coded for category/tag/author pages. Articles get no suffix. Not a setting. |
| 11 | Search Console verification field | The code Google gives to prove we own the site, entered once. | **Partial** | Blog: verification file in `/public`. Main site: two tokens in code. Not editable in the admin. |
| 12 | GA/GTM tracking ID field | Analytics container ID set once for the whole site. | **Partial** | Hard-coded in code, and two different containers (B9). |
| 13 | Custom `<head>` injection per page | A box to paste extra tags (a new verification tag, a one-off script) without a developer. | **Missing** | |

## 2. URLs & structure

| # | Requirement | What it means | Status | What we have / the gap |
|---|---|---|---|---|
| 14 | Editable slug, decoupled from the title | The URL part (`/blogs/what-is-nav`) can be edited, and renaming an article doesn't change its URL. | **Done** | Slug is generated from the title for new articles, editable, and not changed when the title changes later. |
| 15 | Slug uniqueness, region/language-aware | No two pages can have the same URL; with several regions, uniqueness should be per region. | **Done** | Unique across all articles (enforced in the database). We have one region/language, so global uniqueness is correct. |
| 16 | Automatic 301 when a slug changes | If a URL is edited, the old URL permanently redirects to the new one, keeping its Google ranking and inbound links. | **Done** | When a published article's URL changes, the old URL redirects permanently to the new one; older redirects to the old URL are repointed (no chains). |
| 17 | Trailing-slash policy | Pick `/page` or `/page/` and redirect the other, so Google doesn't see duplicates. | **Done** | No trailing slash; `/page/` redirects to `/page` automatically (Next.js default). |
| 18 | Force lowercase URLs | `/Blogs/Post` and `/blogs/post` are different URLs to Google; uppercase should redirect to lowercase. | **Partial** | Slugs are saved in lowercase, but an uppercase URL shows "not found" instead of redirecting. |
| 19 | URL patterns per content type | Each content type has a fixed URL shape. | **Done** | `/blogs/<slug>`, `/blogs/category/<slug>`, `/blogs/tag/<slug>`, `/blogs/author/<slug>`; fixed in code (appropriate for our size). |
| 20 | Automatic breadcrumbs with manual override | The "Home › Insights › Category › Article" trail on the page and in structured data, built from the site structure. | **Partial** | Automatic on articles (visible + BreadcrumbList data). No override. Main pages have none yet (Framer added breadcrumb data; part of metadata parity). |
| 21 | Query-parameter rules | Decide once which `?something=` URLs are real pages and which are noise (tracking, filters), so Google doesn't crawl endless variants. | **Partial** | Pages declare a canonical without parameters (e.g. `/blogs?tab=professionals` → `/blogs`), which handles it in practice. No central rule list. |
| 22 | Pagination handling | For multi-page lists, decide how page 2, 3… are canonicalised and make sure crawlers can reach them. | **Done** (for now) | Every article link is now in the blog home's HTML ("Load more" and the tabs only reveal them), so no paginated URLs are needed yet. Revisit with real `/blogs/page/2` pages, each self-canonical, if the article count reaches the hundreds. |

## 3. Redirects

| # | Requirement | What it means | Status | What we have / the gap |
|---|---|---|---|---|
| 23 | Redirect manager with search/filter | An admin screen listing every redirect (old URL → new URL, permanent or temporary) that you can search, add and edit. | **Done** | Admin → Redirects: search, add, edit, delete, 301/302, notes, use counts and last-used date. Applied before any page renders. |
| 24 | Bulk CSV import | Upload a spreadsheet of old → new URLs, essential when moving from `blogs.grade.capital`. | **Missing** | |
| 25 | Wildcard/regex rules | One rule covering many URLs, e.g. `/blog/*` → `/blogs/*`. | **Partial** | Supported, but only in code by a developer. |
| 26 | Redirect-loop detection | Refuse to save A→B if B→A already exists (that loops forever and the page never loads). | **Done** | Loops, self-redirects and duplicate sources are refused on save. |
| 27 | Suggest a redirect on delete/unpublish | When an article is removed, prompt for where its URL should go, instead of silently breaking. | **Missing** | Deleted/unpublished articles return 404. |

## 4. robots.txt & sitemaps

| # | Requirement | What it means | Status | What we have / the gap |
|---|---|---|---|---|
| 28 | robots.txt editable in the CMS | The file telling crawlers what they may visit, editable without a developer. | **Missing** | Generated from code; also out of date (B2). |
| 29 | XML sitemap, updated on publish/unpublish | The list of URLs we want Google to index, kept current automatically. | **Done** | Built live from the database (articles appear/disappear immediately), plus the main pages; noindexed articles and articles canonicalised to another site are left out. |
| 30 | Sitemap index past ~50k URLs | Split the sitemap into several files once it's very large. | **Not needed now** | We have tens of articles. The framework supports splitting when needed. |
| 31 | Per-page "exclude from sitemap" toggle | Keep a page live and indexable but not promoted in the sitemap. | **Missing** | |
| 32 | Default indexability per content type | E.g. tag and author pages default to noindex unless changed. | **Done** | Articles: index. Category, tag and author pages: noindex (set in code). |
| 33 | Staging/preview automatically noindexed | Test copies of the site must never appear in Google, and that block must never reach the live site. | **Missing** | No environment-based protection. Needed as soon as a staging copy exists. |

## 5. Images

| # | Requirement | What it means | Status | What we have / the gap |
|---|---|---|---|---|
| 34 | Alt text required at upload + "missing alt" report | Every image gets a text description (for Google Images and screen readers); a report lists images without one. | **Done** | Cover image and every image in the text need alt text: uploads ask for it before inserting, saving is blocked without it (editor and server), and the admin Posts list flags articles still missing some. |
| 35 | Automatic compression on upload | Images are shrunk and converted to a light format when uploaded. | **Done** | Converted to WebP (quality 80), max 1200px wide; author photos cropped to 400×400. |
| 36 | Automatic responsive `srcset` | The browser gets several sizes and downloads the smallest that fits the screen. | **Partial** | Cover and card images: yes. Images inside article text: one size only. Main site pages: same sizes as Framer. |
| 37 | Lazy-loading by default | Images below the fold load only when scrolled to. | **Done** | Article images lazy-load; the cover image loads first (correct). |
| 38 | Descriptive file names | Save as `crypto-basket-chart.webp`, not `IMG_2931.jpg`. | **Missing** | Files are named `<timestamp>-<random>.webp`. |
| 39 | Image sitemap | Image URLs listed in the sitemap so Google Images finds them. | **Missing** | |

## 6. Structured data (schema)

Structured data is hidden code that describes the page to Google (this is an article, by this
author, with these FAQs). It can earn richer search results.

| # | Requirement | What it means | Status | What we have / the gap |
|---|---|---|---|---|
| 40 | Schema type picker per content type (no raw JSON) | Editors choose "Article", "FAQ" etc. from a list instead of pasting code. | **Partial** | Types are set automatically per content type (BlogPosting, BreadcrumbList, FAQPage, Person, Organization, WebSite); nobody pastes JSON. No picker, which is fine for our content. |
| 41 | Auto-fill schema from page data | Schema uses data the page already has instead of retyping it. | **Done** | Article schema is filled from the article (title, dates, author, image, URL). |
| 42 | One FAQ entry → visible accordion + FAQ schema | Type FAQs once; the site shows them and outputs matching schema. | **Done** (blog) | Articles: yes. FAQ page: schema doesn't match the visible list (B7). |
| 43 | Review/rating → Review + AggregateRating | Star ratings in results from review data. | **Not needed now** | We have no customer reviews, and Google doesn't show stars for a business reviewing itself. |
| 44 | One sitewide Organization schema | Company name, logo, social profiles, contact: defined once, used everywhere. | **Done** | One definition (`app/lib/siteSchema.ts`) used by the main site and the blog; articles reference it as publisher. |
| 45 | Pre-publish schema validation | Check schema against Google's rules before saving, so broken markup never goes live. | **Missing** | |

## 7. Internationalisation (languages/regions)

| # | Requirement | What it means | Status |
|---|---|---|---|
| 46 | Region/language visibility per page | Choose which countries/languages each page is for. | **Not needed now** |
| 47 | Automatic hreflang tags | Tell Google which language version to show to whom. | **Not needed now** |
| 48 | Region-scoped slug uniqueness | Two regions may use the same URL slug. | **Not needed now** |
| 49 | Missing-translation fallback, flagged to editors | What shows when a translation doesn't exist. | **Not needed now** |
| 50 | Per-region currency/unit formatting | ₹ vs $, number formats per region. | **Not needed now** |

The site is English-only for Indian investors (`en-IN`). If Hindi or regional-language
content is planned, this becomes one project, and it's easier if we decide before the article
count grows. Nothing we build now blocks it.

## 8. Content quality tooling

| # | Requirement | What it means | Status | What we have / the gap |
|---|---|---|---|---|
| 51 | Readability score while editing | A score for how easy the text is to read. | **Missing** | |
| 52 | Keyword checker | Is the focus keyword in the title, first paragraph, headings and description? | **Missing** | The focus keyword field exists, but nothing checks it. |
| 53 | Internal link count, flag zero | How many links go to our other pages; warn if none. | **Missing** | |
| 54 | Word count | Shown while writing. | **Partial** | Calculated for the reading-time label on the site; not shown in the editor. |
| 55 | Duplicate title/description detector | Report pages sharing the same SEO title or description. | **Missing** | |
| 56 | Duplicate/near-duplicate content detector | Report articles that are (almost) copies of each other. | **Missing** | |
| 57 | Scheduled broken-link checker | Regularly test every link and report dead ones. | **Missing** | |
| 58 | Orphan page report | Articles that no other page links to. | **Missing** | |
| 59 | Sortable "last updated" date | Find stale articles quickly. | **Partial** | Stored (plus a "content freshness" date), but not shown or sortable in the admin list. |

## 9. Workflow & operations

| # | Requirement | What it means | Status | What we have / the gap |
|---|---|---|---|---|
| 60 | Draft / published / scheduled | Save unfinished work, publish, or set a future publish time. | **Partial** | Draft and published (a checkbox). No scheduling. |
| 61 | Revision history with rollback, including SEO fields | Every save kept; restore an older version. | **Missing** | Saving overwrites the previous version. |
| 62 | Bulk spreadsheet-style editing | Edit SEO titles/descriptions of many articles in one grid. | **Missing** | |
| 63 | Audit trail | Who changed which field, and when. | **Missing** | Multiple admins exist, but changes aren't logged. |
| 64 | Optional approval step | An editor drafts; an SEO lead approves before it goes live. | **Missing** | All admins have the same rights. |

---

## Second list (tiered): how it maps

The SEO team's second list groups requirements into tiers. Most items repeat the first list
(numbers in brackets refer to the tables above). Seven are new: the 404 monitor, Search Console
inside the CMS, AI drafting, title A/B testing, topic clusters, internal-link suggestions and
Core Web Vitals. Status reflects the code after the Phase 0 fixes.

Two items refer to things our site doesn't have: "product pages" and a `?subset=` variant
problem "we just diagnosed on your project". We have no products, sizes or colour variants. These
lists look adapted from another client's brief; worth confirming with the SEO team.

### Tier 0: basics

| # | Requirement | What it means | Status |
|---|---|---|---|
| T0.1 | SEO title + meta description per page, with live count/truncation warning | [1, 2, 8] Fields for the Google title and snippet, warning when Google would cut them off. | **Done** |
| T0.2 | Editable, human-readable slugs | [14] URLs like `/blogs/what-is-nav`, not `/p?id=6f3a…`. | **Done** |
| T0.3 | Canonical override per page | [4] | **Done** (other-website canonicals honoured; own-domain ones ignored, see Progress) |
| T0.4 | Robots meta per page, separate from robots.txt | [5] Per-page index/noindex and follow/nofollow. robots.txt says what crawlers may *visit*; robots meta says what may be *indexed*. | **Done** for index/follow (extra directives are Phase 1) |
| T0.5 | Open Graph + Twitter fields with fallbacks | [6, 7] | **Done** |
| T0.6 | Alt text on every uploaded image, enforced | [34] | **Done** |
| T0.7 | XML sitemap, auto-updated on publish | [29] | **Done** |
| T0.8 | robots.txt editable in the CMS | [28] | **Missing** (correct now, but code-only). Phase 1. |
| T0.9 | 301/302 redirect manager with search | [23] | **Done** (Admin → Redirects). |
| T0.10 | Automatic breadcrumbs with breadcrumb schema | [20] | **Done**: visible trail + schema on articles; schema on main pages (their design has no visible trail). |

### Tier 1: intermediate

| # | Requirement | What it means | Status |
|---|---|---|---|
| T1.1 | Structured-data templates as dropdowns, auto-filled | [40, 41] Pick "FAQ", "Article"… and the schema fills itself from the page. | **Partial**: fully automatic per content type (no one pastes JSON); no picker. Product, Review and LocalBusiness don't apply to us. |
| T1.2 | Bulk spreadsheet editing | [62] | **Missing**. Phase 3. |
| T1.3 | Live Google-result preview, desktop + mobile | [8] A mock search result that updates as you type, cut exactly where Google would cut. | **Partial**: width warnings with the cut-off text exist; no mock result card. |
| T1.4 | Hreflang manager (region × language grid) | [47] Tells Google which language/country version to show whom. | **Not needed now**: English-only site. |
| T1.5 | 404 monitor with one-click redirect | **New.** Log every URL that returns "not found" (how often, and from which page or site), with a button to turn it into a redirect. Catches broken inbound links and old URLs after the migration. | **Missing**. Added to Phase 1 (built on the redirect manager). |
| T1.6 | Duplicate title/description detector | [55] | **Missing**. Phase 3. |
| T1.7 | Orphan page detector | [58] | **Missing**. Phase 3. |
| T1.8 | Custom `<head>` injection | [13] | **Missing**. Phase 2. |
| T1.9 | Visible, sortable "last updated" | [59] | **Partial**: stored, not shown in the admin list. Phase 3. |

### Tier 2: advanced

| # | Requirement | What it means | Status |
|---|---|---|---|
| T2.1 | Search Console data inside the CMS | **New.** Next to each article: is it indexed, any errors, and its clicks, impressions, average position and click-through rate from Google. | **Missing**. Feasible with Google's Search Console API (indexing status per URL, about 2,000 checks a day; performance data per page). Needs Search Console access for a service account. Phase 4. |
| T2.2 | Live validation against Google's "Rich Results API" before publish | [45] Check structured data the way Google does, before it goes live. | **Missing**. Note: **Google has no public Rich Results API**; the Rich Results Test is a website only. What's possible: (a) before publish, check Google's documented required fields ourselves (Phase 2); (b) after publish, Search Console's URL Inspection API reports which rich results Google detected and any errors (Phase 4). |
| T2.3 | AI drafting of titles, descriptions and FAQs from the page content | **New.** A button that proposes an SEO title, description and FAQs based on the article itself; the editor reviews before saving. | **Missing**. Feasible with an AI API call (small cost per use). Phase 4. |
| T2.4 | A/B testing titles/descriptions, CTR measured from Search Console | **New.** Try two titles and keep the one that gets more clicks from Google. | **Not recommended now**: Google shows one title per URL at a time, so tests compare groups of pages or before/after periods, which needs a lot of traffic to be meaningful. Once T2.1 exists we can show each page's click-through rate before and after a title change. |
| T2.5 | Topic-cluster / pillar-page map | **New.** Mark the main "pillar" guides and the articles supporting each; see gaps and missing links in a diagram. | **Missing**. Phase 4 (builds on categories, a "pillar" field and the link graph). |
| T2.6 | Semantic internal-link suggestions | **New.** "These 8 articles are about the same thing and don't link to this one." | **Missing**. Phase 4 (text similarity between articles, plus the existing link graph). |
| T2.7 | Core Web Vitals per page/template | **New.** Google's speed and stability scores (loading, responsiveness, layout shift) shown per page in the CMS. | **Missing**. Phase 4: measure real visitors with Next.js's built-in web-vitals reporting and store it; optionally Google's CrUX/PageSpeed APIs (Google only has per-page data for pages with enough traffic). |
| T2.8 | Approval workflow for SEO fields | [64] | **Missing**. Phase 3. |
| T2.9 | Version history for SEO fields | [61] | **Missing**. Phase 3. |
| T2.10 | Variant-aware indexability | [21] Decide which URL variants (e.g. `?size=`, `?color=`) are real pages and which are just filters. | **Not needed now**: we have no product variants. Our only variant, `/blogs?tab=professionals`, already canonicalises to `/blogs`. |

## Plan

Estimates are for one developer and are rough. Each phase ships independently.

### Phase 0: Fix the bugs (2–3 days, before launch)

B1–B11 above, plus finishing the main site's metadata (titles, descriptions, canonicals, share
images, breadcrumb data for every page), which was already planned as the rebuild's metadata
step:

- Main pages: titles/descriptions/canonicals/OG for home and the legal pages.
- robots.txt: `/blogs` paths, main pages allowed, admin/API blocked.
- Sitemap: add main pages; drop noindexed articles.
- Honour the canonical override (validated to be an absolute URL), or remove the field.
- Default share image; cover image uses the typed alt text.
- FAQ page schema generated from the visible list (one source); drop the home FAQ schema
  unless a visible FAQ is added.
- One Organization block with the correct profile URLs and a real contact URL.
- Editor slug prefix and counter limits.
- Crawlable pagination for the blog home (B12, item 22).
- **Decision needed:** one GTM container for grade.capital, or keep two?

### Phase 1: Redirects and sitewide settings (1.5–2 weeks)

The highest-value missing features, and needed for the move from `blogs.grade.capital`.

- **Redirect manager (items 16, 23–27):** redirects stored in the database and applied before
  any page renders. Admin screen with search, add/edit, 301/302 choice, wildcard rules, CSV
  import/export and loop detection on save. Automatic redirect when a slug changes; a prompt
  for a target when an article is deleted or unpublished.
- **Site settings screen (10–12, 28, 44):** title suffix, default share image, Search Console
  token, GTM ID, Organization details (logo, social links, contact), extra robots.txt rules.
  All pages read from here instead of code.
- **Robots controls (5):** noarchive, nosnippet, max-snippet, max-image-preview as checkboxes;
  **exclude from sitemap (31)** toggle.
- **Lowercase redirect (18)** and **staging protection (33):** any non-production deployment
  sends noindex and a blocking robots.txt automatically, keyed on the production domain so it
  can't leak to the live site.
- **404 monitor (T1.5):** record every not-found URL with hit count and referrer; one click
  turns it into a redirect.
- **Main-page SEO screen (optional):** lets the SEO team edit titles/descriptions/share images
  of home, Support, FAQ and legal pages without a code change.

### Phase 2: Editor previews, images and schema (1–1.5 weeks)

- **Google-result preview (8):** live pixel-width measurement of title and description, with a
  mock search result, desktop and mobile.
- **Images (34, 36, 38, 39):** alt text required for every image before saving; descriptive file
  names from the alt text; several sizes generated at upload so article images get `srcset`;
  images added to the sitemap; "missing alt text" report.
- **Schema validation (45):** check required fields for each schema type on save and block
  publishing if invalid (Google has no public validation API, so we check its documented
  requirements ourselves).
- **Custom head field (13):** per page and sitewide, admin-only, limited to `<meta>`, `<link>`
  and JSON-LD so it can't break the page.

### Phase 3: Content quality and workflow (2–3 weeks)

- **Editor sidebar (51–54):** word count, readability score, focus-keyword checks, internal link
  count.
- **Reports page (55–59):** duplicate titles/descriptions, near-duplicate content, orphan
  articles, stale articles (sortable by last updated), broken links (checked nightly).
- **Scheduling (60):** publish-at date; articles go live automatically.
- **Revision history (61)** with one-click restore, covering SEO fields and schema.
- **Audit trail (63):** who changed what, when.
- **Bulk SEO grid (62):** edit titles/descriptions of many articles in one table.
- **Roles and approval (64):** editor vs SEO lead; SEO-relevant changes wait for approval.

### Phase 4: SEO intelligence (3–4 weeks, after Phases 1–3)

The new Tier 2 items. Each needs an external service or data source, so each has a setup step.

- **Search Console in the CMS (T2.1, and T2.2 after publish):** per-article indexing status,
  rich result detection and search performance. Needs a Google Cloud service account added to
  the Search Console property.
- **AI drafting (T2.3):** suggested titles, descriptions and FAQs from the article; the editor
  approves. Needs an AI API key and a small monthly budget.
- **Internal-link suggestions and topic clusters (T2.5, T2.6).**
- **Core Web Vitals per page (T2.7).**

### Not planned (unless the business needs change)

Internationalisation (46–50, T1.4), sitemap splitting (30), review/rating schema (43), title
A/B testing (T2.4), variant indexability (T2.10). Reasons are in the tables.

## Questions for the SEO team

1. Should the main site pages (home, Support, FAQ, legal) be editable in the admin (Phase 1
   optional item), or is setting them in code acceptable?
2. One GTM container for grade.capital or two (B9)?
3. Which is the correct LinkedIn and Instagram URL for the Organization data (B8)?
4. Priority order within Phases 1–3: anything they need earlier?
5. Is Hindi/regional content planned in the next 6–12 months (decides whether to design for
   internationalisation now)?
6. The second list mentions product pages and a `?subset=` issue on "your project". We have no
   products or variants; was that meant for another site?
7. For Phase 4: can they give a service account access to Search Console, and is there budget
   for AI-assisted drafting?
