import { Field, ID, InputType } from "type-graphql";

@InputType()
export class CollectionInput {
    @Field(() => ID)
    id: string
}