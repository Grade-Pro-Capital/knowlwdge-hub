"use client";

import { useState } from "react";
import Link from "next/link";
import { ImageWithFallback } from "@/app/components/ImageWithFallback";
import { SearchDropdown } from "@/app/components/SearchDropdown";
import { resolvePostImage } from "@/app/lib/images";
import type { BlogPost } from "@/app/data/blogData";
import { postPath } from "@/app/lib/blogPaths";

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
  // Every post is rendered so all article links are in the server HTML (crawlers
  // don't click "Load more" or switch tabs); posts outside the current view are
  // hidden until revealed. Their images are lazy, so they don't load until shown.
  const visibleIds = new Set(visiblePosts.map((post) => post.id));
  const feedPosts = [...visiblePosts, ...initialPosts.filter((post) => !visibleIds.has(post.id))];

  return (
    <>
      {/* Hero Section (server-rendered, passed through as children) */}
      {children}

      {/* Insights Section */}
      <section id="insights" className="pt-4 pb-12 sm:pt-6 sm:pb-16">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-16">
          <h2 className="sr-only">Latest Insights</h2>
          {/* Tabs, with the search box on the right (above the tabs on phones). The
              search sits outside the scrolling tab row so its dropdown isn't clipped. */}
          <div className="mb-8 flex flex-col-reverse gap-4 border-b border-[rgba(255,255,255,0.1)] sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-center gap-2 overflow-x-auto sm:gap-4">
              <button
                type="button"
                onClick={() => handleTabChange("all")}
                className={`relative shrink-0 whitespace-nowrap px-4 pb-3 transition-all sm:px-6 ${
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
                className={`relative shrink-0 whitespace-nowrap px-4 pb-3 transition-all sm:px-6 ${
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
            <div className="flex sm:pb-3">
              <SearchDropdown
                posts={initialPosts}
                query={searchQuery}
                onQueryChange={handleSearchQueryChange}
                filter={(post) =>
                  activeTab === "all" ? !post.isProfessional : !!post.isProfessional
                }
                placeholder="Search by title or tags…"
              />
            </div>
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
            <div className="grid grid-cols-1 gap-4 min-[400px]:grid-cols-2 min-[400px]:gap-3 sm:gap-6 lg:grid-cols-3 lg:gap-8">
              {feedPosts.map((post) => (
                <Link
                  key={post.id}
                  hidden={!visibleIds.has(post.id)}
                  href={postPath(post.slug)}
                  className="group overflow-hidden rounded-lg border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.06)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] transition-all hover:border-[rgba(212,175,55,0.3)] hover:bg-[rgba(255,255,255,0.09)]"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <ImageWithFallback
                      src={resolvePostImage(post.image)}
                      alt={post.title}
                      className="h-full w-full object-cover object-[center_35%] transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3.5 sm:p-4">
                    <span className="mb-2 inline-block rounded-full bg-[rgba(253,190,53,0.2)] px-2.5 py-0.5 text-[9.5px] leading-4 text-[#FDBE35] sm:text-[10.5px]">
                      {post.category}
                    </span>
                    <h3 className="mb-1.5 line-clamp-2 text-[13px] leading-snug transition-colors group-hover:text-[#FDBE35] sm:text-[14px] sm:leading-[1.35] lg:text-[15px]">
                      {post.title}
                    </h3>
                    <p className="mb-2.5 line-clamp-2 text-[11.5px] leading-[1.4] text-[rgba(255,255,255,0.7)] lg:text-[12px]">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[9.5px] leading-4 text-[rgba(255,255,255,0.6)] sm:gap-x-2 sm:text-[10.5px]">
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
