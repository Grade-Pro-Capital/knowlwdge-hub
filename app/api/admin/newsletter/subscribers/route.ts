import { NextResponse } from "next/server";
import { requireAdmin } from "@/app/lib/admin";
import { prisma } from "@/app/lib/db";

const PAGE_SIZE = 50;

function csvCell(v: string): string {
  const escaped = v.replace(/"/g, '""');
  return /[",\n]/.test(v) ? `"${escaped}"` : escaped;
}

/**
 * GET — paginated subscriber list + counts (admin-only).
 * `?page=N` paginates; `?export=csv` streams the full list as CSV.
 */
export async function GET(request: Request) {
  const auth = await requireAdmin(request);
  if (auth instanceof NextResponse) return auth;

  const { searchParams } = new URL(request.url);
  const isCsv = searchParams.get("export") === "csv";
  const page = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10) || 1);

  const [total, active, unsubscribed] = await Promise.all([
    prisma.newsletterSubscription.count(),
    prisma.newsletterSubscription.count({ where: { unsubscribedAt: null } }),
    prisma.newsletterSubscription.count({
      where: { unsubscribedAt: { not: null } },
    }),
  ]);

  const subscribers = await prisma.newsletterSubscription.findMany({
    orderBy: { subscribedAt: "desc" },
    skip: isCsv ? 0 : (page - 1) * PAGE_SIZE,
    take: isCsv ? 100000 : PAGE_SIZE,
    select: {
      id: true,
      email: true,
      source: true,
      subscribedAt: true,
      unsubscribedAt: true,
      verified: true,
    },
  });

  if (isCsv) {
    const rows: string[][] = [
      ["email", "status", "source", "subscribedAt", "unsubscribedAt"],
    ];
    for (const s of subscribers) {
      rows.push([
        s.email,
        s.unsubscribedAt ? "unsubscribed" : "active",
        s.source ?? "",
        s.subscribedAt.toISOString(),
        s.unsubscribedAt?.toISOString() ?? "",
      ]);
    }
    const csv = rows.map((r) => r.map(csvCell).join(",")).join("\n");
    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": 'attachment; filename="subscribers.csv"',
      },
    });
  }

  return NextResponse.json({
    total,
    active,
    unsubscribed,
    page,
    pageSize: PAGE_SIZE,
    subscribers,
  });
}
