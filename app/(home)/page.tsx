import Link from "next/link";
import { CalendarDays, Check, ChevronRight, Mail, ShieldCheck, Star } from "lucide-react";
import { NewsletterForm } from "@/app/components/NewsletterForm";
// import { SiteFooter } from "@/app/components/SiteFooter";
import { HeroBeams } from "@/app/components/HeroBeams";
import { HeroAurora } from "@/app/components/HeroAurora";
import { HeroConstellation } from "@/app/components/HeroConstellation";
import { HeroSpotlight } from "@/app/components/HeroSpotlight";
import { HeroImageBg } from "@/app/components/HeroImageBg";
import { InteractiveGrid } from "@/app/components/InteractiveGrid";
import { goldButtonClass } from "@/app/lib/ui";
import { getPublishedPosts } from "@/app/lib/posts";
import { HomeShell } from "./HomeShell";

// TEMPORARY: hero-background chooser. Flip via ?bg=<key> to preview each option
// live, then keep the winner and delete this switcher + the unused components.
const HERO_BACKGROUNDS = {
  aurora: { label: "Aurora", render: () => <HeroAurora /> },
  constellation: { label: "Constellation", render: () => <HeroConstellation /> },
  spotlight: { label: "Spotlight dots", render: () => <HeroSpotlight /> },
  image: { label: "Image + vignette", render: () => <HeroImageBg /> },
  beams: { label: "Light beams", render: () => <HeroBeams /> },
  grid: { label: "Old grid", render: () => <InteractiveGrid /> },
  none: { label: "None", render: () => null },
} as const;
type HeroBgKey = keyof typeof HERO_BACKGROUNDS;

