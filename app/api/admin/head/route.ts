import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/app/lib/admin";
import { prisma } from "@/app/lib/db";
import { parseCustomHead, SITEWIDE_HEAD_KEY } from "@/app/lib/customHead";

/** The sitewide custom head code (Admin → Head code). */
export async function GET(request: Request) {
  const auth = await requireAdmin(request);
  if (auth instanceof NextResponse) return auth;

  const setting = await prisma.siteSetting.findUnique({ where: { key: SITEWIDE_HEAD_KEY } });
  return NextResponse.json({
    code: setting?.value ?? "",
    updatedAt: setting?.updatedAt ?? null,
    updatedBy: setting?.updatedBy ?? null,
  });
}

/** Save (or clear, when empty) the sitewide code, then rebuild the pages that show it. */
export async function PUT(request: Request) {
  const auth = await requireAdmin(request);
  if (auth instanceof NextResponse) return auth;

  let code: string;
  try {
    const body = await request.json();
    if (typeof body.code !== "string") throw new Error();
    code = body.code.replace(/\r\n?/g, "\n").trim();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { errors } = parseCustomHead(code);
  if (errors.length) return NextResponse.json({ error: "The code has problems", errors }, { status: 400 });

  if (code) {
    await prisma.siteSetting.upsert({
      where: { key: SITEWIDE_HEAD_KEY },
      create: { key: SITEWIDE_HEAD_KEY, value: code, updatedBy: auth.username },
      update: { value: code, updatedBy: auth.username },
    });
  } else {
    await prisma.siteSetting.deleteMany({ where: { key: SITEWIDE_HEAD_KEY } });
  }
  // The main-site pages are built ahead of time; this rebuilds every page with the new code.
  revalidatePath("/", "layout");
  return NextResponse.json({ success: true });
}
