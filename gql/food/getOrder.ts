import { Arg, Ctx, Query, Resolver } from 'type-graphql'
import { UserInputError } from 'apollo-server';
import { PrismaType } from '../../index'
import { OrderType, GetOrderInput } from './type'
import { throwMessage } from '../../utils/message'
import { userCheck } from '../../utils/userCheck'

Resolver(of => OrderType)
export class OrderResolver {

        @Query(returns => [OrderType])
        async getOrder(@Arg('order') order: GetOrderInput, @Ctx() ctx: any) {
                const { auth } = await userCheck(ctx)

                const { foodId } = order;

                if (!foodId) {
                        const message_ = throwMessage({
                                errors: [],
                                message: 'Order id not found',
                                type: 'error'
                        })

                        throw new UserInputError('NOT_PROVIDED', { message_ })
                }

                const prisma: PrismaType = ctx.prisma

                const resOrder: any = await prisma.order.findMany({
                        where: {
                                foodId
                        },
                        include: {
                                User: true,
                                Food: true
                        }
                })

                return resOrder
        }
}
