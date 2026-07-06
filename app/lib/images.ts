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
  if (!src) return PLACEHOLDER_IMAGE;
  // Real uploads are full CDN URLs (http...) or, in local dev, a site-relative
  // /uploads/ path saved to public/. Anything else (a bare key or keyword) falls
  // back to the local placeholder.
  return src.startsWith("http") || src.startsWith("/uploads/")
    ? src
    : PLACEHOLDER_IMAGE;
}

/**
 * Resolve an author's profile picture. Returns the URL only when it's a real
 * uploaded image (http(s) pointing at an image file). Anything else — a bare
 * key, an empty value, or a non-image link like a LinkedIn profile URL that
 * was pasted in by mistake — returns null so the caller renders the default
 * avatar instead. Keeping this defensive means bad legacy data never renders a
 * broken <img>.
 */
export function resolveAuthorAvatar(src?: string | null): string | null {
  const url = src?.trim();
  if (!url) return null;
  // Accept CDN uploads (http...) and, in local dev, /uploads/ paths saved to
  // public/. Reject anything else (e.g. a LinkedIn profile URL pasted by mistake)
  // so the default avatar renders instead of a broken image.
  const isUploadPath = /^https?:\/\//i.test(url) || url.startsWith("/uploads/");
  if (!isUploadPath) return null;
  return /\.(png|jpe?g|webp|gif|avif|svg)(\?|#|$)/i.test(url) ? url : null;
}
