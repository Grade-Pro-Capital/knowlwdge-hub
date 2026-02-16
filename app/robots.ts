import { MetadataRoute } from "next";
import { getBaseUrl } from "@/app/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const base = getBaseUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/article/", "/category/", "/tag/", "/author/"],
        disallow: ["/admin/", "/api/"],
      },
      {
        userAgent: "GPTBot",
        allow: ["/", "/article/", "/category/", "/tag/", "/author/"],
        disallow: ["/admin/", "/api/"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: ["/", "/article/", "/category/", "/tag/", "/author/"],
        disallow: ["/admin/", "/api/"],
      },
      {
        userAgent: "Google-Extended",
        allow: ["/", "/article/", "/category/", "/tag/", "/author/"],
        disallow: ["/admin/", "/api/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
