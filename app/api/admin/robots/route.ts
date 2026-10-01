import { NextResponse } from "next/server";
import { requireAdmin } from "@/app/lib/admin";
import { getRobotsEditorState } from "@/app/lib/robotsApproval";

export async function GET(request: Request) {
  const auth = await requireAdmin(request);
  if (auth instanceof NextResponse) return auth;
  return NextResponse.json(await getRobotsEditorState());
}

/** There is no direct save or reset: every change needs an emailed approval code. */
function needsApproval() {
  return NextResponse.json(
    { error: "Changes to robots.txt need an approval code: request one (POST /api/admin/robots/request), then approve it." },
    { status: 405 },
  );
}

export async function PUT() {
  return needsApproval();
}

export async function DELETE() {
  return needsApproval();
}
