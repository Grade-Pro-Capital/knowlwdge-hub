import { NextResponse } from "next/server";
import { requireAdmin } from "@/app/lib/admin";

/** GET /api/admin/check - returns 200 if auth works (cookie or API key). Use to verify ADMIN_API_KEY. */
export async function GET(request: Request) {
  const auth = await requireAdmin(request);
  if (auth instanceof NextResponse) return auth;
  return NextResponse.json({ ok: true, user: auth.username });
}
