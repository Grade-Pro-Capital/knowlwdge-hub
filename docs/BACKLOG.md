# Backlog

Everything still to do for grade.capital (main site + blog + admin), in one place.

**How this file works**
- New requests go into **Inbox** with the date they came in, then get sorted into a section.
- `[ ]` open, `[x]` done. Done items move to **Done** with the date.
- Details live elsewhere and are linked, not copied:
  [FRAMER-REBUILD-PLAN.md](FRAMER-REBUILD-PLAN.md) (the Framer rebuild),
  [SEO-CMS-AUDIT.md](SEO-CMS-AUDIT.md) (SEO requirements explained, with status),
  [requests/](requests/) (requests exactly as received).
- IDs: `B1…` bugs, `#1…` items from SEO list 1, `T0.1…` items from SEO list 2
  (all defined in SEO-CMS-AUDIT.md).
- **🔌 3rd-party required** marks items that need an outside provider's service, account or API
  key (optional ones say so). All of them are summarised under **Third-party services**.

_Last updated: 2026-10-01_

---

## Inbox

_Nothing unsorted._

---

## Decisions waiting

Work that depends on an answer. Current default in brackets.

- [ ] **Rebrand**: new company name/features may replace the "exact Framer copy" goal. Domain change? Timeline? New design? _(continuing the exact copy)_
- [ ] **FAQ page below 1200px**: Framer shows a squeezed desktop header and a cut-off 1200px footer on phones. Copy it or keep the normal responsive header/footer? _(responsive)_
- [ ] **Support page at 1920×1080**: the light-rays background covers the footer's logo and app badges on Framer. Copy or fix (one line)? _(copied)_
- [ ] **Home on tablets**: Framer's page is slightly wider than the screen (sideways scroll). Copy or fix? _(not decided)_
- [ ] **404 page**: copy Framer's generic 404, or a simple branded one? _(not built)_
- [ ] **Tag Manager (B9)**: one GTM container for grade.capital or keep two (blog `GTM-MWXB6RB3`, site `GTM-5F27HQZQ`)? _(two)_
- [ ] **Social profiles**: confirm `x.com/gradecapital`, `linkedin.com/company/grade-capital`, `instagram.com/gradecapital` are the right accounts. _(those, from the site footer)_
- [ ] **15 articles with a saved canonical to non-existent short URLs** (e.g. `/blog/crypto-tax-penalty-india`): were those meant to be the real URLs? If yes: slug change + 301 per article (needs the redirect manager). _(ignored; articles keep their own URLs)_ Note: 3 links inside articles point to such short URLs and are broken (Admin → SEO reports → Broken internal links).
- [ ] **SEO team questions** (SEO-CMS-AUDIT.md → Questions): main pages editable in the admin? Priorities? Hindi/regional content planned? Was the product/`?subset=` part of list 2 meant for another site? Search Console access + AI budget for Phase 4?

---

## Now

