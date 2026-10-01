# SEO features: testing guide

This guide covers the items from your SEO requirements list that are now built, with steps to
test each one and what you should see. They run on a test version of grade.capital, not on the
live site yet.

- **Test site:** `[TEST SITE ADDRESS]` (written as `[site]` below)
- **Admin:** `[site]/admin` (login shared separately)
- **IDs** like `T0.1` match the status table in SEO-CMS-AUDIT.md.

## Before you start

- **⚠️ = this step saves a real change.** Do those only on the article agreed for testing, and
  undo them as described.
- **Check the HTML:** open the page, press `Ctrl+U` (View Source), then `Ctrl+F` to search.
- **Check a status code (200, 301, 404):** press `F12`, open the **Network** tab, reload the
  page, and read the **Status** of the first row.
- **Google's tools:** Google's Rich Results Test and similar checkers only work if the test
  site can be reached from the internet. If it can't, check the HTML instead.

**Reporting a problem:** send the section and step number, the URL, what you expected, what
you saw, and a screenshot.

### Where everything is

| Feature | Where |
|---|---|
| SEO fields for one article | Admin → Posts → open an article → "SEO (per article)" |
| SEO titles and descriptions of all articles | Admin → Posts → **Edit SEO in bulk** |
| Past versions of an article's SEO fields | Article editor → **SEO history** |
| Redirects | Admin → **Redirects** |
| Broken URLs people hit | Admin → **404s** |
| Duplicates, internal links, broken links | Admin → **SEO reports** |
| robots.txt | Admin → **robots.txt** |
| Extra tags for every page | Admin → **Head code** |
| Sitemap | `[site]/sitemap.xml` |

---

## Tier 0: the basics

### 1. SEO title and meta description, with a cut-off warning (T0.1)
1. Open an article in the admin. In **Meta Title**, type a long title.
   **Expect:** a counter (`57/60`), a bar under the field, and once it's too wide for Google, a
   red line: *Too long: Google will likely cut it to "…"*. The warning goes by width (as Google
   does), not just character count.
2. Do the same in **Meta Description**.
   **Expect:** the same warning, measured against about 920 px on desktop (phones show about
   680 px).
3. Leave both fields empty.
   **Expect:** the warnings say *using the article title* / *using the excerpt*: that's what
   Google gets when the fields are empty.
4. On the live article page, View Source and find `<title>` and `<meta name="description"`.
   **Expect:** they match the fields (or the title and excerpt, if the fields are empty).
5. ⚠️ On the test article, empty a saved Meta Title and click **Update post**, then reopen it.
   **Expect:** the field stays empty and the page uses the article title again. (This works for
   every optional field: OG, Twitter, keywords, tags and the GEO fields too.)

### 2. Editable, readable URLs (T0.2)
1. In the article editor, find **URL Slug**.
   **Expect:** a readable slug like `what-is-nav`, giving the URL `[site]/blogs/what-is-nav`.
2. ⚠️ On the test article (published), change the slug and save.
   **Expect:** the article moves to the new URL. The old URL now sends visitors there with a
   **301**, and Admin → Redirects lists it with the note *Automatic: article URL changed*.
   **Undo:** change the slug back.

### 3. Canonical URL override (T0.3)
1. ⚠️ In **Canonical URL**, enter the full URL of the same article on another website
   (e.g. `https://example.com/original-article`) and save. View Source on the article.
   **Expect:** `<link rel="canonical" href="https://example.com/original-article"`. The article
   also leaves `sitemap.xml`, because Google is told the original is elsewhere.
2. ⚠️ Enter a grade.capital URL instead and save.
   **Expect:** it's ignored on purpose: the canonical stays the article's own URL. On our own
   site, the way to move an article is to change its slug, which also creates the redirect.
3. Enter something that isn't a URL (e.g. `hello`) and save.
   **Expect:** saving is refused with a message.
   **Undo:** empty the field and save.

### 4. index/noindex and follow/nofollow per page (T0.4)
1. ⚠️ Set **Meta Robots — Index** to *noindex* on the test article, save, and View Source.
   **Expect:** `<meta name="robots" content="noindex, follow"`, and the article no longer
   appears in `[site]/sitemap.xml`.
2. ⚠️ Set **Meta Robots — Follow** to *nofollow*.
   **Expect:** the robots tag says `nofollow`.
3. **Expect:** `[site]/robots.txt` doesn't change. Robots meta and robots.txt are separate.
   **Undo:** set them back to *index* and *follow*.

