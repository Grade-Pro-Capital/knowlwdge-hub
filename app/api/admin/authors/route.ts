import { NextResponse } from "next/server";
import { requireAdmin } from "@/app/lib/admin";
import { getAllAuthors } from "@/app/lib/authors";

// Returns existing authors for the post editor's author combobox
// (Author rows + authors already used on posts), so selecting one can
// auto-fill the slug, avatar, and credentials.
export async function GET(request: Request) {
  const auth = await requireAdmin(request);
  if (auth instanceof NextResponse) return auth;

  try {
    const authors = await getAllAuthors();
    return NextResponse.json(authors);
  } catch (e) {
    console.error("List authors error:", e);
    return NextResponse.json([], { status: 200 });
  }
}
