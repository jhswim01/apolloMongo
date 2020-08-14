import { Resolvers } from "../../../types/resolvers";
import Company from "../../../models/Company";
import User from "../../../models/User";

const resolvers: Resolvers = {
  User: {
    company: async (user) => {
      const companies = await Company.find({ user: { $in: user._id } });
      console.log(companies);
      return companies;
    }
    // company: async (user) => await Company.find({ "user.id": user._id })
  },
  Query: {
    getUser: async (_, args) => {
      const user = await User.findById(args._id);
      // console.log(user);
      return user;
    }
  }
};

export default resolvers;
