import { Field, InputType, ObjectType } from "type-graphql";
import { Job, User } from '../types'

@InputType()
export class JobInput {
        @Field()
        media: string

        @Field()
        title: string

        @Field()
        location: string
}

@ObjectType()
export class JobType extends Job {
        @Field()
        User: User
}