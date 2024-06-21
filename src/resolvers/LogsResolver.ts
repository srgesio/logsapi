import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { database } from "../database";
import { randomUUID } from "node:crypto"
import { AddLogInput } from "../dtos/inputs/AddLogInput";
import { Log } from "../dtos/models/LogModel";
import { LogInput } from "../dtos/inputs/logInput";
import { UpdateLogInput } from "../dtos/inputs/UpdateLogInput";

@Resolver()
export class LogsResolver {
    @Query(() => [Log])
    async logs() {
        return database.logs
    }

    @Query(() => Log)
    async log(@Arg('getdata', () => LogInput) data: LogInput) {
        return database.logs.find(log => log.id === data.id)
    }

    @Mutation(() => Log)
    async addLog(@Arg('adddata', () => AddLogInput) data: AddLogInput) {

        const log: Log = {
            id: randomUUID(),
            ...data
        }
        database.logs.push(log)
        return log
    }

    @Mutation(() => Log)
    async updateLog(@Arg('updatedata', () => UpdateLogInput) data: UpdateLogInput) {
        const logToUpdateIndex = database.logs.findIndex(log => log.id === data.id)
        const logToUpdate = database.logs[logToUpdateIndex]
        if (!logToUpdate) {
            throw new Error('Log not found')
        }

        const log: Log = {
            ...logToUpdate,
            ...data
        }

        if (data.notes && logToUpdate.notes) {
            log.notes = [...data.notes, ...logToUpdate.notes]
        }

        database.logs[logToUpdateIndex] = log
        return log
    }

    @Mutation(() => Boolean)
    async deleteLog(@Arg('deletedata', () => LogInput) { id }: LogInput) {
        const logToDeleteIndex = database.logs.findIndex(log => log.id === id)
        if (logToDeleteIndex === -1) {
            throw new Error('Log not found')
        }
        database.logs.splice(logToDeleteIndex, 1)
        return true
    }
}