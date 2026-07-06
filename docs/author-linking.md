# Linked Authors — username ↔ slug ↔ credentials

> **STATUS: IMPLEMENTED (2026-06-24).** Backfill applied to production data. See
> the changelog at the bottom for exactly what shipped and what data changed.

## Context / why

Today author identity is **denormalized and unmanaged**:

- Each `Post` stores `authorName` (required), `authorSlug` (optional), and
  `authorAvatar` (optional) directly. There is **no link** between them and a
  real author entity.
- An `Author` model exists (`slug`, `name`, `avatar`, `bio`, `credentials`,
  `linkedInUrl`, `twitterUrl`) but is **only populated by the seed script** —
  there's no editor/admin integration.
- Some posts have **no `authorSlug`**, so they don't appear on `/author/[slug]`
  and their JSON-LD has no author URL.
- The blog post byline **hardcodes "Senior Analyst"** for everyone. A separate,
  per-article `Post.expertiseSignals.credentials` exists but is a different
  concept (article methodology, not the person's title).

Goal: make the author a **real, linked entity**. In the editor the author is
picked from a dropdown (like categories); selecting one **auto-fills the slug and
credentials**; typing a new name **creates the author**. The author record is the
**single source of truth** for credentials, so editing them once updates every
post by that author.

## Confirmed decisions

1. **Casing** — display **name stays proper-case** (e.g. "Mahaveer Soni"); the
   **slug is lowercase** (`mahaveer-soni`) and is the linking key
   (`/author/mahaveer-soni`).
2. **Credentials** — the **Author record is the single source**. The blog byline
   shows the author's credentials (replacing the hardcoded "Senior Analyst"),
   with **"Senior Analyst" kept only as a fallback** when an author has none yet.
3. **Existing posts** — a **careful one-time auto-backfill** (idempotent,
   dry-run first) that fills missing `authorSlug` and creates/links `Author`
   records. Known credentials to seed:
   - Mahaveer Soni → **Marketing Manager**
   - Anubhav Aggarwal → **CEO**
   - (existing seeded authors keep their current credentials)

## How it will work

### Data model
- Keep the `Author` model as the source of truth; **no schema change needed**
  (MongoDB, all fields already exist).
- `Post.authorSlug` remains the by-convention link to `Author.slug`.
- Credentials are **NOT** copied onto the post (so "edit once → all posts
  update" holds). The blog page looks the author up at render time.

### New helper — `app/lib/authors.ts` (mirrors [app/lib/categories.ts](../app/lib/categories.ts))
- `ensureAuthor({ name, slug?, avatar?, credentials? })` — upsert `Author` by
  `slug` (`slug = slugify(name)`). On update it **only fills empty fields** and
  **never overwrites** existing name/credentials/bio/avatar, so seeded data is
  safe.
- `getAllAuthors()` — union of `Author` rows + distinct post authors, returning
  `{ slug, name, credentials, avatar }`, sorted by name (for the dropdown).

### New API — `app/api/admin/authors/route.ts` (mirrors the categories route)
- `GET` (admin-only) → returns `getAllAuthors()` for the editor combobox.

### Editor — [app/admin/posts/PostForm.tsx](../app/admin/posts/PostForm.tsx)
- The **Author name** field becomes a **combobox** (same pattern as Category):
  - dropdown of existing authors; typing filters it;
  - **selecting** an author auto-fills `authorSlug`, `authorAvatar`, and the
    **author credentials** field;
  - **typing a new name** shows "New author "X" will be created", previews the
    auto-generated slug, and lets you enter credentials (and avatar) for them.
- Add an explicit **"Credentials"** field bound to the author, labelled so it's
  clear it's saved to the author and updates all their posts. (This is distinct
  from the GEO "Credentials" under AI Optimization, which stays per-article.)
- On submit the API calls `ensureAuthor(...)` (like `ensureCategory`) so new
  authors / credential edits persist.

### Public render
- [app/blog/[slug]/page.tsx](../app/blog/[slug]/page.tsx) — look up the author by
  `authorSlug` once and show `author?.credentials || "Senior Analyst"` in the
  byline (replaces the hardcoded line). JSON-LD author URL already uses the slug,
  which the backfill fills in.
- [app/author/[slug]/page.tsx](../app/author/[slug]/page.tsx) — already reads
  `Author.credentials`; the backfill makes sure a record exists.

### Backfill script — `prisma/backfillAuthors.ts` (careful, idempotent)
1. Read all posts; group into distinct authors by
   `slug = authorSlug?.trim() || slugify(authorName)`, choosing a representative
   proper-case name and any avatar.
2. Apply the known-credentials map (Mahaveer Soni → Marketing Manager,
   Anubhav Aggarwal → CEO); others get `null` (byline falls back to
   "Senior Analyst").
3. **Upsert** each `Author` (create if missing; on update only fill empty
   fields — never clobber existing data).
4. For posts with **missing/empty `authorSlug`**, set
   `authorSlug = slugify(authorName)`. **Never overwrite** an existing slug.
5. **Dry-run by default**: prints the full `name → slug` mapping, every post that
   would change, every author upsert, and flags any **slug collisions / merges**
   for your review. Writes nothing. Applies only with an explicit `--apply` flag.
6. Idempotent: re-running after apply makes no further changes.

> **Safety gate:** the dry-run output (especially the name→slug mapping and any
> merges) will be shared for your approval **before** `--apply` is ever run.

## Verification
- `npm run … backfill` (dry-run) → review mapping & collisions.
- After approval, run with `--apply`; re-run to confirm idempotency (no changes).
- Editor: select existing author → fields auto-fill; type a new one → created.
- `/author/[slug]` shows the author's posts + credentials; blog byline shows the
  author's credentials; JSON-LD includes the author URL.
- `tsc --noEmit` + `eslint` clean.

## Open risks (being handled carefully)
- **Slug collisions**: two different display names slugifying to the same slug
  merge into one author — surfaced in the dry-run for review before apply.
- **Render-time lookup** adds one author query per blog page (small; cacheable).
- **Credential editing via the post editor mutates the shared author** (by
  design) — the field label will make this explicit.

## How to run the backfill (for reference / other environments)

```
# Preview only — writes nothing, prints the name→slug map + collisions:
npm run db:backfill:authors
# Apply:
npm run db:backfill:authors -- --apply
```

The script ([prisma/backfillAuthors.ts](../prisma/backfillAuthors.ts)) loads
`.env.local`, prints the target DB host, is idempotent, and normalises every
post's `authorSlug` to `slugify(authorName)` (filling empties and correcting
mismatches). Known credentials are seeded from a map inside the script.

