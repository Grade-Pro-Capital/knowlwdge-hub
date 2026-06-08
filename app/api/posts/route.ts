import { NextResponse } from "next/server";
import { getPublishedPosts } from "@/app/lib/posts";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const professionalOnly = searchParams.get("professional") === "true";
  const q = searchParams.get("q")?.trim().toLowerCase();

  const formatted = await getPublishedPosts({ professionalOnly, q });

  return NextResponse.json(formatted);
}
