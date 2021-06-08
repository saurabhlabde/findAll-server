import { TestResolver } from './test'
import { RegisterResolver } from './register/mutation'
import { LoginResolver } from './login/mutation'

export const resolvers = [TestResolver, RegisterResolver, LoginResolver] as const;