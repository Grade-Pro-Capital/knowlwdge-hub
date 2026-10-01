import { NextResponse } from "next/server";
import { requireAdmin } from "@/app/lib/admin";
import { ApprovalError, approveRobotsChange, getRobotsEditorState } from "@/app/lib/robotsApproval";

/** Enter the emailed code: { requestId, code }. On success the change is live. */
export async function POST(request: Request) {
  const auth = await requireAdmin(request);
  if (auth instanceof NextResponse) return auth;

  let requestId: string;
  let code: string;
  try {
    const body = await request.json();
    requestId = String(body.requestId ?? "");
    code = String(body.code ?? "");
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  try {
    await approveRobotsChange(requestId, code);
    return NextResponse.json(await getRobotsEditorState());
  } catch (e) {
    if (e instanceof ApprovalError) return NextResponse.json({ error: e.message, ...e.extra }, { status: e.status });
    throw e;
  }
}
