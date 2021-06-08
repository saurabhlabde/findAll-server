import { Field, InputType, ObjectType } from 'type-graphql'
import { Food, User, Order } from '../types'


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

@InputType()
export class OrderInput {
        @Field()
        foodId: number

        @Field()
        street: string

        @Field()
        city: string

        @Field()
        state: string

        @Field()
        zipCode: number

        @Field()
        phoneNumber: number
}

@InputType()
export class GetOrderInput {
        @Field()
        foodId: number
}
@ObjectType()
export class FoodType extends Food {
        @Field()
        User: User
}

@ObjectType()
export class OrderType extends Order {
        @Field()
        User: User

        @Field()
        Food: Food
}
