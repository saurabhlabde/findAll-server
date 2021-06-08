import { TestResolver } from './test'

// auth
import { RegisterResolver } from './register/mutation'
import { LoginResolver } from './login/mutation'

// food
import { CreateFoodResolver } from './food/mutation'
import { FoodResolver } from './food/query'

// job
import { CreateJobResolver } from './job/mutation'
import { JobResolver } from './job/query'

// recipes
import { CreateRecipesResolver } from './recipes/mutation'
import { RecipesResolver } from './recipes/query'


export const resolvers = [TestResolver, RegisterResolver, LoginResolver, CreateFoodResolver, CreateJobResolver, CreateRecipesResolver, FoodResolver, JobResolver, RecipesResolver] as const;
