import { Resolvers } from "../../../types/resolvers";
import { AddCompanyMutationArgs } from "../../../types/graph";
import Company from "../../../models/Company";

const resolvers: Resolvers = {
  Mutation: {
    addCompany: async (_, args: AddCompanyMutationArgs) => {
      const { name, user } = args;
      const company = new Company({ name, user });
      console.log(args, company);

      try {
        await company.save();
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
