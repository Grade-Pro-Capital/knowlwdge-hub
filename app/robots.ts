import { MetadataRoute } from "next";
import { getBaseUrl } from "@/app/lib/seo";

// Crawlers we serve the same rules to: the generic group plus AI bots we
// explicitly welcome for content discovery / citations.
const USER_AGENTS = [
  "*",
  "GPTBot",
  "ChatGPT-User",
  "Google-Extended",
  "PerplexityBot",
  "Claude-Web",
  "anthropic-ai",
];

// Index-worthy sections only.
const ALLOW = ["/", "/blog/"];

// Tag/category/author archives are noindex'd and excluded from sitemap.xml;
// blocked here too so crawl budget goes to real /blog/ posts. /admin/ and
// /api/ stay blocked for security.
const DISALLOW = ["/tag/", "/category/", "/author/", "/admin/", "/api/"];

export default function robots(): MetadataRoute.Robots {
  const base = getBaseUrl();

  return {
    rules: USER_AGENTS.map((userAgent) => ({
      userAgent,
      allow: ALLOW,
      disallow: DISALLOW,
    })),
    sitemap: `${base}/sitemap.xml`,
  };
}
