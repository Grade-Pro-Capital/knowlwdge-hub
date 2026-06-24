import { prisma } from "@/app/lib/db";
import { slugify } from "@/app/lib/seo";

/**
 * Category names are stored two ways that must stay in sync:
 *  - Post.category — the free-text category typed on each post (source of truth
 *    for which categories actually have content).
 *  - Category model — one row per category (keyed by slug) that also holds the
 *    optional per-category SEO title/description used by /category/[slug].
 *
 * Authors can type a brand-new category in the editor. ensureCategory() makes
 * sure that new value also gets a Category row so it shows up in the editor
 * dropdown next time and has somewhere to attach SEO metadata.
 */
export async function ensureCategory(name: string): Promise<void> {
  const trimmed = name?.trim();
  if (!trimmed) return;
  const slug = slugify(trimmed);
  if (!slug) return;

  // Upsert by slug: create the row if this category is new, otherwise leave the
  // existing row (and its SEO fields) untouched.
  await prisma.category.upsert({
    where: { slug },
    update: { name: trimmed },
    create: { slug, name: trimmed },
  });
}

/**
 * The full list of category names for the editor dropdown: every Category row
 * plus any category found on a post that doesn't yet have a row, de-duplicated
 * (case-insensitive) and sorted alphabetically.
 */
export async function getAllCategoryNames(): Promise<string[]> {
  const [categoryRows, postCategories] = await Promise.all([
    prisma.category.findMany({ select: { name: true } }),
    prisma.post.findMany({ select: { category: true }, distinct: ["category"] }),
  ]);

  const byLower = new Map<string, string>();
  for (const name of [
    ...categoryRows.map((c) => c.name),
    ...postCategories.map((p) => p.category),
  ]) {
    const trimmed = name?.trim();
    if (!trimmed) continue;
    const key = trimmed.toLowerCase();
    if (!byLower.has(key)) byLower.set(key, trimmed);
  }

  return [...byLower.values()].sort((a, b) => a.localeCompare(b));
}
