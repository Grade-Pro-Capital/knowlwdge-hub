"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { RichTextEditorDynamic } from "../components/RichTextEditorDynamic";
import { BLOG_CONTENT_TEMPLATE } from "@/app/data/blogContentTemplate";

type SavedTemplate = { id: string; name: string; content: string };

type PostFormData = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  authorName: string;
  authorSlug: string;
  authorAvatar: string;
  imageUrl: string;
  imageKey: string;
  content: string;
  isProfessional: boolean;
  published: boolean;
  tags: string;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  secondaryKeywords: string;
  canonicalUrl: string;
  metaRobotsIndex: string;
  metaRobotsFollow: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterCardTitle: string;
  twitterCardDescription: string;
  twitterCardImage: string;
  aiSummary: string;
  keyTakeaways: string;
  authoritativeCitations: string;
  entityTags: string;
  contentFreshnessDate: string;
  expertiseCredentials: string;
  expertiseMethodology: string;
  expertiseResearchNotes: string;
  faqs: string;
};

const defaults: PostFormData = {
  slug: "",
  title: "",
  excerpt: "",
  category: "Analysis",
  readTime: "",
  authorName: "",
  authorSlug: "",
  authorAvatar: "",
  imageUrl: "",
  imageKey: "",
  content: "",
  isProfessional: false,
  published: true,
  tags: "",
  metaTitle: "",
  metaDescription: "",
  focusKeyword: "",
  secondaryKeywords: "",
  canonicalUrl: "",
  metaRobotsIndex: "",
  metaRobotsFollow: "",
  ogTitle: "",
  ogDescription: "",
  ogImage: "",
  twitterCardTitle: "",
  twitterCardDescription: "",
  twitterCardImage: "",
  aiSummary: "",
  keyTakeaways: "",
  authoritativeCitations: "",
  entityTags: "",
  contentFreshnessDate: "",
  expertiseCredentials: "",
  expertiseMethodology: "",
  expertiseResearchNotes: "",
  faqs: "",
};

