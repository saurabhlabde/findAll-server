import { Arg, Ctx, Query, Resolver } from 'type-graphql'
import { UserInputError } from 'apollo-server';
import { PrismaType } from '../../index'
import { ApplyType, GetApplyInput } from './type'
import { throwMessage } from '../../utils/message'
import { userCheck } from '../../utils/userCheck'

Resolver(of => ApplyType)
export class ApplyResolver {

        @Query(returns => [ApplyType])
        async getApply(@Arg('apply') apply: GetApplyInput, @Ctx() ctx: any) {
                const { auth } = await userCheck(ctx)

                const { jobId } = apply;

                if (!jobId) {
                        const message_ = throwMessage({
                                errors: [],
                                message: 'Job id not found',
                                type: 'error'
                        })

                        throw new UserInputError('NOT_PROVIDED', { message_ })
                }

                const prisma: PrismaType = ctx.prisma

                const resApply: any = await prisma.apply.findMany({
                        where: {
                                jobId
                        },
                        include: {
                                User: true,
                                Job: true
                        }
                })

                return resApply
        }
}
