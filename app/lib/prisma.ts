

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export { prisma };

// En route.ts
console.log("__dirname:", __dirname);


