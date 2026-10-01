import { NextResponse } from "next/server";
import { requireAdmin } from "@/app/lib/admin";
import { prisma } from "@/app/lib/db";
import { listNotFound, PRUNE_AFTER_DAYS, suggestDestination } from "@/app/lib/notFoundLog";

/** The 404 monitor list, most-hit first, each with a suggested redirect target. */
export async function GET(request: Request) {
  const auth = await requireAdmin(request);
  if (auth instanceof NextResponse) return auth;

  const [rows, posts] = await Promise.all([
    listNotFound(),
    prisma.post.findMany({ where: { published: true }, select: { slug: true } }),
  ]);
  const slugs = posts.map((p) => p.slug);
  return NextResponse.json({
    pruneAfterDays: PRUNE_AFTER_DAYS,
    rows: rows.map((row) => ({ ...row, suggestion: suggestDestination(row.path, slugs) })),
  });
}
