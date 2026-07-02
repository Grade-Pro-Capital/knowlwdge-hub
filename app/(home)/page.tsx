import { ChevronRight, PieChart, Star } from "lucide-react";
import { NewsletterForm } from "@/app/components/NewsletterForm";
import { SiteFooter } from "@/app/components/SiteFooter";
import { InteractiveGrid } from "@/app/components/InteractiveGrid";
import { goldButtonClass } from "@/app/lib/ui";
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
        <section className="relative overflow-hidden pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-16 lg:pb-24">
          {/* Ambient glows */}
          <div className="pointer-events-none absolute right-1/4 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-[rgba(253,190,53,0.1)] blur-[120px]" />
          <div className="pointer-events-none absolute bottom-1/4 right-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-[rgba(53,218,255,0.1)] blur-[100px]" />

          {/* Interactive background grid (client-only, decorative) */}
          <InteractiveGrid />

          {/* Bottom vignette — fades the hero into the page background so it blends
              into the Insights feed below instead of reading as a hard cut. */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-linear-to-b from-transparent to-[#020100]" />

          <div className="relative z-10 mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-16 px-4 sm:px-8 lg:grid-cols-2 lg:gap-24 lg:px-16">
            {/* Left column: copy & actions */}
            <div className="flex flex-col items-start gap-8">
              {/* Eyebrow */}
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#FDBE35]">
                <span className="h-2 w-2 rounded-full bg-[#FDBE35]" />
                Insights · Crypto Intelligence
              </div>

              {/* Headline */}
              <h1 className="text-4xl font-bold leading-tight text-white/90 sm:text-5xl xl:text-6xl">
                Intelligence-driven insights for{" "}
                <br className="hidden md:block" />
                <span className="bg-linear-to-r from-[#FDBE35] via-[#FDDA93] to-white bg-clip-text pb-2 text-transparent">
                  the Crypto Economy
                </span>
              </h1>

              {/* Subtext */}
              <p className="max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl">
                Research, analysis, and market intelligence designed for
                institutional investors, wealth advisors, and financial
                decision-makers navigating digital assets in India.
              </p>

              {/* CTAs */}
              <div className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
                <a
                  href="#insights"
                  className={`${goldButtonClass} px-8 py-4`}
                >
                  Explore Insights
                  <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href="#newsletter"
                  className="inline-flex items-center justify-center gap-2 rounded-[0.625rem] border border-white/20 bg-transparent px-8 py-4 font-semibold text-white transition-colors hover:bg-white/5"
                >
                  Subscribe to Newsletter
                </a>
              </div>

              {/* Stats row */}
              <div className="mt-8 flex w-full flex-wrap items-center gap-x-6 gap-y-4 border-t border-white/5 pt-8">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-[#FDBE35] text-[#FDBE35]" />
                  <span className="text-white/80">10+ Analysts on board</span>
                </div>
                <div className="hidden h-4 w-px bg-white/10 sm:block" />
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-[#FDBE35] text-[#FDBE35]" />
                  <span className="text-white/80">Weekly Market coverage</span>
                </div>
                <div className="hidden h-4 w-px bg-white/10 md:block" />
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-[#FDBE35] text-[#FDBE35]" />
                  <span className="text-white/80">
                    Institutional-grade research
                  </span>
                </div>
              </div>
            </div>

            {/* Right column: floating visual */}
            <div className="relative hidden h-[500px] w-full items-center justify-center lg:flex lg:h-[600px]">
              {/* Market ticker strip (back) */}
              <div className="glass-panel absolute right-0 top-10 w-64 rotate-3 rounded-lg p-4 opacity-60">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-semibold text-white/70">
                    BTC/USD
                  </span>
                  <span className="text-xs font-semibold text-[#35daff]">
                    +4.2%
                  </span>
                </div>
                <div className="flex h-8 w-full items-end gap-1">
                  <div className="h-full w-1/6 rounded-t-sm bg-[rgba(53,218,255,0.2)]" />
                  <div className="h-2/3 w-1/6 rounded-t-sm bg-[rgba(53,218,255,0.4)]" />
                  <div className="h-3/4 w-1/6 rounded-t-sm bg-[rgba(53,218,255,0.6)]" />
                  <div className="h-1/2 w-1/6 rounded-t-sm bg-[rgba(53,218,255,0.8)]" />
                  <div className="h-full w-1/6 rounded-t-sm bg-[#35daff]" />
                </div>
              </div>

              {/* Portfolio allocation card (behind) */}
              <div className="glass-panel floating-card-2 absolute left-4 top-24 z-10 w-[340px] rounded-xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-md lg:-left-12">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#2f2920]">
                    <PieChart className="h-5 w-5 text-white/70" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white/50">
                      PORTFOLIO ALLOCATION
                    </div>
                    <div className="font-semibold text-white">
                      Q3 Strategy Update
                    </div>
                  </div>
                </div>
                <div className="relative h-24 w-full overflow-hidden rounded border border-white/5 bg-linear-to-br from-[rgba(58,52,42,0.5)] to-transparent">
                  <svg
                    className="absolute bottom-0 h-full w-full"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 100"
                  >
                    <path
                      d="M0,100 L0,50 Q25,30 50,60 T100,20 L100,100 Z"
                      fill="rgba(53, 218, 255, 0.1)"
                    />
                    <path
                      d="M0,50 Q25,30 50,60 T100,20"
                      fill="none"
                      stroke="#35daff"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>

              {/* Featured analysis card (front) */}
              <div className="glass-panel-active floating-card-1 absolute z-20 w-[380px] rounded-xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl lg:w-[420px]">
                <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-[rgba(253,190,53,0.3)] bg-[rgba(253,190,53,0.1)] px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FDBE35]" />
                  <span className="text-xs font-semibold text-[#FDBE35]">
                    MARKET ANALYSIS
                  </span>
                </div>
                <h2 className="mb-6 text-2xl font-semibold leading-snug text-white">
                  Bitcoin ETF flows signal institutional rotation
                </h2>
                <div className="relative mb-6 h-20 w-full">
                  <svg
                    className="h-full w-full"
                    preserveAspectRatio="none"
                    viewBox="0 0 200 50"
                  >
                    <path
                      d="M0,40 C30,35 50,45 80,20 S120,30 150,10 S180,15 200,5"
                      fill="none"
                      stroke="rgba(253, 190, 53, 0.3)"
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M0,40 C30,35 50,45 80,20 S120,30 150,10 S180,15 200,5"
                      fill="none"
                      stroke="#FDBE35"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-linear-to-br from-[#FDBE35] to-[#5d4200] text-sm font-semibold text-black">
                    AV
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      Dr. Alaric Vance
                    </div>
                    <div className="text-xs text-white/50">
                      Lead Digital Asset Strategist
                    </div>
                  </div>
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
