import { Resolvers } from "../../../types/resolvers";
import User from "../../../models/User";
import Company from "../../../models/Company";

const resolvers: Resolvers = {
  Company: {
    user: async (company) => await User.find({ _id: { $in: company.user } })
  },
  Query: {
    getCompany: async (_, args) => {
      const company = await Company.findById(args._id);
      return company;
    }
  }
};

export default resolvers;
