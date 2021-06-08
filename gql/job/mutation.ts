import { Arg, Ctx, Mutation, Resolver } from 'type-graphql'
import { UserInputError } from 'apollo-server';
import { PrismaType } from '../../index'
import { JobInput } from './type'
import { User } from '../types'
import { throwMessage } from '../../utils/message'
import { userCheck } from '../../utils/userCheck'

Resolver(of => User)
export class CreateJobResolver {

        @Mutation(returns => User)
        async createJob(@Arg('create') job: JobInput, @Ctx() ctx: any) {
                const { auth } = await userCheck(ctx)

                const { media, title, location } = job

                const prisma: PrismaType = ctx.prisma

                await prisma.job.create({
                        data: {
                                userId: auth.id,
                                media,
                                title,
                                location,
                        }
                })

                const userRes: any = await prisma.user.findFirst({
                        where: {
                                id: auth.id
                        },
                        include: {
                                Job: true
                        }
                })

                return userRes
        }
}
