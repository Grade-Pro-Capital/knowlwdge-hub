import { NextResponse } from "next/server";
import { requireAdmin } from "@/app/lib/admin";
import { prisma } from "@/app/lib/db";
import {
  invalidateRedirects,
  normalizeDestination,
  normalizeSource,
  validateRedirect,
  type RedirectInput,
} from "@/app/lib/redirects";

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const auth = await requireAdmin(request);
  if (auth instanceof NextResponse) return auth;

  const { id } = await params;
  const current = await prisma.redirect.findUnique({ where: { id } });
  if (!current) return NextResponse.json({ error: "Redirect not found" }, { status: 404 });

  let input: RedirectInput;
  try {
    const body = await request.json();
    input = {
      source: body.source !== undefined ? String(body.source) : current.source,
      destination: body.destination !== undefined ? String(body.destination) : current.destination,
      permanent: body.permanent !== undefined ? body.permanent !== false : current.permanent,
      note: body.note !== undefined ? (typeof body.note === "string" ? body.note.trim() || null : null) : current.note,
    };
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const others = await prisma.redirect.findMany({
    where: { id: { not: id } },
    select: { id: true, source: true, destination: true },
  });
  const error = validateRedirect(input, others);
  if (error) return NextResponse.json({ error }, { status: 400 });

  const updated = await prisma.redirect.update({
    where: { id },
    data: {
      source: normalizeSource(input.source),
      destination: normalizeDestination(input.destination),
      permanent: input.permanent,
      note: input.note,
    },
  });
  invalidateRedirects();
  return NextResponse.json(updated);
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const auth = await requireAdmin(request);
  if (auth instanceof NextResponse) return auth;

  const { id } = await params;
  const { count } = await prisma.redirect.deleteMany({ where: { id } });
  if (!count) return NextResponse.json({ error: "Redirect not found" }, { status: 404 });
  invalidateRedirects();
  return NextResponse.json({ success: true });
}
