/**
 * Local placeholder used when a post has no uploaded image.
 * Replaces the deprecated source.unsplash.com fallback (discontinued by Unsplash,
 * now slow/unreliable). Served statically from /public.
 */
export const PLACEHOLDER_IMAGE = "/og-homepage.png";

/**
 * Resolve a post's display image. Real uploaded images are full CDN URLs (http...);
 * anything else (a bare storage key, a keyword, or null) falls back to the local
 * placeholder instead of an external Unsplash request.
 */
export function resolvePostImage(src?: string | null): string {
  return src && src.startsWith("http") ? src : PLACEHOLDER_IMAGE;
}
