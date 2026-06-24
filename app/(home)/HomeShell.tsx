"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/ImageWithFallback";
import { Logo } from "@/app/components/Logo";
import { SearchDropdown } from "@/app/components/SearchDropdown";
import { resolvePostImage } from "@/app/lib/images";
import type { BlogPost } from "@/app/data/blogData";

const POSTS_PER_PAGE = 6;

type HomeShellProps = {
  /** All published posts, fetched server-side and rendered into the initial HTML. */
  initialPosts: BlogPost[];
  /** Initial active tab, derived from the ?tab= query param on the server. */
  initialTab: "all" | "professionals";
  /** Server-rendered hero section (kept in HTML for SEO), slotted between header and feed. */
  children: React.ReactNode;
};

const ALL_CATEGORIES = "all";

export function HomeShell({ initialPosts, initialTab, children }: HomeShellProps) {
  const [activeTab, setActiveTab] = useState<"all" | "professionals">(initialTab);
  const [activeCategory, setActiveCategory] = useState<string>(ALL_CATEGORIES);
  const [searchQuery, setSearchQuery] = useState("");
  const [visiblePostCount, setVisiblePostCount] = useState(POSTS_PER_PAGE);

  const handleTabChange = (tab: "all" | "professionals") => {
    setActiveTab(tab);
    // Categories differ per tab, so reset the category filter when switching.
    setActiveCategory(ALL_CATEGORIES);
    setVisiblePostCount(POSTS_PER_PAGE);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisiblePostCount(POSTS_PER_PAGE);
  };

  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query);
    setVisiblePostCount(POSTS_PER_PAGE);
  };

  // Posts for the active tab — drives both the category chips and the feed.
  const tabPosts = initialPosts.filter((post) =>
    activeTab === "all" ? !post.isProfessional : post.isProfessional
  );

  // Distinct categories present in this tab, sorted alphabetically.
  const categories = [
    ...new Set(tabPosts.map((p) => p.category).filter(Boolean)),
  ].sort((a, b) => a.localeCompare(b));

  const filteredPosts = tabPosts.filter((post) => {
    const matchesCategory =
      activeCategory === ALL_CATEGORIES || post.category === activeCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      post.title.toLowerCase().includes(q) ||
      (Array.isArray(post.tags) && post.tags.some((t) => t.toLowerCase().includes(q)));
    return matchesCategory && matchesSearch;
  });
  const visiblePosts = filteredPosts.slice(0, visiblePostCount);
  const hasMorePosts = visiblePostCount < filteredPosts.length;

  return (
    <>
      {/* Header */}
      <header className="border-b border-[rgba(255,255,255,0.1)]">
        <div className="mx-auto max-w-[1600px] px-4 py-6 sm:px-8 lg:px-16">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Logo />

            <div className="flex w-full items-center gap-3 sm:w-auto">
              <SearchDropdown
                posts={initialPosts}
                query={searchQuery}
                onQueryChange={handleSearchQueryChange}
                filter={(post) =>
                  activeTab === "all" ? !post.isProfessional : !!post.isProfessional
                }
                placeholder="Search by title or tags…"
              />
              <a
                href="#newsletter"
                className="whitespace-nowrap rounded-lg bg-gradient-to-r from-[#FDBE35] to-[#FDDA93] px-6 py-2 text-[#020100] shadow-[0px_0px_30px_0px_rgba(212,175,55,0.5)] transition-all hover:shadow-[0px_0px_40px_0px_rgba(212,175,55,0.7)]"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section (server-rendered, passed through as children) */}
      {children}

      {/* Insights Section */}
      <section id="insights" className="py-12 sm:py-16">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-16">
          <h2 className="sr-only">Latest Insights</h2>
          <div className="mb-8 flex items-center gap-4 border-b border-[rgba(255,255,255,0.1)]">
            <button
              type="button"
              onClick={() => handleTabChange("all")}
              className={`relative px-6 pb-3 transition-all ${
                activeTab === "all"
                  ? "text-[#FDBE35]"
                  : "text-[rgba(255,255,255,0.6)] hover:text-white"
              }`}
            >
              All Insights
              {activeTab === "all" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d4af37]" />
              )}
            </button>
            <button
              type="button"
              onClick={() => handleTabChange("professionals")}
              className={`relative px-6 pb-3 transition-all ${
                activeTab === "professionals"
                  ? "text-[#FDBE35]"
                  : "text-[rgba(255,255,255,0.6)] hover:text-white"
              }`}
            >
              For Professionals
              {activeTab === "professionals" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d4af37]" />
              )}
            </button>
          </div>

          {categories.length > 0 && (
            <div className="mb-8 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => handleCategoryChange(ALL_CATEGORIES)}
                className={`rounded-full border px-4 py-1.5 text-sm transition-all ${
                  activeCategory === ALL_CATEGORIES
                    ? "border-[#FDBE35] bg-[rgba(253,190,53,0.15)] text-[#FDBE35]"
                    : "border-[rgba(255,255,255,0.15)] text-[rgba(255,255,255,0.7)] hover:border-[rgba(253,190,53,0.4)] hover:text-white"
                }`}
              >
                All Categories
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  className={`rounded-full border px-4 py-1.5 text-sm transition-all ${
                    activeCategory === category
                      ? "border-[#FDBE35] bg-[rgba(253,190,53,0.15)] text-[#FDBE35]"
                      : "border-[rgba(255,255,255,0.15)] text-[rgba(255,255,255,0.7)] hover:border-[rgba(253,190,53,0.4)] hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          {filteredPosts.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-[rgba(255,255,255,0.6)]">
                No posts found. Try a different search term or add posts from the admin.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {visiblePosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group overflow-hidden rounded-lg border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.03)] transition-all hover:border-[rgba(212,175,55,0.3)] hover:bg-[rgba(255,255,255,0.06)]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={resolvePostImage(post.image)}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="mb-3 inline-block rounded-full bg-[rgba(253,190,53,0.2)] px-3 py-1 text-xs text-[#FDBE35]">
                      {post.category}
                    </span>
                    <h3 className="mb-3 line-clamp-2 text-xl transition-colors group-hover:text-[#FDBE35]">
                      {post.title}
                    </h3>
                    <p className="mb-4 line-clamp-2 text-sm text-[rgba(255,255,255,0.7)]">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-[rgba(255,255,255,0.6)]">
                      <span>{post.author.name}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span>{post.publishedAt} ago</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {hasMorePosts && (
            <div className="mt-12 text-center">
              <button
                type="button"
                onClick={() =>
                  setVisiblePostCount((count) =>
                    Math.min(count + POSTS_PER_PAGE, filteredPosts.length)
                  )
                }
                className="rounded-lg border border-[#d4af37] px-8 py-3 text-[#FDBE35] transition-all hover:bg-[rgba(212,175,55,0.1)]"
              >
                Load more articles
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
