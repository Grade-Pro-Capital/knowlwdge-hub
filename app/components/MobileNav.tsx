"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { goldButtonClass } from "@/app/lib/ui";

type NavLink = { label: string; href: string };

/**
 * Mobile-only navigation: a hamburger button that opens a side drawer sliding in
 * from the right. Rendered only below `md`, where the inline <nav> in SiteHeader
 * is hidden.
 *
 * The drawer + backdrop are portalled to <body> because SiteHeader has
 * `backdrop-blur`, and an ancestor with a backdrop-filter/filter/transform
 * becomes the containing block for `position: fixed` — which would clip the
 * drawer into the 76px header box. Portalling escapes that. Both elements stay
 * mounted and animate via CSS transitions (translate + opacity) so opening and
 * closing are smooth. Locks body scroll while open; closes on link tap, backdrop
 * tap, or Escape.
 */
export function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const close = () => setOpen(false);

  // Portals need a client-side DOM target; only render after mount.
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const overlay = (
    <div className="md:hidden">
      {/* Backdrop — fades in/out */}
      <div
        aria-hidden="true"
        onClick={close}
        className={`fixed inset-0 z-60 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-out ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer — slides in from the right */}
      <nav
        aria-label="Mobile navigation"
        className={`fixed right-0 top-0 z-61 flex h-dvh w-[82%] max-w-xs flex-col border-l border-white/10 bg-[#0a0a0a] shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "pointer-events-none translate-x-full"
        }`}
      >
        <div className="flex h-[76px] shrink-0 items-center justify-between border-b border-white/10 px-4">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
            Menu
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={close}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/90 transition-colors hover:bg-white/5"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <ul className="flex flex-col gap-1 p-4">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={close}
                  className="block rounded-lg px-3 py-3 text-base font-semibold text-white/90 transition-colors hover:bg-white/5"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="px-4 pt-2">
            <a
              href="/#newsletter"
              onClick={close}
              className={`${goldButtonClass} h-11 w-full px-4 text-sm`}
            >
              Subscribe
            </a>
          </div>
        </div>
      </nav>
    </div>
  );

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/90 transition-colors hover:bg-white/5"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {mounted && createPortal(overlay, document.body)}
    </div>
  );
}
