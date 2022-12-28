const userResolvers = {
  Query: {
    users: (root, args, { dataSources }) => dataSources.usersAPI.getUsers(),
    user: (root, { id }, { dataSources }) => dataSources.usersAPI.getUserById(id)
  },
  Mutation: {
    adicionarUser: async (root, user, { dataSources }) => dataSources.usersAPI.adicionarUser(user),
    atualizarUser: async (root, novosDados, { dataSources }) => dataSources.usersAPI.atualizarUser(novosDados),
    deletarUser: async (root, { id }, { dataSources }) => dataSources.usersAPI.deletarUser(id)
  } 
};

module.exports = userResolvers;