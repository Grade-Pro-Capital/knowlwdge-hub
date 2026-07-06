import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

// Trim to avoid SignatureDoesNotMatch from stray spaces in .env
const endpoint = process.env.DO_SPACES_ENDPOINT?.trim().replace(/\/$/, "");
const region = (process.env.DO_SPACES_REGION ?? "nyc3").trim();
const bucket = process.env.DO_SPACES_BUCKET?.trim();
const accessKey = process.env.DO_SPACES_ACCESS_KEY?.trim();
const secretKey = process.env.DO_SPACES_SECRET_KEY?.trim();

export const DO_CDN_URL = (process.env.DO_SPACES_CDN_URL ?? "").trim().replace(/\/$/, "");

function getClient(): S3Client {
  if (!endpoint || !accessKey || !secretKey || !bucket) {
    throw new Error(
      "DO_SPACES_ENDPOINT, DO_SPACES_BUCKET, DO_SPACES_ACCESS_KEY, DO_SPACES_SECRET_KEY must be set"
    );
  }
  return new S3Client({
    endpoint,
    region,
    credentials: { accessKeyId: accessKey, secretAccessKey: secretKey },
    forcePathStyle: false,
  });
}

export function isUploadConfigured(): boolean {
  return !!(endpoint && bucket && accessKey && secretKey);
}

export async function uploadToSpaces(
  key: string,
  body: Buffer | Uint8Array,
  contentType: string
): Promise<string> {
  const client = getClient();
  await client.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: body,
      ContentType: contentType,
      ACL: "public-read",
    })
  );
  const baseUrl = DO_CDN_URL || `${endpoint}/${bucket}`;
  return `${baseUrl.replace(/\/$/, "")}/${key}`;
}

/**
 * Local-disk fallback for development so uploads work without valid DigitalOcean
 * Spaces credentials. Writes the processed file under public/uploads/<key> and
 * returns a site-relative URL (/uploads/<key>) that Next serves statically.
 * NOT for production — files written here aren't on the CDN and don't survive a
 * fresh deploy; the route only calls this in non-production or when Spaces is
 * unconfigured.
 */
export async function saveLocalUpload(
  key: string,
  body: Buffer | Uint8Array
): Promise<string> {
  const filePath = path.join(process.cwd(), "public", "uploads", key);
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, body);
  return `/uploads/${key}`;
}

export async function deleteFromSpaces(key: string): Promise<void> {
  const client = getClient();
  await client.send(
    new DeleteObjectCommand({
      Bucket: bucket,
      Key: key,
    })
  );
}
