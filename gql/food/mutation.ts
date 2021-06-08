import { Arg, Ctx, Mutation, Resolver } from 'type-graphql'
import { UserInputError } from 'apollo-server';
import { PrismaType } from '../../index'
import { FoodInput } from './type'
import { User } from '../types'
import { throwMessage } from '../../utils/message'
import { userCheck } from '../../utils/userCheck'

Resolver(of => User)
export class CreateFoodResolver {

        @Mutation(returns => User)
        async createFood(@Arg('create') food: FoodInput, @Ctx() ctx: any) {
                const { auth } = await userCheck(ctx)

                const { category, media, schedule, title } = food

                const prisma: PrismaType = ctx.prisma

                await prisma.food.create({
                        data: {
                                userId: auth.id,
                                media,
                                title,
                                category,
                                schedule,
                        }
                })

                const userRes: any = await prisma.user.findFirst({
                        where: {
                                id: auth.id
                        },
                        include: {
                                Food: true
                        }
                })

                return userRes
        }
}
