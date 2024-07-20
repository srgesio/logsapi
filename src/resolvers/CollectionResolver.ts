import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { PrismaClient } from "@prisma/client";
import { Collection } from "../dtos/models/CollectionsModel";
import { CollectionInput } from "../dtos/inputs/collections/CollectionInput";
import { AddCollectionInput } from "../dtos/inputs/collections/AddCollectionInput";
import { UpdateCollectionInput } from "../dtos/inputs/collections/UpdateCollectionInput";
import { Log } from "../dtos/models/LogModel";

const prisma = new PrismaClient()
@Resolver(() => Collection)
export class CollectionsResolver {

    @Query(() => [Collection])
    async collections() {
        return await prisma.collection.findMany()
    }

    @Query(() => Collection)
    async collection(@Arg('getdata', () => CollectionInput) data: CollectionInput) {
        return await prisma.collection.findUnique({
            where: { id: data.id }
        })
    }

    @Mutation(() => Collection)
    async addCollection(@Arg('adddata', () => AddCollectionInput) data: AddCollectionInput) {

        const collection: AddCollectionInput = {
            ...data
        }
        return await prisma.collection.create({
            data: collection
        })
    }

    @Mutation(() => Collection)
    async updateCollection(@Arg('updatedata', () => UpdateCollectionInput) data: UpdateCollectionInput) {

        return await prisma.collection.update({
            where: { id: data.id },
            data: {
                name: data.name
            }
        }
        )
    }

    @Mutation(() => Boolean)
    async deleteCollection(@Arg('deletedata', () => CollectionInput) { id }: CollectionInput) {
        await prisma.collection.delete({
            where: { id }
        })
        return true
    }

    @FieldResolver(() => [Log])
    async logs(@Root() data: Collection) {
        return await prisma.collection.findUnique({
            where: { id: data.id }
        }).logs()
    }
}