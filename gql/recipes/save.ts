import { Arg, Ctx, Mutation, Resolver } from 'type-graphql'
import { UserInputError } from 'apollo-server';
import { PrismaType } from '../../index'
import { SaveType, SaveInput } from './type'
import { throwMessage } from '../../utils/message'
import { userCheck } from '../../utils/userCheck'

Resolver(of => SaveType)
export class CreatRecipesResolver {

        @Mutation(returns => SaveType)
        async createSave(@Arg('create') save: SaveInput, @Ctx() ctx: any) {
                const { auth } = await userCheck(ctx)

                const { recipeId } = save;

                const prisma: PrismaType = ctx.prisma

                const recipesRes: any = await prisma.recipes.findFirst({
                        where: {
                                id: recipeId
                        }
                })

                if (!recipesRes) {
                        const message_ = throwMessage({
                                errors: [],
                                message: "Recipe id not found",
                                type: "error",
                        });

                        throw new UserInputError("NOT_FOUND", { message_ });
                }

                const res: any = await prisma.save.create({
                        data: {
                                userId: auth.id,
                                recipesId: recipesRes.id
                        }
                })

                const saveRes: any = await prisma.save.findFirst({
                        where: {
                                id: res.id
                        },
                        include: {
                                User: true,
                                Recipes: true,
                        }
                })

                return saveRes
        }
}
