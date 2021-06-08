import { Field, InputType, ObjectType } from 'type-graphql'
import { Food, User } from '../types'


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

@ObjectType()
export class FoodType extends Food {
        @Field()
        User: User
}