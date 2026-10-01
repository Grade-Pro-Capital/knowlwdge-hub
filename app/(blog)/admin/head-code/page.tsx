"use client";

import { useEffect, useState } from "react";

const EXAMPLE = `<!-- Examples -->
<meta name="msvalidate.01" content="BING-VERIFICATION-CODE" />
<meta name="facebook-domain-verification" content="CODE" />
<link rel="preconnect" href="https://example-cdn.com" />`;

function formatDate(iso: string): string {
  return new Date(iso).toLocaleString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit" });
}

export default function AdminHeadCodePage() {
  const [code, setCode] = useState("");
  const [saved, setSaved] = useState<{ code: string; updatedAt: string | null; updatedBy: string | null } | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/head")
      .then((res) => res.json())
      .then((data) => {
        setCode(data.code ?? "");
        setSaved(data);
      })
      .catch(() => setErrors(["Could not load the saved code."]))
      .finally(() => setLoading(false));
  }, []);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setErrors([]);
    setMessage(null);
    try {
      const res = await fetch("/api/admin/head", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrors(data.errors ?? [data.error ?? "Could not save"]);
        return;
      }
      setSaved({ code: code.trim(), updatedAt: new Date().toISOString(), updatedBy: null });
      setMessage(code.trim() ? "Saved. Every page now includes this code." : "Cleared. No custom code is added to pages.");
    } catch {
      setErrors(["Could not save"]);
    } finally {
      setSaving(false);
    }
  }

  const dirty = saved !== null && code.trim() !== saved.code;

  return (
    <div>
      <h1 className="mb-2 text-2xl font-semibold">Head code</h1>
      <p className="mb-3 max-w-3xl text-sm text-[rgba(255,255,255,0.6)]">
        Extra tags added to the <code>&lt;head&gt;</code> of every page on grade.capital (main
        site and blog), for things the admin has no field for: verification tags for Bing,
        Facebook or Pinterest, a preconnect hint, sitewide structured data. For one article
        only, use the &quot;Custom head code&quot; field in that article.
      </p>
      <p className="mb-8 max-w-3xl text-sm text-[rgba(255,255,255,0.6)]">
        Allowed: <code>&lt;meta&gt;</code>, <code>&lt;link&gt;</code> and{" "}
        <code>&lt;script type=&quot;application/ld+json&quot;&gt;</code>. Not allowed, because
        they could hide the whole site from Google or break the design: robots, canonical,
        description and viewport tags, stylesheets and other scripts. Tracking code belongs in
        Google Tag Manager.
      </p>

      {loading ? (
        <p className="text-[rgba(255,255,255,0.6)]">Loading…</p>
      ) : (
        <form onSubmit={handleSave} className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] p-6">
          <textarea
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              setMessage(null);
            }}
            rows={12}
            spellCheck={false}
            placeholder={EXAMPLE}
            aria-label="Head code for every page"
            className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-3 font-mono text-xs text-white focus:border-[#FDBE35] focus:outline-none"
          />
          {errors.length > 0 && (
            <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-red-400">
              {errors.map((err) => (
                <li key={err}>{err}</li>
              ))}
            </ul>
          )}
          {message && <p className="mt-4 text-sm text-green-300">{message}</p>}
          <div className="mt-4 flex items-center gap-4">
            <button
              type="submit"
              disabled={saving || !dirty}
              className="rounded-lg bg-[#FDBE35] px-4 py-2 text-sm text-[#020100] hover:bg-[#FDDA93] disabled:opacity-50"
            >
              {saving ? "Saving…" : "Save"}
            </button>
            {saved?.updatedAt && !dirty && (
              <span className="text-xs text-[rgba(255,255,255,0.5)]">
                Last saved {formatDate(saved.updatedAt)}
                {saved.updatedBy ? ` by ${saved.updatedBy}` : ""}
              </span>
            )}
          </div>
        </form>
      )}
    </div>
  );
}
