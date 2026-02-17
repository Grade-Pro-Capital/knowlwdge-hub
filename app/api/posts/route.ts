import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/db";
import { calculateReadingTime } from "@/app/lib/readingTime";

type PostRow = Awaited<ReturnType<typeof prisma.post.findMany>>[number];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const professionalOnly = searchParams.get("professional") === "true";
  const q = searchParams.get("q")?.trim().toLowerCase();

  const posts = await prisma.post.findMany({
    where: {
      published: true,
      ...(professionalOnly && { isProfessional: true }),
    },
    orderBy: { publishedAt: "desc" },
  });

  let filtered = posts;
  if (q) {
    filtered = posts.filter((p) => {
      const titleMatch = p.title.toLowerCase().includes(q);
      const tagMatch = Array.isArray(p.tags) && p.tags.some((t: string) => t.toLowerCase().includes(q));
      return titleMatch || tagMatch;
    });
  }

  const formatted = filtered.map((p: PostRow) => ({
    id: p.id,
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    readTime: p.readTime || calculateReadingTime(p.content),
    author: { name: p.authorName, avatar: p.authorAvatar ?? "" },
    publishedAt: formatPublishedAt(p.publishedAt),
    image: p.imageUrl ?? p.imageKey ?? "crypto",
    content: p.content,
    isProfessional: p.isProfessional,
    tags: p.tags ?? [],
  }));

  return NextResponse.json(formatted);
}

function formatPublishedAt(date: Date): string {
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
