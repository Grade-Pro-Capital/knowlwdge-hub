"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { SerpWidthHint, isCutByGoogle, useIsClient } from "../../components/SerpWidthHint";
import { normalizeMetaTitle } from "@/app/lib/seo";
import { sanitizeTitleForBrand } from "@/app/lib/siteConfig";

type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  published: boolean;
  metaTitle: string | null;
  metaDescription: string | null;
};

type Fields = { metaTitle: string; metaDescription: string };
type Filter = "all" | "cut" | "empty";

const TITLE_MAX = 60;
const DESCRIPTION_MAX = 160;
const inputClass =
  "w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-3 py-2 text-sm text-white focus:border-[#FDBE35] focus:outline-none";

/** What Google gets, as on the article page: the field, or its fallback. */
const googleTitle = (post: Post, f: Fields) =>
  sanitizeTitleForBrand(normalizeMetaTitle(f.metaTitle) || normalizeMetaTitle(post.title));
const googleDescription = (post: Post, f: Fields) => f.metaDescription.trim() || post.excerpt;

export default function BulkSeoPage() {
  const isClient = useIsClient();
  const [posts, setPosts] = useState<Post[]>([]);
  const [saved, setSaved] = useState<Record<string, Fields>>({});
  const [drafts, setDrafts] = useState<Record<string, Fields>>({});
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/posts")
      .then((res) => res.json())
      .then((data: Post[]) => {
        const list = Array.isArray(data) ? data : [];
        const fields = Object.fromEntries(
          list.map((p) => [p.id, { metaTitle: p.metaTitle ?? "", metaDescription: p.metaDescription ?? "" }]),
        );
        setPosts(list);
        setSaved(fields);
        setDrafts(fields);
      })
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, []);

  const changedIds = posts
    .map((p) => p.id)
    .filter(
      (id) =>
        drafts[id] &&
        (drafts[id].metaTitle.trim() !== saved[id].metaTitle.trim() ||
          drafts[id].metaDescription.trim() !== saved[id].metaDescription.trim()),
    );

  // Unsaved edits: ask before leaving the page.
  useEffect(() => {
    if (changedIds.length === 0) return;
    const warn = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [changedIds.length]);

  const isCut = (p: Post) =>
    isClient &&
    (isCutByGoogle("title", googleTitle(p, drafts[p.id])) ||
      isCutByGoogle("description", googleDescription(p, drafts[p.id])));
  const isEmpty = (p: Post) => !drafts[p.id]?.metaTitle.trim() || !drafts[p.id]?.metaDescription.trim();

  const counts = { cut: posts.filter(isCut).length, empty: posts.filter(isEmpty).length };

  const visible = posts.filter((p) => {
    const q = query.trim().toLowerCase();
    if (q && ![p.title, p.slug].some((s) => s.toLowerCase().includes(q))) return false;
    // An edited article stays in view until saved, even once it no longer matches the filter
    // (otherwise fixing a too-long description would make it vanish mid-typing).
    if (changedIds.includes(p.id)) return true;
    if (filter === "cut") return isCut(p);
    if (filter === "empty") return isEmpty(p);
    return true;
  });

  function edit(id: string, patch: Partial<Fields>) {
    setDrafts((prev) => ({ ...prev, [id]: { ...prev[id], ...patch } }));
    setMessage(null);
  }

  async function saveAll() {
    setSaving(true);
    setMessage(null);
    const nextErrors: Record<string, string> = {};
    let done = 0;
    for (const id of changedIds) {
      const f = drafts[id];
      try {
        const res = await fetch(`/api/admin/posts/${id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          // Empty clears the field, so the page falls back to the title / excerpt.
          body: JSON.stringify({
            metaTitle: f.metaTitle.trim() || null,
            metaDescription: f.metaDescription.trim() || null,
          }),
        });
        if (!res.ok) {
          nextErrors[id] = (await res.json().catch(() => ({}))).error ?? "Could not save";
          continue;
        }
        setSaved((prev) => ({ ...prev, [id]: { metaTitle: f.metaTitle.trim(), metaDescription: f.metaDescription.trim() } }));
        done++;
      } catch {
        nextErrors[id] = "Could not save";
      }
    }
    setErrors(nextErrors);
    const failed = Object.keys(nextErrors).length;
    setMessage(`Saved ${done} ${done === 1 ? "article" : "articles"}.${failed ? ` ${failed} could not be saved (see below).` : ""}`);
    setSaving(false);
  }

  const filterButton = (value: Filter, label: string) => (
    <button
      type="button"
      onClick={() => setFilter(value)}
      className={`rounded-full border px-3 py-1 text-xs ${
        filter === value
          ? "border-[#FDBE35] bg-[rgba(253,190,53,0.15)] text-[#FDBE35]"
          : "border-[rgba(255,255,255,0.15)] text-[rgba(255,255,255,0.7)] hover:text-white"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold">Edit SEO in bulk</h1>
        <Link href="/admin/posts" className="text-sm text-[rgba(255,255,255,0.6)] hover:text-white">
          ← Posts
        </Link>
      </div>
      <p className="mb-6 max-w-3xl text-sm text-[rgba(255,255,255,0.6)]">
        The Google title and description of every article in one table. Empty fields use the
        article title and the excerpt. The bar under each field shows how much of it Google shows
        on desktop; red means it will be cut.
      </p>

      <div className="sticky top-0 z-10 mb-4 flex flex-wrap items-center gap-3 border-b border-[rgba(255,255,255,0.1)] bg-[#020100] py-3">
        <div className="relative w-full max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[rgba(255,255,255,0.4)]" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles"
            aria-label="Search articles"
            className={`${inputClass} pl-9`}
          />
        </div>
        {filterButton("all", `All (${posts.length})`)}
        {filterButton("cut", `Cut by Google (${counts.cut})`)}
        {filterButton("empty", `Empty field (${counts.empty})`)}
        <div className="ml-auto flex items-center gap-3">
          {message && <span className="text-sm text-green-300">{message}</span>}
          <button
            type="button"
            onClick={saveAll}
            disabled={saving || changedIds.length === 0}
            className="rounded-lg bg-[#FDBE35] px-4 py-2 text-sm text-[#020100] hover:bg-[#FDDA93] disabled:opacity-50"
          >
            {saving ? "Saving…" : changedIds.length ? `Save ${changedIds.length} ${changedIds.length === 1 ? "change" : "changes"}` : "No changes"}
          </button>
        </div>
      </div>

      {loading ? (
        <p className="text-[rgba(255,255,255,0.6)]">Loading…</p>
      ) : visible.length === 0 ? (
        <p className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] p-8 text-center text-[rgba(255,255,255,0.6)]">
          No articles match.
        </p>
      ) : (
        <div className="space-y-3">
          {visible.map((post) => {
            const f = drafts[post.id];
            const changed = changedIds.includes(post.id);
            return (
              <div
                key={post.id}
                className={`rounded-xl border p-4 ${
                  changed ? "border-[rgba(253,190,53,0.5)] bg-[rgba(253,190,53,0.04)]" : "border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)]"
                }`}
              >
                <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                  <Link href={`/admin/posts/${post.id}/edit`} className="font-medium hover:text-[#FDBE35]">
                    {post.title}
                  </Link>
                  <span className="text-xs text-[rgba(255,255,255,0.5)]">
                    /blogs/{post.slug}
                    {!post.published && " · Draft"}
                    {changed && <span className="ml-2 text-[#FDBE35]">Unsaved</span>}
                  </span>
                </div>
                <div className="grid gap-4 lg:grid-cols-2">
                  <label className="block">
                    <span className="mb-1 flex justify-between text-xs text-[rgba(255,255,255,0.6)]">
                      SEO title <span>{f.metaTitle.length}/{TITLE_MAX}</span>
                    </span>
                    <input
                      type="text"
                      value={f.metaTitle}
                      maxLength={TITLE_MAX}
                      onChange={(e) => edit(post.id, { metaTitle: e.target.value })}
                      placeholder={post.title}
                      className={inputClass}
                    />
                    <SerpWidthHint
                      kind="title"
                      text={googleTitle(post, f)}
                      fallbackLabel={f.metaTitle.trim() ? undefined : "the article title"}
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1 flex justify-between text-xs text-[rgba(255,255,255,0.6)]">
                      Meta description <span>{f.metaDescription.length}/{DESCRIPTION_MAX}</span>
                    </span>
                    <textarea
                      value={f.metaDescription}
                      maxLength={DESCRIPTION_MAX}
                      rows={2}
                      onChange={(e) => edit(post.id, { metaDescription: e.target.value })}
                      placeholder={post.excerpt}
                      className={inputClass}
                    />
                    <SerpWidthHint
                      kind="description"
                      text={googleDescription(post, f)}
                      fallbackLabel={f.metaDescription.trim() ? undefined : "the excerpt"}
                    />
                  </label>
                </div>
                {errors[post.id] && <p className="mt-2 text-xs text-red-400">{errors[post.id]}</p>}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
