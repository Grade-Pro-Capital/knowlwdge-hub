/**
 * Normalise a site path for storage and matching: path only (a full URL is reduced to
 * its path), leading slash, no trailing slash, lowercase. Matching is case-insensitive,
 * so /Blogs/Old and /blogs/old are the same. No database access, so it is safe in
 * browser code too.
 */
export function normalizeSource(input: string): string {
  let path = input.trim();
  if (/^https?:\/\//i.test(path)) {
    try {
      path = new URL(path).pathname;
    } catch {
      return "";
    }
  }
  path = path.split(/[?#]/)[0];
  if (!path.startsWith("/")) path = `/${path}`;
  if (path.length > 1) path = path.replace(/\/+$/, "");
  return path.toLowerCase();
}
