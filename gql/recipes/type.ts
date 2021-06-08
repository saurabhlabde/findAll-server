import { Field, InputType } from "type-graphql";


@InputType()
export class RecipesInput {
        @Field()
        media: string

        @Field()
        title: string

        @Field()
        category: string
}