## Changelog

### 2026-07-06 — Profile pic upload + avatar is now author-sourced

The author avatar became a **first-class, uploadable, single-source field** (like
credentials).

- **Upload**, not URL: the editor's "Author avatar URL" text input was replaced by
  a **file upload with live preview** ([app/admin/posts/PostForm.tsx](../app/admin/posts/PostForm.tsx),
  `handleAvatarChange`). Images post to `/api/admin/upload` with `kind=avatar`;
  the route crops them **square (400×400, `fit: cover`)** and stores them under an
  `authors/` prefix ([app/api/admin/upload/route.ts](../app/api/admin/upload/route.ts)).
- **Single source of truth**: the profile pic is now read from `Author.avatar` at
  render time (mirrors credentials). New helper
  `resolveAuthorAvatar()` ([app/lib/images.ts](../app/lib/images.ts)) returns a URL
  only when it's a real image, and a shared `<AuthorAvatar>`
  component ([app/components/AuthorAvatar.tsx](../app/components/AuthorAvatar.tsx))
  renders it or a neutral **default silhouette** (lucide `User`) — replacing the old
  first-initial fallback in the blog byline, About-the-Author, and `/author/[slug]`.
- **Old posts pick up new pics**: because the blog byline looks up
  `postAuthor.avatar` instead of the post's denormalized `authorAvatar`, uploading
  one pic updates every post by that author, including older ones.
- **ensureAuthor** now applies an explicit avatar change (not just fills an empty
  one), so re-uploading updates the pic everywhere. It still never blanks a field.
- **Editor sync**: selecting/loading an author now syncs the pic from the Author
  record, repairing any stale/bad avatar denormalized onto an old post.
