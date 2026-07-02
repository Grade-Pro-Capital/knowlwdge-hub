import { ChevronRight } from "lucide-react";
import { NewsletterForm } from "@/app/components/NewsletterForm";
import { SiteFooter } from "@/app/components/SiteFooter";
import { goldButtonClass } from "@/app/lib/ui";
import { p1071e4a } from "@/app/lib/svgPaths";
import { getPublishedPosts } from "@/app/lib/posts";
import { HomeShell } from "./HomeShell";

// Render from the live DB on each request so the hero H1 and post list are in
// the server HTML (indexable), and new/unpublished posts reflect immediately.
export const dynamic = "force-dynamic";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const { tab } = await searchParams;
  const initialTab: "all" | "professionals" =
    tab === "professionals" ? "professionals" : "all";

  const posts = await getPublishedPosts();

  return (
    <div className="min-h-screen bg-[#020100] text-white">
      <HomeShell initialPosts={posts} initialTab={initialTab}>
        {/* Hero Section — server-rendered so the H1 and hero copy are in the initial HTML */}
        <section className="relative overflow-hidden pt-8 pb-10 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(212,175,55,0.1)] via-transparent to-[rgba(0,150,200,0.1)]" />

          <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-16">
            <div className="mb-6 flex items-center gap-2 text-sm text-[rgba(255,255,255,0.6)]">
              <span>Insights</span>
              <ChevronRight className="h-4 w-4" />
              <span>Crypto Insights</span>
            </div>

            <div className="max-w-3xl">
              <h1 className="mb-6 text-4xl sm:text-5xl xl:text-6xl">
                <span className="mb-1 block text-3xl sm:text-4xl xl:text-5xl lg:whitespace-nowrap">
                  Intelligence-driven insights for
                </span>
                <span className="block bg-linear-to-r from-[#FDBE35] via-[#FDDA93] to-white bg-clip-text pb-2 font-semibold leading-tight text-transparent">
                  the Crypto Economy
                </span>
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-[rgba(255,255,255,0.7)] sm:text-xl">
                Research, analysis, and market intelligence designed for
                institutional investors, wealth advisors, and financial
                decision-makers navigating digital assets in India
              </p>
              <a
                href="/#insights"
                className={`${goldButtonClass} px-[1.125rem] py-2.5 text-sm`}
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
      </HomeShell>

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
      <SiteFooter />
    </div>
  );
}
