/**
 * SEO reports for /admin/reports, computed from the published articles on each visit:
 * - duplicate titles and descriptions, as the pages output them (articleMeta);
 * - internal links between articles: which articles no other article links to;
 * - internal links that lead to no article, and links that still use an old URL
 *   (they work, but through a redirect).
 */
import { articleMetaDescription, articleMetaTitle } from "./articleMeta";
import { postPath } from "./blogPaths";
import { prisma } from "./db";
import { resolveInternalLink } from "./internalLinks";
import { safeDateModified } from "./seo";
import { normalizeSource } from "./urlPaths";

export type ArticleRef = { id: string; title: string; slug: string };
export type DuplicateGroup = { value: string; articles: ArticleRef[] };
export type LinkRow = ArticleRef & {
  lastUpdated: string;
  linkedFrom: ArticleRef[];
  linksOut: number;
  /** Related articles that don't link here yet: good places to add a link to this one. */
  suggestedFrom: ArticleRef[];
};
export type LinkIssue = { from: ArticleRef; href: string; goesTo: string | null };

export type SeoReport = {
  articleCount: number;
  duplicateTitles: DuplicateGroup[];
  duplicateDescriptions: DuplicateGroup[];
  /** Every published article with the articles linking to it, fewest links first. */
  links: LinkRow[];
  /** Links to a /blogs/… article URL that doesn't exist (or isn't published). */
  brokenLinks: LinkIssue[];
  /** Links that reach an article only through a redirect (old domain or old URL). */
  oldUrlLinks: LinkIssue[];
};

const HREF = /<a\b[^>]*?\bhref\s*=\s*["']([^"']+)["']/gi;

// ---------- Related articles (for link suggestions) ----------

const STOP_WORDS = new Set(
  ("the and for with are from that this its your you our can will not but more most than into about how what why " +
    "which who when all any also has have had was were been their them they there these those such does each other " +
    "may per one two use using used get here just like only very over under out new make made best guide").split(" "),
);
const SUGGESTIONS = 3;
/** Below this similarity two articles aren't related enough to suggest a link. */
const MIN_SIMILARITY = 0.08;

