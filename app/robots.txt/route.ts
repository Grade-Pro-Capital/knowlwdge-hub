import { getServedRobotsTxt } from "@/app/lib/robotsStore";

// Read on every request so edits in Admin → robots.txt apply immediately (crawlers
// fetch this rarely; Google re-reads it about once a day).
export const dynamic = "force-dynamic";

export async function GET() {
  const body = await getServedRobotsTxt();
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=300",
    },
  });
}
