"use client";

import { useEffect, useMemo, useState } from "react";
import { ExternalLink, Pencil, Search, Trash2 } from "lucide-react";

type Redirect = {
  id: string;
  source: string;
  destination: string;
  permanent: boolean;
  note: string | null;
  hits: number;
  lastHitAt: string | null;
  updatedAt: string;
};

type FormState = { source: string; destination: string; permanent: boolean; note: string };

const EMPTY_FORM: FormState = { source: "", destination: "", permanent: true, note: "" };

const inputClass =
  "w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-3 py-2 text-sm text-white focus:border-[#FDBE35] focus:outline-none";

function formatDate(iso: string | null): string {
  if (!iso) return "Never";
  return new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

export default function AdminRedirectsPage() {
  const [redirects, setRedirects] = useState<Redirect[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/redirects")
      .then((res) => res.json())
      .then((data) => setRedirects(Array.isArray(data) ? data : []))
      .catch(() => setRedirects([]))
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return redirects;
    return redirects.filter((r) =>
      [r.source, r.destination, r.note ?? ""].some((field) => field.toLowerCase().includes(q)),
    );
  }, [redirects, query]);

  function resetForm() {
    setForm(EMPTY_FORM);
    setEditingId(null);
    setError(null);
  }

  function startEdit(r: Redirect) {
    setForm({ source: r.source, destination: r.destination, permanent: r.permanent, note: r.note ?? "" });
    setEditingId(r.id);
    setError(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      const res = await fetch(editingId ? `/api/admin/redirects/${editingId}` : "/api/admin/redirects", {
        method: editingId ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Could not save the redirect");
        return;
      }
      setRedirects((prev) =>
        editingId ? prev.map((r) => (r.id === editingId ? data : r)) : [data, ...prev],
      );
      resetForm();
    } catch {
      setError("Could not save the redirect");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(r: Redirect) {
    if (!confirm(`Delete the redirect from ${r.source}? That URL will show "not found" again.`)) return;
    setDeletingId(r.id);
    try {
      const res = await fetch(`/api/admin/redirects/${r.id}`, { method: "DELETE" });
      if (res.ok) {
        setRedirects((prev) => prev.filter((x) => x.id !== r.id));
        if (editingId === r.id) resetForm();
      } else {
        const data = await res.json();
        alert(data.error ?? "Delete failed");
      }
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div>
      <div className="mb-2">
        <h1 className="text-2xl font-semibold">Redirects</h1>
      </div>
      <p className="mb-8 max-w-3xl text-sm text-[rgba(255,255,255,0.6)]">
        Send visitors and Google from an old URL to a new one. Changing the URL of a published
        article adds a redirect here automatically. Use <strong>Permanent (301)</strong> for pages
        that have moved for good; <strong>Temporary (302)</strong> only for short-term moves.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mb-8 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] p-6"
      >
        <h2 className="mb-4 text-base font-medium">{editingId ? "Edit redirect" : "Add a redirect"}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="mb-1 block text-sm text-[rgba(255,255,255,0.7)]">From (old URL)</span>
            <input
              type="text"
              required
              value={form.source}
              onChange={(e) => setForm((f) => ({ ...f, source: e.target.value }))}
              placeholder="/blogs/old-article-url"
              className={inputClass}
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm text-[rgba(255,255,255,0.7)]">To (new URL)</span>
            <input
              type="text"
              required
              value={form.destination}
              onChange={(e) => setForm((f) => ({ ...f, destination: e.target.value }))}
              placeholder="/blogs/new-article-url or https://…"
              className={inputClass}
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm text-[rgba(255,255,255,0.7)]">Type</span>
            <select
              value={form.permanent ? "301" : "302"}
              onChange={(e) => setForm((f) => ({ ...f, permanent: e.target.value === "301" }))}
              className={inputClass}
            >
              <option value="301">Permanent (301)</option>
              <option value="302">Temporary (302)</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-1 block text-sm text-[rgba(255,255,255,0.7)]">Note (optional)</span>
            <input
              type="text"
              value={form.note}
              onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))}
              placeholder="Why this redirect exists"
              className={inputClass}
            />
          </label>
        </div>
        {error && <p className="mt-4 text-sm text-red-400">{error}</p>}
        <div className="mt-4 flex gap-3">
          <button
            type="submit"
            disabled={saving}
            className="rounded-lg bg-[#FDBE35] px-4 py-2 text-sm text-[#020100] hover:bg-[#FDDA93] disabled:opacity-50"
          >
            {saving ? "Saving…" : editingId ? "Save changes" : "Add redirect"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="rounded-lg border border-[rgba(255,255,255,0.2)] px-4 py-2 text-sm text-[rgba(255,255,255,0.8)] hover:bg-[rgba(255,255,255,0.05)]"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="relative w-full max-w-sm">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[rgba(255,255,255,0.4)]" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search redirects"
            aria-label="Search redirects"
            className={`${inputClass} pl-9`}
          />
        </div>
        <span className="shrink-0 text-sm text-[rgba(255,255,255,0.5)]">
          {query
            ? `${filtered.length} of ${redirects.length}`
            : `${redirects.length} ${redirects.length === 1 ? "redirect" : "redirects"}`}
        </span>
      </div>

      {loading ? (
        <p className="text-[rgba(255,255,255,0.6)]">Loading redirects…</p>
      ) : filtered.length === 0 ? (
        <p className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] p-8 text-center text-[rgba(255,255,255,0.6)]">
          {redirects.length === 0 ? "No redirects yet." : "No redirects match your search."}
        </p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-[rgba(255,255,255,0.1)]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] text-left text-[rgba(255,255,255,0.7)]">
                <th className="px-4 py-3">From</th>
                <th className="px-4 py-3">To</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Used</th>
                <th className="px-4 py-3">Note</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r) => (
                <tr
                  key={r.id}
                  className="border-b border-[rgba(255,255,255,0.05)] align-top hover:bg-[rgba(255,255,255,0.02)]"
                >
                  <td className="break-all px-4 py-3 font-mono text-xs">{r.source}</td>
                  <td className="break-all px-4 py-3 font-mono text-xs">
                    <a
                      href={r.destination}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-[#FDBE35]"
                    >
                      {r.destination}
                      <ExternalLink className="h-3 w-3 shrink-0" />
                    </a>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">
                    {r.permanent ? (
                      <span className="rounded-full bg-green-500/20 px-2 py-0.5 text-xs text-green-400">301 Permanent</span>
                    ) : (
                      <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-xs text-amber-400">302 Temporary</span>
                    )}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">
                    <div>{r.hits} {r.hits === 1 ? "time" : "times"}</div>
                    <div className="text-xs text-[rgba(255,255,255,0.5)]">Last: {formatDate(r.lastHitAt)}</div>
                  </td>
                  <td className="px-4 py-3 text-xs text-[rgba(255,255,255,0.6)]">{r.note}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-right">
                    <button
                      type="button"
                      onClick={() => startEdit(r)}
                      className="mr-2 inline-flex rounded p-1.5 text-[rgba(255,255,255,0.6)] hover:bg-[rgba(255,255,255,0.1)] hover:text-white"
                      title="Edit"
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(r)}
                      disabled={deletingId === r.id}
                      className="inline-flex rounded p-1.5 text-[rgba(255,255,255,0.6)] hover:bg-red-500/20 hover:text-red-400 disabled:opacity-50"
                      title="Delete"
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
