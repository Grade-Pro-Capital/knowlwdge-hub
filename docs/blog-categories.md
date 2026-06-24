# Blog Categories — selectable, free-typed, and filterable

> Living document. Every change to how blog categories are chosen, stored, and
> surfaced to readers gets recorded here, newest first.

## Why we do this

Previously the post **Category** was a plain free-text box. That caused two
problems:

1. **Inconsistent categories** — typos and near-duplicates ("Analysis" vs
   "analysis" vs "Analyses") fragmented the taxonomy, which hurts the
   `/category/[slug]` pages and reader navigation.
2. **No discovery for readers** — the home page had no way to browse posts by
   category.

We want the best of both worlds:

- Authors should **see and reuse existing categories** (consistency), but
- still be able to **type a brand-new category** when they genuinely need one
  (flexibility), and have it **saved** so it's reusable next time.
- Readers should be able to **filter the home feed by category**.

## How it works (end to end)

```
Editor: Category combobox
  ├─ shows dropdown of existing categories (reuse)
  └─ allows typing a new value (flexibility)
        │
        ▼
Save post (POST/PATCH) → post.category stored
        │
        ▼
ensureCategory() upserts a Category row for new values
        │
        ▼
Next editor load: new category appears in the dropdown
Home page: reader filters the feed by category chips
```

### 1. The category combobox (editor)

File: [app/admin/posts/PostForm.tsx](../app/admin/posts/PostForm.tsx)

- The Category field is a **combobox**: a text input with a dropdown of existing
  categories beneath it.
- On focus/typing, a dropdown lists existing categories; typing **filters** the
  list (so it doubles as search). Clicking an item fills the field.
- Typing a value that isn't in the list is allowed — it's simply saved as a new
  category on submit.
- When the typed value doesn't match any existing category, the author gets
  clear feedback that a new one will be created:
  - a gold **"Create new category "X""** row appears at the bottom of the
    dropdown, and
  - a gold helper line under the field reads **"New category "X" will be created
    on save."**
- The list is loaded from `GET /api/admin/categories`.

### Casing

Category **names** (`Post.category` and `Category.name`) are stored **exactly as
typed** (trimmed only) — case is preserved, e.g. `Analysis` stays `Analysis`.
Only the `Category.slug` is lowercased (via `slugify`) because it's used in URLs
(`/category/analysis`). Matching for the dropdown and the "new category" check is
**case-insensitive**, so `Analysis` and `analysis` are treated as the same
category and resolve to the same page.

### 2. Where categories come from

Files: [app/lib/categories.ts](../app/lib/categories.ts),
[app/api/admin/categories/route.ts](../app/api/admin/categories/route.ts)

Category names live in two places that we keep in sync:

- **`Post.category`** — the free-text value on each post (the real source of
  which categories have content).
- **`Category` model** — one row per category (keyed by `slug`), which also
  holds the optional per-category SEO title/description used by
  `/category/[slug]`.

`getAllCategoryNames()` returns the union of both, de-duplicated
(case-insensitive) and sorted, for the editor dropdown.

### 3. Saving a new category

Files: [app/api/admin/posts/route.ts](../app/api/admin/posts/route.ts),
[app/api/admin/posts/[id]/route.ts](../app/api/admin/posts/[id]/route.ts)

After a post is created or its category is updated, `ensureCategory(name)`
**upserts** a `Category` row (by `slugify(name)`):

- New category → a row is created, so it appears in the dropdown next time and
  has a place to attach SEO metadata.
- Existing category → left untouched (its SEO fields are preserved).

No separate "create category" step is needed — categories are created as a side
effect of writing posts.

### 4. Reader-facing category filter (home page)

Files: [app/(home)/HomeShell.tsx](../app/(home)/HomeShell.tsx)

- Below the **All Insights / For Professionals** tabs, the home feed shows a row
  of **category chips** ("All Categories" + one chip per category present in the
  current tab).
- Selecting a chip filters the visible posts to that category. It composes with
  the existing tab and search filters.
- Categories are derived from the posts in the active tab, so switching tabs
  refreshes the chip list and resets the category filter.
- Dedicated `/category/[slug]` pages (server-rendered, indexable) continue to
  exist for SEO; the home chips are a fast client-side browse on top of them.

## How to use it (for authors)

1. In the post editor, click the **Category** field. A dropdown of existing
   categories appears.
2. Pick one, or start typing to filter — or type a **new** category name.
3. Save the post. A new category is stored automatically and will show up in the
   dropdown (and as a home-page filter chip) from then on.

## Changelog

### 2026-06-24 — New-category indicator

- The combobox now signals when a typed value is a new category: a gold
  "Create new category "X"" row in the dropdown and a "New category "X" will be
  created on save." helper line under the field. Matching is case-insensitive.

### 2026-06-24 — Category combobox + reader filter

- Replaced the plain Category text box with a **combobox**: dropdown of existing
  categories + free typing for new ones.
- Added `GET /api/admin/categories` and `app/lib/categories.ts`
  (`getAllCategoryNames`, `ensureCategory`).
- New categories typed in the editor are now **persisted** as `Category` rows on
  post create/update via `ensureCategory()`.
- Added a **category filter** (chips) to the home page feed, composing with the
  existing tab and search filters.
