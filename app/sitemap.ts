import { MetadataRoute } from "next";
import { prisma } from "@/app/lib/db";
import { getBaseUrl, slugify } from "@/app/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = getBaseUrl();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: base,
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
    url: `${base}/article/${p.slug}`,
    lastModified: p.contentFreshnessDate ?? p.updatedAt,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const categories = await prisma.post.findMany({
    where: { published: true },
    select: { category: true },
    distinct: ["category"],
  });

  const categorySlugs = [...new Set(categories.map((c) => slugify(c.category)))];

  const categoryUrls: MetadataRoute.Sitemap = categorySlugs.map((slug) => ({
    url: `${base}/category/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const tags = await prisma.post.findMany({
    where: { published: true, tags: { isEmpty: false } },
    select: { tags: true },
  });

  const tagSlugs = [...new Set(tags.flatMap((t) => t.tags))];

  const tagUrls: MetadataRoute.Sitemap = tagSlugs.map((slug) => ({
    url: `${base}/tag/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  const authors = await prisma.post.findMany({
    where: { published: true, authorSlug: { not: null } },
    select: { authorSlug: true },
    distinct: ["authorSlug"],
  });

  const authorUrls: MetadataRoute.Sitemap = authors
    .filter((a): a is { authorSlug: string } => !!a.authorSlug)
    .map((a) => ({
      url: `${base}/author/${a.authorSlug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }));

  return [
    ...staticRoutes,
    ...articleUrls,
    ...categoryUrls,
    ...tagUrls,
    ...authorUrls,
  ];
}
