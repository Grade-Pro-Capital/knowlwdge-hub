import { NextResponse } from "next/server";
import { requireAdmin } from "@/app/lib/admin";
import { prisma } from "@/app/lib/db";
import {
  clearNotFound,
  invalidateRedirects,
  normalizeDestination,
  normalizeSource,
  validateRedirect,
  type RedirectInput,
} from "@/app/lib/redirects";

export async function GET(request: Request) {
  const auth = await requireAdmin(request);
  if (auth instanceof NextResponse) return auth;

  const redirects = await prisma.redirect.findMany({ orderBy: { updatedAt: "desc" } });
  return NextResponse.json(redirects);
}

export async function POST(request: Request) {
  const auth = await requireAdmin(request);
  if (auth instanceof NextResponse) return auth;

  let input: RedirectInput;
  try {
    const body = await request.json();
    input = {
      source: String(body.source ?? ""),
      destination: String(body.destination ?? ""),
      permanent: body.permanent !== false,
      note: typeof body.note === "string" ? body.note.trim() || null : null,
    };
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const others = await prisma.redirect.findMany({ select: { id: true, source: true, destination: true } });
  const error = validateRedirect(input, others);
  if (error) return NextResponse.json({ error }, { status: 400 });

  const created = await prisma.redirect.create({
    data: {
      source: normalizeSource(input.source),
      destination: normalizeDestination(input.destination),
      permanent: input.permanent,
      note: input.note,
    },
  });
  invalidateRedirects();
  await clearNotFound(created.source);
  return NextResponse.json(created, { status: 201 });
}
