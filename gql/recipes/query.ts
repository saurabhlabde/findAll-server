import { Ctx, Query, Resolver } from 'type-graphql'
import { UserInputError } from 'apollo-server';
import { PrismaType } from '../../index'
import { RecipesType } from './type'
import { throwMessage } from '../../utils/message'
import { userCheck } from '../../utils/userCheck'

Resolver(of => RecipesType)
export class RecipesResolver {

        @Query(returns => [RecipesType])
        async getRecipes(@Ctx() ctx: any) {
                const { auth } = await userCheck(ctx)

                const prisma: PrismaType = ctx.prisma

                const resRecipes: any = await prisma.recipes.findMany({
                        include: {
                                User: true
                        }
                })

                return resRecipes
        }
}
