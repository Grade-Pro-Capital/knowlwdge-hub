import { NextResponse } from "next/server";
import { requireAdmin } from "@/app/lib/admin";
import { prisma } from "@/app/lib/db";
import { newPostEmail } from "@/app/lib/email/templates/newPostEmail";
import { unsubscribeUrl } from "@/app/lib/email/tokens";

/**
 * GET ?postId= — render the new-post email HTML for preview (admin-only).
 * Uses a dummy unsubscribe token since it's not delivered to anyone.
 */
export async function GET(request: Request) {
  const auth = await requireAdmin(request);
  if (auth instanceof NextResponse) return auth;

  const { searchParams } = new URL(request.url);
  const postId = searchParams.get("postId");
  if (!postId) {
    return NextResponse.json({ error: "postId is required" }, { status: 400 });
  }

  const post = await prisma.post.findUnique({ where: { id: postId } });
  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  const { html } = newPostEmail({
    post: {
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      category: post.category,
      authorName: post.authorName,
      readTime: post.readTime,
      imageUrl: post.imageUrl,
    },
    unsubscribeUrl: unsubscribeUrl("preview-token"),
  });

  return new NextResponse(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
