import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Log {
    @Field(() => ID)
    id: string
    @Field()
    message: string
    @Field()
    type: "task" | "event" | "note"
    @Field(() => [String], { nullable: true })
    notes: string[]
    @Field()
    status: "todo" | "partialDone" | "done" | "closed" | "impediment"
}