import { PrismaClient } from "@prisma/client";
import { database } from "../src/database";

const prisma = new PrismaClient()

async function seed() {
    await prisma.log.createMany({
        data: database.logs
    })
}

seed()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })