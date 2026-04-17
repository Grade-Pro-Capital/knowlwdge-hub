import { NextResponse } from "next/server";
import { requireAdmin } from "@/app/lib/admin";
import { prisma } from "@/app/lib/db";
import { deleteFromSpaces } from "@/app/lib/upload";
import { parseContentFreshnessDate } from "@/app/lib/seo";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = await requireAdmin(request);
  if (auth instanceof NextResponse) return auth;

  const { id } = await params;
  const post = await prisma.post.findUnique({
    where: { id },
    include: { _count: { select: { views: true } } },
  });
  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }
  return NextResponse.json(post);
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = await requireAdmin(request);
  if (auth instanceof NextResponse) return auth;

  const { id } = await params;
  const post = await prisma.post.findUnique({ where: { id } });
  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

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
      additionalImages,
    } = body;

    const tagsArr =
      tags !== undefined
        ? Array.isArray(tags)
          ? tags.filter((t): t is string => typeof t === "string").map((t) => t.trim()).filter(Boolean)
          : typeof tags === "string"
            ? tags.split(",").map((t) => t.trim()).filter(Boolean)
            : post.tags ?? []
        : undefined;
    const keyTakeawaysArr =
      keyTakeaways !== undefined
        ? Array.isArray(keyTakeaways)
          ? keyTakeaways.filter((k): k is string => typeof k === "string")
          : typeof keyTakeaways === "string"
            ? keyTakeaways.split("\n").map((k) => k.trim()).filter(Boolean)
            : []
        : undefined;
    const entityTagsArr =
      entityTags !== undefined
        ? Array.isArray(entityTags)
          ? entityTags.filter((e): e is string => typeof e === "string")
          : typeof entityTags === "string"
            ? entityTags.split(",").map((e) => e.trim()).filter(Boolean)
            : []
        : undefined;

    if (slug !== undefined) {
      const slugStr = String(slug).trim().toLowerCase().replace(/\s+/g, "-");
      if (slugStr !== post.slug) {
        const existing = await prisma.post.findUnique({ where: { slug: slugStr } });
        if (existing) {
          return NextResponse.json(
            { error: "Another post with this slug already exists" },
            { status: 409 }
          );
        }
      }
    }

    const updated = await prisma.post.update({
      where: { id },
      data: {
        ...(slug !== undefined && { slug: String(slug).trim().toLowerCase().replace(/\s+/g, "-") }),
        ...(title !== undefined && { title: String(title) }),
        ...(excerpt !== undefined && { excerpt: String(excerpt) }),
        ...(category !== undefined && { category: String(category) }),
        ...(readTime !== undefined && { readTime: readTime ?? null }),
        ...(authorName !== undefined && { authorName: String(authorName) }),
        ...(authorSlug !== undefined && { authorSlug: authorSlug ?? null }),
        ...(authorAvatar !== undefined && { authorAvatar: authorAvatar ?? null }),
        ...(imageUrl !== undefined && { imageUrl: imageUrl ?? null }),
        ...(imageKey !== undefined && { imageKey: imageKey ?? null }),
        ...(additionalImages !== undefined && {
          additionalImages:
            additionalImages != null && Array.isArray(additionalImages)
              ? additionalImages
              : null,
        }),
        ...(content !== undefined && { content: content ?? null }),
        ...(isProfessional !== undefined && { isProfessional: Boolean(isProfessional) }),
        ...(published !== undefined && { published: Boolean(published) }),
        ...(tagsArr !== undefined && { tags: tagsArr }),
        ...(metaTitle !== undefined && { metaTitle: metaTitle ?? null }),
        ...(metaDescription !== undefined && { metaDescription: metaDescription ?? null }),
        ...(focusKeyword !== undefined && { focusKeyword: focusKeyword ?? null }),
        ...(secondaryKeywords !== undefined && { secondaryKeywords: secondaryKeywords ?? null }),
        ...(canonicalUrl !== undefined && { canonicalUrl: canonicalUrl ?? null }),
        ...(metaRobotsIndex !== undefined && {
          metaRobotsIndex: (metaRobotsIndex?.trim() || "index") as string,
        }),
        ...(metaRobotsFollow !== undefined && {
          metaRobotsFollow: (metaRobotsFollow?.trim() || "follow") as string,
        }),
        ...(ogTitle !== undefined && { ogTitle: ogTitle ?? null }),
        ...(ogDescription !== undefined && { ogDescription: ogDescription ?? null }),
        ...(ogImage !== undefined && { ogImage: ogImage ?? null }),
        ...(twitterCardTitle !== undefined && { twitterCardTitle: twitterCardTitle ?? null }),
        ...(twitterCardDescription !== undefined && { twitterCardDescription: twitterCardDescription ?? null }),
        ...(twitterCardImage !== undefined && { twitterCardImage: twitterCardImage ?? null }),
        ...(aiSummary !== undefined && { aiSummary: aiSummary ?? null }),
        ...(keyTakeawaysArr !== undefined && { keyTakeaways: keyTakeawaysArr }),
        ...(authoritativeCitations !== undefined && {
          authoritativeCitations:
            authoritativeCitations != null &&
            (Array.isArray(authoritativeCitations) || typeof authoritativeCitations === "object")
              ? authoritativeCitations
              : null,
        }),
        ...(entityTagsArr !== undefined && { entityTags: entityTagsArr }),
        ...(contentFreshnessDate !== undefined && {
          contentFreshnessDate: parseContentFreshnessDate(contentFreshnessDate),
        }),
        ...(expertiseSignals !== undefined && {
          expertiseSignals:
            expertiseSignals != null && typeof expertiseSignals === "object"
              ? expertiseSignals
              : null,
        }),
        ...(faqs !== undefined && {
          faqs:
            faqs != null && (Array.isArray(faqs) || typeof faqs === "object")
              ? faqs
              : null,
        }),
      },
    });
    return NextResponse.json(updated);
  } catch (e) {
    console.error("Update post error:", e);
    return NextResponse.json(
      { error: "Failed to update post" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = await requireAdmin(request);
  if (auth instanceof NextResponse) return auth;

  const { id } = await params;
  const post = await prisma.post.findUnique({ where: { id } });
  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  try {
    if (post.imageKey) {
      try {
        await deleteFromSpaces(post.imageKey);
      } catch (e) {
        console.warn("Failed to delete cover image from Spaces:", e);
      }
    }
    // Clean up additional images
    if (post.additionalImages && Array.isArray(post.additionalImages)) {
      for (const img of post.additionalImages as { key?: string }[]) {
        if (img.key) {
          try {
            await deleteFromSpaces(img.key);
          } catch (e) {
            console.warn("Failed to delete additional image from Spaces:", e);
          }
        }
      }
    }
    await prisma.post.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Delete post error:", e);
    return NextResponse.json(
      { error: "Failed to delete post" },
      { status: 500 }
    );
  }
}
