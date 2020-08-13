import { Resolvers } from "../../../types/resolvers";
import User from "../../../models/User";
import { UserQueryArgs } from "../../../types/graph";

const resolvers: Resolvers = {
  Query: {
    user: async (_, args: UserQueryArgs) => {
      const { _id } = args;
      try {
        const user = await User.findById(_id);
        console.log(user);

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
