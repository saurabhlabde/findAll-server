import { Ctx, Query, Resolver } from 'type-graphql'
import { UserInputError } from 'apollo-server';
import { PrismaType } from '../../index'
import { JobType } from './type'
import { throwMessage } from '../../utils/message'
import { userCheck } from '../../utils/userCheck'

Resolver(of => JobType)
export class JobResolver {

        @Query(returns => [JobType])
        async getJob(@Ctx() ctx: any) {
                const { auth } = await userCheck(ctx)

                const prisma: PrismaType = ctx.prisma

                const resJob: any = await prisma.job.findMany({
                        include: {
                                User: true
                        }
                })

                console.log(resJob, 'resJob');


                return resJob
        }
}
