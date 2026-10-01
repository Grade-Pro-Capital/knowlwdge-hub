import { NextResponse } from "next/server";
import { requireAdmin } from "@/app/lib/admin";
import { prisma } from "@/app/lib/db";

/** Mark a 404 as "leave as 404" (ignored) or bring it back to the main list. */
export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const auth = await requireAdmin(request);
  if (auth instanceof NextResponse) return auth;

  const { id } = await params;
  let ignored: boolean;
  try {
    const body = await request.json();
    if (typeof body.ignored !== "boolean") throw new Error();
    ignored = body.ignored;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  const { count } = await prisma.notFoundHit.updateMany({ where: { id }, data: { ignored } });
  if (!count) return NextResponse.json({ error: "Not found in the list" }, { status: 404 });
  return NextResponse.json({ success: true });
}

/** Remove a row (it comes back if the URL is hit again). */
export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const auth = await requireAdmin(request);
  if (auth instanceof NextResponse) return auth;

  const { id } = await params;
  const { count } = await prisma.notFoundHit.deleteMany({ where: { id } });
  if (!count) return NextResponse.json({ error: "Not found in the list" }, { status: 404 });
  return NextResponse.json({ success: true });
}