function textWords(text: string): string[] {
  const plain = text.toLowerCase().replace(/<[^>]+>/g, " ").replace(/&[a-z#0-9]+;/g, " ");
  return (plain.match(/[a-z][a-z0-9]{2,}/g) ?? []).filter((w) => !STOP_WORDS.has(w));
}

type TopicSource = { title: string; category: string; focusKeyword: string | null; tags: string[]; excerpt: string; content: string | null };

/**
 * What each article is about, as weighted words (TF-IDF, unit length): the title, tags,
 * category and focus keyword count three times as much as the text. Words every article
 * uses carry no weight.
 */
function topicVectors(posts: TopicSource[]): Map<string, number>[] {
  const counts = posts.map((p) => {
    const c = new Map<string, number>();
    for (const w of textWords([p.title, p.category, p.focusKeyword ?? "", ...p.tags].join(" "))) c.set(w, (c.get(w) ?? 0) + 3);
    for (const w of textWords(`${p.excerpt} ${p.content ?? ""}`)) c.set(w, (c.get(w) ?? 0) + 1);
    return c;
  });
  const docFreq = new Map<string, number>();
  for (const c of counts) for (const w of c.keys()) docFreq.set(w, (docFreq.get(w) ?? 0) + 1);
  return counts.map((c) => {
    const v = new Map<string, number>();
    let norm = 0;
    for (const [w, tf] of c) {
      const x = (1 + Math.log(tf)) * Math.log(posts.length / (docFreq.get(w) ?? 1));
      if (x > 0) {
        v.set(w, x);
        norm += x * x;
      }
    }
    norm = Math.sqrt(norm) || 1;
    for (const [w, x] of v) v.set(w, x / norm);
    return v;
  });
}

function similarity(a: Map<string, number>, b: Map<string, number>): number {
  const [small, big] = a.size < b.size ? [a, b] : [b, a];
  let sum = 0;
  for (const [w, x] of small) sum += x * (big.get(w) ?? 0);
  return sum;
}

/** Group articles whose value (title or description) is the same, ignoring case and spacing. */
function duplicates(rows: (ArticleRef & { value: string })[]): DuplicateGroup[] {
  const groups = new Map<string, DuplicateGroup>();
  for (const { value, ...article } of rows) {
    const key = value.trim().toLowerCase().replace(/\s+/g, " ");
    if (!key) continue;
    const group = groups.get(key) ?? { value: value.trim(), articles: [] };
    group.articles.push(article);
    groups.set(key, group);
  }
  return [...groups.values()].filter((g) => g.articles.length > 1);
}

export async function buildSeoReport(): Promise<SeoReport> {
  const [posts, redirectRows] = await Promise.all([
    prisma.post.findMany({
      where: { published: true },
      orderBy: { publishedAt: "desc" },
      select: {
        id: true,
        slug: true,
        title: true,
        excerpt: true,
        metaTitle: true,
        metaDescription: true,
        category: true,
        focusKeyword: true,
        tags: true,
        content: true,
        contentFreshnessDate: true,
        updatedAt: true,
        publishedAt: true,
      },
    }),
    prisma.redirect.findMany({ select: { source: true, destination: true } }),
  ]);
  const redirects = new Map(redirectRows.map((r) => [r.source, r.destination]));
  const ref = (p: (typeof posts)[number]): ArticleRef => ({ id: p.id, title: p.title, slug: p.slug });
  const bySlugPath = new Map(posts.map((p) => [normalizeSource(postPath(p.slug)), p]));

  const linkedFrom = new Map<string, ArticleRef[]>(posts.map((p) => [p.id, []]));
  const linksOut = new Map<string, number>();
  const linksTo = new Map<string, Set<string>>();
  const brokenLinks: LinkIssue[] = [];
  const oldUrlLinks: LinkIssue[] = [];

  for (const post of posts) {
    const targets = new Set<string>();
    for (const [, href] of (post.content ?? "").matchAll(HREF)) {
      const resolved = resolveInternalLink(href, redirects);
      if (!resolved) continue;
      const target = bySlugPath.get(resolved.path);
      if (target) {
        if (target.id !== post.id) targets.add(target.id);
        if (resolved.viaRedirect) oldUrlLinks.push({ from: ref(post), href, goesTo: postPath(target.slug) });
      } else if (/^\/blogs\/[^/]+$/.test(resolved.path)) {
        brokenLinks.push({ from: ref(post), href, goesTo: null });
      }
    }
    linksOut.set(post.id, targets.size);
    linksTo.set(post.id, targets);
    for (const id of targets) linkedFrom.get(id)?.push(ref(post));
  }

  // For each article, the most related articles that don't link to it yet.
  const vectors = topicVectors(posts);
  const suggestedFrom = (i: number): ArticleRef[] =>
    posts
      .map((source, j) => ({ source, score: j === i ? 0 : similarity(vectors[i], vectors[j]) }))
      .filter(({ source, score }) => score >= MIN_SIMILARITY && !linksTo.get(source.id)?.has(posts[i].id))
      .sort((a, b) => b.score - a.score)
      .slice(0, SUGGESTIONS)
      .map(({ source }) => ref(source));

  const links: LinkRow[] = posts
    .map((p, i) => ({
      ...ref(p),
      lastUpdated: safeDateModified(p.contentFreshnessDate, p.updatedAt, p.publishedAt),
      linkedFrom: linkedFrom.get(p.id) ?? [],
      linksOut: linksOut.get(p.id) ?? 0,
      suggestedFrom: suggestedFrom(i),
    }))
    .sort((a, b) => a.linkedFrom.length - b.linkedFrom.length || a.title.localeCompare(b.title));

  return {
    articleCount: posts.length,
    duplicateTitles: duplicates(posts.map((p) => ({ ...ref(p), value: articleMetaTitle(p) }))),
    duplicateDescriptions: duplicates(posts.map((p) => ({ ...ref(p), value: articleMetaDescription(p) }))),
    links,
    brokenLinks,
    oldUrlLinks,
  };
}
