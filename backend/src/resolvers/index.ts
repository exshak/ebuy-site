import Mutations from './mutations'
import Queries from './queries'
import { Post, User } from './User'

export default {
  Query: {
    ...Queries
  },
  Mutation: {
    ...Mutations
  },
  Post,
  User
}
