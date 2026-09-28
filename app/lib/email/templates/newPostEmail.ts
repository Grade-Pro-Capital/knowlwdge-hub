/** The main newsletter: a branded email featuring a newly published post. */
import { COLORS, SITE_URL } from "../config";
import { baseLayout } from "./baseLayout";
import { escapeHtml, goldButton } from "./utils";

export type PostForEmail = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  authorName: string;
  readTime?: string | null;
  imageUrl?: string | null;
};

type NewPostArgs = {
  post: PostForEmail;
  unsubscribeUrl: string;
};

/** Absolute cover image — the post's CDN image, or the site placeholder. */
function coverImage(imageUrl?: string | null): string {
  return imageUrl && imageUrl.startsWith("http")
    ? imageUrl
    : `${SITE_URL}/og-homepage.png`;
}

export function newPostEmail({ post, unsubscribeUrl }: NewPostArgs): {
  subject: string;
  html: string;
  text: string;
} {
  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const image = coverImage(post.imageUrl);
  const subject = post.title;

  const metaBits = [post.authorName, post.readTime]
    .filter(Boolean)
    .map((b) => escapeHtml(String(b)))
    .join(" &nbsp;•&nbsp; ");

  const contentHtml = `
    <p style="margin:0 0 16px;font-family:'Poppins',Arial,sans-serif;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;font-weight:600;color:${COLORS.gold};">
      New insight${post.category ? ` &nbsp;·&nbsp; ${escapeHtml(post.category)}` : ""}
    </p>

    <a href="${postUrl}" target="_blank" style="text-decoration:none;">
      <img src="${image}" alt="${escapeHtml(post.title)}" width="536" style="display:block;border:0;outline:none;width:100%;max-width:536px;height:auto;border-radius:12px;margin:0 0 24px;">
    </a>

    <h1 style="margin:0 0 14px;font-family:'Poppins',Arial,sans-serif;font-size:24px;line-height:1.3;font-weight:600;color:${COLORS.text};">
      <a href="${postUrl}" target="_blank" style="color:${COLORS.text};text-decoration:none;">${escapeHtml(post.title)}</a>
    </h1>

    <p style="margin:0 0 18px;font-family:'Poppins',Arial,sans-serif;font-size:15px;line-height:1.7;color:${COLORS.textMuted};">
      ${escapeHtml(post.excerpt)}
    </p>

    ${
      metaBits
        ? `<p style="margin:0 0 26px;font-family:'Poppins',Arial,sans-serif;font-size:13px;color:${COLORS.textFaint};">${metaBits}</p>`
        : ""
    }

    ${goldButton("Read the full article →", postUrl)}`;

  const html = baseLayout({
    preheader: post.excerpt?.slice(0, 140) || post.title,
    contentHtml,
    unsubscribeUrl,
  });

  const text = [
    `New insight${post.category ? ` · ${post.category}` : ""}`,
    "",
    post.title,
    "",
    post.excerpt,
    "",
    `Read the full article: ${postUrl}`,
    "",
    `Unsubscribe: ${unsubscribeUrl}`,
  ].join("\n");

  return { subject, html, text };
}
