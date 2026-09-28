import { MetadataRoute } from "next";
import { prisma } from "@/app/lib/db";
import { getBaseUrl } from "@/app/lib/seo";
import { BLOG_BASE, postPath } from "@/app/lib/blogPaths";

// Always generate sitemap from current DB (no cache) so deleted/unpublished posts drop off immediately
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = getBaseUrl();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${base}${BLOG_BASE}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
  ];

  const posts = await prisma.post.findMany({
    where: { published: true },
    select: {
      slug: true,
      updatedAt: true,
      contentFreshnessDate: true,
    },
  });

  const articleUrls: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}${postPath(p.slug)}`,
    lastModified: p.contentFreshnessDate ?? p.updatedAt,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    ...staticRoutes,
    ...articleUrls,
  ];
}
