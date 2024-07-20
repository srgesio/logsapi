import { Field, ID, InputType } from "type-graphql";
import { Log as LogModelType } from "../../models/LogModel";
@InputType()
export class UpdateCollectionInput {
    @Field(() => ID)
    id: string
    @Field(() => String)
    name: string
}