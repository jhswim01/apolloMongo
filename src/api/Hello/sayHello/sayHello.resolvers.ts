const resolvers = {
  Query: {
    sayHello: (_, args) => {
      return {
        error: false,
        text: `love you ${args.name}`
      };
    }
  }
};

export default resolvers;
