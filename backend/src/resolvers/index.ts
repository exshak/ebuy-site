import { Message } from "./Message";
import Mutations from "./mutations";
import Queries from "./queries";
import { User } from "./User";

export default {
  Query: {
    ...Queries
  },
  Mutation: {
    ...Mutations
  },
  User,
  Message
};
