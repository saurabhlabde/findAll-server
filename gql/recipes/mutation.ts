import { Arg, Ctx, Mutation, Resolver } from 'type-graphql'
import { UserInputError } from 'apollo-server';
import { PrismaType } from '../../index'
import { RecipesInput } from './type'
import { User } from '../types'
import { throwMessage } from '../../utils/message'
import { userCheck } from '../../utils/userCheck'

Resolver(of => User)
export class CreateRecipesResolver {

        @Mutation(returns => User)
        async createRecipes(@Arg('create') recipes: RecipesInput, @Ctx() ctx: any) {
                const { auth } = await userCheck(ctx)

                const { media, title, category } = recipes

                const prisma: PrismaType = ctx.prisma

                await prisma.recipes.create({
                        data: {
                                userId: auth.id,
                                media,
                                title,
                                category,
                        }
                })

                const userRes: any = await prisma.user.findFirst({
                        where: {
                                id: auth.id
                        },
                        include: {
                                Recipes: true
                        }
                })

                return userRes
        }
}
