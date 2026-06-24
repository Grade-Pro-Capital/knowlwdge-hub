import { NextResponse } from "next/server";
import { requireAdmin } from "@/app/lib/admin";
import { getAllCategoryNames } from "@/app/lib/categories";

// Returns the list of existing category names for the post editor's category
// combobox (existing Category rows + categories already used on posts).
export async function GET(request: Request) {
  const auth = await requireAdmin(request);
  if (auth instanceof NextResponse) return auth;

  try {
    const names = await getAllCategoryNames();
    return NextResponse.json(names);
  } catch (e) {
    console.error("List categories error:", e);
    return NextResponse.json([], { status: 200 });
  }
}
