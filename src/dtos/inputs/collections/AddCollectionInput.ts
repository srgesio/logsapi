import { Field, InputType } from "type-graphql";

@InputType()
export class AddCollectionInput {
    @Field(() => String)
    name: string
}