### 5. Social sharing fields with fallbacks (T0.5)
1. On an article with the **Open Graph** and **Twitter Card** fields empty, View Source and
   find `og:title`, `og:description`, `og:image`, `twitter:title`.
   **Expect:**
   - Titles and descriptions fall back to the SEO title and description.
   - The image falls back to the cover image.
   - Twitter falls back to Open Graph.
2. ⚠️ Fill in **OG Title** and save.
   **Expect:** `og:title` shows it, and `twitter:title` follows it unless the Twitter Title
   field is filled.
3. Optional, if the site is public: paste the article URL into a share-preview checker (for
   example LinkedIn Post Inspector).
   **Undo:** clear the fields.

### 6. Alt text required on every image (T0.6)
1. In the editor, upload a cover image and leave **Alt text (required)** empty, then try to
   save.
   **Expect:** saving is refused, and the message says which image needs alt text.
2. Add an image inside the article text without alt text, then try to save.
   **Expect:** also refused.
3. Open Admin → Posts.
   **Expect:** any article still missing alt text shows a red **Missing alt text** badge.

### 7. XML sitemap, updated on publish (T0.7)
1. Open `[site]/sitemap.xml`.
   **Expect:**
   - the main pages and `/blogs`
   - every published article, with a last-modified date
   - not drafts, noindex articles, or articles with a canonical on another site
2. ⚠️ Unpublish the test article (or set it to Draft), then reload the sitemap.
   **Expect:** it disappears straight away. Publish again, and it's back.
   **By design:** category, tag and author pages are not in the sitemap, because they are
   set to noindex.

### 8. robots.txt editable in the admin (T0.8)
1. Open Admin → **robots.txt**.
   **Expect:**
   - the current file
   - **Checks** (Errors / Warnings)
   - **Key pages** (home, blog, an article, Support, FAQ) with Allowed/Blocked
   - **Test a URL**
   - **History** and **Approval codes**
2. Without saving, add the line `Disallow: /blogs` under `User-agent: *`.
   **Expect:**
   - Key pages shows the blog as **Blocked**.
   - The checks warn you.
   - Continuing needs the extra tick: *I understand the blocked pages… will disappear from
     Google search.*
3. Use **Test a URL** with any article URL and different crawlers (Googlebot, Bingbot, GPTBot).
   **Expect:** Allowed or Blocked, and which rule decided it.
4. Remove the line again.
5. Every change needs approval by an emailed code. Make a harmless edit (e.g. add a
   `# test` comment line).
   **Expect:** **Send approval code** stays greyed out until **Reason for this change** is
   filled in.
6. ⚠️ Fill in a reason and click **Send approval code**. (The code goes to
   mahaveer@grade.capital, so coordinate with Mahaveer for this step.)
   **Expect:**
   - "Approval code sent to m•••@grade.capital", and the text is locked.
   - The email shows the code, who asked, the reason, and the lines that change.
7. Enter a wrong code.
   **Expect:** *Wrong code. 4 tries left.* After 5 wrong codes the request is cancelled.
8. ⚠️ Enter the right code and click **Approve and save**.
   **Expect:**
   - The change is live at `[site]/robots.txt`.
   - **History** has a new entry: date and time, edited by, reason, approved with the code sent
     to Mahaveer, lines +/−, key pages affected, and *Show what changed*.
   - **Approval codes** lists the request as *Approved and saved*.
9. **Expect:** a code only works once, expires after 10 minutes, and stops working when a newer
   code is requested. **Reset to default** and restoring from **History** (Load into editor →
   send code) need a code too.
   **Undo:** load the previous version from History and approve it with a new code.

### 9. Redirect manager (T0.9)
1. ⚠️ In Admin → **Redirects**, add From `/seo-test-redirect`, To `/blogs`, Type
   *Permanent (301)*. Then visit `[site]/seo-test-redirect?utm_source=test`.
   **Expect:**
   - You land on `/blogs?utm_source=test` (the query string is kept), with a **301**.
   - The row's "Used" count goes up.
2. Try to add these. **Expect:** each is refused with a clear message.
   - A redirect from a URL to itself.
   - A second redirect from the same URL.
   - A loop (A → B when B → A already exists).
3. Use the search box to find your redirect, edit it, then **delete** it.
   **Expect:** after deleting, `/seo-test-redirect` shows "not found" again.

### 10. Breadcrumbs with breadcrumb schema (T0.10)
1. Open any article.
   **Expect:** a visible trail like *Home › Insights › Analysis › Article title*.
2. View Source and search for `BreadcrumbList`.
   **Expect:** breadcrumb structured data matching the trail. If the site is public, Google's
   Rich Results Test shows a valid *Breadcrumbs* item.
3. Category, tag and author pages also have the trail and the data.
   **By design:** the main pages (home, Support, FAQ, legal) have the breadcrumb data but no
   visible trail, because their design has none.

