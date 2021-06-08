import { Field, ObjectType } from "type-graphql";


@ObjectType()
export class User {
        @Field()
        id: number;

        @Field()
        firstname: string

        @Field()
        lastname: string

        @Field()
        username: string;

        @Field()
        password: string

        @Field()
        createdAt: string

        @Field(type => [Tokens])
        tokens: Tokens[]

        @Field(type => [Job])
        Job: Job[]

        @Field(type => [Food])
        Food: Food[]

        @Field(type => [Recipes])
        Recipes: Recipes[]

        @Field(type => [Order])
        Order: Order[]

        @Field(type => [Save])
        Save: Save[]

        @Field(type => [Apply])
        Apply: Apply[]

        @Field(type => [Tokens])
        Tokens: Tokens[]

}

@ObjectType()
export class Tokens {
        @Field()
        id: number

        @Field()
        userId: number

        @Field()
        token: string

        @Field()
        createdAt: string
}

@ObjectType()
export class Pay {
        @Field()
        id: number

        @Field()
        balance: number
}

@ObjectType()
export class Job {
        @Field()
        id: number

        @Field()
        userId: number

        @Field()
        media: string

        @Field()
        title: string

        @Field()
        location: string

        @Field()
        createdAt: string

        @Field(type => [Apply])
        Apply: Apply[]

}

@ObjectType()
export class Food {
        @Field()
        id: number

        @Field()
        userId: number

        @Field()
        media: string

        @Field()
        title: string

        @Field()
        category: string

        @Field()
        schedule: string

        @Field()
        createdAt: string

        @Field(type => [Order])
        Order: Order[]

        @Field(type => [Save])
        Save: Save[]
}

@ObjectType()
export class Recipes {
        @Field()
        id: number

        @Field()
        userId: number

        @Field()
        media: string

        @Field()
        title: string

        @Field()
        category: string

        @Field()
        createdAt: string

        @Field(type => [Save])
        Save: Save[]
}

@ObjectType()
export class Order {
        @Field()
        id: number

        @Field()
        userId: number

        @Field()
        foodId: number

        @Field()
        createdAt: string
}


@ObjectType()
export class Apply {
        @Field()
        id: number

        @Field()
        userId: number

        @Field()
        jobId: number

        @Field()
        createdAt: string
}

@ObjectType()
export class Save {
        @Field()
        id: number

        @Field()
        userId: number

        @Field()
        recipesId: number

        @Field()
        createdAt: string

        @Field()
        foodId?: number
}





