"use client";

import { use, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { RotateCcw } from "lucide-react";
import { SEO_FIELDS, SEO_FIELD_LABELS, type SeoField, type SeoFields } from "@/app/lib/seoFields";

type Version = {
  id: string;
  fields: SeoFields;
  changed: SeoField[];
  note: string | null;
  savedBy: string | null;
  createdAt: string;
};
type Data = { post: { id: string; title: string; slug: string }; current: SeoFields; versions: Version[] };

function formatDate(iso: string): string {
  return new Date(iso).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" });
}

function Value({ value }: { value: string | null | undefined }) {
  return value ? (
    <span className="break-words">{value}</span>
  ) : (
    <span className="italic text-[rgba(255,255,255,0.4)]">empty</span>
  );
}

export default function SeoHistoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [restoring, setRestoring] = useState<string | null>(null);

  const load = useCallback(() => {
    fetch(`/api/admin/posts/${id}/seo-history`)
      .then(async (res) => {
        const json = await res.json();
        if (!res.ok) throw new Error(json.error ?? "Could not load the history");
        setData(json);
      })
      .catch((e: Error) => setError(e.message));
  }, [id]);

  useEffect(load, [load]);

  async function restore(version: Version) {
    if (!confirm(`Restore the SEO fields saved on ${formatDate(version.createdAt)}? The current values stay in the history.`)) return;
    setRestoring(version.id);
    setMessage(null);
    try {
      const res = await fetch(`/api/admin/posts/${id}/seo-history`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ versionId: version.id }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Restore failed");
      setMessage(`Restored the version from ${formatDate(version.createdAt)}.`);
      load();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Restore failed");
    } finally {
      setRestoring(null);
    }
  }

  if (error) return <p className="text-red-400">{error}</p>;
  if (!data) return <p className="text-[rgba(255,255,255,0.6)]">Loading…</p>;

  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold">SEO history</h1>
        <Link href={`/admin/posts/${id}/edit`} className="text-sm text-[rgba(255,255,255,0.6)] hover:text-white">
          ← Back to the article
        </Link>
      </div>
      <p className="mb-1 font-medium">{data.post.title}</p>
      <p className="mb-6 max-w-3xl text-sm text-[rgba(255,255,255,0.6)]">
        Every save that changed this article&apos;s SEO fields (title, description, keywords,
        canonical, robots, social and custom head code), newest first, including saves from the
        bulk SEO editor. Restoring a version puts its values back and is recorded too, so it can
        be undone. The URL slug isn&apos;t included: change it in the editor (that adds a redirect).
      </p>
      {message && <p className="mb-6 text-sm text-green-300">{message}</p>}

      {data.versions.length === 0 ? (
        <p className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] p-8 text-center text-[rgba(255,255,255,0.6)]">
          No history yet. It starts with the next save that changes an SEO field.
        </p>
      ) : (
        <ol className="space-y-3">
          {data.versions.map((v, i) => {
            const previous = data.versions[i + 1];
            const isCurrent = i === 0;
            return (
              <li key={v.id} className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] p-4">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-sm">
                    <span className="font-medium">{formatDate(v.createdAt)}</span>
                    <span className="text-[rgba(255,255,255,0.6)]">
                      {v.savedBy ? ` · ${v.savedBy}` : ""}
                      {v.note ? ` · ${v.note}` : ""}
                    </span>
                    {isCurrent && (
                      <span className="ml-2 rounded-full bg-green-500/20 px-2 py-0.5 text-xs text-green-400">Current</span>
                    )}
                  </div>
                  {!isCurrent && (
                    <button
                      type="button"
                      onClick={() => restore(v)}
                      disabled={restoring !== null}
                      className="inline-flex items-center gap-1 rounded-lg border border-[rgba(255,255,255,0.2)] px-3 py-1.5 text-xs text-[rgba(255,255,255,0.8)] hover:bg-[rgba(255,255,255,0.05)] disabled:opacity-50"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                      {restoring === v.id ? "Restoring…" : "Restore this version"}
                    </button>
                  )}
                </div>

                {previous && v.changed.length > 0 ? (
                  <table className="w-full text-xs">
                    <tbody>
                      {v.changed.map((f) => (
                        <tr key={f} className="border-t border-[rgba(255,255,255,0.05)] align-top">
                          <td className="w-40 py-2 pr-3 text-[rgba(255,255,255,0.6)]">{SEO_FIELD_LABELS[f]}</td>
                          <td className="py-2 pr-3 text-red-300/80 line-through decoration-red-400/40">
                            <Value value={previous.fields[f]} />
                          </td>
                          <td className="py-2 text-green-300">
                            <Value value={v.fields[f]} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : null}

                <details className="mt-2 text-xs">
                  <summary className="cursor-pointer text-[rgba(255,255,255,0.5)] hover:text-white">
                    All SEO fields in this version
                  </summary>
                  <dl className="mt-2 grid gap-x-4 gap-y-1 sm:grid-cols-[10rem_1fr]">
                    {SEO_FIELDS.map((f) => (
                      <div key={f} className="contents">
                        <dt className="text-[rgba(255,255,255,0.5)]">{SEO_FIELD_LABELS[f]}</dt>
                        <dd>
                          <Value value={v.fields[f]} />
                        </dd>
                      </div>
                    ))}
                  </dl>
                </details>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}