---

## Tier 1

### 11. Bulk SEO editing (T1.2)
1. Admin → Posts → **Edit SEO in bulk**.
   **Expect:** every article with its SEO title and meta description, each with the Google
   width bar. Filters: **All**, **Cut by Google** (descriptions or titles Google would cut),
   **Empty field**.
2. In *Cut by Google*, shorten a description.
   **Expect:**
   - The bar turns green once it fits.
   - The card turns gold with **Unsaved** and stays visible until saved.
   - The button reads **Save 1 change**.
3. Try to leave the page with unsaved edits.
   **Expect:** the browser asks for confirmation.
4. ⚠️ Click Save (only on descriptions you actually want changed), then View Source on that
   article.
   **Expect:** `<meta name="description"` shows the new text.
5. ⚠️ Empty a field and save.
   **Expect:** the page falls back to the article title or excerpt.

### 12. Live Google-result preview, desktop and phone (T1.3)
1. Open any article in the editor and scroll to the SEO section.
   **Expect:** under the description, a mock Google result for **Desktop** and **Phone**: site
   name, URL path, title and description.
2. Type in Meta Title and Meta Description; nothing needs saving.
   **Expect:** the preview updates as you type, and long text is cut with "…" where Google
   would cut it.
   **Note:** this is an approximation. Google sometimes rewrites titles and descriptions itself.

### 13. 404 monitor with one-click redirect (T1.5)
1. Visit a few made-up URLs, e.g. `[site]/seo-test-missing` and
   `[site]/blogs/seo-test-missing-article`.
   **Expect:** a "not found" page, and status **404** in the Network tab (not 200).
2. Open Admin → **404s**.
   **Expect:**
   - Those URLs are listed, most-hit first, with hit counts and first/last seen dates.
   - Hits from search engines are counted separately.
   - "Linked from" shows the page someone came from, when known.
3. Visit a real article's URL with `-old` added, e.g.
   `[site]/blogs/why-crypto-and-digital-assets-are-the-future-of-investing-old`.
   **Expect:** in 404s, its row already has the matching article filled in as the suggestion.
4. ⚠️ Click **Redirect** on that row.
   **Expect:**
   - The row leaves the list.
   - The old URL now goes to the article (301).
   - Admin → Redirects lists it with the note *From the 404 monitor*.
   **Undo:** delete that redirect in Redirects.
5. Click **Leave as 404** on another row.
   **Expect:** it moves to **Left as 404 (n)**. **Restore** brings it back, and the bin icon
   removes it.
6. Visit `[site]/wp-login.php`.
   **Expect:** it does **not** appear. Automated hacking scans are filtered out.
   **Clean-up:** remove your test rows with the bin icon.

