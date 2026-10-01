import { NextResponse } from "next/server";
import { requireAdmin } from "@/app/lib/admin";
import { ApprovalError, requestRobotsChange } from "@/app/lib/robotsApproval";

/** Where the request came from: the first address nginx forwarded, if any. */
function clientIp(request: Request): string | null {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwarded || request.headers.get("x-real-ip")?.trim();
  // "::ffff:203.0.113.7" is an IPv4 address written the IPv6 way.
  return ip ? ip.replace(/^::ffff:/i, "") : null;
}

/**
 * Ask to change robots.txt: checks the change and emails an approval code. Body:
 * { action: "save" | "reset", text?, reason, confirmBlocked?, restoredFrom? (ISO date) }.
 */
export async function POST(request: Request) {
  const auth = await requireAdmin(request);
  if (auth instanceof NextResponse) return auth;

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  const action = body.action === "reset" ? "reset" : body.action === "save" ? "save" : null;
  if (!action) return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  const restoredFrom = typeof body.restoredFrom === "string" ? new Date(body.restoredFrom) : null;

  try {
    const result = await requestRobotsChange({
      action,
      text: typeof body.text === "string" ? body.text : undefined,
      reason: typeof body.reason === "string" ? body.reason : "",
      confirmBlocked: body.confirmBlocked === true,
      restoredFrom: restoredFrom && !Number.isNaN(restoredFrom.getTime()) ? restoredFrom : null,
      requestedBy: auth.username,
      ip: clientIp(request),
    });
    return NextResponse.json(result);
  } catch (e) {
    if (e instanceof ApprovalError) return NextResponse.json({ error: e.message, ...e.extra }, { status: e.status });
    throw e;
  }
}
