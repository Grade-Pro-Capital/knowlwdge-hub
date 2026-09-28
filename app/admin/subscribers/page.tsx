"use client";

import { useEffect, useState } from "react";
import { Download, Mail } from "lucide-react";

type Subscriber = {
  id: string;
  email: string;
  source: string | null;
  subscribedAt: string;
  unsubscribedAt: string | null;
  verified: boolean;
};

type Data = {
  total: number;
  active: number;
  unsubscribed: number;
  page: number;
  pageSize: number;
  subscribers: Subscriber[];
};

export default function AdminSubscribersPage() {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/admin/newsletter/subscribers?page=${page}`)
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, [page]);

  const stats = [
    { label: "Active", value: data?.active ?? 0, color: "text-green-400" },
    { label: "Unsubscribed", value: data?.unsubscribed ?? 0, color: "text-[rgba(255,255,255,0.6)]" },
    { label: "Total", value: data?.total ?? 0, color: "text-[#FDBE35]" },
  ];

  const totalPages = data ? Math.max(1, Math.ceil(data.total / data.pageSize)) : 1;

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="flex items-center gap-2 text-2xl font-semibold">
          <Mail className="h-6 w-6 text-[#FDBE35]" /> Subscribers
        </h1>
        <a
          href="/api/admin/newsletter/subscribers?export=csv"
          className="flex items-center gap-2 rounded-lg border border-[rgba(255,255,255,0.15)] px-4 py-2 text-sm text-white hover:bg-[rgba(255,255,255,0.06)]"
        >
          <Download className="h-4 w-4" /> Export CSV
        </a>
      </div>

      <div className="mb-8 grid grid-cols-3 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] p-5"
          >
            <div className={`text-3xl font-semibold ${s.color}`}>{s.value}</div>
            <div className="mt-1 text-sm text-[rgba(255,255,255,0.6)]">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {loading ? (
        <p className="text-[rgba(255,255,255,0.6)]">Loading subscribers…</p>
      ) : !data || data.subscribers.length === 0 ? (
        <p className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] p-8 text-center text-[rgba(255,255,255,0.6)]">
          No subscribers yet.
        </p>
      ) : (
        <>
          <div className="overflow-hidden rounded-xl border border-[rgba(255,255,255,0.1)]">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] text-left text-sm text-[rgba(255,255,255,0.7)]">
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Source</th>
                  <th className="px-4 py-3">Subscribed</th>
                </tr>
              </thead>
              <tbody>
                {data.subscribers.map((s) => (
                  <tr
                    key={s.id}
                    className="border-b border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.02)]"
                  >
                    <td className="px-4 py-3">{s.email}</td>
                    <td className="px-4 py-3">
                      {s.unsubscribedAt ? (
                        <span className="rounded-full bg-[rgba(255,255,255,0.08)] px-2 py-0.5 text-xs text-[rgba(255,255,255,0.6)]">
                          Unsubscribed
                        </span>
                      ) : (
                        <span className="rounded-full bg-green-500/20 px-2 py-0.5 text-xs text-green-400">
                          Active
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm text-[rgba(255,255,255,0.7)]">
                      {s.source ?? "—"}
                    </td>
                    <td className="px-4 py-3 text-sm text-[rgba(255,255,255,0.7)]">
                      {new Date(s.subscribedAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {totalPages > 1 && (
            <div className="mt-6 flex items-center justify-center gap-3 text-sm">
              <button
                type="button"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1}
                className="rounded-lg border border-[rgba(255,255,255,0.15)] px-3 py-1.5 disabled:opacity-40"
              >
                Previous
              </button>
              <span className="text-[rgba(255,255,255,0.6)]">
                Page {page} of {totalPages}
              </span>
              <button
                type="button"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page >= totalPages}
                className="rounded-lg border border-[rgba(255,255,255,0.15)] px-3 py-1.5 disabled:opacity-40"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
