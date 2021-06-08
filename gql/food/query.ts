import { Ctx, Query, Resolver } from 'type-graphql'
import { UserInputError } from 'apollo-server';
import { PrismaType } from '../../index'
import { FoodType } from './type'
import { throwMessage } from '../../utils/message'
import { userCheck } from '../../utils/userCheck'

Resolver(of => FoodType)
export class FoodResolver {

        @Query(returns => [FoodType])
        async getFood(@Ctx() ctx: any) {
                const { auth } = await userCheck(ctx)

                const prisma: PrismaType = ctx.prisma

                const resFood: any = await prisma.food.findMany({
                        include: {
                                User: true
                        }
                })

                return resFood
        }
}
