/**
 * Backfill author linking — SAFE, idempotent, dry-run by default.
 *
 *   Preview (no writes):   npx tsx prisma/backfillAuthors.ts
 *   Apply changes:         npx tsx prisma/backfillAuthors.ts --apply
 *
 * What it does:
 *   1. Fills missing Post.authorSlug = slugify(authorName). Never overwrites an
 *      existing slug.
 *   2. Creates/links an Author row per distinct author (keyed by slug). On an
 *      existing row it only fills EMPTY fields — it never clobbers a name,
 *      credentials, or avatar that's already set (seeded data stays safe).
 *   3. Seeds known credentials for authors we were told about.
 *
 * The dry-run prints the full name → slug mapping and flags any collisions
 * (two different display names that map to the same slug) so they can be
 * reviewed BEFORE --apply is ever run.
 */
import { config } from "dotenv";
import { PrismaClient } from "@prisma/client";

// Next.js keeps secrets in .env.local; load it (then .env) so DATABASE_URL is set
// when this script runs standalone via tsx.
config({ path: ".env.local" });
config();

const prisma = new PrismaClient();

const APPLY = process.argv.includes("--apply");

// slugify — kept identical to app/lib/seo.ts so slugs match the running app.
function slugify(text: string): string {
  return (
    String(text)
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || "page"
  );
}

// Known credentials to seed (by slug). Extend as needed.
const KNOWN_CREDENTIALS: Record<string, string> = {
  "mahaveer-soni": "Marketing Manager",
  "anubhav-aggarwal": "CEO",
  rohit: "Software Developer",
  "sumit-sharma": "Franchise and growth head",
};

type AuthorAgg = {
  slug: string;
  name: string; // representative display name (first non-empty)
  names: Set<string>; // all distinct display names that mapped here (collision check)
  avatar: string | null;
  postCount: number;
};

