import { Mutation, Resolver } from 'type-graphql'

Resolver()
export class aResolver {
        private _ = ''

        @Mutation(returns => String)
        async createUser() {
                return 'hello'
        }
}