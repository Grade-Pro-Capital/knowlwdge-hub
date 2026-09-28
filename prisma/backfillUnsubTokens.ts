/**
 * Backfill unsubscribe tokens for existing newsletter subscribers — SAFE,
 * idempotent, dry-run by default.
 *
 *   Preview (no writes):   npx tsx prisma/backfillUnsubTokens.ts
 *   Apply changes:         npx tsx prisma/backfillUnsubTokens.ts --apply
 *
 * Only fills rows where unsubscribeToken is missing; never overwrites an
 * existing token. (Tokens are also generated lazily at send time, so this is a
 * convenience — it makes unsubscribe links valid even before the first blast.)
 */
import { config } from "dotenv";
import { randomBytes } from "crypto";
import { PrismaClient } from "@prisma/client";

config({ path: ".env.local" });
config();

const prisma = new PrismaClient();
const APPLY = process.argv.includes("--apply");

async function main() {
  const missing = await prisma.newsletterSubscription.findMany({
    where: { unsubscribeToken: null },
    select: { id: true, email: true },
  });

  console.log(
    `${missing.length} subscriber(s) without an unsubscribe token.` +
      (APPLY ? " Applying…" : " (dry run — pass --apply to write)")
  );

  if (!APPLY) return;

  for (const sub of missing) {
    await prisma.newsletterSubscription.update({
      where: { id: sub.id },
      data: { unsubscribeToken: randomBytes(32).toString("hex") },
    });
  }
  console.log(`Done. Updated ${missing.length} subscriber(s).`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
