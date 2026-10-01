"use client";

import { useEffect, useMemo, useState } from "react";
import { EyeOff, ExternalLink, RotateCcw, Search, Trash2 } from "lucide-react";

type Row = {
  id: string;
  path: string;
  hits: number;
  botHits: number;
  referrers: string[];
  ignored: boolean;
  firstSeenAt: string;
  lastSeenAt: string;
  suggestion: string | null;
};

const inputClass =
  "w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-3 py-2 text-sm text-white focus:border-[#FDBE35] focus:outline-none";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

/** "grade.capital/blogs/x" for display; the full URL stays in the link. */
function shortUrl(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, "");
}

export default function AdminNotFoundPage() {
  const [rows, setRows] = useState<Row[]>([]);
  const [pruneAfterDays, setPruneAfterDays] = useState(90);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [showIgnored, setShowIgnored] = useState(false);
  // Redirect target typed per row (starts with the suggestion, if any).
  const [targets, setTargets] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [busyId, setBusyId] = useState<string | null>(null);
  const [done, setDone] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/not-found")
      .then((res) => res.json())
      .then((data) => {
        const list: Row[] = Array.isArray(data?.rows) ? data.rows : [];
        setRows(list);
        if (typeof data?.pruneAfterDays === "number") setPruneAfterDays(data.pruneAfterDays);
        setTargets(Object.fromEntries(list.map((r) => [r.id, r.suggestion ?? ""])));
      })
      .catch(() => setRows([]))
      .finally(() => setLoading(false));
  }, []);

  const ignoredCount = rows.filter((r) => r.ignored).length;
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rows.filter(
      (r) =>
        r.ignored === showIgnored &&
        (!q || [r.path, ...r.referrers].some((field) => field.toLowerCase().includes(q))),
    );
  }, [rows, query, showIgnored]);

  function setRowError(id: string, message: string | null) {
    setErrors((prev) => {
      const next = { ...prev };
      if (message) next[id] = message;
      else delete next[id];
      return next;
    });
  }

  async function handleRedirect(row: Row) {
    const destination = (targets[row.id] ?? "").trim();
    if (!destination) {
      setRowError(row.id, "Enter where this URL should go.");
      return;
    }
    setBusyId(row.id);
    setRowError(row.id, null);
    try {
      const res = await fetch("/api/admin/redirects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: row.path, destination, permanent: true, note: "From the 404 monitor" }),
      });
      const data = await res.json();
      if (!res.ok) {
        setRowError(row.id, data.error ?? "Could not add the redirect");
        return;
      }
      // The redirect removes the URL from the 404 list on the server too.
      setRows((prev) => prev.filter((r) => r.id !== row.id));
      setDone(`${row.path} now redirects to ${data.destination}.`);
    } catch {
      setRowError(row.id, "Could not add the redirect");
    } finally {
      setBusyId(null);
    }
  }

  async function handleIgnore(row: Row, ignored: boolean) {
    setBusyId(row.id);
    try {
      const res = await fetch(`/api/admin/not-found/${row.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ignored }),
      });
      if (res.ok) setRows((prev) => prev.map((r) => (r.id === row.id ? { ...r, ignored } : r)));
      else setRowError(row.id, (await res.json()).error ?? "Could not update");
    } finally {
      setBusyId(null);
    }
  }

  async function handleDelete(row: Row) {
    setBusyId(row.id);
    try {
      const res = await fetch(`/api/admin/not-found/${row.id}`, { method: "DELETE" });
      if (res.ok) setRows((prev) => prev.filter((r) => r.id !== row.id));
      else setRowError(row.id, (await res.json()).error ?? "Could not remove");
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div>
      <div className="mb-2">
        <h1 className="text-2xl font-semibold">404s (not found)</h1>
      </div>
      <p className="mb-3 max-w-3xl text-sm text-[rgba(255,255,255,0.6)]">
        Every URL on the site that answered &quot;not found&quot;, most visited first: old links,
        typos, deleted or renamed articles. If a page replaces it, add a redirect and visitors and
        Google are sent there from now on.
      </p>
      <p className="mb-8 max-w-3xl text-sm text-[rgba(255,255,255,0.6)]">
        Only redirect to a page that really replaces the old one. Sending unrelated URLs to the
        home page or the blog home counts as a &quot;soft 404&quot; for Google. If nothing replaces
        it, click <strong>Leave as 404</strong>. URLs with no visit for {pruneAfterDays} days are
        removed automatically.
      </p>

      {done && (
        <p className="mb-6 rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-300">
          {done}
        </p>
      )}

      <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
        <div className="relative w-full max-w-sm">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[rgba(255,255,255,0.4)]" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search URLs"
            aria-label="Search URLs"
            className={`${inputClass} pl-9`}
          />
        </div>
        <div className="flex items-center gap-4 text-sm">
          <button
            type="button"
            onClick={() => setShowIgnored((v) => !v)}
            className="rounded-lg border border-[rgba(255,255,255,0.2)] px-3 py-1.5 text-[rgba(255,255,255,0.8)] hover:bg-[rgba(255,255,255,0.05)]"
          >
            {showIgnored ? "Back to the list" : `Left as 404 (${ignoredCount})`}
          </button>
          <span className="text-[rgba(255,255,255,0.5)]">
            {visible.length} {visible.length === 1 ? "URL" : "URLs"}
          </span>
        </div>
      </div>

      {loading ? (
        <p className="text-[rgba(255,255,255,0.6)]">Loading…</p>
      ) : visible.length === 0 ? (
        <p className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] p-8 text-center text-[rgba(255,255,255,0.6)]">
          {query
            ? "No URLs match your search."
            : showIgnored
              ? "Nothing is left as 404."
              : "No broken URLs recorded. New ones appear here as soon as someone hits them."}
        </p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-[rgba(255,255,255,0.1)]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] text-left text-[rgba(255,255,255,0.7)]">
                <th className="px-4 py-3">URL</th>
                <th className="px-4 py-3">Hits</th>
                <th className="px-4 py-3">Linked from</th>
                <th className="px-4 py-3">Redirect to</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {visible.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-[rgba(255,255,255,0.05)] align-top hover:bg-[rgba(255,255,255,0.02)]"
                >
                  <td className="break-all px-4 py-3 font-mono text-xs">
                    <a
                      href={row.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-[#FDBE35]"
                    >
                      {row.path}
                      <ExternalLink className="h-3 w-3 shrink-0" />
                    </a>
                    <div className="mt-1 font-sans text-[rgba(255,255,255,0.5)]">
                      Last: {formatDate(row.lastSeenAt)} · First: {formatDate(row.firstSeenAt)}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">
                    <div>
                      {row.hits} {row.hits === 1 ? "time" : "times"}
                    </div>
                    {row.botHits > 0 && (
                      <div className="text-xs text-[rgba(255,255,255,0.5)]">
                        {row.botHits} by search engines/bots
                      </div>
                    )}
                  </td>
                  <td className="max-w-xs px-4 py-3 text-xs">
                    {row.referrers.length === 0 ? (
                      <span className="text-[rgba(255,255,255,0.4)]">No link recorded</span>
                    ) : (
                      <ul className="space-y-1">
                        {row.referrers.map((ref) => (
                          <li key={ref} className="break-all">
                            <a
                              href={ref}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[rgba(255,255,255,0.7)] hover:text-[#FDBE35]"
                            >
                              {shortUrl(ref)}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </td>
                  <td className="min-w-[260px] px-4 py-3">
                    {row.ignored ? (
                      <span className="text-xs text-[rgba(255,255,255,0.5)]">Left as 404</span>
                    ) : (
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleRedirect(row);
                        }}
                        className="flex gap-2"
                      >
                        <input
                          type="text"
                          value={targets[row.id] ?? ""}
                          onChange={(e) => setTargets((prev) => ({ ...prev, [row.id]: e.target.value }))}
                          placeholder="/blogs/new-url or https://…"
                          aria-label={`Redirect ${row.path} to`}
                          className={`${inputClass} font-mono text-xs`}
                        />
                        <button
                          type="submit"
                          disabled={busyId === row.id}
                          className="shrink-0 rounded-lg bg-[#FDBE35] px-3 py-2 text-xs text-[#020100] hover:bg-[#FDDA93] disabled:opacity-50"
                        >
                          Redirect
                        </button>
                      </form>
                    )}
                    {!row.ignored && row.suggestion && targets[row.id] === row.suggestion && (
                      <p className="mt-1 text-xs text-[rgba(255,255,255,0.5)]">Suggested: the most similar article</p>
                    )}
                    {errors[row.id] && <p className="mt-1 text-xs text-red-400">{errors[row.id]}</p>}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-right">
                    {row.ignored ? (
                      <button
                        type="button"
                        onClick={() => handleIgnore(row, false)}
                        disabled={busyId === row.id}
                        className="mr-2 inline-flex items-center gap-1 rounded px-2 py-1.5 text-xs text-[rgba(255,255,255,0.7)] hover:bg-[rgba(255,255,255,0.1)] hover:text-white disabled:opacity-50"
                        title="Back to the list"
                      >
                        <RotateCcw className="h-4 w-4" /> Restore
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleIgnore(row, true)}
                        disabled={busyId === row.id}
                        className="mr-2 inline-flex items-center gap-1 rounded px-2 py-1.5 text-xs text-[rgba(255,255,255,0.7)] hover:bg-[rgba(255,255,255,0.1)] hover:text-white disabled:opacity-50"
                        title="Nothing replaces this URL: keep it a 404 and hide it from the list"
                      >
                        <EyeOff className="h-4 w-4" /> Leave as 404
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => handleDelete(row)}
                      disabled={busyId === row.id}
                      className="inline-flex rounded p-1.5 text-[rgba(255,255,255,0.6)] hover:bg-red-500/20 hover:text-red-400 disabled:opacity-50"
                      title="Remove from the list (it comes back if the URL is hit again)"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
