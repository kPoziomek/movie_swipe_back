const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
async function main() {
  await prisma.user.create({
    data: {
      id: 'mock-user-321',
      name: 'Demo User',
      email: 'demo@example.com'
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
