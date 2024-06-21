import { Field, ID, InputType } from "type-graphql";

@InputType()
export class UpdateLogInput {
    @Field(() => ID)
    id: string
    @Field({ nullable: true })
    message: string
    @Field({ nullable: true })
    type: "task" | "event" | "note"
    @Field(() => [String], { nullable: true })
    notes: string[]
    @Field({ defaultValue: "todo" })
    status: "todo" | "partialDone" | "done" | "closed" | "impediment"
}