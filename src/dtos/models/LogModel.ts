import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Log {
    @Field(() => ID)
    id: string
    @Field(() => String)
    message: string
    @Field(() => String)
    type: "task" | "event" | "note"
    @Field(() => [String], { nullable: true })
    notes: string[]
    @Field(() => String)
    status: "todo" | "partialDone" | "done" | "closed" | "impediment"
}