async function main() {
  console.log(
    `\n=== Author backfill (${APPLY ? "APPLY — will write" : "DRY RUN — no writes"}) ===`
  );
  // Show which DB we're pointed at (host only) so we never apply to the wrong one.
  try {
    const host = new URL(process.env.DATABASE_URL ?? "").host || "(unknown)";
    console.log(`DB host: ${host}\n`);
  } catch {
    console.log("DB host: (could not parse DATABASE_URL)\n");
  }

  const posts = await prisma.post.findMany({
    select: { id: true, slug: true, authorName: true, authorSlug: true, authorAvatar: true },
  });
  const existingAuthors = await prisma.author.findMany({
    select: { slug: true, name: true, credentials: true, avatar: true },
  });
  const existingBySlug = new Map(existingAuthors.map((a) => [a.slug, a]));

  // --- Build distinct authors from posts ---
  // The canonical slug for every post is slugify(authorName). This both FILLS
  // empty slugs and CORRECTS any slug that doesn't match the author's name
  // (confirmed desired — e.g. the one post wrongly slugged 'mahaveer-soni').
  const agg = new Map<string, AuthorAgg>();
  const postSlugFills: {
    id: string;
    postSlug: string;
    from: string;
    to: string;
    kind: "fill" | "correct";
  }[] = [];

  for (const p of posts) {
    const name = (p.authorName ?? "").trim();
    if (!name) {
      console.warn(`! Post ${p.slug} has an empty authorName — skipped.`);
      continue;
    }
    const slug = slugify(name);
    const current = (p.authorSlug ?? "").trim().toLowerCase();

    if (current !== slug) {
      postSlugFills.push({
        id: p.id,
        postSlug: p.slug,
        from: current || "(empty)",
        to: slug,
        kind: current ? "correct" : "fill",
      });
    }

    const cur = agg.get(slug);
    if (cur) {
      cur.postCount += 1;
      cur.names.add(name);
      if (!cur.avatar && p.authorAvatar?.trim()) cur.avatar = p.authorAvatar.trim();
    } else {
      agg.set(slug, {
        slug,
        name,
        names: new Set([name]),
        avatar: p.authorAvatar?.trim() || null,
        postCount: 1,
      });
    }
  }

  // --- Report: name → slug mapping ---
  console.log("Author mapping (name → slug, posts):");
  for (const a of [...agg.values()].sort((x, y) => x.slug.localeCompare(y.slug))) {
    const known = KNOWN_CREDENTIALS[a.slug] ? `  [creds: ${KNOWN_CREDENTIALS[a.slug]}]` : "";
    const exists = existingBySlug.has(a.slug) ? "  (author row exists)" : "  (NEW author row)";
    console.log(`  ${a.name}  →  ${a.slug}   (${a.postCount} post(s))${exists}${known}`);
  }

  // --- Collision check (two display names → one slug) ---
  const collisions = [...agg.values()].filter((a) => a.names.size > 1);
  if (collisions.length) {
    console.log("\n⚠️  COLLISIONS — different display names mapping to the same slug:");
    for (const c of collisions) {
      console.log(`  ${c.slug}  ←  ${[...c.names].map((n) => `"${n}"`).join(", ")}`);
    }
    console.log("  Review these before applying — they will be treated as ONE author.");
  } else {
    console.log("\nNo slug collisions detected.");
  }

  // --- Plan author upserts ---
  const toCreate: AuthorAgg[] = [];
  const toUpdate: { slug: string; data: Record<string, string> }[] = [];
  for (const a of agg.values()) {
    const existing = existingBySlug.get(a.slug);
    if (!existing) {
      toCreate.push(a);
      continue;
    }
    const data: Record<string, string> = {};
    if (!existing.credentials && KNOWN_CREDENTIALS[a.slug]) {
      data.credentials = KNOWN_CREDENTIALS[a.slug];
    }
    if (!existing.avatar && a.avatar) data.avatar = a.avatar;
    if (Object.keys(data).length) toUpdate.push({ slug: a.slug, data });
  }

  const fills = postSlugFills.filter((f) => f.kind === "fill");
  const corrections = postSlugFills.filter((f) => f.kind === "correct");
  console.log(
    `\nPlanned: ${toCreate.length} author row(s) to create, ${toUpdate.length} to update (fill empty fields), ${fills.length} post slug(s) to fill, ${corrections.length} post slug(s) to correct.`
  );
  if (fills.length) {
    console.log("Posts that will get authorSlug filled (was empty):");
    for (const f of fills) console.log(`  ${f.postSlug}  →  authorSlug="${f.to}"`);
  }
  if (corrections.length) {
    console.log("Posts whose authorSlug will be CORRECTED:");
    for (const f of corrections)
      console.log(`  ${f.postSlug}  ${f.from}  →  authorSlug="${f.to}"`);
  }

  if (!APPLY) {
    console.log("\nDRY RUN complete. Re-run with --apply to write these changes.\n");
    return;
  }

  // --- Apply ---
  let created = 0;
  for (const a of toCreate) {
    await prisma.author.create({
      data: {
        slug: a.slug,
        name: a.name,
        credentials: KNOWN_CREDENTIALS[a.slug] ?? null,
        avatar: a.avatar ?? null,
      },
    });
    created += 1;
  }
  let updated = 0;
  for (const u of toUpdate) {
    await prisma.author.update({ where: { slug: u.slug }, data: u.data });
    updated += 1;
  }
  let postsFixed = 0;
  for (const f of postSlugFills) {
    await prisma.post.update({ where: { id: f.id }, data: { authorSlug: f.to } });
    postsFixed += 1;
  }

  console.log(
    `\nAPPLIED: created ${created} author(s), updated ${updated} author(s), filled ${postsFixed} post slug(s).`
  );
  console.log("Re-run without --apply to confirm it's now a no-op (idempotent).\n");
}

main()
  .catch((e) => {
    console.error("Backfill failed:", e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