- [ ] **Content task:** add cover-image alt text to the 3 articles flagged "Missing alt text" in admin → Posts (they can't be saved until then).
- [ ] **Content task:** 14 of the 28 articles have a meta description Google cuts on desktop (the editor now shows it in red under the field). Worth shortening, SEO team.
- [ ] **Legal pages** (rebuild Step 3): privacy-policy, terms-of-use, investor-agreement, anti-laundering. Text word-for-word, footer highlights the active page, Framer metadata + breadcrumb data (finishes **B1**).

## Next: finish the rebuild

- [ ] 404 page (after the decision above).
- [ ] Full verification pass (rebuild Step 5): every page at every Framer width, hover/animation checks, text and link diff against Framer.
- [ ] Home page gets its metadata re-checked once the rebrand question is settled.

## SEO / CMS roadmap

Full explanations and reasons in [SEO-CMS-AUDIT.md](SEO-CMS-AUDIT.md) → Plan.

### Phase 0: bug fixes (almost done)
- [ ] B1 legal pages metadata (with the legal pages, above)
- [ ] B9 Tag Manager (waiting on decision)

### Phase 1: redirects and sitewide settings (~2 weeks)
- [x] Redirect manager, lighter version: DB-stored 301/302 rules, search, add/edit/delete, use counts, loop/duplicate checks (#23, #26, T0.9). Done 2026-09-28.
- [x] Automatic 301 when a published article's slug changes (#16). Done 2026-09-28.
- [ ] Only if needed: CSV import/export (#24), pattern/wildcard rules in the admin (#25), prompt for a target on delete/unpublish (#27)
- [x] 404 monitor with one-click "make this a redirect" (T1.5). Done 2026-09-30 (Admin → 404s).
- [x] robots.txt editor (#28, T0.8). Done 2026-09-28.
- [ ] Site settings screen: title suffix, default share image, Search Console token, GTM ID, Organization details (#10–12, #44)
- [ ] Extra robots checkboxes: noarchive, nosnippet, max-snippet, max-image-preview (#5)
- [ ] "Exclude from sitemap" toggle (#31)
- [ ] Redirect uppercase URLs to lowercase (#18)
- [ ] Staging/preview copies automatically noindexed and blocked (#33)
- [ ] Optional: admin screen for main-page SEO (home, Support, FAQ, legal)

### Phase 2: editor previews, images, schema (~1–1.5 weeks)
- [x] Pixel-width warnings under the SEO title and description, with the cut-off text Google would show (#8, T0.1). Done 2026-09-28.
- [x] Mock Google result card, desktop + phone, in the article editor (T1.3). Done 2026-09-30.
- [x] Alt text required for every image + "Missing alt text" flag in the Posts list (#34, T0.6). Done 2026-09-28.
- [ ] Descriptive image file names (#38)
- [ ] Multiple image sizes (srcset) for images inside articles (#36)
- [ ] Image sitemap (#39)
- [ ] Schema check before publish against Google's documented rules (#45, T2.2)
- [x] Custom `<head>` field, per article and sitewide (#13, T1.8). Done 2026-09-30 (Admin → Head code; "Custom head code" in the article form).

### Phase 3: content quality and workflow (~2–3 weeks)
- [ ] Editor sidebar: word count, readability, focus-keyword checks, internal link count (#51–54)
- [x] Reports: duplicate titles/descriptions, articles no other article links to, broken internal links, links using old URLs; sortable "Last updated" in Posts (#55, #57–59 internal part, T1.6, T1.7, T1.9). Done 2026-09-30 (Admin → SEO reports).
- [ ] Still open from that list: near-duplicate content (#56), nightly check of links to other websites (#59 external part)
- [ ] Scheduled publishing (#60)
- [x] SEO fields version history with restore (T2.9). Done 2026-10-01 (article editor → SEO history).
- [ ] Full content revision history (article text, images) (#61)
- [ ] Audit trail: who changed what (#63)
- [x] Bulk SEO editing grid (#62, T1.2). Done 2026-09-30 (Admin → Posts → Edit SEO in bulk).
- [ ] Roles + approval step for SEO changes (#64, T2.8)

### Phase 4: SEO intelligence (~3–4 weeks)
- [ ] 🔌 **3rd-party required**: Search Console inside the admin: indexing status, rich results, clicks/impressions/position per article (T2.1, T2.2)
  - Needs: Google Search Console API (free). Google Cloud project + service account, added as a user on the grade.capital Search Console property. Build after launch (needs the new property's data).
- [ ] 🔌 **3rd-party required**: AI drafting of titles, descriptions, FAQs from the article (T2.3)
  - Needs: an AI provider API key with billing (Anthropic, OpenAI or Google). Roughly 1–5 US cents per draft.
- [x] Internal-link suggestions (T2.6). Done 2026-09-30 (Admin → SEO reports, no provider needed).
- [ ] Topic-cluster / pillar map (T2.5): low value at ~28 articles; revisit at ~100.
- [ ] 🔌 3rd-party optional: Core Web Vitals per page (T2.7)
  - Works without a provider (Next.js web-vitals reporting); Google's PageSpeed/CrUX API optional (free key).

## Launch checklist

Only when going live. Details in [FRAMER-REBUILD-PLAN.md](FRAMER-REBUILD-PLAN.md) → Later.

- [ ] Server env: `NEXT_PUBLIC_SITE_URL=https://grade.capital`
- [ ] Optional: `npx prisma db push` once, to add the database-level duplicate guard for redirects (the app already prevents duplicates; this changes the live DB, so do it deliberately)
- [ ] nginx + HTTPS for `grade.capital` and `www` (`www` → apex 301)
- [ ] 301 everything on `blogs.grade.capital/*` → `grade.capital/blogs/*`. The old article URLs are `blogs.grade.capital/blog/<slug>`: map those to `grade.capital/blogs/<slug>` (not `/blogs/blog/<slug>`, which is a 404). After launch, watch Admin → 404s for anything missed.
- [ ] Namecheap: change **only** the `@` and `www` records. Never touch MX, TXT, `_dmarc` or Mail Settings (Google Workspace email).
- [ ] Search Console: Domain property for grade.capital; submit `sitemap.xml`
- [ ] 🔌 **3rd-party required**: wire the three forms (home consultation, Know More overlay, Support) to email/CRM (Google Workspace SMTP, or a sending service such as Resend; a CRM if leads should go there)
- [ ] Email hygiene: add SPF, harden DMARC
- [ ] Cancel Framer ~2 weeks after launch, once everything is confirmed

## Third-party services

Everything that needs an outside provider, what it needs, and roughly what it costs.

| Item | Provider | What we need from you | Cost |
|---|---|---|---|
| Search Console in the admin (Phase 4) | Google Search Console API | Google Cloud project + service account, added as a user on the grade.capital Search Console property | Free |
| AI drafting (Phase 4) | Anthropic, OpenAI or Google Gemini | API key with billing | ~1–5 US cents per draft |
| Smarter internal-link suggestions (Phase 4, optional) | Same AI provider (embeddings) | Same API key | Negligible |
| Google's Core Web Vitals data (Phase 4, optional) | Google PageSpeed / CrUX API | Free API key | Free |
| Form submissions (launch) | Google Workspace SMTP or Resend (+ CRM, if used) | Sending account/credentials | Free–low |

## Later / optional

- [ ] Real paginated blog pages (`/blogs/page/2`) if the article count reaches the hundreds

## Not planned

Hreflang/multi-language (#46–50, T1.4), sitemap splitting (#30), review/rating schema (#43), title A/B testing (T2.4), product-variant indexability (T2.10). Reasons in SEO-CMS-AUDIT.md.

---

## Done

- 2026-10-01: SEO version history with restore (T2.9); old internal links (`blogs.grade.capital/blog/…`, `www.`, `/blog/…`, admin redirects) shown with their current address when an article is shown; article editor can now clear saved SEO, social, GEO, tag and citation fields (not yet committed; restart the dev server after pulling, the database client changed)
- 2026-09-30: unknown blog URLs (article, category, tag, author) answered 200 "not found" (soft 404) since the move under /blogs; they now answer 404 (not yet committed)
- 2026-09-30: 404 monitor (Admin → 404s), SEO reports (Admin → SEO reports) with internal-link suggestions, "Last updated" column in Posts, custom head code (Admin → Head code + per article), bulk SEO grid, mock Google result in the editor (T1.2, T1.3, T1.5–T1.9, T2.6) (not yet committed; restart the dev server after pulling, the database client changed)
- 2026-09-29: blog uses the main site's header and footer ("Option A"): one shared Header/Footer in the `/blogs` layout; blog search moved next to the All Insights / For Professionals tabs; the blog's Subscribe button and Insights/Research/For Professionals links dropped; "Blogs" added to the phone menu on every page (not in Framer); old SiteHeader/SiteFooter/MobileNav deleted. Committed and pushed on `feat/framer-rebuild`
- 2026-09-28: robots.txt editor (admin → robots.txt): live checks, key-page protection with confirmation, URL tester, 20-version history with restore, safe fallback (not yet committed)
- 2026-09-28: Phase 0 fixes, redirect manager, alt text and width warnings committed and pushed on `feat/framer-rebuild`
- 2026-09-28: Google width warnings under the SEO title/description, measured on the text the page actually outputs
- 2026-09-28: Alt text required for every image (cover + images in the text), enforced in the editor and on the server; Posts list flags articles still missing it
- 2026-09-28: Redirect manager (admin → Redirects) + automatic redirects on article URL changes; middleware.ts → proxy.ts (Next.js 16). Tested end to end
- 2026-09-28: Phase 0 SEO fixes B2–B8, B10–B12, and B1 for home/Support/FAQ
- 2026-09-28: Support and FAQ pages built; Blogs link opens in the same tab
- 2026-09-28: Home page complete (all sections, WhatsApp button); pushed on `feat/framer-rebuild`
- 2026-09-28: Blog moved under `/blogs`; pushed on `feat/framer-rebuild`
