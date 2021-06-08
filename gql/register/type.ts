import { Field, InputType } from 'type-graphql'


@InputType()
export class RegisterInput {
        @Field()
        firstname: string

        @Field()
        lastname: string

        @Field()
        username: string

        @Field()
        email: string

        @Field()
        password: string
}