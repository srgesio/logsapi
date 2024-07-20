import { Field, InputType } from "type-graphql";

@InputType()
export class AddLogInput {
    @Field(() => String)
    message: string
    @Field(() => String, { defaultValue: "task" })
    type: "task" | "event" | "note"
    @Field(() => [String], { nullable: true })
    notes: string[]
    @Field(() => String, { defaultValue: "todo" })
    status: "todo" | "partialDone" | "done" | "closed" | "impediment"
    @Field(() => String)
    collectionId: string
}