import { Field, InputType, ObjectType } from "type-graphql";
import { Job, User, Apply } from '../types'

@InputType()
export class JobInput {
        @Field()
        media: string

        @Field()
        title: string

        @Field()
        location: string
}

@InputType()
export class ApplyInput {
        @Field()
        jobId: number

        @Field()
        eduction: string

        @Field()
        city: string

        @Field()
        zipCode: number

        @Field()
        phoneNumber: number
}

@InputType()
export class GetApplyInput {
        @Field()
        jobId: number
}

@ObjectType()
export class JobType extends Job {
        @Field()
        User: User
}

@ObjectType()
export class ApplyType extends Apply {
        @Field()
        User: User

        @Field()
        Job: Job
}
