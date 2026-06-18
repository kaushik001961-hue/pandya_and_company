import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

async function main() {
  const hashed = await bcrypt.hash("admin123", 10);

  await prisma.user.update({
    where: {
      email: "admin@news.com",
    },
    data: {
      password: hashed,
    },
  });

  console.log("Admin password reset to: admin123");
}

main();
