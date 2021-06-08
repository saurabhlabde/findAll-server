import { Field, InputType } from "type-graphql";


@InputType()
export class JobInput {
        @Field()
        media: string

        @Field()
        title: string

        @Field()
        location: string
}

