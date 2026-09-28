import { NextResponse } from "next/server";
import { requireAdmin } from "@/app/lib/admin";
import { prisma } from "@/app/lib/db";
import { sendBatch, type Mail } from "@/app/lib/email/client";
import { newPostEmail } from "@/app/lib/email/templates/newPostEmail";
import {
  ensureUnsubToken,
  unsubscribeUrl,
  listUnsubscribeHeaders,
} from "@/app/lib/email/tokens";

/**
 * POST { postId, force? } — send the "new post" newsletter to all active
 * subscribers. Admin-only. Guards against duplicate sends unless force=true.
 */
export async function POST(request: Request) {
  const auth = await requireAdmin(request);
  if (auth instanceof NextResponse) return auth;

  try {
    const { postId, force } = await request.json();
    if (!postId || typeof postId !== "string") {
      return NextResponse.json({ error: "postId is required" }, { status: 400 });
    }

    const post = await prisma.post.findUnique({ where: { id: postId } });
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    if (!post.published) {
      return NextResponse.json(
        { error: "Post is not published" },
        { status: 400 }
      );
    }
    if (post.newsletterSentAt && !force) {
      return NextResponse.json(
        {
          error: "Newsletter already sent for this post.",
          sentAt: post.newsletterSentAt,
        },
        { status: 409 }
      );
    }

    const subscribers = await prisma.newsletterSubscription.findMany({
      where: { unsubscribedAt: null },
    });
    if (subscribers.length === 0) {
      return NextResponse.json({
        recipientCount: 0,
        successCount: 0,
        failCount: 0,
        message: "No active subscribers to send to.",
      });
    }

    const sentBy = "username" in auth ? auth.username : null;
    const sendLog = await prisma.newsletterSend.create({
      data: {
        postId: post.id,
        postSlug: post.slug,
        subject: post.title,
        recipientCount: subscribers.length,
        status: "sending",
        sentBy,
      },
    });

    // Build one personalized message per subscriber (unique unsubscribe link).
    const messages: Mail[] = [];
    for (const sub of subscribers) {
      const token = await ensureUnsubToken(sub);
      const { subject, html, text } = newPostEmail({
        post: {
          slug: post.slug,
          title: post.title,
          excerpt: post.excerpt,
          category: post.category,
          authorName: post.authorName,
          readTime: post.readTime,
          imageUrl: post.imageUrl,
        },
        unsubscribeUrl: unsubscribeUrl(token),
      });
      messages.push({
        to: sub.email,
        subject,
        html,
        text,
        headers: listUnsubscribeHeaders(token),
      });
    }

    const { success, failed } = await sendBatch(messages);

    await prisma.newsletterSend.update({
      where: { id: sendLog.id },
      data: {
        successCount: success,
        failCount: failed,
        status: failed > 0 && success === 0 ? "failed" : "sent",
        completedAt: new Date(),
      },
    });
    await prisma.post.update({
      where: { id: post.id },
      data: { newsletterSentAt: new Date() },
    });

    return NextResponse.json({
      recipientCount: subscribers.length,
      successCount: success,
      failCount: failed,
    });
  } catch (e) {
    console.error("Newsletter send error:", e);
    return NextResponse.json(
      { error: "Failed to send newsletter" },
      { status: 500 }
    );
  }
}
