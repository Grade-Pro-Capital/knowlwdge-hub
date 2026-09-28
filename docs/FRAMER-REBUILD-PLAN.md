# grade.capital — Framer → code rebuild plan

**Goal:** Rebuild the live Framer website (grade.capital) in this Next.js project as an
**exact visual copy** — same layout, spacing, colors, typography, text, images, animations
and hover effects. No design changes.

This is part of the wider move to make `grade.capital` the single SEO domain, with the blog
served at `grade.capital/blogs` (see "Later" below). Launch/DNS work is **out of scope** here.

Branch: `feat/framer-rebuild` — the live blog is untouched until launch.

---

## 1. What we're copying

7 live pages, each with Framer's breakpoints:

| Layout        | Width       |
|---------------|-------------|
| Desktop       | ≥ 1200px    |
| Tablet        | 810–1199px  |
| Phone         | < 810px     |

(Some components also switch at 1440px.)

| Page | Contents |
|---|---|
| **Home** `/` | Header · Hero ("India's #1", headline, Know More, dashboard preview) · "If You Know Stocks…" · Why Grade Capital (PAN-linked / UPI-IMPS-NEFT / bank account) · Results That Shine (680% growth, 90% blue-chip) · Designed for Success (4 mouse-following glow cards) · Growth you See / Trust you Feel · As Seen On · Talk to an Expert (consultation form) · Grade for Good · Footer |
| **Support** `/support` | Contact details, addresses, support form |
| **FAQ** `/faq` | Question & answer list |
| **Legal** `/privacy-policy`, `/terms-of-use`, `/investor-agreement`, `/anti-laundering` | Long legal text, shared layout |
| **Shared** | Header + mobile menu, footer, WhatsApp button |

Design building blocks (from Framer's published code):

- **Fonts:** Poppins (main), Inter, Manrope, Geist, Fragment Mono — all Google Fonts.
- **Colors:** e.g. gold `#FDBD30`, light gold `#FDDB97`, greys `#151516`, `#19191B`, `#202227`, `#979797`.
- **Images:** 22 original files (PNG/JPG/SVG).
- **Animations:** Framer "appear" animations (spring/tween configs extracted exactly), rebuilt with
  **Motion** — the same animation library Framer uses.
- **Tracking:** Google Tag Manager `GTM-5F27HQZQ` (Framer's container) on the main-site pages.

Draft pages in Framer (`/about`, `/blog`, `/franchise`, `/education`, `/page`, `/page-2`) are
**not** rebuilt.

---

## 2. Where it lives in this project

```
app/
├── (site)/     ← NEW: Framer copy — own root layout, fonts, CSS reset, GTM
│   ├── page.tsx                          → /
│   ├── support/ faq/                     → /support, /faq
│   └── privacy-policy/ terms-of-use/ investor-agreement/ anti-laundering/
├── (blog)/     ← EXISTING blog, moved under /blogs, look unchanged
│   └── blogs/ …                          → /blogs, /blogs/[slug], …
├── admin/  api/                          ← unchanged
```

- **Separate root layouts** so the blog's global CSS (Tailwind preflight, default font,
  background) cannot shift the Framer copy, and vice versa. The blog keeps its current
  header/footer for now.
- The blog's listing page currently lives at `/`, which the new home page needs, so the blog
  routes move under `/blogs` as part of this work (routes + internal links only; the full blog
  SEO update is a separate step).
- **Styling:** the exact values from Framer's published CSS (font sizes, line heights, letter
  spacing, padding, radii, shadows, colors, breakpoints) — no approximations.

---

## 3. Build order

### Step 0 — Setup & capture the original
1. Branch `feat/framer-rebuild`.
2. Snapshot the Framer site: HTML of every page, all images, reference screenshots at every
   width. This is the answer key (and a backup of Framer).
3. Capture content that only appears after load (FAQ).
4. Separate layouts; move blog to `/blogs`.
5. Tooling: Motion (animations), Playwright (screenshot comparison).