// Render from the live DB on each request so the hero H1 and post list are in
// the server HTML (indexable), and new/unpublished posts reflect immediately.
export const dynamic = "force-dynamic";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string; bg?: string }>;
}) {
  const { tab, bg } = await searchParams;
  const initialTab: "all" | "professionals" =
    tab === "professionals" ? "professionals" : "all";

  // TEMPORARY: pick the hero background from ?bg=, defaulting to aurora.
  const bgKey: HeroBgKey =
    bg && bg in HERO_BACKGROUNDS ? (bg as HeroBgKey) : "aurora";

  const posts = await getPublishedPosts();

  return (
    <div className="min-h-screen bg-[#020100] text-white">
      <HomeShell initialPosts={posts} initialTab={initialTab}>
        {/* Hero Section — server-rendered so the H1 and hero copy are in the initial HTML */}
        <section className="relative overflow-hidden pb-16 sm:pb-20 lg:pb-24">
          {/* Ambient glows */}
          <div className="pointer-events-none absolute right-1/4 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-[rgba(253,190,53,0.1)] blur-[120px]" />
          <div className="pointer-events-none absolute bottom-1/4 right-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-[rgba(53,218,255,0.1)] blur-[100px]" />

          {/* TEMPORARY: hero background chosen via ?bg= (decorative) */}
          {HERO_BACKGROUNDS[bgKey].render()}

          {/* Top vignette — fades the grid in beneath the navbar so the header
              blends into the hero instead of leaving a visible seam. */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-24 bg-linear-to-b from-[#020100] to-transparent" />

          {/* Bottom vignette — fades the hero into the page background so it blends
              into the Insights feed below instead of reading as a hard cut. */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-linear-to-b from-transparent to-[#020100]" />

          <div className="relative z-10 mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-16 px-4 pt-2 sm:px-8 sm:pt-4 lg:px-16 lg:pt-6">
            {/* Left column: copy & actions. When the photo background is active,
                cap the width so the copy stays clear of the laptop on the right
                (other backgrounds are unaffected). */}
            <div
              className={`flex flex-col items-start gap-8 ${
                bgKey === "image" ? "lg:max-w-[600px]" : ""
              }`}
            >
              {/* Breadcrumb — mobile only (matches design) */}
              <div className="flex items-center gap-1.5 text-sm text-white/50 sm:hidden">
                Insights
                <ChevronRight className="h-3.5 w-3.5" />
                Crypto Insights
              </div>

              {/* Eyebrow — sm and up */}
              <div className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#FDBE35] sm:flex">
                <span className="h-2 w-2 rounded-full bg-[#FDBE35]" />
                Insights · Crypto Intelligence
              </div>

              {/* Headline */}
              <h1 className="break-words text-3xl font-light leading-tight text-white/90 sm:text-4xl sm:font-medium xl:text-5xl">
                Intelligence-driven insights for{" "}
                <br className="hidden md:block" />
                <span className="bg-linear-to-r from-[#FDBE35] via-[#FDDA93] to-white bg-clip-text pb-2 text-transparent">
                  the Crypto Economy
                </span>
              </h1>

              {/* Subtext */}
              <p className="max-w-2xl text-sm font-light leading-relaxed text-white/40 sm:text-xl sm:text-white/60">
                Research, analysis, and market intelligence designed for
                institutional investors, wealth advisors, and financial
                decision-makers navigating digital assets in India.
              </p>

              {/* CTAs */}
              <div className="flex w-auto flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a
                  href="#insights"
                  className={`${goldButtonClass} px-6 py-3 text-sm sm:px-8 sm:py-4 sm:text-base`}
                >
                  Explore Insights
                  <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href="#newsletter"
                  className="hidden items-center justify-center gap-2 rounded-[0.625rem] border border-white/20 bg-transparent px-8 py-4 font-semibold text-white transition-colors hover:bg-white/5 sm:inline-flex"
                >
                  Subscribe to Newsletter
                </a>
              </div>

              {/* Stats row — mobile/tablet: 3-column "big value + label" block */}
              <div className="mt-8 grid w-full grid-cols-3 gap-3 border-t border-white/5 pt-8 lg:hidden">
                {[
                  { value: "10+", label: "Analysts on board" },
                  { value: "Weekly", label: "Market coverage" },
                  { value: "Expert", label: "Team of experts" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="flex items-start gap-1">
                      <span className="text-2xl font-normal text-white sm:text-3xl">
                        {stat.value}
                      </span>
                      <Star className="mt-1 h-3 w-3 shrink-0 fill-[#FDBE35] text-[#FDBE35]" />
                    </div>
                    <p className="mt-1 text-xs text-white/50 sm:text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Stats row — desktop (big value + label) */}
              <div className="mt-8 hidden w-full items-start gap-16 border-t border-white/5 pt-8 lg:flex">
                {[
                  { value: "10+", label: "Analysts on board" },
                  { value: "Weekly", label: "Market coverage" },
                  { value: "Expert", label: "Team of experts" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="flex items-start gap-2">
                      <span className="text-3xl font-medium text-white">
                        {stat.value}
                      </span>
                      <Star className="mt-1.5 h-4 w-4 shrink-0 fill-[#FDBE35] text-[#FDBE35]" />
                    </div>
                    <p className="mt-2 text-sm text-white/50">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      </HomeShell>

      {/* TEMPORARY hero-background switcher — remove once a style is chosen. */}
      <div className="fixed bottom-4 left-1/2 z-100 flex -translate-x-1/2 flex-wrap items-center gap-1 rounded-full border border-white/15 bg-black/70 px-2 py-1.5 backdrop-blur-md">
        <span className="px-2 text-[11px] uppercase tracking-wide text-white/40">
          BG
        </span>
        {Object.entries(HERO_BACKGROUNDS).map(([key, { label }]) => (
          <Link
            key={key}
            href={`/?bg=${key}`}
            scroll={false}
            className={`rounded-full px-3 py-1 text-xs transition-colors ${
              key === bgKey
                ? "bg-[#FDBE35] text-black"
                : "text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Newsletter Section */}
      <section id="newsletter" className="px-4 py-16 sm:px-8 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-12 shadow-[0_24px_70px_-24px_rgba(0,0,0,0.7)] sm:px-12 sm:py-16">
            {/* Ambient brand glows + top hairline for depth */}
            <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[rgba(253,190,53,0.16)] blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-24 -left-12 h-64 w-64 rounded-full bg-[rgba(53,218,255,0.1)] blur-[110px]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FDBE35]/40 to-transparent" />

            <div className="relative mx-auto max-w-xl text-center">
              {/* Eyebrow badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FDBE35]/25 bg-[#FDBE35]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#FDBE35]">
                <Mail className="h-3.5 w-3.5" />
                Weekly Newsletter
              </div>

              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem]">
                Stay Ahead of{" "}
                <span className="bg-gradient-to-r from-[#FDBE35] to-[#FDDA93] bg-clip-text text-transparent">
                  The Market
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-white/60 sm:text-base">
                Weekly insights on crypto markets, regulatory updates, and
                institutional trends — delivered every Monday.
              </p>

              <div className="mx-auto mt-8 max-w-lg text-left">
                <NewsletterForm source="homepage" />
              </div>

              {/* Trust signals */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/50">
                <span className="inline-flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-[#FDBE35]" />
                  No spam, ever
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5 text-[#FDBE35]" />
                  Every Monday
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#FDBE35]" />
                  Unsubscribe anytime
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <SiteFooter /> */}
    </div>
  );
}