- **Data cleanup**: `scripts/clean-avatar-urls.mjs` (dry-run/`--apply`, idempotent)
  cleared non-image avatar values. Applied: **1 author** (Mahaveer Soni) + **4 of
  his posts** had a LinkedIn profile URL pasted into the avatar field by mistake —
  all cleared to null. Nothing else was touched.

### 2026-06-24 — Credential fallback changed to "N/A"

When an author has no credentials set, the byline used to fall back to
"Senior Analyst". Per request, the fallback is now **"N/A"**, and the old
generic "senior analyst at Grade Capital" bio paragraph was removed.

- [app/blog/[slug]/page.tsx](../app/blog/[slug]/page.tsx) — byline shows
  `authorCredentials || "N/A"`.
- [app/components/ArticleGeo.tsx](../app/components/ArticleGeo.tsx) — the
  "About the Author" credential line always renders, showing the author's
  credential or **"N/A"**; the hardcoded "senior analyst" fallback paragraph was
  deleted.
- Verified: the phrase "senior analyst" no longer appears anywhere in `app/`.
- Note: all 27 current published posts have author credentials, so "N/A" only
  appears for a future author created without one.

### 2026-06-24 — Removed the duplicate per-article "Credentials" field

After credentials became author-driven, the old per-article "Credentials" input
(under GEO / AI Optimization → Expertise Signals, which showed the placeholder
"Senior Analyst") was redundant and confusing. Changes:

- Removed that **Credentials** input from the editor; the Expertise Signals block
  now has just **Methodology** and **Research Notes** (genuinely per-article).
- Post submit no longer writes `expertiseSignals.credentials`.
- [app/components/ArticleGeo.tsx](../app/components/ArticleGeo.tsx) "About the
  Author" credential line now uses an `authorCredentials` prop (the author's
  credential) instead of `expertiseSignals.credentials`.
- [app/blog/[slug]/page.tsx](../app/blog/[slug]/page.tsx) passes the looked-up
  author credential to ArticleGeo; the header byline shows it with the
  "Senior Analyst" fallback applied inline.
- Net effect: **one** place to set credentials (the Author section), shown
  consistently in the byline and the About-the-Author section.

### 2026-06-24 — Cleanup: removed orphan seed authors

Deleted 3 leftover seed authors with 0 posts (Ravi Kumar, Priya Sharma,
Ankit Verma) created by an old `db:seed:posts` run on 2026-02-14. Deletion was
guarded to only remove authors with no posts.

### 2026-06-24 — Implemented + backfilled

**Code**
- `app/lib/authors.ts` — `ensureAuthor()` (upsert by slug, fills empty fields /
  applies credential edits, never clobbers an existing name) and
  `getAllAuthors()` (Author rows + post authors, de-duped, sorted).
- `GET /api/admin/authors` — author list for the editor combobox.
- [app/admin/posts/PostForm.tsx](../app/admin/posts/PostForm.tsx) — author **name
  combobox**: dropdown of existing authors, typing filters, selecting auto-fills
  **slug + avatar + credentials**; typing a new name shows "New author will be
  created" and auto-derives the slug. Added an **Author credentials** field
  (saved to the author, distinct from the GEO per-article credentials).
- Post create/update routes call `ensureAuthor()` and always store a usable
  `authorSlug` (derived from the name when missing).
- [app/blog/[slug]/page.tsx](../app/blog/[slug]/page.tsx) — byline now shows the
  linked author's credentials (`author.credentials || "Senior Analyst"`),
  replacing the hardcoded "Senior Analyst".

**Data (backfill applied to production)**
- Created 4 Author rows: **Mahaveer Soni** (Marketing Manager, 18 posts),
  **Anubhav Aggarwal** (CEO, 7 posts), **Rohit** (Software Developer, 1),
  **Sumit Sharma** (Franchise and growth head, 1).
- Filled `authorSlug` on **10** posts that had none.
- **Corrected 1** mislinked post
  (`smart-sip-in-crypto-value-averaging-vs-fixed-amount-dca`): was wrongly
  `mahaveer-soni`, now `anubhav-aggarwal`.
- Re-run confirmed idempotent (0 further changes).
