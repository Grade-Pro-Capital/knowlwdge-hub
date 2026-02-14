import { NextResponse } from "next/server";
import { headers } from "next/headers";
import crypto from "node:crypto";
import { prisma } from "@/app/lib/db";

export async function POST(
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

  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for") ??
    headersList.get("x-real-ip") ??
    "anonymous";
  const ua = headersList.get("user-agent") ?? "";
  const ipHash = crypto
    .createHash("sha256")
    .update(ip)
    .digest("hex")
    .slice(0, 16);

  await prisma.postView.create({
    data: {
      postId: post.id,
      ipHash,
      userAgent: ua.slice(0, 500),
    },
  }).catch(() => {});

  return NextResponse.json({ ok: true });
}
