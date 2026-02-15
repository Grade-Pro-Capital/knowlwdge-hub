"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./components/ImageWithFallback";
import { Logo } from "./components/Logo";
import { NewsletterForm } from "./components/NewsletterForm";
import { p1071e4a } from "./lib/svgPaths";
import type { BlogPost } from "./data/blogData";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"all" | "professionals">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(Array.isArray(data) ? data : []))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, []);

  const filteredPosts = posts.filter((post) => {
    const matchesTab =
      activeTab === "all" ? !post.isProfessional : post.isProfessional;
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#020100] text-white">
      {/* Header */}
      <header className="border-b border-[rgba(255,255,255,0.1)]">
        <div className="mx-auto max-w-[1600px] px-4 py-6 sm:px-8 lg:px-16">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Logo />

            <div className="flex w-full items-center gap-3 sm:w-auto">
              <div className="relative flex-1 sm:flex-initial">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-transparent px-4 py-2 pl-10 text-sm text-white placeholder-[rgba(255,255,255,0.6)] focus:border-[#d4af37] focus:outline-none sm:w-[200px]"
                />
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[rgba(255,255,255,0.6)]" />
              </div>
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

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(212,175,55,0.1)] via-transparent to-[rgba(0,150,200,0.1)]" />

        <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-16">
          <div className="mb-6 flex items-center gap-2 text-sm text-[rgba(255,255,255,0.6)]">
            <span>Insights</span>
            <ChevronRight className="h-4 w-4" />
            <span>Crypto Mutual Funds</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl">
              Intelligence-driven insights for the{" "}
              <span className="text-[#FDBE35]">Crypto Economy</span>
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-[rgba(255,255,255,0.7)] sm:text-xl">
              Research, analysis, and market intelligence designed for
              institutional investors, wealth advisors, and financial
              decision-makers navigating digital assets in India
            </p>
            <a
              href="#insights"
              className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#FDBE35] to-[#FDDA93] px-5 py-2 text-sm font-medium text-[#020100] shadow-[0px_0px_30px_0px_rgba(212,175,55,0.5)] transition-all hover:shadow-[0px_0px_40px_0px_rgba(212,175,55,0.7)]"
            >
              Explore Insights
              <ChevronRight className="h-4 w-4" />
            </a>

            <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8">
              <div>
                <div className="mb-1 flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl">10+</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="mb-1"
                  >
                    <path d={p1071e4a} fill="#FDBE35" />
                  </svg>
                </div>
                <p className="text-xs text-[rgba(255,255,255,0.6)] sm:text-sm">
                  Analysts on board
                </p>
              </div>
              <div>
                <div className="mb-1 flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl">Weekly</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="mb-1"
                  >
                    <path d={p1071e4a} fill="#FDBE35" />
                  </svg>
                </div>
                <p className="text-xs text-[rgba(255,255,255,0.6)] sm:text-sm">
                  Market coverage
                </p>
              </div>
              <div>
                <div className="mb-1 flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl">Expert</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="mb-1"
                  >
                    <path d={p1071e4a} fill="#FDBE35" />
                  </svg>
                </div>
                <p className="text-xs text-[rgba(255,255,255,0.6)] sm:text-sm">
                  Team of experts
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-12 sm:py-16">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-16">
          <div className="mb-8 flex items-center gap-4 border-b border-[rgba(255,255,255,0.1)]">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
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
              onClick={() => setActiveTab("professionals")}
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

          {loading ? (
            <div className="py-16 text-center">
              <p className="text-[rgba(255,255,255,0.6)]">Loading insights…</p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-[rgba(255,255,255,0.6)]">
                No posts found. Try a different search term or add posts from the admin.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {filteredPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/article/${post.slug}`}
                  className="group overflow-hidden rounded-lg border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.03)] transition-all hover:border-[rgba(212,175,55,0.3)] hover:bg-[rgba(255,255,255,0.06)]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={post.image?.startsWith("http") ? post.image : `https://source.unsplash.com/600x400/?${post.image || "crypto"}`}
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

          <div className="mt-12 text-center">
            <button
              type="button"
              className="rounded-lg border border-[#d4af37] px-8 py-3 text-[#FDBE35] transition-all hover:bg-[rgba(212,175,55,0.1)]"
            >
              Load more articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-16">
          <div className="rounded-2xl bg-gradient-to-br from-[rgba(212,175,55,0.1)] to-[rgba(0,150,200,0.05)] p-8 text-center sm:p-12">
            <h2 className="mb-4 text-3xl sm:text-4xl">
              Stay Ahead of <span className="text-[#FDBE35]">The Market</span>
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-[rgba(255,255,255,0.7)]">
              Weekly insights on crypto markets, regulatory updates, and
              institutional trends—delivered every Monday
            </p>
            <div className="mx-auto max-w-md">
              <NewsletterForm source="homepage" />
            </div>
            <p className="mt-4 text-xs text-[rgba(255,255,255,0.5)]">
              Your privacy is important to us. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[rgba(255,255,255,0.1)] py-12">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-16">
          <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <Logo linkToHome={true} />
              <p className="mt-4 text-sm text-[rgba(255,255,255,0.6)]">
                © {new Date().getFullYear()} Grade Capital
              </p>
            </div>

            {/* Footer links - commented out for now
            <div>
              <h4 className="mb-4 text-white">Insights</h4>
              <ul className="space-y-2 text-sm text-[rgba(255,255,255,0.6)]">
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Investment in Crypto
                  </Link>
                </li>
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Detailed Crypto Research
                  </Link>
                </li>
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    For Crypto Professionals
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-white">For Professionals</h4>
              <ul className="space-y-2 text-sm text-[rgba(255,255,255,0.6)]">
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Compliance & Consulting
                  </Link>
                </li>
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Due Diligence Data Sets
                  </Link>
                </li>
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Strategy Analysis
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-white">Resources</h4>
              <ul className="space-y-2 text-sm text-[rgba(255,255,255,0.6)]">
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Whitepaper
                  </Link>
                </li>
              </ul>
            </div>
            */}

          </div>

          {/* Bottom footer links - commented out for now
          <div className="flex flex-col items-center justify-between gap-4 border-t border-[rgba(255,255,255,0.05)] pt-8 text-sm text-[rgba(255,255,255,0.6)] sm:flex-row">
            <div className="flex items-center gap-4">
              <Link href="/" className="transition-colors hover:text-white">
                English
              </Link>
              <span>•</span>
              <Link href="/" className="transition-colors hover:text-white">
                Contacts
              </Link>
              <span>•</span>
              <Link href="/" className="transition-colors hover:text-white">
                EULA
              </Link>
            </div>
          </div>
          */}
        </div>
      </footer>
    </div>
  );
}
