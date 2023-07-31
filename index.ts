import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // await prisma.users.create({
  //   data: {
  //     name: "Gon Freeces",
  //     email: "gon@freeces.com",
  //     projects: {
  //       create: {
  //         name: "FluffyShelf",
  //         prefix: "SHELF",
  //         fields: [
  //           {
  //             name: "attendee",
  //             type: "string",
  //             required: true,
  //           },
  //           {
  //             name: "email",
  //             type: "string",
  //             required: true,
  //           },
  //           {
  //             name: "location",
  //             type: "string",
  //             required: true,
  //           },
  //         ],
  //       },
  //     },
  //   },
  // });

  // await prisma.project.create({
  //   data: {
  //     name: "Rare Goods Only",
  //     prefix: "RGO",
  //     fields: {
  //       create: {
  //         name: "Attendee",
  //         type: "string",
  //         required: true,
  //       },
  //     },
  //     owner: {
  //       connect: {
  //         email: "killua@zolduck.co.uk",
  //       },
  //     },
  //     keys: {
  //       create: {
  //         name: "api key",
  //         user: {
  //           connect: {
  //             email: "killua@zolduck.co.uk",
  //           },
  //         },
  //       },
  //     },
  //   },
  // });

  // await prisma.project.update({
  //   where: {
  //     id: "82a43c94-8040-4b71-9914-ad4da68a3319",
  //   },
  //   data: {
  //     fields: [
  //       {
  //         name: "attendee",
  //         type: "string",
  //         required: true,
  //       },
  //       {
  //         name: "email",
  //         type: "string",
  //         required: true,
  //       },
  //       {
  //         name: "location",
  //         type: "string",
  //         required: true,
  //       },
  //     ],
  //   },
  // });

  // await prisma.submission.create({
  //   data: {
  //     project: {
  //       connect: {
  //         id: "82a43c94-8040-4b71-9914-ad4da68a3319",
  //       },
  //     },
  //     user: {
  //       connect: {
  //         email: "desmond@sofua.co.uk",
  //       },
  //     },
  //     data: {
  //       name: "Gon Freecss",
  //       email: "gon@freeces.com",
  //       location: "Yorkshire",
  //     },
  //   },
  // });

  // await prisma.apikey.delete({
  //   where: {
  //     id: "bbef88a6-ef8b-467e-99e2-3ddb3102aa7c",
  //   },
  // });

  // await prisma.project.delete({
  //   where: {
  //     id: "f0f58a45-299d-4afa-9ec2-5d0b2fc742eb",
  //   },
  // });

  const allProjects = await prisma.project.findMany({
    // where: {
    //   id: "82a43c94-8040-4b71-9914-ad4da68a3319",
    // },
    include: {
      keys: true,
      submissions: true,
    },
  });

  // const allUsers = await prisma.users.findMany({
  //   include: {
  //     projects: true,
  //     submissions: true,
  //     keys: true,
  //   },
  // });

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
