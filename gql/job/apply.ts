import { Arg, Ctx, Mutation, Resolver } from 'type-graphql'
import { UserInputError } from 'apollo-server';
import { PrismaType } from '../../index'
import { ApplyInput, ApplyType, } from './type'
import { throwMessage } from '../../utils/message'
import { userCheck } from '../../utils/userCheck'

Resolver(of => ApplyType)
export class CreatApplyResolver {

        @Mutation(returns => ApplyType)
        async createApply(@Arg('create') apply: ApplyInput, @Ctx() ctx: any) {
                const { auth } = await userCheck(ctx)

                const { city, phoneNumber, eduction, jobId, zipCode } = apply;

                const prisma: PrismaType = ctx.prisma

                const jobRes: any = await prisma.job.findFirst({
                        where: {
                                id: jobId
                        }
                })

                if (!jobRes) {
                        const message_ = throwMessage({
                                errors: [],
                                message: "Job id not found",
                                type: "error",
                        });

                        throw new UserInputError("NOT_FOUND", { message_ });
                }

                const res: any = await prisma.apply.create({
                        data: {
                                userId: auth.id,
                                jobId: jobRes.id,
                                eduction,
                                city,
                                zipCode,
                                phoneNumber,
                        }
                })

                const applyRes: any = await prisma.apply.findFirst({
                        where: {
                                id: res.id
                        },
                        include: {
                                Job: true,
                                User: true
                        }
                })

                return applyRes
        }
}
