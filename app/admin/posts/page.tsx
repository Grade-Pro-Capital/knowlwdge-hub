"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Plus,
  Pencil,
  Trash2,
  Eye,
  EyeOff,
  Send,
  Check,
} from "lucide-react";

type Post = {
  id: string;
  slug: string;
  title: string;
  category: string;
  published: boolean;
  publishedAt: string;
  newsletterSentAt?: string | null;
  _count: { views: number };
};

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [sendingId, setSendingId] = useState<string | null>(null);

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

  async function handleSend(post: Post, force = false) {
    const prompt = force
      ? `Resend "${post.title}" to all active subscribers?`
      : `Send "${post.title}" to all active subscribers?`;
    if (!confirm(prompt)) return;
    setSendingId(post.id);
    try {
      const res = await fetch("/api/admin/newsletter/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId: post.id, force }),
      });
      const data = await res.json();
      if (res.ok) {
        setPosts((prev) =>
          prev.map((p) =>
            p.id === post.id
              ? { ...p, newsletterSentAt: new Date().toISOString() }
              : p
          )
        );
        alert(
          `Sent to ${data.successCount}/${data.recipientCount} subscribers` +
            (data.failCount ? ` (${data.failCount} failed).` : ".")
        );
      } else if (res.status === 409) {
        if (confirm(`${data.error} Resend anyway?`)) {
          await handleSend(post, true);
        }
      } else {
        alert(data.error ?? "Send failed");
      }
    } catch {
      alert("Send failed. Please try again.");
    } finally {
      setSendingId(null);
    }
  }

  if (loading) {
    return <p className="text-[rgba(255,255,255,0.6)]">Loading posts…</p>;
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Posts</h1>
        <Link
          href="/admin/posts/new"
          className="flex items-center gap-2 rounded-lg bg-[#FDBE35] px-4 py-2 text-[#020100] hover:bg-[#FDDA93]"
        >
          <Plus className="h-4 w-4" />
          New Post
        </Link>
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
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Newsletter</th>
                <th className="px-4 py-3">Views</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
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
                  </td>
                  <td className="px-4 py-3">
                    {post.published ? (
                      <div className="flex items-center gap-2">
                        <a
                          href={`/api/admin/newsletter/preview?postId=${post.id}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex rounded p-1.5 text-[rgba(255,255,255,0.6)] hover:bg-[rgba(255,255,255,0.1)] hover:text-white"
                          title="Preview email"
                        >
                          <Eye className="h-4 w-4" />
                        </a>
                        {post.newsletterSentAt ? (
                          <button
                            type="button"
                            onClick={() => handleSend(post, true)}
                            disabled={sendingId === post.id}
                            className="inline-flex items-center gap-1 rounded-full bg-green-500/15 px-2 py-0.5 text-xs text-green-400 hover:bg-green-500/25 disabled:opacity-50"
                            title={`Sent ${new Date(
                              post.newsletterSentAt
                            ).toLocaleString()} — click to resend`}
                          >
                            <Check className="h-3 w-3" />
                            {sendingId === post.id ? "Sending…" : "Sent"}
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() => handleSend(post, false)}
                            disabled={sendingId === post.id}
                            className="inline-flex items-center gap-1 rounded-full bg-[#FDBE35]/15 px-2.5 py-1 text-xs text-[#FDBE35] hover:bg-[#FDBE35]/25 disabled:opacity-50"
                          >
                            <Send className="h-3 w-3" />
                            {sendingId === post.id ? "Sending…" : "Send"}
                          </button>
                        )}
                      </div>
                    ) : (
                      <span className="text-xs text-[rgba(255,255,255,0.3)]">
                        —
                      </span>
                    )}
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
