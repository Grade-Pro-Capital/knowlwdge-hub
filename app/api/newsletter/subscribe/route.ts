import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/db";
import { generateUnsubToken, unsubscribeUrl } from "@/app/lib/email/tokens";
import { welcomeEmail } from "@/app/lib/email/templates/welcomeEmail";
import { sendEmail } from "@/app/lib/email/client";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Send the welcome email and record welcomeEmailSentAt. Never throws — a mail
 * failure must not break the subscription response.
 */
async function sendWelcome(subId: string, email: string, token: string) {
  try {
    const { subject, html, text } = welcomeEmail({
      unsubscribeUrl: unsubscribeUrl(token),
    });
    const res = await sendEmail({ to: email, subject, html, text });
    if (!res.skipped) {
      await prisma.newsletterSubscription.update({
        where: { id: subId },
        data: { welcomeEmailSentAt: new Date() },
      });
    }
  } catch (e) {
    console.error("Welcome email failed:", e);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, source } = body;

    const trimmed = typeof email === "string" ? email.trim().toLowerCase() : "";
    if (!trimmed) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }
    if (!EMAIL_REGEX.test(trimmed)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    const existing = await prisma.newsletterSubscription.findUnique({
      where: { email: trimmed },
    });

    if (existing) {
      if (existing.unsubscribedAt) {
        const token = existing.unsubscribeToken ?? generateUnsubToken();
        const updated = await prisma.newsletterSubscription.update({
          where: { email: trimmed },
          data: {
            unsubscribedAt: null,
            source: source || existing.source,
            verified: true,
            unsubscribeToken: token,
            updatedAt: new Date(),
          },
        });
        await sendWelcome(updated.id, trimmed, token);
        return NextResponse.json({
          success: true,
          message: "You've been resubscribed successfully.",
        });
      }
      return NextResponse.json(
        { error: "This email is already subscribed." },
        { status: 409 }
      );
    }

    const token = generateUnsubToken();
    const created = await prisma.newsletterSubscription.create({
      data: {
        email: trimmed,
        name: typeof name === "string" ? name.trim() || null : null,
        source: typeof source === "string" ? source.trim() || null : null,
        verified: true,
        unsubscribeToken: token,
      },
    });
    await sendWelcome(created.id, trimmed, token);

    return NextResponse.json({
      success: true,
      message: "Thank you for subscribing!",
    });
  } catch (e) {
    console.error("Newsletter subscribe error:", e);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
