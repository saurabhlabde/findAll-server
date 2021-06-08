import { Mutation, Query, Resolver } from 'type-graphql'

Resolver()
export class aResolver {
        private _ = ''

        @Query(returns => String)
        async createUser() {
                return 'hello'
        }
}