import Cat from "../../models/Cat";

const resolvers = {
  Mutation: {
    kitty: async (_, args) => {
      const { name } = args;
      const kitty = new Cat({ name });
      try {
        await kitty.save();
        return {
          ok: true,
          kitty: name,
          text: `new ${name} kitty kitty`,
          error: null
        };
      } catch (error) {
        return {
          ok: false,
          kitty: null,
          text: null,
          error: error.message
        };
      }
    }
  }
};

export default resolvers;
