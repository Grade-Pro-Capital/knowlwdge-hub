import { NextResponse } from "next/server";
import { verifySession } from "@/app/lib/auth";

/** Check ADMIN_API_KEY via Authorization: Bearer <key> or X-Admin-API-Key header. */
function getApiKeyAuth(request: Request): { username: string } | null {
  const key = process.env.ADMIN_API_KEY?.trim();
  if (!key) return null;
  const authHeader = request.headers.get("authorization");
  const bearerToken =
    authHeader?.startsWith("Bearer ") ? authHeader.slice(7).trim() : null;
  const customHeader = request.headers.get("x-admin-api-key")?.trim();
  const token = bearerToken || customHeader;
  if (token && token === key) return { username: "api" };
  return null;
}

export async function requireAdmin(request?: Request) {
  if (request) {
    const apiAuth = getApiKeyAuth(request);
    if (apiAuth) return apiAuth;
  }
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return session;
}
