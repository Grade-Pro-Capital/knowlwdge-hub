import { NextResponse } from "next/server";
import { requireAdmin } from "@/app/lib/admin";
import { prisma } from "@/app/lib/db";
import { parseContentFreshnessDate } from "@/app/lib/seo";

export async function GET(request: Request) {
  const auth = await requireAdmin(request);
  if (auth instanceof NextResponse) return auth;

  const posts = await prisma.post.findMany({
    orderBy: { updatedAt: "desc" },
    include: { _count: { select: { views: true } } },
  });
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const auth = await requireAdmin(request);
  if (auth instanceof NextResponse) return auth;

  try {
    const body = await request.json();
    const {
      slug,
      title,
      excerpt,
      category,
      readTime,
      authorName,
      authorSlug,
      authorAvatar,
      imageUrl,
      imageKey,
      content,
      isProfessional,
      published,
      tags,
      metaTitle,
      metaDescription,
      focusKeyword,
      secondaryKeywords,
      canonicalUrl,
      metaRobotsIndex,
      metaRobotsFollow,
      ogTitle,
      ogDescription,
      ogImage,
      twitterCardTitle,
      twitterCardDescription,
      twitterCardImage,
      aiSummary,
      keyTakeaways,
      authoritativeCitations,
      entityTags,
      contentFreshnessDate,
      expertiseSignals,
      faqs,
    } = body;

    if (!slug || !title || !excerpt || !category || !authorName) {
      return NextResponse.json(
        { error: "slug, title, excerpt, category, authorName required" },
        { status: 400 }
      );
    }

    const existing = await prisma.post.findUnique({ where: { slug } });
    if (existing) {
      return NextResponse.json(
        { error: "A post with this slug already exists" },
        { status: 409 }
      );
    }

    const tagsArr = Array.isArray(tags)
      ? tags.filter((t): t is string => typeof t === "string").map((t) => t.trim()).filter(Boolean)
      : typeof tags === "string"
        ? tags.split(",").map((t) => t.trim()).filter(Boolean)
        : [];
    const keyTakeawaysArr = Array.isArray(keyTakeaways)
      ? keyTakeaways.filter((k): k is string => typeof k === "string")
      : typeof keyTakeaways === "string"
        ? keyTakeaways.split("\n").map((k) => k.trim()).filter(Boolean)
        : [];
    const entityTagsArr = Array.isArray(entityTags)
      ? entityTags.filter((e): e is string => typeof e === "string")
      : typeof entityTags === "string"
        ? entityTags.split(",").map((e) => e.trim()).filter(Boolean)
        : [];

    const post = await prisma.post.create({
      data: {
        slug: String(slug).trim().toLowerCase().replace(/\s+/g, "-"),
        title: String(title),
        excerpt: String(excerpt),
        category: String(category),
        readTime: readTime ?? null,
        authorName: String(authorName),
        authorSlug: authorSlug ?? null,
        authorAvatar: authorAvatar ?? null,
        imageUrl: imageUrl ?? null,
        imageKey: imageKey ?? null,
        content: content ?? null,
        isProfessional: Boolean(isProfessional),
        published: published !== false,
        tags: tagsArr,
        metaTitle: metaTitle ?? null,
        metaDescription: metaDescription ?? null,
        focusKeyword: focusKeyword ?? null,
        secondaryKeywords: secondaryKeywords ?? null,
        canonicalUrl: canonicalUrl ?? null,
        metaRobotsIndex: metaRobotsIndex ?? null,
        metaRobotsFollow: metaRobotsFollow ?? null,
        ogTitle: ogTitle ?? null,
        ogDescription: ogDescription ?? null,
        ogImage: ogImage ?? null,
        twitterCardTitle: twitterCardTitle ?? null,
        twitterCardDescription: twitterCardDescription ?? null,
        twitterCardImage: twitterCardImage ?? null,
        aiSummary: aiSummary ?? null,
        keyTakeaways: keyTakeawaysArr,
        authoritativeCitations:
          authoritativeCitations != null &&
          (Array.isArray(authoritativeCitations) || typeof authoritativeCitations === "object")
            ? authoritativeCitations
            : null,
        entityTags: entityTagsArr,
        contentFreshnessDate:
          contentFreshnessDate !== undefined
            ? parseContentFreshnessDate(contentFreshnessDate)
            : null,
        expertiseSignals:
          expertiseSignals != null &&
          typeof expertiseSignals === "object"
            ? expertiseSignals
            : null,
        faqs:
          faqs != null && (Array.isArray(faqs) || typeof faqs === "object")
            ? faqs
            : null,
      },
    });
    return NextResponse.json(post);
  } catch (e) {
    console.error("Create post error:", e);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}
