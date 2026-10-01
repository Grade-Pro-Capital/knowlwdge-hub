/**
 * Where robots.txt lives: a SiteSetting ("robots.txt") when edited in the admin,
 * otherwise the built-in default. Every save/reset is kept in SiteSettingVersion
 * (newest 20) for restore.
 */
import { prisma } from "./db";
import { getBaseUrl } from "./seo";
import { defaultRobotsTxt, type KeyPage } from "./robotsTxt";
import { postPath } from "./blogPaths";

const KEY = "robots.txt";
const KEEP_VERSIONS = 20;

/** The file served at /robots.txt. Falls back to the default if the database fails. */
export async function getServedRobotsTxt(): Promise<string> {
  try {
    const setting = await prisma.siteSetting.findUnique({ where: { key: KEY } });
    if (setting) return setting.value;
  } catch (e) {
    console.error("robots.txt: could not read the saved version, serving the default", e);
  }
  return defaultRobotsTxt(getBaseUrl());
}

export async function getRobotsState() {
  const [setting, history] = await Promise.all([
    prisma.siteSetting.findUnique({ where: { key: KEY } }),
    prisma.siteSettingVersion.findMany({ where: { key: KEY }, orderBy: { createdAt: "desc" }, take: KEEP_VERSIONS }),
  ]);
  const defaultText = defaultRobotsTxt(getBaseUrl());
  return {
    text: setting?.value ?? defaultText,
    isDefault: !setting,
    defaultText,
    updatedAt: setting?.updatedAt ?? null,
    updatedBy: setting?.updatedBy ?? null,
    history: history.map((v) => ({ id: v.id, text: v.value, note: v.note, savedBy: v.savedBy, createdAt: v.createdAt })),
  };
}

/** Pages whose blocking needs the extra confirmation: home, blog, a real article, Support, FAQ. */
export async function getKeyPages(): Promise<KeyPage[]> {
  const pages: KeyPage[] = [
    { label: "Home page", path: "/" },
    { label: "Blog home", path: "/blogs" },
  ];
  try {
    const latest = await prisma.post.findFirst({ where: { published: true }, orderBy: { publishedAt: "desc" }, select: { slug: true } });
    if (latest) pages.push({ label: "An article", path: postPath(latest.slug) });
  } catch {
    // The article check is a bonus; the rest still applies.
  }
  pages.push({ label: "Support", path: "/support" }, { label: "FAQ", path: "/faq" });
  return pages;
}

async function recordVersion(value: string, note: string, savedBy: string) {
  await prisma.siteSettingVersion.create({ data: { key: KEY, value, note, savedBy } });
  const old = await prisma.siteSettingVersion.findMany({
    where: { key: KEY },
    orderBy: { createdAt: "desc" },
    skip: KEEP_VERSIONS,
    select: { id: true },
  });
  if (old.length) await prisma.siteSettingVersion.deleteMany({ where: { id: { in: old.map((v) => v.id) } } });
}

export async function saveRobotsTxt(text: string, savedBy: string, note = "Saved"): Promise<void> {
  const value = text.replace(/\r\n?/g, "\n").replace(/\s*$/, "\n");
  await prisma.siteSetting.upsert({
    where: { key: KEY },
    create: { key: KEY, value, updatedBy: savedBy },
    update: { value, updatedBy: savedBy },
  });
  await recordVersion(value, note, savedBy);
}

/** Back to the built-in default (which follows the site URL automatically). */
export async function resetRobotsTxt(savedBy: string): Promise<void> {
  await prisma.siteSetting.deleteMany({ where: { key: KEY } });
  await recordVersion(defaultRobotsTxt(getBaseUrl()), "Reset to default", savedBy);
}
