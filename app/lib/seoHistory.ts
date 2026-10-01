/**
 * SEO version history: every save that changes an article's SEO fields is recorded
 * (who, when, which fields), and any version can be restored. The slug is not part of
 * it: changing a URL creates redirects, so it stays a deliberate edit in the editor.
 */
import type { Prisma } from "@prisma/client";
import { prisma } from "./db";
import { changedFields, SEO_FIELDS, type SeoFields } from "./seoFields";

export { pickSeo, type SeoFields } from "./seoFields";

const KEEP_VERSIONS = 30;

/**
 * Record a save. `before` is null for a new article. Nothing is recorded when no SEO
 * field changed. The first change to an article that has no history yet also stores
 * the earlier values, so they can be restored too. Never throws.
 */
export async function recordSeoVersion(
  postId: string,
  before: SeoFields | null,
  after: SeoFields,
  savedBy: string | null,
  note: string,
): Promise<void> {
  try {
    const changed = before ? changedFields(before, after) : [...SEO_FIELDS].filter((f) => after[f] !== null);
    if (before && changed.length === 0) return;
    if (before && (await prisma.postSeoVersion.count({ where: { postId } })) === 0) {
      await prisma.postSeoVersion.create({
        data: { postId, fields: before as Prisma.InputJsonObject, changed: [], note: "Before history started" },
      });
    }
    await prisma.postSeoVersion.create({
      data: { postId, fields: after as Prisma.InputJsonObject, changed, note, savedBy },
    });
    const old = await prisma.postSeoVersion.findMany({
      where: { postId },
      orderBy: { createdAt: "desc" },
      skip: KEEP_VERSIONS,
      select: { id: true },
    });
    if (old.length) await prisma.postSeoVersion.deleteMany({ where: { id: { in: old.map((v) => v.id) } } });
  } catch (e) {
    console.error("SEO history: could not record a version", postId, e);
  }
}
