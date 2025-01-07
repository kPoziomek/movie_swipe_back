import { PrismaClient } from "@prisma/client";

async function seedUser() {
  const prisma = new PrismaClient();

  try {
    const user = await prisma.user.upsert({
      where: {
        id: "mock-user-123",
      },
      update: {},
      create: {
        id: "mock-user-123",
        name: "Test User",
        email: "test@example.com",
      },
    });
  } catch (error) {
    console.error("Error seeding mock user:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedUser();
