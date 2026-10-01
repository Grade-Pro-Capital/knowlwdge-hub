import { NextResponse } from "next/server";
import { requireAdmin } from "@/app/lib/admin";
import { getBaseUrl } from "@/app/lib/seo";
import { analyzeRobotsTxt } from "@/app/lib/robotsTxt";
import { getKeyPages, getRobotsState, resetRobotsTxt, saveRobotsTxt } from "@/app/lib/robotsStore";

async function state() {
  const [robots, keyPages] = await Promise.all([getRobotsState(), getKeyPages()]);
  return { ...robots, keyPages, baseUrl: getBaseUrl() };
}

export async function GET(request: Request) {
  const auth = await requireAdmin(request);
  if (auth instanceof NextResponse) return auth;
  return NextResponse.json(await state());
}

/**
 * Save a new robots.txt. Refused if it has errors; refused (409) if it would block
 * a key page unless `confirmBlocked` is true (the editor's "I understand" box).
 */
export async function PUT(request: Request) {
  const auth = await requireAdmin(request);
  if (auth instanceof NextResponse) return auth;

  let text: string;
  let confirmBlocked = false;
  let note = "Saved";
  try {
    const body = await request.json();
    text = String(body.text ?? "");
    confirmBlocked = body.confirmBlocked === true;
    if (typeof body.note === "string" && body.note.trim()) note = body.note.trim().slice(0, 120);
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  if (!text.trim()) {
    return NextResponse.json({ error: "robots.txt can't be empty. Use “Reset to default” instead." }, { status: 400 });
  }

  const analysis = analyzeRobotsTxt(text, { baseUrl: getBaseUrl(), keyPages: await getKeyPages() });
  if (analysis.errors.length) {
    return NextResponse.json({ error: "Fix the errors before saving.", errors: analysis.errors }, { status: 400 });
  }
  if (analysis.blocksKeyPages && !confirmBlocked) {
    return NextResponse.json(
      {
        error: "These rules block important pages from search engines. Confirm to save anyway.",
        keyPages: analysis.keyPages.filter((p) => p.blockedFor.length),
      },
      { status: 409 },
    );
  }

  await saveRobotsTxt(text, auth.username, note);
  return NextResponse.json(await state());
}

/** Reset to the built-in default. */
export async function DELETE(request: Request) {
  const auth = await requireAdmin(request);
  if (auth instanceof NextResponse) return auth;
  await resetRobotsTxt(auth.username);
  return NextResponse.json(await state());
}
