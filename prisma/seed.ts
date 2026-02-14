import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { DEFAULT_TEMPLATES } from "./seedTemplates";

const prisma = new PrismaClient();

async function main() {
  const username = process.env.ADMIN_USERNAME ?? "admin";
  const password = process.env.ADMIN_PASSWORD ?? "admin123";

  const existingAdmin = await prisma.admin.findUnique({ where: { username } });
  if (!existingAdmin) {
    const hash = await bcrypt.hash(password, 10);
    await prisma.admin.create({
      data: { username, password: hash },
    });
    console.log("Created admin user:", username);
    console.log("Change the password after first login!");
  } else {
    console.log("Admin user already exists:", username);
  }

  for (const t of DEFAULT_TEMPLATES) {
    const existing = await prisma.template.findFirst({ where: { name: t.name } });
    if (!existing) {
      await prisma.template.create({ data: { name: t.name, content: t.content } });
      console.log("Created template:", t.name);
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
