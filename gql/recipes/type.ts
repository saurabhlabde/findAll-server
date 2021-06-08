import { Field, InputType, ObjectType } from "type-graphql";
import { Recipes, User } from '../types'

@InputType()
export class RecipesInput {
        @Field()
        media: string

        @Field()
        title: string

        @Field()
        category: string
}

@ObjectType()
export class RecipesType extends Recipes {
        @Field()
        User: User
}