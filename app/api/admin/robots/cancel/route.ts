import { NextResponse } from "next/server";
import { requireAdmin } from "@/app/lib/admin";
import { cancelRobotsChange, getRobotsEditorState } from "@/app/lib/robotsApproval";

/** Drop a pending request ({ requestId }): its code stops working. */
export async function POST(request: Request) {
  const auth = await requireAdmin(request);
  if (auth instanceof NextResponse) return auth;

  try {
    const body = await request.json();
    await cancelRobotsChange(String(body.requestId ?? ""));
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  return NextResponse.json(await getRobotsEditorState());
}
