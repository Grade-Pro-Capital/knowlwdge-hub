import { notFoundAndLog } from "@/app/lib/notFoundLog";

/**
 * Any URL no other page matches (every real page and redirect wins over this route).
 * It exists so those 404s reach the 404 monitor (/admin/not-found): with separate root
 * layouts for the site and the blog, Next.js has no other place to see them.
 */
export default async function UnknownPage({ params }: { params: Promise<{ path: string[] }> }) {
  const { path } = await params;
  return notFoundAndLog(`/${path.join("/")}`);
}