export function PostForm({
  postId,
  initial,
}: {
  postId?: string;
  initial?: Partial<PostFormData>;
}) {
  const router = useRouter();
  const [form, setForm] = useState<PostFormData>({ ...defaults, ...initial });
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [templates, setTemplates] = useState<SavedTemplate[]>([]);

  useEffect(() => {
    if (postId) return;
    fetch("/api/admin/templates")
      .then((res) => res.json())
      .then((data) => setTemplates(Array.isArray(data) ? data : []))
      .catch(() => setTemplates([]));
  }, [postId]);

  function slugify(text: string): string {
    return String(text)
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || "post";
  }

  function update(f: Partial<PostFormData>) {
    setForm((prev) => {
      const next = { ...prev, ...f };
      if (f.slug !== undefined) next.slug = slugify(f.slug);
      else if (f.title !== undefined && !postId) next.slug = slugify(f.title);
      return next;
    });
  }

  async function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const fd = new FormData();
      fd.set("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Upload failed");
      update({ imageUrl: data.url, imageKey: data.key });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const url = postId ? `/api/admin/posts/${postId}` : "/api/admin/posts";
      const method = postId ? "PATCH" : "POST";
      const citations = (() => {
        if (!form.authoritativeCitations?.trim()) return undefined;
        try {
          const parsed = JSON.parse(form.authoritativeCitations);
          return Array.isArray(parsed) ? parsed : undefined;
        } catch {
          return form.authoritativeCitations
            .split("\n")
            .map((line) => {
              const [name, url] = line.split(",").map((s) => s.trim());
              return name && url ? { name, url } : null;
            })
            .filter(Boolean);
        }
      })();
      const faqs = (() => {
        if (!form.faqs?.trim()) return undefined;
        try {
          const parsed = JSON.parse(form.faqs);
          return Array.isArray(parsed) ? parsed : undefined;
        } catch {
          return undefined;
        }
      })();

      const body = {
        slug: form.slug,
        title: form.title,
        excerpt: form.excerpt,
        category: form.category,
        readTime: form.readTime || undefined,
        authorName: form.authorName,
        authorSlug: form.authorSlug || undefined,
        authorAvatar: form.authorAvatar || undefined,
        imageUrl: form.imageUrl || undefined,
        imageKey: form.imageKey || undefined,
        content: form.content || undefined,
        isProfessional: form.isProfessional,
        published: form.published,
        tags: form.tags ? form.tags.split(",").map((t) => t.trim()).filter(Boolean) : undefined,
        metaTitle: form.metaTitle || undefined,
        metaDescription: form.metaDescription || undefined,
        focusKeyword: form.focusKeyword || undefined,
        secondaryKeywords: form.secondaryKeywords || undefined,
        canonicalUrl: form.canonicalUrl || undefined,
        metaRobotsIndex: form.metaRobotsIndex || undefined,
        metaRobotsFollow: form.metaRobotsFollow || undefined,
        ogTitle: form.ogTitle || undefined,
        ogDescription: form.ogDescription || undefined,
        ogImage: form.ogImage || undefined,
        twitterCardTitle: form.twitterCardTitle || undefined,
        twitterCardDescription: form.twitterCardDescription || undefined,
        twitterCardImage: form.twitterCardImage || undefined,
        aiSummary: form.aiSummary || undefined,
        keyTakeaways: form.keyTakeaways
          ? form.keyTakeaways.split("\n").map((k) => k.trim()).filter(Boolean)
          : undefined,
        authoritativeCitations: citations,
        entityTags: form.entityTags
          ? form.entityTags.split(",").map((e) => e.trim()).filter(Boolean)
          : undefined,
        contentFreshnessDate: form.contentFreshnessDate || undefined,
        expertiseSignals:
          form.expertiseCredentials ||
          form.expertiseMethodology ||
          form.expertiseResearchNotes
            ? {
                credentials: form.expertiseCredentials || undefined,
                methodology: form.expertiseMethodology || undefined,
                researchNotes: form.expertiseResearchNotes || undefined,
              }
            : undefined,
        faqs,
      };
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Save failed");
      router.push("/admin/posts");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <p className="rounded-lg bg-red-500/20 px-3 py-2 text-sm text-red-400">
          {error}
        </p>
      )}

      <div>
        <label className="mb-1 block text-sm text-[rgba(255,255,255,0.7)]">
          Title *
        </label>
        <input
          type="text"
          value={form.title}
          onChange={(e) => update({ title: e.target.value })}
          required
          className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-white focus:border-[#FDBE35] focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm text-[rgba(255,255,255,0.7)]">
          Excerpt *
        </label>
        <textarea
          value={form.excerpt}
          onChange={(e) => update({ excerpt: e.target.value })}
          required
          rows={2}
          className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-white focus:border-[#FDBE35] focus:outline-none"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm text-[rgba(255,255,255,0.7)]">
            Category *
          </label>
          <input
            type="text"
            value={form.category}
            onChange={(e) => update({ category: e.target.value })}
            required
            className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-white focus:border-[#FDBE35] focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm text-[rgba(255,255,255,0.7)]">
            Read time
          </label>
          <input
            type="text"
            value={form.readTime}
            onChange={(e) => update({ readTime: e.target.value })}
            placeholder="5 min read"
            className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-white focus:border-[#FDBE35] focus:outline-none"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <label className="mb-1 block text-sm text-[rgba(255,255,255,0.7)]">
            Author name *
          </label>
          <input
            type="text"
            value={form.authorName}
            onChange={(e) => update({ authorName: e.target.value })}
            required
            className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-white focus:border-[#FDBE35] focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm text-[rgba(255,255,255,0.7)]">
            Author slug
          </label>
          <input
            type="text"
            value={form.authorSlug}
            onChange={(e) => update({ authorSlug: e.target.value })}
            placeholder="ravi-kumar"
            className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-white focus:border-[#FDBE35] focus:outline-none"
          />
          <p className="mt-1 text-xs text-[rgba(255,255,255,0.5)]">For /author/[slug]</p>
        </div>
        <div>
          <label className="mb-1 block text-sm text-[rgba(255,255,255,0.7)]">
            Author avatar URL
          </label>
          <input
            type="text"
            value={form.authorAvatar}
            onChange={(e) => update({ authorAvatar: e.target.value })}
            placeholder="https://..."
            className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-white focus:border-[#FDBE35] focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm text-[rgba(255,255,255,0.7)]">
          Tags
        </label>
        <input
          type="text"
          value={form.tags}
          onChange={(e) => update({ tags: e.target.value })}
          placeholder="bitcoin,regulation,institutional"
          className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-white focus:border-[#FDBE35] focus:outline-none"
        />
        <p className="mt-1 text-xs text-[rgba(255,255,255,0.5)]">Comma-separated</p>
      </div>

      <div>
        <label className="mb-1 block text-sm text-[rgba(255,255,255,0.7)]">
          Cover image
        </label>
        <div className="flex flex-wrap items-center gap-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            disabled={uploading}
            className="text-sm text-[rgba(255,255,255,0.7)] file:mr-2 file:rounded file:border-0 file:bg-[#FDBE35] file:px-3 file:py-1 file:text-[#020100]"
          />
          {uploading && (
            <span className="text-sm text-[rgba(255,255,255,0.5)]">
              Uploading…
            </span>
          )}
          {form.imageUrl && (
            <img
              src={form.imageUrl}
              alt="Cover"
              className="h-24 w-auto rounded border border-[rgba(255,255,255,0.1)] object-cover"
            />
          )}
        </div>
      </div>

      <div className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] p-6">
        <h3 className="mb-4 text-base font-medium text-white">SEO (per article)</h3>
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm text-[rgba(255,255,255,0.7)]">
              Meta Title
            </label>
            <input
              type="text"
              value={form.metaTitle}
              onChange={(e) => update({ metaTitle: e.target.value.slice(0, 60) })}
              maxLength={60}
              placeholder="Defaults to post title if empty"
              className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-white focus:border-[#FDBE35] focus:outline-none"
            />
            <p className="mt-1 text-xs text-[rgba(255,255,255,0.5)]">
              {form.metaTitle.length}/60
            </p>
          </div>
          <div>
            <label className="mb-1 block text-sm text-[rgba(255,255,255,0.7)]">
              Meta Description
            </label>
            <textarea
              value={form.metaDescription}
              onChange={(e) => update({ metaDescription: e.target.value.slice(0, 160) })}
              maxLength={160}
              rows={2}
              placeholder="Defaults to excerpt if empty"
              className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-white focus:border-[#FDBE35] focus:outline-none"
            />
            <p className="mt-1 text-xs text-[rgba(255,255,255,0.5)]">
              {form.metaDescription.length}/160
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-[rgba(255,255,255,0.7)]">
                Focus Keyword
              </label>
              <input
                type="text"
                value={form.focusKeyword}
                onChange={(e) => update({ focusKeyword: e.target.value })}
                placeholder="e.g. crypto regulation India"
                className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-white focus:border-[#FDBE35] focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-[rgba(255,255,255,0.7)]">
                Secondary Keywords
              </label>
              <input
                type="text"
                value={form.secondaryKeywords}
                onChange={(e) => update({ secondaryKeywords: e.target.value })}
                placeholder="Comma-separated"
                className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-white focus:border-[#FDBE35] focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm text-[rgba(255,255,255,0.7)]">
              URL Slug (auto-generated, editable)
            </label>
            <div className="flex items-center gap-2">
              <span className="text-sm text-[rgba(255,255,255,0.5)]">/blog/</span>
              <input
                type="text"
                value={form.slug}
                onChange={(e) => update({ slug: e.target.value })}
                className="flex-1 rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-white focus:border-[#FDBE35] focus:outline-none"
                placeholder="post-url-slug"
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm text-[rgba(255,255,255,0.7)]">
              Canonical URL
            </label>
            <input
              type="url"
              value={form.canonicalUrl}
              onChange={(e) => update({ canonicalUrl: e.target.value })}
              placeholder="https://blogs.grade.capital/blog/this-post"
              className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-white focus:border-[#FDBE35] focus:outline-none"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-[rgba(255,255,255,0.7)]">
                Meta Robots — Index
              </label>
              <select
                value={form.metaRobotsIndex || ""}
                onChange={(e) => update({ metaRobotsIndex: e.target.value })}
                className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-white focus:border-[#FDBE35] focus:outline-none"
              >
                <option value="">Default (index)</option>
                <option value="index">index</option>
                <option value="noindex">noindex</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm text-[rgba(255,255,255,0.7)]">
                Meta Robots — Follow
              </label>
              <select
                value={form.metaRobotsFollow || ""}
                onChange={(e) => update({ metaRobotsFollow: e.target.value })}
                className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-white focus:border-[#FDBE35] focus:outline-none"
              >
                <option value="">Default (follow)</option>
                <option value="follow">follow</option>
                <option value="nofollow">nofollow</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-6 border-t border-[rgba(255,255,255,0.08)] pt-6">
          <h4 className="mb-3 text-sm font-medium text-[rgba(255,255,255,0.9)]">Open Graph</h4>
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-xs text-[rgba(255,255,255,0.6)]">OG Title</label>
              <input
                type="text"
                value={form.ogTitle}
                onChange={(e) => update({ ogTitle: e.target.value })}
                placeholder="Falls back to meta title"
                className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-sm text-white focus:border-[#FDBE35] focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-[rgba(255,255,255,0.6)]">OG Description</label>
              <textarea
                value={form.ogDescription}
                onChange={(e) => update({ ogDescription: e.target.value })}
                rows={2}
                placeholder="Falls back to meta description"
                className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-sm text-white focus:border-[#FDBE35] focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-[rgba(255,255,255,0.6)]">OG Image URL</label>
              <input
                type="url"
                value={form.ogImage}
                onChange={(e) => update({ ogImage: e.target.value })}
                placeholder="Falls back to cover image"
                className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-sm text-white focus:border-[#FDBE35] focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="mt-6 border-t border-[rgba(255,255,255,0.08)] pt-6">
          <h4 className="mb-3 text-sm font-medium text-[rgba(255,255,255,0.9)]">Twitter Card</h4>
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-xs text-[rgba(255,255,255,0.6)]">Twitter Title</label>
              <input
                type="text"
                value={form.twitterCardTitle}
                onChange={(e) => update({ twitterCardTitle: e.target.value })}
                placeholder="Falls back to OG / meta title"
                className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-sm text-white focus:border-[#FDBE35] focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-[rgba(255,255,255,0.6)]">Twitter Description</label>
              <textarea
                value={form.twitterCardDescription}
                onChange={(e) => update({ twitterCardDescription: e.target.value })}
                rows={2}
                placeholder="Falls back to OG / meta description"
                className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-sm text-white focus:border-[#FDBE35] focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-[rgba(255,255,255,0.6)]">Twitter Image URL</label>
              <input
                type="url"
                value={form.twitterCardImage}
                onChange={(e) => update({ twitterCardImage: e.target.value })}
                placeholder="Falls back to OG image / cover"
                className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-sm text-white focus:border-[#FDBE35] focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-[rgba(253,190,53,0.2)] bg-[rgba(253,190,53,0.04)] p-6">
        <h3 className="mb-4 text-base font-medium text-[#FDBE35]">GEO / AI Optimization</h3>
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm text-[rgba(255,255,255,0.7)]">AI Summary</label>
            <textarea
              value={form.aiSummary}
              onChange={(e) => update({ aiSummary: e.target.value })}
              rows={3}
              placeholder="2–3 sentence AI crawler summary"
              className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-white focus:border-[#FDBE35] focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-[rgba(255,255,255,0.7)]">Key Takeaways (TL;DR)</label>
            <textarea
              value={form.keyTakeaways}
              onChange={(e) => update({ keyTakeaways: e.target.value })}
              rows={4}
              placeholder="One bullet per line"
              className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-white focus:border-[#FDBE35] focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-[rgba(255,255,255,0.7)]">Citations (Name,URL per line or JSON)</label>
            <textarea
              value={form.authoritativeCitations}
              onChange={(e) => update({ authoritativeCitations: e.target.value })}
              rows={3}
              placeholder='[{"name":"Source","url":"https://..."}]'
              className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-2 font-mono text-sm text-white focus:border-[#FDBE35] focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-[rgba(255,255,255,0.7)]">Entity Tags</label>
            <input
              type="text"
              value={form.entityTags}
              onChange={(e) => update({ entityTags: e.target.value })}
              placeholder="Bitcoin, SEC, MicroStrategy"
              className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-white focus:border-[#FDBE35] focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-[rgba(255,255,255,0.7)]">Content Freshness Date</label>
            <input
              type="date"
              value={form.contentFreshnessDate}
              onChange={(e) => update({ contentFreshnessDate: e.target.value })}
              className="rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-white focus:border-[#FDBE35] focus:outline-none"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className="mb-1 block text-xs text-[rgba(255,255,255,0.6)]">Credentials</label>
              <input
                type="text"
                value={form.expertiseCredentials}
                onChange={(e) => update({ expertiseCredentials: e.target.value })}
                placeholder="Senior Analyst"
                className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-sm text-white focus:border-[#FDBE35] focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-[rgba(255,255,255,0.6)]">Methodology</label>
              <input
                type="text"
                value={form.expertiseMethodology}
                onChange={(e) => update({ expertiseMethodology: e.target.value })}
                placeholder="Research methodology"
                className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-sm text-white focus:border-[#FDBE35] focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-[rgba(255,255,255,0.6)]">Research Notes</label>
              <input
                type="text"
                value={form.expertiseResearchNotes}
                onChange={(e) => update({ expertiseResearchNotes: e.target.value })}
                placeholder="Additional notes"
                className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-sm text-white focus:border-[#FDBE35] focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm text-[rgba(255,255,255,0.7)]">FAQs (JSON)</label>
            <textarea
              value={form.faqs}
              onChange={(e) => update({ faqs: e.target.value })}
              rows={4}
              placeholder='[{"question":"...","answer":"..."}]'
              className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-2 font-mono text-sm text-white focus:border-[#FDBE35] focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
          <label className="block text-sm text-[rgba(255,255,255,0.7)]">
            Content
          </label>
          {!postId && (
            <div className="flex items-center gap-2">
              <span className="text-xs text-[rgba(255,255,255,0.5)]">Template:</span>
              <select
                className="rounded border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-2 py-1 text-sm text-white focus:border-[#FDBE35] focus:outline-none"
                value=""
                onChange={(e) => {
                  const v = e.target.value;
                  if (v === "default") update({ content: BLOG_CONTENT_TEMPLATE });
                  else if (v) {
                    const t = templates.find((x) => x.id === v);
                    if (t) update({ content: t.content });
                  }
                  e.target.value = "";
                }}
              >
                <option value="">Select template…</option>
                <option value="default">Default structure</option>
                {templates.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
                ))}
              </select>
              <a
                href="/admin/templates"
                className="text-xs text-[rgba(255,255,255,0.5)] hover:text-[#FDBE35]"
              >
                Manage
              </a>
            </div>
          )}
          {!postId && (
            <p className="mt-0.5 text-xs text-[rgba(255,255,255,0.5)]">
              H2 headings in the content appear in the post&apos;s table of contents.
            </p>
          )}
        </div>
        <RichTextEditorDynamic
          value={form.content}
          onChange={(html) => update({ content: html })}
          placeholder="Write your post content…"
          minHeight="320px"
        />
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={form.isProfessional}
            onChange={(e) => update({ isProfessional: e.target.checked })}
            className="rounded border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.05)] text-[#FDBE35] focus:ring-[#FDBE35]"
          />
          <span className="text-sm">For Professionals</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={form.published}
            onChange={(e) => update({ published: e.target.checked })}
            className="rounded border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.05)] text-[#FDBE35] focus:ring-[#FDBE35]"
          />
          <span className="text-sm">Published</span>
        </label>
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={saving}
          className="rounded-lg bg-[#FDBE35] px-6 py-2 font-medium text-[#020100] disabled:opacity-60"
        >
          {saving ? "Saving…" : postId ? "Update post" : "Create post"}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="rounded-lg border border-[rgba(255,255,255,0.2)] px-6 py-2 hover:bg-[rgba(255,255,255,0.05)]"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
