import User from "../../../models/User";
import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
  Mutation: {
    addUser: async (_, args) => {
      const { firstName, lastName, company } = args;
      const user = new User({ firstName, lastName, company });

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
