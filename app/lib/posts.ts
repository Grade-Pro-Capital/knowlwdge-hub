import { prisma } from "@/app/lib/db";
import { calculateReadingTime } from "@/app/lib/readingTime";
import type { BlogPost } from "@/app/data/blogData";

/** Human-readable "x minutes/hours/days ago" string used by post cards. */
export function formatPublishedAt(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - new Date(date).getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  if (minutes < 60) return `${minutes} minutes`;
  if (hours < 24) return `${hours} hours`;
  if (days < 7) return `${days} days`;
  return new Date(date).toLocaleDateString();
}

type GetPublishedPostsOptions = {
  /** Only return posts flagged isProfessional. */
  professionalOnly?: boolean;
  /** Case-insensitive title/tag search. */
  q?: string;
};

/**
 * Fetch published posts from the DB and map them to the BlogPost shape used by
 * the homepage cards and search. Single source of truth for both the server-
 * rendered homepage and the /api/posts route.
 */
export async function getPublishedPosts(
  opts: GetPublishedPostsOptions = {}
): Promise<BlogPost[]> {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
      ...(opts.professionalOnly && { isProfessional: true }),
    },
    orderBy: { publishedAt: "desc" },
  });

  const q = opts.q?.trim().toLowerCase();
  const filtered = q
    ? posts.filter((p) => {
        const titleMatch = p.title.toLowerCase().includes(q);
        const tagMatch =
          Array.isArray(p.tags) && p.tags.some((t) => t.toLowerCase().includes(q));
        return titleMatch || tagMatch;
      })
    : posts;

  return filtered.map((p) => ({
    id: p.id,
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    readTime: p.readTime || calculateReadingTime(p.content),
    author: { name: p.authorName, avatar: p.authorAvatar ?? "" },
    publishedAt: formatPublishedAt(p.publishedAt),
    image: p.imageUrl ?? p.imageKey ?? "crypto",
    content: p.content ?? undefined,
    isProfessional: p.isProfessional,
    tags: p.tags ?? [],
  }));
}
