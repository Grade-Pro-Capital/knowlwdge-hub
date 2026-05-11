"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { RichTextEditorDynamic } from "../components/RichTextEditorDynamic";
import { BLOG_CONTENT_TEMPLATE } from "@/app/data/blogContentTemplate";
import { Plus, Trash2, Copy, Check } from "lucide-react";

type SavedTemplate = { id: string; name: string; content: string };

type FaqItem = { question: string; answer: string };
type AdditionalImage = { id: string; url: string; key: string; alt: string };

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
  imageAlt: string;
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
  imageAlt: "",
  content: "",
  isProfessional: false,
  published: true,
  tags: "",
  metaTitle: "",
  metaDescription: "",
  focusKeyword: "",
  secondaryKeywords: "",
  canonicalUrl: "",
    metaRobotsIndex: "index",
    metaRobotsFollow: "follow",
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
};

export function PostForm({
  postId,
  initial,
  initialFaqs,
  initialAdditionalImages,
}: {
  postId?: string;
  initial?: Partial<PostFormData>;
  initialFaqs?: FaqItem[];
  initialAdditionalImages?: AdditionalImage[];
}) {
  const router = useRouter();
  const [form, setForm] = useState<PostFormData>({ ...defaults, ...initial });
  const [faqs, setFaqs] = useState<FaqItem[]>(initialFaqs ?? []);
  const [additionalImages, setAdditionalImages] = useState<AdditionalImage[]>(
    initialAdditionalImages ?? []
  );
  const [uploading, setUploading] = useState(false);
  const [uploadingAdditional, setUploadingAdditional] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [isDirty, setIsDirty] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const pendingHrefRef = useRef<string | null>(null);
  const pendingPopRef = useRef(false);
  const [templates, setTemplates] = useState<SavedTemplate[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

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
      setIsDirty(true);
      if (f.slug !== undefined) next.slug = slugify(f.slug);
      else if (f.title !== undefined && !postId) next.slug = slugify(f.title);
      return next;
    });
  }

  function generateImageId(): string {
    return "img-" + Math.random().toString(36).slice(2, 8);
  }

  async function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const fd = new FormData();
      fd.set("file", file);
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: fd,
        credentials: "same-origin",
      });
      const text = await res.text();
      let data: { url?: string; key?: string; error?: string };
      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        // Server returned non-JSON (e.g. HTML error page)
        throw new Error(
          res.status === 401
            ? "Session expired. Please log in again and try uploading."
            : "Upload failed. Please log in again if needed, or try a smaller image (max 5MB, JPEG/PNG/WebP/GIF)."
        );
      }
      if (!res.ok) throw new Error(data.error ?? "Upload failed");
      if (data.url) update({ imageUrl: data.url, imageKey: data.key });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  async function handleAdditionalImageUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (additionalImages.length >= 3) {
      setError("Maximum 3 additional images allowed");
      return;
    }
    setUploadingAdditional(true);
    setError("");
    try {
      const fd = new FormData();
      fd.set("file", file);
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: fd,
        credentials: "same-origin",
      });
      const text = await res.text();
      let data: { url?: string; key?: string; error?: string };
      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        throw new Error(
          res.status === 401
            ? "Session expired. Please log in again and try uploading."
            : "Upload failed. Please log in again if needed, or try a smaller image (max 5MB, JPEG/PNG/WebP/GIF)."
        );
      }
      if (!res.ok) throw new Error(data.error ?? "Upload failed");
      if (data.url && data.key) {
        const id = generateImageId();
        const newImg: AdditionalImage = {
          id: id,
          url: data.url,
          key: data.key,
          alt: id, // Default alt to the image ID
        };
        setAdditionalImages((prev) => [...prev, newImg]);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploadingAdditional(false);
      setIsDirty(true);
      // Reset the file input
      e.target.value = "";
    }
  }

  function updateAdditionalImageAlt(id: string, alt: string) {
    setAdditionalImages((prev) =>
      prev.map((img) => (img.id === id ? { ...img, alt: alt } : img))
    );
  }

  function removeAdditionalImage(id: string) {
    setAdditionalImages((prev) => prev.filter((img) => img.id !== id));
    setIsDirty(true);
  }

  function copyImageId(id: string) {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  }

  // ----- FAQ helpers -----
  function addFaq() {
    setFaqs((prev) => [...prev, { question: "", answer: "" }]);
    setIsDirty(true);
  }

  function updateFaq(index: number, field: "question" | "answer", value: string) {
    setFaqs((prev) =>
      prev.map((faq, i) => (i === index ? { ...faq, [field]: value } : faq))
    );
    setIsDirty(true);
  }

  function removeFaq(index: number) {
    setFaqs((prev) => prev.filter((_, i) => i !== index));
    setIsDirty(true);
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

      // Build FAQs array from the visual builder (filter out empty entries)
      const faqsPayload = faqs
        .filter((f) => f.question.trim() && f.answer.trim())
        .length > 0
        ? faqs.filter((f) => f.question.trim() && f.answer.trim())
        : undefined;

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
        imageAlt: form.imageAlt || undefined,
        additionalImages:
          additionalImages.length > 0 ? additionalImages : undefined,
        content: form.content || undefined,
        isProfessional: form.isProfessional,
        published: form.published,
        tags: form.tags
          ? form.tags.split(",").map((t) => t.trim()).filter(Boolean)
          : undefined,
        metaTitle: form.metaTitle || undefined,
        metaDescription: form.metaDescription || undefined,
        focusKeyword: form.focusKeyword || undefined,
        secondaryKeywords: form.secondaryKeywords || undefined,
        canonicalUrl: form.canonicalUrl || undefined,
        metaRobotsIndex: form.metaRobotsIndex?.trim() || "index",
        metaRobotsFollow: form.metaRobotsFollow?.trim() || "follow",
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
        faqs: faqsPayload,
      };
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Save failed");
      setIsDirty(false);
      router.push("/admin/posts");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  }

  // --- Leave-confirmation handlers ---
  const isDirtyRef = useRef(isDirty);
  useEffect(() => {
    isDirtyRef.current = isDirty;
  }, [isDirty]);

  useEffect(() => {
    const shouldWarn = !postId || isDirty;

    // Push a dummy state to history. When the user clicks back,
    // they'll go from this dummy state back to the 'real' state of the page,
    // which triggers the popstate event but stays on the same page visually.
    if (typeof window !== "undefined") {
      window.history.pushState({ ...window.history.state, stay: true }, "", window.location.href);
    }

    function onBeforeUnload(e: BeforeUnloadEvent) {
      if (!(!postId || isDirtyRef.current)) return;
      e.preventDefault();
      e.returnValue = "You have unsaved changes. Are you sure you want to leave?";
      return e.returnValue;
    }

    function onPopState(e: PopStateEvent) {
      // If we're on the dummy state we just pushed, ignore it.
      if (e.state?.stay) return;

      const currentShouldWarn = !postId || isDirtyRef.current;
      if (!currentShouldWarn) {
        // If we don't need to warn, we've already popped once, but our dummy state was "ahead".
        // So we might need to go back again to get to the actual previous page.
        // Actually, the most reliable way here is to just allow the navigation.
        return;
      }

      // We were on the dummy state and user clicked back, so we are now on the "real" entry.
      // Show modal and push the dummy state back to "undo" the back button.
      setShowConfirmModal(true);
      pendingPopRef.current = true;
      window.history.pushState({ ...window.history.state, stay: true }, "", window.location.href);
    }

    function onClickCapture(e: MouseEvent) {
      const currentShouldWarn = !postId || isDirtyRef.current;
      if (!currentShouldWarn) return;

      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest && (target.closest("a") as HTMLAnchorElement | null);
      if (!anchor) return;
      if (anchor.target === "_blank") return;

      const href = anchor.href;
      if (!href) return;

      // Only intercept same-origin navigations
      try {
        const url = new URL(href);
        if (url.origin !== window.location.origin) return;

        // If it's a hash link on the same page, don't intercept
        if (url.pathname === window.location.pathname && url.search === window.location.search) return;
      } catch {
        return;
      }

      e.preventDefault();
      pendingHrefRef.current = href;
      setShowConfirmModal(true);
    }

    window.addEventListener("beforeunload", onBeforeUnload);
    window.addEventListener("popstate", onPopState);
    document.addEventListener("click", onClickCapture, true);

    return () => {
      window.removeEventListener("beforeunload", onBeforeUnload);
      window.removeEventListener("popstate", onPopState);
      document.removeEventListener("click", onClickCapture, true);
    };
  }, [postId]); // Only depend on postId to avoid multiple history pushes

  function confirmLeave() {
    setShowConfirmModal(false);
    const href = pendingHrefRef.current;
    const pop = pendingPopRef.current;
    pendingHrefRef.current = null;
    pendingPopRef.current = false;

    // Set isDirty to false so we don't trigger the warning again
    setIsDirty(false);
    isDirtyRef.current = false;

    if (href) {
      router.push(href);
    } else if (pop) {
      // We are on the dummy state (index 2).
      // Index 1 is the real page. Index 0 is the Dashboard.
      // We want to go back to Dashboard, so we go back twice.
      window.history.go(-2);
    } else {
      router.back();
    }
  }

  function cancelLeave() {
    setShowConfirmModal(false);
    pendingHrefRef.current = null;
    pendingPopRef.current = false;
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
          placeholder="Bitcoin, Crypto Basket, Institutional"
          className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-white focus:border-[#FDBE35] focus:outline-none"
        />
        <p className="mt-1 text-xs text-[rgba(255,255,255,0.5)]">Comma-separated. URLs use hyphens (e.g. /tag/crypto-basket)</p>
      </div>

      {/* ===== Cover Image ===== */}
      <div>
        <label className="mb-1 block text-sm text-[rgba(255,255,255,0.7)]">
          Cover image (main)
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
            <div className="flex flex-col gap-2">
              <Image
                src={form.imageUrl}
                alt={form.imageAlt || "Cover"}
                width={96}
                height={96}
                className="h-24 w-auto rounded border border-[rgba(255,255,255,0.1)] object-cover"
              />
              <input
                type="text"
                value={form.imageAlt}
                onChange={(e) => update({ imageAlt: e.target.value })}
                placeholder="Cover image alt text"
                className="w-full max-w-xs rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-3 py-1.5 text-sm text-white focus:border-[#FDBE35] focus:outline-none"
              />
            </div>
          )}
        </div>
      </div>

      {/* ===== Additional Images ===== */}
      <div className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-base font-medium text-white">
            Additional Images{" "}
            <span className="text-sm font-normal text-[rgba(255,255,255,0.5)]">
              ({additionalImages.length}/3)
            </span>
          </h3>
          {additionalImages.length < 3 && (
            <label className="flex cursor-pointer items-center gap-2 rounded-lg bg-[#FDBE35] px-3 py-1.5 text-sm font-medium text-[#020100] transition-colors hover:bg-[#FDDA93]">
              <Plus className="h-4 w-4" />
              Upload Image
              <input
                type="file"
                accept="image/*"
                onChange={handleAdditionalImageUpload}
                disabled={uploadingAdditional}
                className="hidden"
              />
            </label>
          )}
        </div>
        {uploadingAdditional && (
          <p className="mb-3 text-sm text-[rgba(255,255,255,0.5)]">
            Uploading…
          </p>
        )}
        <p className="mb-4 text-xs text-[rgba(255,255,255,0.4)]">
          Upload images, copy their ID, then use the 📷 button in the editor to insert them into your content.
        </p>
        {additionalImages.length === 0 ? (
          <p className="text-sm text-[rgba(255,255,255,0.3)]">
            No additional images uploaded yet.
          </p>
        ) : (
          <div className="grid gap-3 sm:grid-cols-3">
            {additionalImages.map((img) => (
              <div
                key={img.id}
                className="relative flex flex-col items-center gap-2 rounded-lg border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] p-3"
              >
                <img
                  src={img.url}
                  alt={img.id}
                  className="h-20 w-full rounded object-cover"
                />
                <div className="flex w-full items-center justify-between gap-1">
                  <span className="truncate font-mono text-xs text-[#FDBE35]">
                    {img.id}
                  </span>
                  <input
                    type="text"
                    value={img.alt}
                    onChange={(e) => updateAdditionalImageAlt(img.id, e.target.value)}
                    placeholder="Alt text"
                    className="w-full rounded border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-2 py-1 text-xs text-white focus:border-[#FDBE35] focus:outline-none"
                  />
                  <div className="flex w-full items-center justify-between gap-1 mt-1">
                    <button
                      type="button"
                      onClick={() => copyImageId(img.id)}
                      className="flex h-6 w-6 items-center justify-center rounded border border-[rgba(255,255,255,0.2)] text-[rgba(255,255,255,0.6)] hover:text-white"
                      title="Copy ID"
                    >
                      {copiedId === img.id ? (
                        <Check className="h-3 w-3 text-green-400" />
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => removeAdditionalImage(img.id)}
                      className="flex h-6 w-6 items-center justify-center rounded border border-red-500/30 text-red-400 hover:bg-red-500/10"
                      title="Remove"
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
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
                value={form.metaRobotsIndex || "index"}
                onChange={(e) => update({ metaRobotsIndex: e.target.value })}
                className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-white focus:border-[#FDBE35] focus:outline-none"
              >
                <option value="index">index</option>
                <option value="noindex">noindex</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm text-[rgba(255,255,255,0.7)]">
                Meta Robots — Follow
              </label>
              <select
                value={form.metaRobotsFollow || "follow"}
                onChange={(e) => update({ metaRobotsFollow: e.target.value })}
                className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-white focus:border-[#FDBE35] focus:outline-none"
              >
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

          {/* ===== FAQ Visual Builder ===== */}
          <div className="mt-2 rounded-lg border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] p-4">
            <div className="mb-3 flex items-center justify-between">
              <label className="text-sm font-medium text-[rgba(255,255,255,0.7)]">
                FAQs{" "}
                <span className="font-normal text-[rgba(255,255,255,0.4)]">
                  (for JSON-LD schema)
                </span>
              </label>
              <button
                type="button"
                onClick={addFaq}
                className="flex items-center gap-1.5 rounded-lg bg-[#FDBE35] px-3 py-1.5 text-sm font-medium text-[#020100] transition-colors hover:bg-[#FDDA93]"
              >
                <Plus className="h-3.5 w-3.5" />
                Add FAQ
              </button>
            </div>
            {faqs.length === 0 ? (
              <p className="text-sm text-[rgba(255,255,255,0.3)]">
                No FAQs added yet. Click &quot;Add FAQ&quot; to add a question and answer.
              </p>
            ) : (
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="relative rounded-lg border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] p-4"
                  >
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-xs font-medium text-[rgba(255,255,255,0.5)]">
                        FAQ #{index + 1}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeFaq(index)}
                        className="flex h-6 w-6 items-center justify-center rounded border border-red-500/30 text-red-400 hover:bg-red-500/10"
                        title="Remove FAQ"
                      >
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <label className="mb-1 block text-xs text-[rgba(255,255,255,0.5)]">
                          Question
                        </label>
                        <input
                          type="text"
                          value={faq.question}
                          onChange={(e) =>
                            updateFaq(index, "question", e.target.value)
                          }
                          placeholder="e.g. What is crypto regulation in India?"
                          className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-3 py-2 text-sm text-white focus:border-[#FDBE35] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="mb-1 block text-xs text-[rgba(255,255,255,0.5)]">
                          Answer
                        </label>
                        <textarea
                          value={faq.answer}
                          onChange={(e) =>
                            updateFaq(index, "answer", e.target.value)
                          }
                          rows={2}
                          placeholder="Enter the answer..."
                          className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-3 py-2 text-sm text-white focus:border-[#FDBE35] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
          additionalImages={additionalImages}
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
      {showConfirmModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={cancelLeave} />
          <div className="relative w-full max-w-md rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[#0B0B0B] p-6 text-white shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
            <div className="mb-4 inline-flex rounded-full border border-[#FDBE35]/30 bg-[#FDBE35]/10 px-3 py-1 text-xs font-medium tracking-wide text-[#FDBE35]">
              Confirm navigation
            </div>
            <h3 className="text-xl font-semibold">Are you sure you want to leave?</h3>
            <p className="mt-2 text-sm leading-6 text-[rgba(255,255,255,0.72)]">
              If you leave this page, any unsaved changes will be lost. Make sure to save your work before navigating away.
            </p>
            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={cancelLeave}
                className="rounded-xl border border-[rgba(255,255,255,0.16)] px-4 py-2 text-sm text-white transition-colors hover:bg-[rgba(255,255,255,0.06)]"
              >
                Stay here
              </button>
              <button
                type="button"
                onClick={confirmLeave}
                className="rounded-xl bg-[#FDBE35] px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-[#FDDA93]"
              >
                Yes, leave
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
