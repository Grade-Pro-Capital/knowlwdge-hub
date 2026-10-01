import { NextResponse } from "next/server";
import { requireAdmin } from "@/app/lib/admin";
import { prisma } from "@/app/lib/db";
import { pickSeo, recordSeoVersion, type SeoFields } from "@/app/lib/seoHistory";

/** An article's SEO history, newest first. */
export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const auth = await requireAdmin(request);
  if (auth instanceof NextResponse) return auth;

  const { id } = await params;
  const post = await prisma.post.findUnique({ where: { id } });
  if (!post) return NextResponse.json({ error: "Post not found" }, { status: 404 });
  const versions = await prisma.postSeoVersion.findMany({ where: { postId: id }, orderBy: { createdAt: "desc" } });
  return NextResponse.json({
    post: { id: post.id, title: post.title, slug: post.slug },
    current: pickSeo(post),
    versions,
  });
}

/** Restore a version: its SEO fields replace the article's (recorded as a new version). */
export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const auth = await requireAdmin(request);
  if (auth instanceof NextResponse) return auth;

  const { id } = await params;
  let versionId: string;
  try {
    const body = await request.json();
    if (typeof body.versionId !== "string") throw new Error();
    versionId = body.versionId;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const [post, version] = await Promise.all([
    prisma.post.findUnique({ where: { id } }),
    prisma.postSeoVersion.findFirst({ where: { id: versionId, postId: id } }),
  ]);
  if (!post || !version) return NextResponse.json({ error: "Version not found" }, { status: 404 });

  const fields: SeoFields = pickSeo(version.fields as Partial<SeoFields>);
  await prisma.post.update({ where: { id }, data: fields });
  const when = version.createdAt.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });
  await recordSeoVersion(id, pickSeo(post), fields, auth.username, `Restored the version from ${when}`);
  return NextResponse.json({ success: true });
}
