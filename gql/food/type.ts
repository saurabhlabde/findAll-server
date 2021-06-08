import { Field, InputType } from 'type-graphql'


@InputType()
export class FoodInput {
        @Field()
        media: string

        @Field()
        title: string

        @Field()
        category: string

        @Field()
        schedule: string
}