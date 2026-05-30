import { prisma } from "@/app/lib/db";
import { getBaseUrl } from "@/app/lib/seo";

// Generate from the live DB on every request so new/unpublished posts are reflected immediately.
export const dynamic = "force-dynamic";
export const revalidate = 0;

// Static branding header. Mirrors the hand-written intro of the old public/llms.txt.
const HEADER = `# Grade Capital Knowledge Hub

> Intelligence-driven research, analysis, and market insights for crypto investors in India.

Grade Capital is India's leading managed crypto investment platform. This knowledge hub publishes original research, regulatory analysis, and investment guides tailored for Indian retail and institutional crypto investors. All content is written by financial analysts and covers the Indian regulatory environment (SEBI, RBI, Income Tax Act).

## About Grade Capital

- Platform: https://www.grade.capital
- Blog: https://blogs.grade.capital
- Focus: Professionally managed crypto baskets, portfolios, and derivatives-based strategies for Indian investors
- Audience: Indian retail investors, HNIs, and institutional allocators
- Regulatory context: Indian Income Tax Act (Section 115BBH, Section 43(5)), SEBI, RBI guidelines`;

const FOOTER = `## Contact & Platform

- Website: https://www.grade.capital
- Contact: https://www.grade.capital/contact
- Twitter/X: https://twitter.com/GradeCapital
- LinkedIn: https://www.linkedin.com/company/grade-capital/
- Instagram: https://www.instagram.com/gradecapital`;

/** Collapse newlines/extra whitespace so each entry stays on a single Markdown line. */
function oneLine(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

export async function GET() {
  const base = getBaseUrl();

  const posts = await prisma.post.findMany({
    where: {
      published: true,
      // Respect per-article noindex so we never advertise pages we ask crawlers to skip.
      NOT: { metaRobotsIndex: "noindex" },
    },
    select: {
      slug: true,
      title: true,
      excerpt: true,
      aiSummary: true,
      category: true,
      publishedAt: true,
    },
    orderBy: { publishedAt: "desc" },
  });

  // Group posts by their category field, preserving first-seen order (newest category first).
  const groups = new Map<string, typeof posts>();
  for (const post of posts) {
    const category = post.category?.trim() || "Articles";
    const bucket = groups.get(category);
    if (bucket) bucket.push(post);
    else groups.set(category, [post]);
  }

  const sections = Array.from(groups.entries()).map(([category, items]) => {
    const lines = items.map((p) => {
      const summary = oneLine(p.aiSummary || p.excerpt || "");
      const url = `${base}/blog/${p.slug}`;
      return summary
        ? `- [${oneLine(p.title)}](${url}): ${summary}`
        : `- [${oneLine(p.title)}](${url})`;
    });
    return `## ${category}\n\n${lines.join("\n")}`;
  });

  const body = [HEADER, ...sections, FOOTER].join("\n\n") + "\n";

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
