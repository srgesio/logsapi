import { Field, ID, ObjectType } from "type-graphql";
import { Log as LogModelType } from "./LogModel";
import { Log } from "../../types/Logs";

@ObjectType()
export class Collection {
    @Field(type => ID)
    id: string
    @Field(type => String)
    name: string
    @Field(() => [LogModelType], { nullable: true })
    logs: Log[]
}