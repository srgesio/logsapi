import { Field, ID, InputType } from "type-graphql";

@InputType()
export class LogInput {
    @Field(() => ID)
    id: string
}