### Step 1 — Foundations
Fonts, color + text tokens, **header** (desktop + mobile menu), **footer**, **WhatsApp button**.

### Step 2 — Home page, section by section
Build → compare at every breakpoint → fix, per section:
Hero · If You Know Stocks · Why Grade Capital · Results That Shine · Designed for Success ·
Growth you See / Trust you Feel · As Seen On · Talk to an Expert + form (visual only) · Grade for Good.

**Status: done.** Every home section, the sticky "Free consultation" anchor, the footer and
the WhatsApp button are built; page height matches Framer exactly at 1440 / 1024 / 390, and
scroll frames differ by ≤0.05% except where something is time-based (Lottie, tickers, the
rocking tile, word reveals caught mid-animation).

### Step 3 — Other pages
Support (+ form, visual only) · FAQ (+ accordion) · 4 legal pages (text word-for-word).

**Status:** Support and FAQ done. Support is pixel-identical at 1440 / 1024 / 390 (its light-rays
background is randomised on every load, on Framer too, so it is excluded from pixel checks).
FAQ matches at desktop widths. Below 1200px Framer's FAQ keeps the desktop header and a 1200px
footer (squeezed and cut off on phones); ours uses the normal responsive header/footer there
(pending owner decision). The FAQ list, which Framer injects with custom code after load, is
server-rendered. Legal pages next.

### Step 4 — Page metadata parity
Same title, description, OG/Twitter tags, favicon, GTM per page as Framer today; sitemap +
robots entries.

### Step 5 — Verify & fix loop
See section 4.

**Estimate:** ~2–3 weeks.

---

## 4. How we prove it's exact

| Check | How | Pass condition |
|---|---|---|
| Pixel comparison | Playwright full-page screenshots of Framer vs. copy at 1920, 1440, 1280, 1024, 810, 390, 375 px; pixel diff | No visible differences (sub-pixel font smoothing only) |
| Typography | Script reads computed font family/size/weight/line-height/letter-spacing/color of every text element on both | Zero mismatches |
| Text | All visible text extracted from both and diffed | 100% identical |
| Links | Every link/button target compared | Identical (except Blogs → `/blogs`) |
| Animation & hover | Side-by-side recordings: load, scroll, card hover, mobile menu, FAQ | Same to the eye |
| Metadata | Title / description / OG per page | Identical |
| Human review | Owner checks both on phone + laptop | Sign-off |

---

## 5. Rules

**Copied exactly:** layout, spacing, colors, fonts, text (including "© 2025" and the
`https://www.grade.capital` notice in the footer), images, animations, hover effects, links.

**Only allowed differences:**
1. **Blogs** nav link → `/blogs` (instead of `blogs.grade.capital`), opening in the same tab
   (Framer opens it in a new tab).
2. **Forms** look and behave identically but are not wired to a backend yet.
3. **Invisible improvements:** faster loading; FAQ content server-rendered (Framer loads it
   client-side only, so Google may not see it).

---

## 6. Risks

| Risk | Handling |
|---|---|
| Framer edited during the rebuild | **Freeze Framer edits until launch**, or re-snapshot changed pages |
| Custom glow-card effect | Replicate from Framer's published component code |
| Content rendered only by JS (FAQ) | Captured with a real browser in Step 0 |
| Sub-pixel font smoothing differences | Same font files; residual invisible differences accepted |
| Blog CSS leaking into the copy | Separate root layouts |

---

## Later (out of scope for this rebuild)

- Blog SEO move: canonicals, OG, JSON-LD, sitemap → `grade.capital/blogs/...`; 301s from
  `blogs.grade.capital/*`.
- Wire consultation + support forms (email/CRM).
- Launch: nginx + HTTPS for `grade.capital`/`www`; Namecheap `@` and `www` records only
  (never MX/TXT/`_dmarc`); Search Console Domain property; cancel Framer ~2 weeks after.
- Email hygiene: add SPF, harden DMARC.
- Optional: blog pages use the main site's header/footer ("Option A").
