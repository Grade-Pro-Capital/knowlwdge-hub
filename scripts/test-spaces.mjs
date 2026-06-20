// Validate DigitalOcean Spaces credentials before putting them in .env.local.
//
// Usage:
//   node scripts/test-spaces.mjs <ACCESS_KEY> <SECRET_KEY>
//
// Reads endpoint/region/bucket from .env.local (those are correct already) and
// tests the supplied access/secret by uploading + deleting a tiny object.
// Prints a clear PASS/FAIL so you know the keys work before saving them.

import { readFileSync } from "node:fs";
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";

function envValue(key) {
  const line = readFileSync(".env.local", "utf8")
    .split(/\r?\n/)
    .find((l) => l.startsWith(key + "="));
  return line ? line.slice(key.length + 1).trim().replace(/^["']|["']$/g, "") : "";
}

const accessKey = process.argv[2] || envValue("DO_SPACES_ACCESS_KEY");
const secretKey = process.argv[3] || envValue("DO_SPACES_SECRET_KEY");
const endpoint = envValue("DO_SPACES_ENDPOINT").replace(/\/$/, "");
const region = envValue("DO_SPACES_REGION") || "sfo3";
const bucket = envValue("DO_SPACES_BUCKET");

console.log("Testing DO Spaces credentials:");
console.log("  endpoint :", endpoint);
console.log("  region   :", region);
console.log("  bucket   :", bucket);
console.log("  accessKey:", accessKey ? accessKey.slice(0, 4) + "…(" + accessKey.length + " chars)" : "(none)");

if (!accessKey || !secretKey || !endpoint || !bucket) {
  console.error("\nMissing one of accessKey/secretKey/endpoint/bucket.");
  process.exit(1);
}

const client = new S3Client({
  endpoint,
  region,
  credentials: { accessKeyId: accessKey, secretAccessKey: secretKey },
  forcePathStyle: false,
});

const key = `blog/_credential-test-${Date.now()}.txt`;

try {
  await client.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: Buffer.from("ok"),
      ContentType: "text/plain",
      ACL: "public-read",
    })
  );
  await client.send(new DeleteObjectCommand({ Bucket: bucket, Key: key }));
  console.log("\n✅ PASS — these credentials can write to the bucket. Safe to put in .env.local.");
} catch (e) {
  console.error("\n❌ FAIL —", e.name + ":", e.message);
  if (e.name === "InvalidAccessKeyId") {
    console.error("   The access key is not recognized — generate a new Spaces key in DigitalOcean.");
  } else if (e.name === "SignatureDoesNotMatch") {
    console.error("   The secret key doesn't match the access key — re-copy both from the same key pair.");
  } else if (e.name === "AccessDenied") {
    console.error("   Key is valid but lacks write permission to this bucket.");
  }
  process.exit(1);
}
