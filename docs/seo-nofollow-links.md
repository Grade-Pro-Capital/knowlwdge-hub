# Follow vs. No-follow Links in Blog Posts

> Living document. Every change we make to how blog hyperlinks handle SEO
> "follow" / "no-follow" gets recorded here, newest first.

## Why we do this

When we publish a blog, the body often links out to other sites (sources,
references, partners, sponsored mentions, user-supplied URLs, etc.). Search
engines treat an ordinary `<a href>` as an **endorsement**: by default they
"follow" the link and pass a share of our page's ranking credit (link equity /
"PageRank") to the destination.

That isn't always what we want:

- **Untrusted / user-generated / sponsored destinations** — we don't want to
  vouch for them or hand them ranking credit.
- **Paid or affiliate links** — Google's guidelines *require* these to be
  marked so they aren't treated as editorial endorsements.
- **Low-value or duplicate destinations** — no reason to leak equity to them.

The mechanism for "link to this, but don't endorse it / don't pass credit" is
the HTML attribute **`rel="nofollow"`**. Adding it tells Google and other
crawlers not to pass ranking signals through that link.

So we let the blog author decide, per link, whether it is a **follow** link
(normal, passes credit) or a **no-follow** link (`rel="nofollow"`, passes no
credit). The author makes that choice while writing; the published article must
then actually render the link with `rel="nofollow"` so a real reader's browser
and any crawler see the correct behaviour.

> Note on internal links: links back to our own domains (`grade.capital` /
> `blogs.grade.capital`) are **always rendered as follow** even if marked
> otherwise, because we *want* equity to flow to our own site. No-follow only
> applies to external destinations.

## How it works (end to end)

```
Author picks follow / no-follow in the editor
        │
        ▼
Stored in post HTML as  <a href="…" rel="nofollow">…</a>   (no rel = follow)
        │
        ▼
On render, normalizeArticleLinks() preserves the author's nofollow on external
links (and adds noopener/noreferrer); internal links are forced to follow
        │
        ▼
Reader's browser / search crawler sees the real rel="nofollow"
```

### 1. Authoring — the rich-text editor

File: [app/admin/components/RichTextEditor.tsx](../app/admin/components/RichTextEditor.tsx)

- The link popover (the chain/link button in the toolbar) has a **"No-follow
  link"** checkbox.
- Leaving it unchecked = a normal **follow** link (no `rel` attribute written).
- Checking it = the link is saved with **`rel="nofollow"`**.
- The editor uses TipTap's `Link` mark, whose `rel` is a real, persisted mark
  attribute, so the choice is stored directly in the post's HTML.
- When you click an existing link, the popover **pre-fills** its URL and
  no-follow state, so re-opening it toggles the existing link instead of
  creating a conflicting one. There's also a **Remove link** action.
- In the editor, no-follow links are drawn with a **dashed underline** (follow
  links use a solid underline) so authors can tell them apart at a glance.

### 2. Storage

File: [app/api/admin/posts/route.ts](../app/api/admin/posts/route.ts)

The post body HTML is stored verbatim — there is no sanitization step that
strips `rel`, so `rel="nofollow"` round-trips through save/load unchanged.

### 3. Rendering — the public article

File: [app/lib/tocFromContent.ts](../app/lib/tocFromContent.ts) →
`normalizeArticleLinks()`, called from
[app/blog/[slug]/page.tsx](../app/blog/[slug]/page.tsx).

Before the article HTML is rendered:

- **Internal links** (own domain): forced to HTTPS and `rel="noopener"`. Any
  author-set `nofollow` is deliberately dropped — internal links always follow.
- **External links**: the author's choice wins. If the author marked the link
  no-follow, the `nofollow` token is preserved. We also always add
  `noopener noreferrer` to external links for security (tab-nabbing and
  referrer-leak protection).

The result is rendered via `dangerouslySetInnerHTML`, so the reader's browser
and search crawlers receive the exact `rel` we intend.

## How to use it (for authors)

1. Select the text you want to link, click the **link** button in the editor
   toolbar.
2. Enter the URL.
3. Tick **"No-follow link"** if the destination should not receive SEO credit
   (untrusted, sponsored, affiliate, or user-supplied links). Leave it unticked
   for normal editorial links you're happy to endorse.
4. Click **OK**.

To change an existing link: click it, re-open the link popover, toggle the
checkbox, and click **OK** — or click **Remove link**.

## Changelog

### 2026-06-24 — Initial follow / no-follow support

- Added a **"No-follow link"** checkbox to the rich-text editor's link popover;
  links can now be saved as follow (default) or `rel="nofollow"`.
- Link popover now pre-fills URL + no-follow state from the link under the
  cursor, and gained a **Remove link** action.
- No-follow links shown with a dashed underline in the editor for quick visual
  distinction.
- `normalizeArticleLinks()` reworked to **preserve author-set `nofollow` on
  external links** (and add `noopener noreferrer`), while still forcing internal
  links to follow with `noopener`.
- Verified the save path does not strip `rel`, so the attribute survives end to
  end and renders as a real no-follow link for readers and crawlers.
