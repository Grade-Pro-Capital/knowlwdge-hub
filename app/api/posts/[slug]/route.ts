import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/db";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = await prisma.post.findFirst({
    where: { slug, published: true },
  });

  if (!post) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    readTime: post.readTime,
    author: { name: post.authorName, avatar: post.authorAvatar ?? "" },
    publishedAt: formatPublishedAt(post.publishedAt),
    image: post.imageUrl ?? post.imageKey ?? "crypto",
    content: post.content,
    isProfessional: post.isProfessional,
  });
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
