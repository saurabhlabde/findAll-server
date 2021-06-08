import { Field, InputType, ObjectType } from "type-graphql";
import { Recipes, User, Save } from '../types'

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

@InputType()
export class SaveInput {
        @Field()
        recipeId: number
}

@ObjectType()
export class SaveType extends Save {
        @Field()
        User: User

        @Field()
        Recipes: Recipes
}