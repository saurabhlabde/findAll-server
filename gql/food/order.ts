import { Arg, Ctx, Mutation, Resolver } from 'type-graphql'
import { UserInputError } from 'apollo-server';
import { PrismaType } from '../../index'
import { OrderInput, OrderType } from './type'
import { throwMessage } from '../../utils/message'
import { userCheck } from '../../utils/userCheck'

Resolver(of => OrderType)
export class CreateOrderResolver {

        @Mutation(returns => OrderType)
        async createOrder(@Arg('create') order: OrderInput, @Ctx() ctx: any) {
                const { auth } = await userCheck(ctx)

                const { city, phoneNumber, state, street, zipCode, foodId } = order;

                const prisma: PrismaType = ctx.prisma

                const foodRes: any = await prisma.food.findFirst({
                        where: {
                                id: foodId
                        }
                })

                if (!foodRes) {
                        const message_ = throwMessage({
                                errors: [],
                                message: "Food id not found",
                                type: "error",
                        });

                        throw new UserInputError("NOT_FOUND", { message_ });
                }

                const res: any = await prisma.order.create({
                        data: {
                                userId: auth.id,
                                foodId: foodRes.id,
                                street,
                                city,
                                state,
                                zipCode,
                                phoneNumber,
                        }
                })

                const orderRes: any = await prisma.order.findFirst({
                        where: {
                                id: res.id
                        },
                        include: {
                                Food: true,
                                User: true
                        }
                })

                return orderRes
        }
}
