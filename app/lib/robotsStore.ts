/**
 * Where robots.txt lives: a SiteSetting ("robots.txt") when edited in the admin,
 * otherwise the built-in default. Every save/reset is kept in SiteSettingVersion
 * (all of them, with who, why, how it was approved and what it changed) for restore.
 * Changes only happen through an approved request (app/lib/robotsApproval.ts).
 */
import type { Prisma } from "@prisma/client";
import { prisma } from "./db";
import { getBaseUrl } from "./seo";
import { analyzeRobotsTxt, defaultRobotsTxt, diffLines, keyPageChanges, type KeyPage } from "./robotsTxt";
import { postPath } from "./blogPaths";

const KEY = "robots.txt";

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

/** The live robots.txt as stored (throws if the database can't be read). */
export async function getLiveRobotsTxt(): Promise<string> {
  const setting = await prisma.siteSetting.findUnique({ where: { key: KEY } });
  return setting?.value ?? defaultRobotsTxt(getBaseUrl());
}

export async function getRobotsState() {
  const [setting, history] = await Promise.all([
    prisma.siteSetting.findUnique({ where: { key: KEY } }),
    prisma.siteSettingVersion.findMany({ where: { key: KEY }, orderBy: { createdAt: "desc" } }),
  ]);
  const defaultText = defaultRobotsTxt(getBaseUrl());
  return {
    text: setting?.value ?? defaultText,
    isDefault: !setting,
    defaultText,
    updatedAt: setting?.updatedAt ?? null,
    updatedBy: setting?.updatedBy ?? null,
    history: history.map((v) => ({
      id: v.id,
      text: v.value,
      note: v.note,
      savedBy: v.savedBy,
      createdAt: v.createdAt,
      action: v.action,
      reason: v.reason,
      restoredFrom: v.restoredFrom,
      approvedVia: v.approvedVia,
      approvedAt: v.approvedAt,
      ip: v.ip,
      linesAdded: v.linesAdded,
      linesRemoved: v.linesRemoved,
      keyPageChanges: v.keyPageChanges,
    })),
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

/** How an approved change was made, recorded with the version. */
export type ChangeDetails = {
  action: "saved" | "reset" | "restored";
  reason: string;
  restoredFrom?: Date | null;
  approvedVia: string;
  approvedAt: Date;
  ip: string | null;
};

/** What a change from `before` to `after` does: lines added/removed, key pages affected. */
export async function describeChange(before: string, after: string) {
  const diff = diffLines(before, after);
  const options = { baseUrl: getBaseUrl(), keyPages: await getKeyPages() };
  return {
    linesAdded: diff.filter((d) => d.type === "add").length,
    linesRemoved: diff.filter((d) => d.type === "remove").length,
    keyPageChanges: keyPageChanges(analyzeRobotsTxt(before, options).keyPages, analyzeRobotsTxt(after, options).keyPages),
    diff,
  };
}

async function recordVersion(previous: string, value: string, note: string, savedBy: string, details: ChangeDetails) {
  const { linesAdded, linesRemoved, keyPageChanges } = await describeChange(previous, value);
  await prisma.siteSettingVersion.create({
    data: {
      key: KEY,
      value,
      note,
      savedBy,
      action: details.action,
      reason: details.reason,
      restoredFrom: details.restoredFrom ?? null,
      approvedVia: details.approvedVia,
      approvedAt: details.approvedAt,
      ip: details.ip,
      linesAdded,
      linesRemoved,
      keyPageChanges: keyPageChanges as unknown as Prisma.InputJsonArray,
    },
  });
}

/** Normalised as stored: Unix line endings, one trailing newline. */
export function normalizeRobotsTxt(text: string): string {
  return text.replace(/\r\n?/g, "\n").replace(/\s*$/, "\n");
}

export async function saveRobotsTxt(text: string, savedBy: string, note: string, details: ChangeDetails): Promise<void> {
  const previous = await getLiveRobotsTxt();
  const value = normalizeRobotsTxt(text);
  await prisma.siteSetting.upsert({
    where: { key: KEY },
    create: { key: KEY, value, updatedBy: savedBy },
    update: { value, updatedBy: savedBy },
  });
  await recordVersion(previous, value, note, savedBy, details);
}

/** Back to the built-in default (which follows the site URL automatically). */
export async function resetRobotsTxt(savedBy: string, details: ChangeDetails): Promise<void> {
  const previous = await getLiveRobotsTxt();
  await prisma.siteSetting.deleteMany({ where: { key: KEY } });
  await recordVersion(previous, defaultRobotsTxt(getBaseUrl()), "Reset to default", savedBy, details);
}
