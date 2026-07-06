import { prisma } from "@/app/lib/db";
import { slugify } from "@/app/lib/seo";

export type AuthorOption = {
  slug: string;
  name: string;
  credentials: string;
  avatar: string;
};

/**
 * Authors are a linked entity, keyed by a lowercase `slug` derived from the
 * (proper-case) display name. The Author row is the single source of truth for
 * credentials, so editing them once updates every post by that author.
 *
 * ensureAuthor() is called when a post is created/updated (mirrors
 * ensureCategory). It creates the author if new, and otherwise fills only empty
 * fields / applies an explicit credential edit — it never blanks or clobbers an
 * existing name, so seeded/known author data stays safe.
 */
export async function ensureAuthor(input: {
  name: string;
  slug?: string | null;
  avatar?: string | null;
  credentials?: string | null;
}): Promise<void> {
  const name = input.name?.trim();
  if (!name) return;
  const slug = (input.slug?.trim() || slugify(name)).toLowerCase();
  if (!slug) return;

  const existing = await prisma.author.findUnique({ where: { slug } });

  if (!existing) {
    await prisma.author.create({
      data: {
        slug,
        name,
        credentials: input.credentials?.trim() || null,
        avatar: input.avatar?.trim() || null,
      },
    });
    return;
  }

  // Existing author: never touch the stored (proper-case) name. Apply an
  // explicit, non-empty credential or avatar edit (both single-source, so the
  // change propagates to every post by this author). We never blank a field —
  // an empty incoming value leaves the existing one untouched.
  const data: { credentials?: string; avatar?: string } = {};
  const cred = input.credentials?.trim();
  if (cred && cred !== existing.credentials) data.credentials = cred;
  const avatar = input.avatar?.trim();
  if (avatar && avatar !== existing.avatar) data.avatar = avatar;

  if (Object.keys(data).length > 0) {
    await prisma.author.update({ where: { slug }, data });
  }
}

/**
 * Full list of authors for the editor combobox: every Author row plus any author
 * found on a post that has no row yet, de-duplicated by slug and sorted by name.
 */
export async function getAllAuthors(): Promise<AuthorOption[]> {
  const [rows, postAuthors] = await Promise.all([
    prisma.author.findMany({
      select: { slug: true, name: true, credentials: true, avatar: true },
    }),
    prisma.post.findMany({
      select: { authorName: true, authorSlug: true, authorAvatar: true },
      distinct: ["authorName"],
    }),
  ]);

  const bySlug = new Map<string, AuthorOption>();
  for (const r of rows) {
    bySlug.set(r.slug, {
      slug: r.slug,
      name: r.name,
      credentials: r.credentials ?? "",
      avatar: r.avatar ?? "",
    });
  }
  for (const p of postAuthors) {
    const name = p.authorName?.trim();
    if (!name) continue;
    const slug = (p.authorSlug?.trim() || slugify(name)).toLowerCase();
    if (!bySlug.has(slug)) {
      bySlug.set(slug, { slug, name, credentials: "", avatar: p.authorAvatar ?? "" });
    }
  }

  return [...bySlug.values()].sort((a, b) => a.name.localeCompare(b.name));
}
