import { Arg, Ctx, Query, Resolver } from 'type-graphql'
import { UserInputError } from 'apollo-server';
import { PrismaType } from '../../index'
import { SaveInput, SaveType } from './type'
import { throwMessage } from '../../utils/message'
import { userCheck } from '../../utils/userCheck'

Resolver(of => SaveType)
export class SaveResolver {

        @Query(returns => [SaveType])
        async getSave(@Arg('save') save: SaveInput, @Ctx() ctx: any) {
                const { auth } = await userCheck(ctx)

                const { recipeId } = save;

                if (!recipeId) {
                        const message_ = throwMessage({
                                errors: [],
                                message: 'Recipe id not found',
                                type: 'error'
                        })

                        throw new UserInputError('NOT_PROVIDED', { message_ })
                }

                const prisma: PrismaType = ctx.prisma

                const resSave: any = await prisma.save.findMany({
                        where: {
                                recipesId: recipeId
                        },
                        include: {
                                User: true,
                                Recipes: true
                        }
                })

                return resSave
        }
}
