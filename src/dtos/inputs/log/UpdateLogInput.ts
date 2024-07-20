import { Field, ID, InputType } from "type-graphql";

@InputType()
export class UpdateLogInput {
    @Field(() => ID)
    id: string
    @Field(() => String, { nullable: true })
    message: string
    @Field(() => String, { nullable: true })
    type: "task" | "event" | "note"
    @Field(() => [String], { nullable: true })
    notes: string[]
    @Field(() => String, { defaultValue: "todo" })
    status: "todo" | "partialDone" | "done" | "closed" | "impediment"
    @Field(() => String)
    collectionId: string
}