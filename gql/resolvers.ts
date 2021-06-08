import { TestResolver } from './test'

// auth
import { RegisterResolver } from './register/mutation'
import { LoginResolver } from './login/mutation'

// food
import { CreateFoodResolver } from './food/mutation'
import { FoodResolver } from './food/query'
import { CreateOrderResolver } from './food/order'
import { OrderResolver } from './food/getOrder'

// job
import { CreateJobResolver } from './job/mutation'
import { JobResolver } from './job/query'
import { CreatApplyResolver } from './job/apply'
import { ApplyResolver } from './job/getApply'

// recipes
import { CreateRecipesResolver } from './recipes/mutation'
import { RecipesResolver } from './recipes/query'
import { SaveResolver } from './recipes/getSave'
import { CreatRecipesResolver } from './recipes/save'


export const resolvers = [CreatRecipesResolver, SaveResolver, CreatApplyResolver, ApplyResolver, OrderResolver, CreateOrderResolver, TestResolver, RegisterResolver, LoginResolver, CreateFoodResolver, CreateJobResolver, CreateRecipesResolver, FoodResolver, JobResolver, RecipesResolver] as const;
