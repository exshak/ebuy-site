import Mutations from './mutations'
import Queries from './queries'
import { Category, Post, User } from './User'

export default {
  Query: {
    ...Queries
  },
  Mutation: {
    ...Mutations
  },
  Category,
  Post,
  User
}
