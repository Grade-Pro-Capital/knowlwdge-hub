/**
 * SEO utilities for canonical URLs, metadata validation, and absolute URL resolution.
 */

/** Where the site is served; every canonical, sitemap and schema URL is built from it. */
const PRODUCTION_URL = "https://grade.capital";

/**
 * The site's origin, from NEXT_PUBLIC_SITE_URL (defaults to https://grade.capital).
 * A scheme-less value ("grade.capital") gets https://; an invalid one falls back to
 * the default rather than breaking every page.
 */
function resolveBaseUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return PRODUCTION_URL;
  try {
    return new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`).origin;
  } catch {
    return PRODUCTION_URL;
  }
}

const BASE_URL = resolveBaseUrl();

export function getBaseUrl(): string {
  return BASE_URL;
}

/** Default share image for blog pages without their own (1200×630). */
export const DEFAULT_OG_IMAGE = "/og-default.jpg";

export function absoluteUrl(pathOrUrl: string | null | undefined): string | undefined {
  if (!pathOrUrl?.trim()) return undefined;
  const s = pathOrUrl.trim();
  if (s.startsWith("http://") || s.startsWith("https://")) return s;
  return `${getBaseUrl()}${s.startsWith("/") ? s : `/${s}`}`;
}

export function slugify(text: string): string {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "page";
}

/**
 * Normalize meta title: single line, collapse repeated " | " and extra spaces,
 * and remove erroneous "Review: " (e.g. "Grade Capital Review: vs" -> "Grade Capital vs").
 */
export function normalizeMetaTitle(value: string | null | undefined): string {
  if (!value?.trim()) return "";
  return value
    .trim()
    .replace(/\s*[\r\n]+\s*/g, " ")
    .replace(/\bReview\s*:\s*/gi, "")
    .replace(/\s*\|\s*\|+\s*/g, " | ")
    .replace(/\s+\|\s+/g, " | ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

/** Validate meta title (max 60 chars). Returns truncated if needed. Normalizes formatting first. */
export function validateMetaTitle(value: string | null | undefined): string | undefined {
  const s = normalizeMetaTitle(value);
  if (!s) return undefined;
  return s.length > 60 ? s.slice(0, 57) + "..." : s;
}

/** Validate meta description (max 160 chars). Returns truncated if needed. */
export function validateMetaDescription(value: string | null | undefined): string | undefined {
  if (!value?.trim()) return undefined;
  const s = value.trim();
  return s.length > 160 ? s.slice(0, 157) + "..." : s;
}

/**
 * A usable canonical override: an absolute http(s) URL, or null (use the page's own
 * URL). Anything else is ignored rather than emitted.
 */
export function validCanonicalUrl(value: string | null | undefined): string | null {
  const s = value?.trim();
  if (!s) return null;
  try {
    const url = new URL(s);
    return url.protocol === "http:" || url.protocol === "https:" ? url.toString() : null;
  } catch {
    return null;
  }
}

/** Our own hosts: grade.capital and any subdomain (www., blogs., …), plus the configured base. */
export function isOwnHost(hostname: string): boolean {
  const host = hostname.toLowerCase();
  return (
    host === "localhost" ||
    host === "grade.capital" ||
    host.endsWith(".grade.capital") ||
    host === new URL(getBaseUrl()).hostname
  );
}

/**
 * The canonical override to actually emit: only a valid URL on *another* site (an
 * article republished from elsewhere). Overrides pointing at our own domain are
 * ignored — on our site the page's own URL is the canonical; to move a page, change
 * its slug (with a redirect) instead. Many stored overrides point at planned URLs
 * that don't exist, and emitting them would get those articles dropped from Google.
 */
export function externalCanonicalUrl(value: string | null | undefined): string | null {
  const url = validCanonicalUrl(value);
  if (!url) return null;
  return isOwnHost(new URL(url).hostname) ? null : url;
}

export function parseSecondaryKeywords(value: string | null | undefined): string[] {
  if (!value?.trim()) return [];
  return value
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean);
}

const MIN_VALID_YEAR = 2020;

function isValidModDate(d: Date): boolean {
  if (Number.isNaN(d.getTime())) return false;
  const y = d.getFullYear();
  const maxYear = new Date().getFullYear() + 1;
  return y >= MIN_VALID_YEAR && y <= maxYear;
}

/**
 * Return a safe dateModified ISO string for JSON-LD and Open Graph.
 * Never returns a wrong year (e.g. 2001 from backend bug). Validates contentFreshnessDate and updatedAt;
 * falls back to publishedAt if either is invalid or out of range.
 */
export function safeDateModified(
  contentFreshnessDate: Date | string | null | undefined,
  updatedAt: Date,
  publishedAt: Date
): string {
  const freshness =
    contentFreshnessDate != null
      ? typeof contentFreshnessDate === "string"
        ? new Date(contentFreshnessDate)
        : contentFreshnessDate
      : null;
  if (freshness && isValidModDate(freshness)) return freshness.toISOString();
  if (isValidModDate(updatedAt)) return updatedAt.toISOString();
  return publishedAt.toISOString();
}

/**
 * Parse content freshness date from API input. Returns null for invalid or obviously wrong years (< 2020).
 * Prevents persisting backend date-handling bugs (e.g. "February 18, 2001").
 */
export function parseContentFreshnessDate(
  value: string | null | undefined
): Date | null {
  if (value === undefined || value === null || String(value).trim() === "")
    return null;
  const d = new Date(value.trim());
  if (Number.isNaN(d.getTime()) || d.getFullYear() < 2020) return null;
  return d;
}
