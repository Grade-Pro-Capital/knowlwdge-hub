/**
 * Clean bad author avatar values — SAFE, idempotent, dry-run by default.
 *
 *   Preview (no writes):   node scripts/clean-avatar-urls.mjs
 *   Apply changes:         node scripts/clean-avatar-urls.mjs --apply
 *
 * Context: the "avatar" field was meant to hold an uploaded image URL, but a
 * profile/LinkedIn link was pasted into some records by mistake. Those non-image
 * URLs render nothing useful and are now cleared to null so the default profile
 * pic shows instead. This ONLY touches values that are NOT a real image URL —
 * genuine uploaded image URLs are left untouched.
 *
 * Scope:
 *   - Author.avatar  (single source of truth for the profile pic)
 *   - Post.authorAvatar (denormalized copy on each post)
 */
import { config } from "dotenv";
import { PrismaClient } from "@prisma/client";

config({ path: ".env.local" });
config();

const prisma = new PrismaClient();
const APPLY = process.argv.includes("--apply");

// Mirrors resolveAuthorAvatar() in app/lib/images.ts: a value is a real avatar
// only when it's an http(s) URL pointing at an image file. Everything else
// (LinkedIn/profile links, bare keys, junk) is considered bad and cleared.
const isImageUrl = (u) =>
  !!u && /^https?:\/\//i.test(u.trim()) &&
  /\.(png|jpe?g|webp|gif|avif|svg)(\?|#|$)/i.test(u.trim());

async function main() {
  console.log(
    `\n=== Clean avatar URLs (${APPLY ? "APPLY — will write" : "DRY RUN — no writes"}) ===`
  );
  try {
    const host = new URL(process.env.DATABASE_URL ?? "").host || "(unknown)";
    console.log(`DB host: ${host}\n`);
  } catch {
    console.log("DB host: (could not parse DATABASE_URL)\n");
  }

  const authors = await prisma.author.findMany({
    select: { id: true, slug: true, name: true, avatar: true },
  });
  const badAuthors = authors.filter((a) => a.avatar?.trim() && !isImageUrl(a.avatar));

  const posts = await prisma.post.findMany({
    select: { id: true, slug: true, authorName: true, authorAvatar: true },
  });
  const badPosts = posts.filter((p) => p.authorAvatar?.trim() && !isImageUrl(p.authorAvatar));

  console.log(`Author rows to clear (${badAuthors.length}):`);
  for (const a of badAuthors) console.log(`  ${a.name} [${a.slug}]  ✗  ${a.avatar}`);
  console.log(`\nPosts to clear authorAvatar (${badPosts.length}):`);
  for (const p of badPosts) console.log(`  ${p.slug}  (${p.authorName})  ✗  ${p.authorAvatar}`);

  if (!badAuthors.length && !badPosts.length) {
    console.log("\nNothing to clean — all avatar values are already valid images or empty.\n");
    return;
  }

  if (!APPLY) {
    console.log("\nDRY RUN complete. Re-run with --apply to clear these to null.\n");
    return;
  }

  let clearedAuthors = 0;
  for (const a of badAuthors) {
    await prisma.author.update({ where: { id: a.id }, data: { avatar: null } });
    clearedAuthors += 1;
  }
  let clearedPosts = 0;
  for (const p of badPosts) {
    await prisma.post.update({ where: { id: p.id }, data: { authorAvatar: null } });
    clearedPosts += 1;
  }
  console.log(
    `\nAPPLIED: cleared ${clearedAuthors} author avatar(s), ${clearedPosts} post authorAvatar(s).`
  );
  console.log("Re-run without --apply to confirm it's now a no-op (idempotent).\n");
}

main()
  .catch((e) => { console.error("Cleanup failed:", e); process.exitCode = 1; })
  .finally(() => prisma.$disconnect());
