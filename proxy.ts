import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import { jwtVerify } from "jose";
import { findRedirect, recordRedirectHit } from "@/app/lib/redirects";

const COOKIE_NAME = "admin_session";

/**
 * Runs before every page (Next.js "proxy", formerly middleware; always Node.js):
 * 1. /admin: require a valid admin session.
 * 2. Everything else: apply redirects managed in /admin/redirects.
 */
export async function proxy(request: NextRequest, event: NextFetchEvent) {
  const { pathname } = request.nextUrl;
  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    return adminGate(request);
  }

  const rule = await findRedirect(pathname);
  if (!rule) return NextResponse.next();

  const target = new URL(rule.destination, request.url);
  // Keep the visitor's query string (e.g. utm_ tags) unless the rule sets its own.
  if (!target.search && request.nextUrl.search) target.search = request.nextUrl.search;
  event.waitUntil(recordRedirectHit(rule.id));
  return NextResponse.redirect(target, rule.permanent ? 301 : 302);
}

async function adminGate(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/admin/login")) {
    const token = request.cookies.get(COOKIE_NAME)?.value;
    if (token) {
      try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        await jwtVerify(token, secret);
        return NextResponse.redirect(new URL("/admin", request.url));
      } catch {
        // invalid token, allow login page
      }
    }
    return NextResponse.next();
  }

  const token = request.cookies.get(COOKIE_NAME)?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    await jwtVerify(token, secret);
    return NextResponse.next();
  } catch {
    const res = NextResponse.redirect(new URL("/admin/login", request.url));
    res.cookies.delete(COOKIE_NAME);
    return res;
  }
}

export const config = {
  // Pages only: skip API routes, Next.js internals and files with an extension
  // (images, fonts, robots.txt, sitemap.xml, …).
  matcher: ["/((?!api/|_next/|.*\\.[A-Za-z0-9]+$).*)"],
};
