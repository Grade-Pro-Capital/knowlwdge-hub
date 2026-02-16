/**
 * SEO utilities for canonical URLs, metadata validation, and absolute URL resolution.
 */
const DEFAULT_BASE = process.env.NEXT_PUBLIC_SITE_URL || "https://blogs.grade.capital";

export function getBaseUrl(): string {
  return DEFAULT_BASE.replace(/\/$/, "");
}

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

/** Validate meta title (max 60 chars). Returns truncated if needed. */
export function validateMetaTitle(value: string | null | undefined): string | undefined {
  if (!value?.trim()) return undefined;
  const s = value.trim();
  return s.length > 60 ? s.slice(0, 57) + "..." : s;
}

/** Validate meta description (max 160 chars). Returns truncated if needed. */
export function validateMetaDescription(value: string | null | undefined): string | undefined {
  if (!value?.trim()) return undefined;
  const s = value.trim();
  return s.length > 160 ? s.slice(0, 157) + "..." : s;
}

export function parseSecondaryKeywords(value: string | null | undefined): string[] {
  if (!value?.trim()) return [];
  return value
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean);
}
