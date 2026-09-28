import { MetadataRoute } from "next";
import { prisma } from "@/app/lib/db";
import { externalCanonicalUrl, getBaseUrl } from "@/app/lib/seo";
import { BLOG_BASE, postPath } from "@/app/lib/blogPaths";
import { pageUrl, SITE_PAGES } from "@/app/(site)/seo";

// Always generate sitemap from current DB (no cache) so deleted/unpublished posts drop off immediately
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = getBaseUrl();

  // Main site pages (home, Support, FAQ, …) from the page registry.
  const sitePages: MetadataRoute.Sitemap = Object.values(SITE_PAGES).map((page) => ({
    url: pageUrl(page),
    changeFrequency: "monthly" as const,
    priority: page.path === "/" ? 1 : 0.6,
  }));

  const blogHome: MetadataRoute.Sitemap = [
    {
      url: `${base}${BLOG_BASE}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
  ];

  const posts = await prisma.post.findMany({
    where: { published: true },
    select: {
      slug: true,
      updatedAt: true,
      contentFreshnessDate: true,
      metaRobotsIndex: true,
      canonicalUrl: true,
    },
  });

  // Only posts indexed at their own URL: skip noindex posts and posts whose
  // canonical is on another site.
  const articleUrls: MetadataRoute.Sitemap = posts
    .filter((p) => p.metaRobotsIndex?.trim() !== "noindex" && !externalCanonicalUrl(p.canonicalUrl))
    .map((p) => ({
      url: `${base}${postPath(p.slug)}`,
      lastModified: p.contentFreshnessDate ?? p.updatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

  return [...sitePages, ...blogHome, ...articleUrls];
}
