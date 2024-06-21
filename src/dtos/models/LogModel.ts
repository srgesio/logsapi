import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Log {
    @Field(type => ID)
    id: string
    @Field(type => String)
    message: string
    @Field(type => String)
    type: "task" | "event" | "note"
    @Field(type => [String], { nullable: true })
    notes: string[]
    @Field(type => String)
    status: "todo" | "partialDone" | "done" | "closed" | "impediment"
}