const { GraphQLScalarType } = require('graphql');

const userResolvers = {
  RolesType: {
    ESTUDANTE: 'ESTUDANTE',
    DOCENTE: 'DOCENTE',
    COORDENACAO: 'COORDENACAO',
  },
  DateTime: new GraphQLScalarType({
    name: 'DateTime',
    description: 'string de data e hora no formato ISO-8601',
    serialize: (value) => value.toISOString(),
    parseValue: (value) => new Date(value),
    parseLiteral: (ast) => new Date(ast.value),
  }),
  Query: {
    users: (_, args, { dataSources }) => dataSources.usersAPI.getUsers(args),
    user: (_, { id }, { dataSources }) => dataSources.usersAPI.getUserById(id),
  },
  Mutation: {
    adicionarUser: async (_, { user }, { dataSources }) => dataSources.usersAPI.adicionarUser(user),
    atualizarUser: async (_, novosDados, { dataSources }) => dataSources.usersAPI.atualizarUser(novosDados),
    deletarUser: async (_, { id }, { dataSources }) => dataSources.usersAPI.deletarUser(id),
  },
  User: {
    matriculas: (parent, _, { dataSources }) => dataSources.matriculasAPI.getMatriculasPorEstudante
      .load(parent.id),
  },
};

module.exports = userResolvers;
