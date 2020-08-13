import User from "../../../models/User";
import { AddUserMutationArgs } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
  Mutation: {
    addUser: async (_, args: AddUserMutationArgs) => {
      const { firstName, lastName } = args;
      const user = new User({ firstName, lastName });

      try {
        await user.save();
        return {
          ok: true,
          error: null,
          user
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          user: null
        };
      }
    }
  }
};

export default resolvers;
