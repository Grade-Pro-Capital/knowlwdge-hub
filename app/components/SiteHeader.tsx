import Link from "next/link";
import { Logo } from "@/app/components/Logo";
import { MobileNav } from "@/app/components/MobileNav";
import { goldButtonClass } from "@/app/lib/ui";

/** Primary site navigation links. Labels/targets kept as-is; only styling is new. */
const NAV_LINKS = [
  { label: "Insights", href: "/#insights" },
  { label: "Research", href: "/" },
  { label: "For Professionals", href: "/?tab=professionals#insights" },
];

/**
 * Shared top navigation: a sticky, translucent (frosted) bar with the brand logo,
 * primary links and a gradient CTA. Styling adapted from the Figma nav reference
 * (rgba(32,32,32,0.2) fill, Poppins 600 links, gold gradient button).
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(32,32,32,0.2)] backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between gap-8 px-4 sm:px-8 lg:px-16">
        <Logo />

        <div className="flex items-center gap-8">
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-semibold tracking-[-0.15px] text-white/90 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href="/#newsletter"
            className={`${goldButtonClass} h-9 px-4 text-sm tracking-[-0.15px]`}
          >
            Subscribe
          </a>

          <MobileNav links={NAV_LINKS} />
        </div>
      </div>
    </header>
  );
}
