"use client";

import { useEffect, useState } from "react";

type Analytics = {
  totalViews: number;
  totalPosts: number;
  publishedPosts: number;
  chartData: { date: string; views: number }[];
  topPosts: { id: string; slug: string; title: string; viewCount: number }[];
};

export default function AdminAnalyticsPage() {
  const [data, setData] = useState<Analytics | null>(null);
  const [period, setPeriod] = useState("7");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/admin/analytics?period=${period}`)
      .then((res) => res.json())
      .then(setData)
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, [period]);

  if (loading && !data) {
    return <p className="text-[rgba(255,255,255,0.6)]">Loading analytics…</p>;
  }

  const analytics = data ?? {
    totalViews: 0,
    totalPosts: 0,
    publishedPosts: 0,
    chartData: [],
    topPosts: [],
  };

  const maxViews = Math.max(
    ...analytics.chartData.map((d) => d.views),
    1
  );

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Analytics</h1>
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-3 py-2 text-white focus:border-[#FDBE35] focus:outline-none"
        >
          <option value="7">Last 7 days</option>
          <option value="14">Last 14 days</option>
          <option value="30">Last 30 days</option>
          <option value="90">Last 90 days</option>
        </select>
      </div>

      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] p-6">
          <p className="text-sm text-[rgba(255,255,255,0.6)]">Total views</p>
          <p className="mt-1 text-3xl font-semibold text-[#FDBE35]">
            {analytics.totalViews.toLocaleString()}
          </p>
        </div>
        <div className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] p-6">
          <p className="text-sm text-[rgba(255,255,255,0.6)]">Total posts</p>
          <p className="mt-1 text-3xl font-semibold">{analytics.totalPosts}</p>
        </div>
        <div className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] p-6">
          <p className="text-sm text-[rgba(255,255,255,0.6)]">Published</p>
          <p className="mt-1 text-3xl font-semibold">
            {analytics.publishedPosts}
          </p>
        </div>
      </div>

      {analytics.chartData.length > 0 && (
        <div className="mb-8 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] p-6">
          <h2 className="mb-4 font-medium">Views over time</h2>
          <div className="flex h-48 items-end gap-1">
            {analytics.chartData.map((d) => (
              <div
                key={d.date}
                className="flex-1 rounded-t bg-[#FDBE35]/60 transition-all hover:bg-[#FDBE35]"
                style={{
                  height: `${Math.max(4, (d.views / maxViews) * 100)}%`,
                }}
                title={`${d.date}: ${d.views} views`}
              />
            ))}
          </div>
          <div className="mt-2 flex justify-between text-xs text-[rgba(255,255,255,0.5)]">
            <span>{analytics.chartData[0]?.date}</span>
            <span>
              {analytics.chartData[analytics.chartData.length - 1]?.date}
            </span>
          </div>
        </div>
      )}

      <div className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] p-6">
        <h2 className="mb-4 font-medium">Top posts by views</h2>
        {analytics.topPosts.length === 0 ? (
          <p className="text-sm text-[rgba(255,255,255,0.5)]">
            No view data yet.
          </p>
        ) : (
          <ul className="space-y-3">
            {analytics.topPosts.map((p, i) => (
              <li
                key={p.id}
                className="flex items-center justify-between border-b border-[rgba(255,255,255,0.05)] pb-2 last:border-0"
              >
                <span className="text-[rgba(255,255,255,0.5)]">#{i + 1}</span>
                <span className="flex-1 truncate px-2">{p.title}</span>
                <span className="text-[#FDBE35]">{p.viewCount} views</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
