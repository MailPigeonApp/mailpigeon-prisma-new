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
  //     name: "Grand Prix",
  //     prefix: "GP",
  //     fields: [
  //       {
  //         name: "Name",
  //         type: "string",
  //         required: true,
  //       },
  //       {
  //         name: "Email",
  //         type: "string",
  //         required: true,
  //       },
  //       {
  //         name: "Phone Number",
  //         type: "integer",
  //         required: true,
  //       },
  //       {
  //         name: "Address",
  //         type: "string",
  //         required: true,
  //       },
  //       {
  //         name: "Attending",
  //         type: "boolean",
  //         required: true,
  //       },
  //     ],
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
  //     id: "f2598b41-4930-4c9e-bc62-40c7fbf36860",
  //   },
  //   data: {
  //     fields: [
  //       // {
  //       //   name: "Attendee",
  //       //   type: "string",
  //       //   required: true,
  //       // },
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

  // const allProjects = await prisma.project.findMany({
  //   // where: {
  //   //   id: "82a43c94-8040-4b71-9914-ad4da68a3319",
  //   // },
  //   include: {
  //     keys: true,
  //     submissions: true,
  //   },
  // });

  // await prisma.integrations.create({
  //   data: {
  //     name: "Telegram",
  //     type: "telegram",
  //     user: {
  //       connect: {
  //         email: "desmond@sofua.co.uk",
  //       },
  //     },
  //     project: {
  //       connect: {
  //         id: "006ec3db-b5f1-4d3f-8c0f-77989dc8fd63",
  //       },
  //     },
  //     data: {
  //       botToken: "1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  //       chatId: "1234567890",
  //     },
  //   },
  // });

  // await prisma.integrations.update({
  //   where: {

  //   }
  // })

  // await prisma.project.update({
  //   where: {
  //     id: "7c01be21-12c4-42f2-8386-854b77274276",
  //   },
  //   data: {
  //     active_integrations: {
  //       set: ["telegram"],
  //     },
  //   },
  // });

  // const allUsers = await prisma.users.findMany({
  //   include: {
  //     // projects: true,
  //     // submissions: true,
  //     // keys: true,
  //     integrations: true,
  //   },
  // });

  // await prisma.integrations.delete({
  //   where: {
  //     id: "485ef800-f4f6-424f-b119-f325a3429b1f",
  //   },
  // });

  // await prisma.project.update({
  //   where: {
  //     id: "7a0092d6-0434-443d-9c95-1b46d3176ac2",
  //   },
  //   data: {
  //     active_integrations: {
  //       set: [],
  //     },
  //   },
  // });

  const allIntegrations = await prisma.project.findMany({
    include: {
      integrations: true,
    },
  });

  // const allProjects = await prisma.project.findMany({
  //   include: {
  //     integrations: true,
  //   },
  // });

  console.dir(allIntegrations, { depth: null });
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
