import { Resolvers } from "../../../types/resolvers";
import Company from "../../../models/Company";
import { CompanyQueryArgs } from "../../../types/graph";

const resolvers: Resolvers = {
  Query: {
    company: async (_, args: CompanyQueryArgs) => {
      const { _id } = args;
      try {
        const company = await Company.findById(_id);
        return {
          ok: true,
          error: null,
          company
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          company: null
        };
      }
    }
  }
};

export default resolvers;
