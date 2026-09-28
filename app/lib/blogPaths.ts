/**
 * Single source of truth for blog URL paths. The blog lives under /blogs on the
 * main domain (grade.capital/blogs); the main-site pages own "/".
 * Build absolute URLs with absoluteUrl(...) from ./seo.
 */
export const BLOG_BASE = "/blogs";

export const blogHomePath = () => BLOG_BASE;
export const postPath = (slug: string) => `${BLOG_BASE}/${slug}`;
export const categoryPath = (slug: string) => `${BLOG_BASE}/category/${slug}`;
export const tagPath = (slug: string) => `${BLOG_BASE}/tag/${slug}`;
export const authorPath = (slug: string) => `${BLOG_BASE}/author/${slug}`;
