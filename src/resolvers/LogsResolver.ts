import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { AddLogInput } from "../dtos/inputs/AddLogInput";
import { Log } from "../dtos/models/LogModel";
import { LogInput } from "../dtos/inputs/logInput";
import { UpdateLogInput } from "../dtos/inputs/UpdateLogInput";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
@Resolver()
export class LogsResolver {

    @Query(() => [Log])
    async logs() {
        return await prisma.log.findMany()
    }

    @Query(() => Log)
    async log(@Arg('getdata', () => LogInput) data: LogInput) {
        return await prisma.log.findUnique({
            where: { id: data.id }
        })
    }

    @Mutation(() => Log)
    async addLog(@Arg('adddata', () => AddLogInput) data: AddLogInput) {

        const log: AddLogInput = {
            ...data
        }
        return await prisma.log.create({
            data: log
        })
    }

    @Mutation(() => Log)
    async updateLog(@Arg('updatedata', () => UpdateLogInput) data: UpdateLogInput) {

        return await prisma.log.update({
            where: { id: data.id },
            data: {
                message: data.message,
                type: data.type,
                notes: data.notes,
                status: data.status
            }
        }
        )
    }

    @Mutation(() => Boolean)
    async deleteLog(@Arg('deletedata', () => LogInput) { id }: LogInput) {
        await prisma.log.delete({
            where: { id }
        })
        return true
    }
}