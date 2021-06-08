import { Query, Resolver } from 'type-graphql'

Resolver()
export class TestResolver {

        @Query(returns => String)
        async test() {
                return 'hello test'
        }
}