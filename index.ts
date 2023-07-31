import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //   await prisma.users.create({
  //     data: {
  //       name: "Killua Zoldyck",
  //       email: "killua@zolduck.co.uk",
  //     },
  //   });

  //   await prisma.project.create({
  //     data: {
  //       name: "SPAWN Campfire",
  //       prefix: "SPAWN",
  //       fields: {
  //         create: {
  //           name: "Attendee",
  //           type: "string",
  //           required: true,
  //         },
  //       },
  //       owner: {
  //         connect: {
  //           email: "desmond@sofua.co.uk",
  //         },
  //       },
  //       keys: {
  //         create: {
  //           name: "api key",
  //           user: {
  //             connect: {
  //               email: "desmond@sofua.co.uk",
  //             },
  //           },
  //         },
  //       },
  //     },
  //   });

  //   await prisma.project.update({
  //     where: {
  //       id: "82a43c94-8040-4b71-9914-ad4da68a3319",
  //     },
  //     data: {
  //       fields: {
  //         name: "Attendee",
  //         type: "text",
  //         required: true,
  //       },
  //     },
  //   });

  await prisma.submission.create({
    data: {
      project: {
        connect: {
          id: "82a43c94-8040-4b71-9914-ad4da68a3319",
        },
      },
      user: {
        connect: {
          email: "desmond@sofua.co.uk",
        },
      },
      data: {
        name: "Gon Freecss",
        email: "gon@freeces.com",
        location: "Yorkshire",
      },
    },
  });

  const allProjects = await prisma.project.findMany({
    include: {
      keys: true,
      submissions: true,
    },
  });

  //   const allUsers = await prisma.users.findMany({
  //     include: {
  //       projects: true,
  //       submissions: true,
  //       keys: true,
  //     },
  //   });

  console.dir(allProjects, { depth: null });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
