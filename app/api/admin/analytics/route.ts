import { NextResponse } from "next/server";
import { requireAdmin } from "@/app/lib/admin";
import { prisma } from "@/app/lib/db";

export async function GET(request: Request) {
  const auth = await requireAdmin(request);
  if (auth instanceof NextResponse) return auth;

  const { searchParams } = new URL(request.url);
  const period = searchParams.get("period") ?? "7"; // days

  const days = Math.min(365, Math.max(1, parseInt(period, 10) || 7));
  const since = new Date();
  since.setDate(since.getDate() - days);

  const [totalViews, viewsByDay, topPosts, totalPosts, publishedPosts] =
    await Promise.all([
      prisma.postView.count({ where: { viewedAt: { gte: since } } }),
      prisma.postView.groupBy({
        by: ["viewedAt"],
        where: { viewedAt: { gte: since } },
        _count: true,
      }),
      prisma.post.findMany({
        where: { published: true },
        include: { _count: { select: { views: true } } },
        orderBy: { views: { _count: "desc" } },
        take: 10,
      }),
      prisma.post.count(),
      prisma.post.count({ where: { published: true } }),
    ]);

  // Group views by date (day) for chart
  const viewsByDate: Record<string, number> = {};
  for (let i = 0; i < days; i++) {
    const d = new Date(since);
    d.setDate(d.getDate() + i);
    const key = d.toISOString().slice(0, 10);
    viewsByDate[key] = 0;
  }
  for (const v of viewsByDay) {
    const key = new Date(v.viewedAt).toISOString().slice(0, 10);
    if (viewsByDate[key] !== undefined) viewsByDate[key] += v._count;
  }

  const chartData = Object.entries(viewsByDate)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, count]) => ({ date, views: count }));

  return NextResponse.json({
    totalViews,
    totalPosts,
    publishedPosts,
    chartData,
    topPosts: topPosts.map((p) => ({
      id: p.id,
      slug: p.slug,
      title: p.title,
      viewCount: p._count.views,
    })),
  });
}
