import { Field, InputType } from "type-graphql";

@InputType()
export class AddLogInput {
    @Field()
    message: string
    @Field({ defaultValue: "task" })
    type: "task" | "event" | "note"
    @Field(() => [String], { nullable: true })
    notes: string[]
    @Field({ defaultValue: "todo" })
    status: "todo" | "partialDone" | "done" | "closed" | "impediment"
}