### 14. Duplicate title / description detector (T1.6)
1. Open Admin → **SEO reports**.
   **Expect:** the summary boxes at the top, then **Duplicate titles** and **Duplicate
   descriptions**. These check what the pages actually output (the SEO field, or the title or
   excerpt when it's empty).
2. Optional ⚠️: in Edit SEO in bulk, give two articles the same SEO title, save, and reload
   the report.
   **Expect:** both articles appear under that title. **Undo:** restore the original titles.

### 15. Orphan page detector (T1.7)
1. In SEO reports, open **Links between articles**.
   **Expect:**
   - For each article: how many other articles link to it, and how many it links to.
   - Articles that no other article links to are listed first, marked **No article**.
   - Only links written inside articles count. All articles are also listed on the blog home
     and their category page.
2. Pick one article marked *No article*, open a few related articles, and check.
   **Expect:** none of them links to it.
3. Also on this page:
   - **Broken internal links:** links inside articles to article URLs that don't exist.
     Open each and confirm.
   - **Links using an old URL:** links whose text still uses an old address
     (`blogs.grade.capital/blog/…`, `www.grade.capital/blog/…`). Readers and Google already
     get the new address (see "Also fixed" below), so updating the text is optional.

### 16. Custom `<head>` code (T1.8)
1. Open Admin → **Head code**. Paste `<meta name="robots" content="noindex">` and click Save.
   **Expect:** refused, with the reason. Robots, canonical, description and viewport tags,
   stylesheets and scripts are not allowed, because they could hide the site from Google or
   break the design. Tracking code belongs in Google Tag Manager.
2. Try `<script src="https://example.com/x.js"></script>`.
   **Expect:** refused.
3. ⚠️ Paste `<meta name="seo-test" content="1">` and Save. View Source on the home page and on
   a blog page.
   **Expect:** the tag is inside `<head>` on both. **Then empty the box and Save.**
   **Expect:** the tag is gone.
4. Per article: in the editor, under **Custom head code (advanced)**, enter
   `<link rel="canonical" href="https://example.com">` and try to save.
   **Expect:** refused, with the reason.
5. Allowed: `<meta>`, `<link>` (e.g. preconnect, alternate) and structured data in
   `<script type="application/ld+json">`, which must be valid JSON.

### 17. Visible, sortable "Last updated" (T1.9)
1. Open Admin → Posts.
   **Expect:** a **Last updated** column.
2. Click the **Last updated**, **Views** and **Title** headers.
   **Expect:** each sorts the list, and clicking again reverses it.
3. View Source on an article and find `dateModified` (or `article:modified_time`).
   **Expect:** the same date as in the list.

---

## Tier 2

### 18. Internal-link suggestions (T2.6)
1. In SEO reports → Links between articles, read the **Add a link from** column.
   **Expect:** for each article, up to 3 related articles that don't link to it yet. They're
   picked by shared topic words, with extra weight on the title, tags, category and focus
   keyword.
2. Judge the suggestions, especially for the articles marked *No article*. You know the
   content best.
   **Expect:** they're on the same subject (e.g. tax articles for a tax article).
3. To act on one, open the suggested article and link to the target from a relevant sentence.
   **Expect:** after saving, the target's "Linked from" count goes up.

### 19. Version history for SEO fields (T2.9)
1. Open the test article in the editor and click **SEO history** (next to the "SEO (per
   article)" heading).
   **Expect:** a list of saves that changed SEO fields, newest first, each with date, who saved
   it, and the changed fields as *old → new*. Saves from Edit SEO in bulk appear too.
2. ⚠️ Change the Meta Title, save, and open SEO history again.
   **Expect:** a new entry at the top marked **Current**, showing the old and new title.
3. ⚠️ Click **Restore this version** on the entry before your change, and confirm.
   **Expect:** the old title is back (check the editor and the page source), and the restore
   itself appears as a new entry, so it can be undone the same way.
4. **Expect:** saving without changing any SEO field adds no entry. The newest 30 entries per
   article are kept.
   **Note:** the URL slug isn't part of the history (changing it creates redirects, so it stays
   a deliberate edit in the editor). History starts with the first SEO change after this
   release; the values from before that change are kept as *Before history started*.

---

## Also fixed: old internal links are shown with their current address

Many articles link to each other with old addresses (`https://blogs.grade.capital/blog/…`,
`https://www.grade.capital/blog/…`). The article text isn't changed, but when the page is
shown these links now point straight to the current address, so readers and Google skip the
redirect.
1. Open an article listed under SEO reports → **Links using an old URL**, and View Source.
   Search for `/blog/`.
   **Expect:** no links inside the article text use `/blog/` paths; they use
   `[site]/blogs/<slug>`.
2. Click one of those links.
   **Expect:** it opens the article directly (status 200, no 301 in the Network tab).

## Also fixed: real 404s on the blog

Missing blog URLs used to show "not found" but answered **200**, which Google treats as a
"soft 404".
1. Open `[site]/blogs/does-not-exist`, `[site]/blogs/category/nope`,
   `[site]/blogs/tag/nope` and `[site]/blogs/author/nope`.
   **Expect:** status **404** in the Network tab.
2. Check a few real articles.
   **Expect:** status **200**.

---

## Not in this round (please don't report these as bugs)

**Not built yet:**

| Item | Why |
|---|---|
| Search Console inside the admin (T2.1) | Needs a Google service account added to Search Console. |
| AI drafting of titles, descriptions and FAQs (T2.3) | Needs an AI provider account (API key). |
| Core Web Vitals per page (T2.7) | Planned for after launch, once there's real traffic data. |
| Structured-data check before publish (T2.2) | Google has no public Rich Results API, and our structured data is built from required fields. |
| Topic-cluster map (T2.5) | Not useful yet at about 28 articles. |
| Approval workflow for SEO fields (T2.8) | Not needed for a small team. |

**Decided against:**

| Item | Why |
|---|---|
| Structured-data dropdowns (T1.1) | Structured data is filled in automatically for each page type, so nobody needs to pick or paste it. |
| Hreflang manager (T1.4) | The site is English-only. |
| Title A/B testing (T2.4) | Needs far more traffic to be meaningful. |
| Product variant handling (T2.10) | There are no product variants. |

**Known issues and limits:**

- **Approximate preview:** the Google preview and width bars are close estimates. Google may
  rewrite titles and descriptions.
- **Own-domain canonicals are ignored by design** (see 3).
- **Category, tag and author pages are noindex by design**, so they're not in the sitemap.
