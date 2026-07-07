"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

export type SearchPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  tags?: string[];
  isProfessional?: boolean;
};

type SearchDropdownProps = {
  /** All posts (from initial fetch). Filtered client-side by query. */
  posts: SearchPost[];
  /** Current search query (controlled). */
  query: string;
  onQueryChange: (value: string) => void;
  /** Optional: filter posts by tab (e.g. professionals only). */
  filter?: (post: SearchPost) => boolean;
  /** Max results in dropdown. */
  maxResults?: number;
  /** Input placeholder. */
  placeholder?: string;
  /** Input class name. */
  className?: string;
};

export function SearchDropdown({
  posts,
  query,
  onQueryChange,
  filter = () => true,
  maxResults = 8,
  placeholder = "Search by title or tags…",
  className = "",
}: SearchDropdownProps) {
  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  const q = query.trim().toLowerCase();
  const filtered = q
    ? posts.filter((post) => {
        if (!filter(post)) return false;
        const titleMatch = post.title.toLowerCase().includes(q);
        const tagMatch = Array.isArray(post.tags) && post.tags.some((t) => t.toLowerCase().includes(q));
        return titleMatch || tagMatch;
      })
    : [];
  const results = filtered.slice(0, maxResults);

  useEffect(() => {
    setOpen(q.length > 0);
    setFocusedIndex(-1);
  }, [q]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!open || results.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex((i) => (i < results.length - 1 ? i + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex((i) => (i <= 0 ? results.length - 1 : i - 1));
    } else if (e.key === "Enter" && focusedIndex >= 0 && results[focusedIndex]) {
      e.preventDefault();
      window.location.href = `/blog/${results[focusedIndex].slug}`;
    } else if (e.key === "Escape") {
      setOpen(false);
      setFocusedIndex(-1);
    }
  }

  return (
    <div ref={containerRef} className="relative min-w-0 flex-1 sm:flex-initial">
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          onFocus={() => q.length > 0 && setOpen(true)}
          onKeyDown={handleKeyDown}
          className={`w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-transparent px-4 py-2 pl-10 text-sm text-white placeholder-[rgba(255,255,255,0.6)] focus:border-[#FDBE35] focus:outline-none sm:w-[260px] ${className}`}
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-label="Search by title or tags"
        />
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[rgba(255,255,255,0.6)]" />
      </div>

      {open && (
        <div
          className="absolute left-0 right-0 top-full z-50 mt-1 max-h-[min(70vh,400px)] overflow-auto rounded-lg border border-[rgba(255,255,255,0.15)] bg-[#0a0908] shadow-xl"
          role="listbox"
        >
          {results.length === 0 ? (
            <div className="px-4 py-6 text-center text-sm text-[rgba(255,255,255,0.6)]">
              No results for &quot;{query}&quot;
            </div>
          ) : (
            <ul className="py-2">
              {results.map((post, i) => (
                <li key={post.id} role="option" aria-selected={focusedIndex === i}>
                  <Link
                    href={`/blog/${post.slug}`}
                    onClick={() => setOpen(false)}
                    className={`block border-l-2 px-4 py-3 transition-colors ${
                      focusedIndex === i
                        ? "border-[#FDBE35] bg-[rgba(253,190,53,0.08)]"
                        : "border-transparent hover:bg-[rgba(255,255,255,0.05)]"
                    }`}
                  >
                    <div className="font-medium text-white line-clamp-1">{post.title}</div>
                    <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-[rgba(255,255,255,0.6)]">
                      <span>{post.category}</span>
                      {Array.isArray(post.tags) && post.tags.length > 0 && (
                        <>
                          <span>·</span>
                          <span>{post.tags.slice(0, 3).join(", ")}</span>
                        </>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
