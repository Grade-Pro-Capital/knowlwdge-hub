"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Plus, Pencil, Trash2, Eye, EyeOff, ImageOff, ArrowDown, ArrowUp } from "lucide-react";
import { altTextGaps, hasAltTextGaps } from "@/app/lib/altText";
import { safeDateModified } from "@/app/lib/seo";

type Post = {
  id: string;
  slug: string;
  title: string;
  category: string;
  published: boolean;
  publishedAt: string;
  updatedAt: string;
  contentFreshnessDate: string | null;
  imageUrl: string | null;
  imageAlt: string | null;
  content: string | null;
  _count: { views: number };
};

type SortKey = "title" | "updated" | "views";

/** The "last updated" date the article page gives Google (dateModified). */
function lastUpdated(post: Post): string {
  return safeDateModified(post.contentFreshnessDate, new Date(post.updatedAt), new Date(post.publishedAt));
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

function SortHeader({
  label,
  active,
  desc,
  onClick,
}: {
  label: string;
  active: boolean;
  desc: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1 hover:text-white ${active ? "text-white" : ""}`}
      title={`Sort by ${label.toLowerCase()}`}
    >
      {label}
      {active && (desc ? <ArrowDown className="h-3 w-3" /> : <ArrowUp className="h-3 w-3" />)}
    </button>
  );
}

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [sort, setSort] = useState<{ key: SortKey; desc: boolean }>({ key: "updated", desc: true });

  const sorted = useMemo(() => {
    const value = (p: Post) =>
      sort.key === "title" ? p.title.toLowerCase() : sort.key === "views" ? p._count?.views ?? 0 : lastUpdated(p);
    return [...posts].sort((a, b) => {
      const [x, y] = [value(a), value(b)];
      const order = x < y ? -1 : x > y ? 1 : 0;
      return sort.desc ? -order : order;
    });
  }, [posts, sort]);

  // Clicking the active column flips the order; a new column starts newest/most first (A–Z for titles).
  const sortBy = (k: SortKey) => setSort((s) => ({ key: k, desc: s.key === k ? !s.desc : k !== "title" }));

  useEffect(() => {
    fetch("/api/admin/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(Array.isArray(data) ? data : []);
      })
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, []);

  async function handleDelete(id: string) {
    if (!confirm("Delete this post?")) return;
    setDeletingId(id);
    try {
      const res = await fetch(`/api/admin/posts/${id}`, { method: "DELETE" });
      if (res.ok) {
        setPosts((prev) => prev.filter((p) => p.id !== id));
      } else {
        const data = await res.json();
        alert(data.error ?? "Delete failed");
      }
    } finally {
      setDeletingId(null);
    }
  }

  if (loading) {
    return <p className="text-[rgba(255,255,255,0.6)]">Loading posts…</p>;
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Posts</h1>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/posts/seo"
            className="rounded-lg border border-[rgba(255,255,255,0.2)] px-4 py-2 text-sm text-[rgba(255,255,255,0.8)] hover:bg-[rgba(255,255,255,0.05)]"
          >
            Edit SEO in bulk
          </Link>
          <Link
            href="/admin/posts/new"
            className="flex items-center gap-2 rounded-lg bg-[#FDBE35] px-4 py-2 text-[#020100] hover:bg-[#FDDA93]"
          >
            <Plus className="h-4 w-4" />
            New Post
          </Link>
        </div>
      </div>

      {posts.length === 0 ? (
        <p className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] p-8 text-center text-[rgba(255,255,255,0.6)]">
          No posts yet. Create your first post.
        </p>
      ) : (
        <div className="overflow-hidden rounded-xl border border-[rgba(255,255,255,0.1)]">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] text-left text-sm text-[rgba(255,255,255,0.7)]">
                <th className="px-4 py-3">
                  <SortHeader label="Title" active={sort.key === "title"} desc={sort.desc} onClick={() => sortBy("title")} />
                </th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">
                  <SortHeader label="Last updated" active={sort.key === "updated"} desc={sort.desc} onClick={() => sortBy("updated")} />
                </th>
                <th className="px-4 py-3">
                  <SortHeader label="Views" active={sort.key === "views"} desc={sort.desc} onClick={() => sortBy("views")} />
                </th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((post) => (
                <tr
                  key={post.id}
                  className="border-b border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.02)]"
                >
                  <td className="px-4 py-3">
                    <Link
                      href={`/admin/posts/${post.id}/edit`}
                      className="font-medium hover:text-[#FDBE35]"
                    >
                      {post.title}
                    </Link>
                    <div className="text-xs text-[rgba(255,255,255,0.5)]">
                      /{post.slug}
                    </div>
                  </td>
                  <td className="px-4 py-3">{post.category}</td>
                  <td className="px-4 py-3">
                    {post.published ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-green-500/20 px-2 py-0.5 text-xs text-green-400">
                        <Eye className="h-3 w-3" /> Published
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/20 px-2 py-0.5 text-xs text-amber-400">
                        <EyeOff className="h-3 w-3" /> Draft
                      </span>
                    )}
                    {hasAltTextGaps(altTextGaps(post)) && (
                      <span
                        className="mt-1 flex w-fit items-center gap-1 rounded-full bg-red-500/15 px-2 py-0.5 text-xs text-red-300"
                        title="Some images in this article have no alt text; it can't be saved until they do."
                      >
                        <ImageOff className="h-3 w-3" /> Missing alt text
                      </span>
                    )}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-[rgba(255,255,255,0.7)]">
                    {formatDate(lastUpdated(post))}
                  </td>
                  <td className="px-4 py-3">{post._count?.views ?? 0}</td>
                  <td className="px-4 py-3 text-right">
                    <Link
                      href={`/admin/posts/${post.id}/edit`}
                      className="mr-2 inline-flex rounded p-1.5 text-[rgba(255,255,255,0.6)] hover:bg-[rgba(255,255,255,0.1)] hover:text-white"
                      title="Edit"
                    >
                      <Pencil className="h-4 w-4" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleDelete(post.id)}
                      disabled={deletingId === post.id}
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
