/**
 * Where a link written inside an article really goes on this site, following the same
 * redirects a visitor would: the old blog subdomain, www., the old article paths
 * (/blog/…, /article/…, /category/…) and the redirects managed in the admin. Used to
 * show articles with current links, and by the SEO reports. No database access (the
 * caller passes the redirect rules), so it is safe in browser code too.
 */
import { getBaseUrl, isOwnHost } from "./seo";
import { normalizeSource } from "./urlPaths";

/** Paths the site redirects in next.config.ts, plus the /article/[slug] page. */
const OLD_PATHS: [RegExp, string][] = [
  [/^\/(?:blog|article)\/([^/]+)$/, "/blogs/$1"],
  [/^\/(category|tag|author)\/([^/]+)$/, "/blogs/$1/$2"],
];
/** Hosts that redirect to the site: the old blog subdomain and www. */
const OLD_HOSTS = new Set(["blogs.grade.capital", "www.grade.capital"]);

export type ResolvedLink = {
  /** Site path it ends at (normalised), or an absolute URL when a redirect leads off-site. */
  path: string;
  /** True when it only gets there through a redirect (an old address). */
  viaRedirect: boolean;
  /** The link as written, resolved against the article's URL. */
  url: URL;
};

/** Null for links to other sites, in-page anchors, mailto: and the like. */
export function resolveInternalLink(href: string, redirects: Map<string, string>): ResolvedLink | null {
  const raw = href.trim();
  if (!raw || raw.startsWith("#") || /^(mailto|tel|javascript):/i.test(raw)) return null;
  let url: URL;
  try {
    // Relative links resolve against the article's own URL, as in the browser.
    url = new URL(raw, `${getBaseUrl()}/blogs/`);
  } catch {
    return null;
  }
  if (!/^https?:$/.test(url.protocol) || !isOwnHost(url.hostname)) return null;

  const host = url.hostname.toLowerCase();
  let viaRedirect = OLD_HOSTS.has(host);
  let path = normalizeSource(url.pathname);
  // The old blog lived at the root of blogs.grade.capital.
  if (host === "blogs.grade.capital" && path === "/") path = "/blogs";
  for (const [pattern, target] of OLD_PATHS) {
    if (pattern.test(path)) {
      path = path.replace(pattern, target);
      viaRedirect = true;
      break;
    }
  }
  for (let hop = 0; hop < 5; hop++) {
    const next = redirects.get(path);
    if (!next) break;
    viaRedirect = true;
    if (/^https?:\/\//i.test(next)) return { path: next, viaRedirect, url };
    path = normalizeSource(next);
  }
  return { path, viaRedirect, url };
}

/** The current address for a link that goes through a redirect (keeps its ?query and #section). */
export function currentAddress(link: ResolvedLink): string {
  if (/^https?:\/\//i.test(link.path)) return link.path;
  return `${getBaseUrl()}${link.path}${link.url.search}${link.url.hash}`;
}
