import { ChevronRight, Star } from "lucide-react";
import { NewsletterForm } from "@/app/components/NewsletterForm";
// import { SiteFooter } from "@/app/components/SiteFooter";
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
        <section className="relative overflow-hidden pb-16 sm:pb-20 lg:pb-24">
          {/* Ambient glows */}
          <div className="pointer-events-none absolute right-1/4 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-[rgba(253,190,53,0.1)] blur-[120px]" />
          <div className="pointer-events-none absolute bottom-1/4 right-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-[rgba(53,218,255,0.1)] blur-[100px]" />

          {/* Interactive background grid (client-only, decorative) */}
          <InteractiveGrid />

          {/* Top vignette — fades the grid in beneath the navbar so the header
              blends into the hero instead of leaving a visible seam. */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-24 bg-linear-to-b from-[#020100] to-transparent" />

          {/* Bottom vignette — fades the hero into the page background so it blends
              into the Insights feed below instead of reading as a hard cut. */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-linear-to-b from-transparent to-[#020100]" />

          <div className="relative z-10 mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-16 px-4 pt-8 sm:px-8 sm:pt-10 lg:px-16 lg:pt-16">
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
      {/* <SiteFooter /> */}
    </div>
  );
}
