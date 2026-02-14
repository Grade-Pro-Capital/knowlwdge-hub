import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";

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

export async function deleteFromSpaces(key: string): Promise<void> {
  const client = getClient();
  await client.send(
    new DeleteObjectCommand({
      Bucket: bucket,
      Key: key,
    })
  );
}
