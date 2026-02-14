"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Plus,
  Trash2,
  Heading2,
  Heading3,
  List,
  Quote,
  Type,
} from "lucide-react";
import {
  plainTextTemplateToHtml,
  DEFAULT_PLAIN_TEMPLATE,
} from "@/app/lib/plainTextToHtml";
import { getTocFromContent } from "@/app/lib/tocFromContent";

type Template = {
  id: string;
  name: string;
  content: string;
  createdAt: string;
};

export default function AdminTemplatesPage() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [showCreate, setShowCreate] = useState(false);
  const [newName, setNewName] = useState("");
  const [newContent, setNewContent] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const templateTextareaRef = useRef<HTMLTextAreaElement>(null);

  function insertTemplateSnippet(snippet: string) {
    const ta = templateTextareaRef.current;
    if (!ta) return;
    const start = ta.selectionStart;
    const end = ta.selectionEnd;
    const text = newContent;
    const before = text.slice(0, start);
    const after = text.slice(end);
    const newText = before + snippet + after;
    setNewContent(newText);
    const newCursor = start + snippet.length;
    setTimeout(() => {
      ta.focus();
      ta.setSelectionRange(newCursor, newCursor);
    }, 0);
  }

  const tbClass =
    "flex h-8 w-8 items-center justify-center rounded border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] text-[rgba(255,255,255,0.8)] hover:bg-[rgba(255,255,255,0.1)] hover:text-white";

  useEffect(() => {
    fetch("/api/admin/templates")
      .then((res) => res.json())
      .then((data) => setTemplates(Array.isArray(data) ? data : []))
      .catch(() => setTemplates([]))
      .finally(() => setLoading(false));
  }, []);

  async function handleDelete(id: string) {
    if (!confirm("Delete this template?")) return;
    setDeletingId(id);
    try {
      const res = await fetch(`/api/admin/templates/${id}`, { method: "DELETE" });
      if (res.ok) {
        setTemplates((prev) => prev.filter((t) => t.id !== id));
      } else {
        const data = await res.json();
        setError(data.error ?? "Delete failed");
      }
    } finally {
      setDeletingId(null);
    }
  }

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const htmlContent = plainTextTemplateToHtml(newContent);
      const res = await fetch("/api/admin/templates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newName.trim(), content: htmlContent }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Create failed");
      setTemplates((prev) => [data, ...prev]);
      setNewName("");
      setNewContent("");
      setShowCreate(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Create failed");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <p className="text-[rgba(255,255,255,0.6)]">Loading templates…</p>;
  }

  return (
    <div>
      <div className="mb-6 flex items-center gap-4">
        <Link
          href="/admin"
          className="text-sm text-[rgba(255,255,255,0.6)] hover:text-white"
        >
          ← Dashboard
        </Link>
      </div>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold">Templates</h1>
        <button
          type="button"
          onClick={() => setShowCreate((v) => !v)}
          className="flex items-center gap-2 rounded-lg bg-[#FDBE35] px-4 py-2 text-[#020100] hover:bg-[#FDDA93]"
        >
          <Plus className="h-4 w-4" />
          New template
        </button>
      </div>

      {error && (
        <p className="mb-4 rounded-lg bg-red-500/20 px-3 py-2 text-sm text-red-400">
          {error}
        </p>
      )}

      {showCreate && (
        <form
          onSubmit={handleCreate}
          className="mb-8 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] p-6"
        >
          <h2 className="mb-4 font-medium">Create template</h2>
          <p className="mb-4 text-sm text-[rgba(255,255,255,0.6)]">
            Write in plain text. Use [brackets] for placeholders. Sections in [brackets] become <strong>H2 headings</strong> and will appear in the post&apos;s <strong>table of contents</strong>. Lines like [Label]: [Detail] become bold labels. Use &quot;quotes&quot; for blockquotes. No HTML needed.
          </p>
          <div className="mb-4">
            <label className="mb-1 block text-sm text-[rgba(255,255,255,0.7)]">
              Name
            </label>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              required
              placeholder="e.g. Market Analysis"
              className="w-full max-w-md rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-white focus:border-[#FDBE35] focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <div className="mb-1 flex items-center justify-between">
              <label className="block text-sm text-[rgba(255,255,255,0.7)]">
                Content (plain text)
              </label>
              <button
                type="button"
                onClick={() => setNewContent(DEFAULT_PLAIN_TEMPLATE)}
                className="text-sm text-[#FDBE35] hover:text-[#FDDA93]"
              >
                Use default structure
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-1 rounded-t-lg border border-b-0 border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.03)] p-1">
              <span className="mr-1 text-xs text-[rgba(255,255,255,0.5)]">Insert:</span>
              <button
                type="button"
                onClick={() =>
                  insertTemplateSnippet("\n[Section heading]\n")
                }
                className={tbClass}
                title="H2 — appears in table of contents"
              >
                <Heading2 className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() =>
                  insertTemplateSnippet("\n[[Subsection heading]]\n")
                }
                className={tbClass}
                title="H3 — double brackets"
              >
                <Heading3 className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() =>
                  insertTemplateSnippet("\n[Label]: [Detail]\n")
                }
                className={tbClass}
                title="List item with bold label"
              >
                <List className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() =>
                  insertTemplateSnippet("\n[List item.]\n")
                }
                className={tbClass}
                title="Plain list item"
              >
                <Type className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() =>
                  insertTemplateSnippet('\n"[Quote text.]"\n')
                }
                className={tbClass}
                title="Blockquote"
              >
                <Quote className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() =>
                  insertTemplateSnippet("\n[Paragraph text.]\n")
                }
                className={`${tbClass} text-xs`}
                title="Paragraph placeholder"
              >
                ¶
              </button>
            </div>
            <textarea
              ref={templateTextareaRef}
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              rows={28}
              placeholder={DEFAULT_PLAIN_TEMPLATE.slice(0, 200) + "…"}
              className="w-full rounded-b-lg rounded-t-none border border-[rgba(255,255,255,0.2)] border-t-0 bg-[rgba(255,255,255,0.05)] px-4 py-2 text-sm leading-relaxed text-white placeholder:text-[rgba(255,255,255,0.35)] focus:border-[#FDBE35] focus:outline-none"
            />
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              disabled={saving}
              className="rounded-lg bg-[#FDBE35] px-4 py-2 text-[#020100] disabled:opacity-60"
            >
              {saving ? "Saving…" : "Create"}
            </button>
            <button
              type="button"
              onClick={() => setShowCreate(false)}
              className="rounded-lg border border-[rgba(255,255,255,0.2)] px-4 py-2 hover:bg-[rgba(255,255,255,0.05)]"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {templates.length === 0 && !showCreate ? (
        <p className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] p-8 text-center text-[rgba(255,255,255,0.6)]">
          No templates yet. Create one or run <code className="rounded bg-black/30 px-1">npm run db:seed</code> to add the default investment templates.
        </p>
      ) : (
        <div className="space-y-3">
          {templates.map((t) => {
            const tocItems = getTocFromContent(t.content);
            return (
            <div
              key={t.id}
              className="flex items-center justify-between rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] p-4"
            >
              <div>
                <p className="font-medium">{t.name}</p>
                <p className="text-xs text-[rgba(255,255,255,0.5)]">
                  {t.content.length} chars
                </p>
                {tocItems.length > 0 ? (
                  <p className="mt-1 text-xs text-[rgba(255,255,255,0.6)]">
                    <span className="text-[#FDBE35]">Table of contents:</span>{" "}
                    {tocItems.map((i) => i.title).join(" → ")}
                  </p>
                ) : (
                  <p className="mt-1 text-xs text-[rgba(255,255,255,0.45)]">
                    No H2 headings — no table of contents in post
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href={`/admin/posts/new?templateId=${t.id}`}
                  className="rounded-lg border border-[#FDBE35]/50 px-3 py-1.5 text-sm text-[#FDBE35] hover:bg-[#FDBE35]/10"
                >
                  Use for new post
                </Link>
                <button
                  type="button"
                  onClick={() => handleDelete(t.id)}
                  disabled={deletingId === t.id}
                  className="rounded p-1.5 text-[rgba(255,255,255,0.5)] hover:bg-red-500/20 hover:text-red-400 disabled:opacity-50"
                  title="Delete"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          );
          })}
        </div>
      )}
    </div>
  );
}
