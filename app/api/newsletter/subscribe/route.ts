import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/db";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, source } = body;

    const trimmed = typeof email === "string" ? email.trim().toLowerCase() : "";
    if (!trimmed) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
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
        await prisma.newsletterSubscription.update({
          where: { email: trimmed },
          data: {
            unsubscribedAt: null,
            source: source || existing.source,
            updatedAt: new Date(),
          },
        });
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

    await prisma.newsletterSubscription.create({
      data: {
        email: trimmed,
        name: typeof name === "string" ? name.trim() || null : null,
        source: typeof source === "string" ? source.trim() || null : null,
      },
    });

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
