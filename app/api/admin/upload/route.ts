import { NextResponse } from "next/server";
import { requireAdmin } from "@/app/lib/admin";
import { uploadToSpaces, saveLocalUpload, isUploadConfigured } from "@/app/lib/upload";

const IS_PROD = process.env.NODE_ENV === "production";

export async function POST(request: Request) {
  const auth = await requireAdmin(request);
  if (auth instanceof NextResponse) return auth;

  // In production we require Spaces. In development, a missing/invalid Spaces
  // config falls back to local disk (see below) so uploads are testable locally.
  if (!isUploadConfigured() && IS_PROD) {
    return NextResponse.json(
      { error: "Digital Ocean Spaces is not configured" },
      { status: 503 }
    );
  }

  const formData = await request.formData();
  const file = formData.get("file") as File | null;
  if (!file || !(file instanceof File)) {
    return NextResponse.json(
      { error: "No file provided" },
      { status: 400 }
    );
  }

  const allowed = ["image/jpeg", "image/png", "image/webp", "image/gif"];
  if (!allowed.includes(file.type)) {
    return NextResponse.json(
      { error: "Invalid file type. Allowed: JPEG, PNG, WebP, GIF" },
      { status: 400 }
    );
  }

  const maxSize = 5 * 1024 * 1024; // 5MB
  if (file.size > maxSize) {
    return NextResponse.json(
      { error: "File too large. Max 5MB" },
      { status: 400 }
    );
  }

  // Avatars are cropped to a square thumbnail and stored separately; cover/content
  // images keep their aspect ratio and are capped at 1200px wide.
  const kind = (formData.get("kind") as string | null) === "avatar" ? "avatar" : "blog";
  const key = `${kind === "avatar" ? "authors" : "blog"}/${Date.now()}-${Math.random().toString(36).slice(2)}.webp`;

  try {
    const inputBuffer = Buffer.from(await file.arrayBuffer());
    const sharp = (await import("sharp")).default;
    const pipeline =
      kind === "avatar"
        ? sharp(inputBuffer).resize(400, 400, { fit: "cover", position: "attention" })
        : sharp(inputBuffer).resize(1200, undefined, { withoutEnlargement: true });
    const outputBuffer = await pipeline.webp({ quality: 80 }).toBuffer();

    // Prefer Spaces (CDN). In dev, fall back to local disk when Spaces isn't
    // configured or the upload fails (e.g. invalid keys), so it's testable
    // without real credentials. Production never falls back — a failure there
    // is a real error we want surfaced, not silently written to a dev-only path.
    let url: string;
    if (isUploadConfigured()) {
      try {
        url = await uploadToSpaces(key, outputBuffer, "image/webp");
      } catch (e) {
        if (IS_PROD) throw e;
        console.warn(
          "Spaces upload failed; falling back to local disk (dev only):",
          e instanceof Error ? e.message : e
        );
        url = await saveLocalUpload(key, outputBuffer);
      }
    } else {
      // Non-production + unconfigured (the early prod guard already returned 503).
      url = await saveLocalUpload(key, outputBuffer);
    }

    return NextResponse.json({
      url,
      key,
    });
  } catch (e) {
    console.error("Upload error:", e);
    return NextResponse.json(
      { error: "Upload failed" },
      { status: 500 }
    );
  }
}
