const { GraphQLScalarType } = require('graphql')

const turmaResolvers = {
  DateTime: new GraphQLScalarType({
    name: 'DateTime',
    description: 'string de data e hora no formato ISO-8601',
    serialize: (value) => new Date(value).toISOString(),
    parseValue: (value) => new Date(value),
    parseLiteral: (ast) => new Date(ast.value).toISOString()
  }),
  Query: {
    turmas: (_, __, { dataSources }) => dataSources.turmasAPI.getTurmas(),
    turma: (_, { id }, { dataSources }) => dataSources.turmasAPI.getTurma(id)
  },
  Mutation: {
    adicionarTurma: (_, { turma }, { dataSources }) => dataSources.turmasAPI.adicionarTurma(turma),
    atualizarTurma: (_, novosDados, { dataSources }) => dataSources.turmasAPI.atualizarTurma(novosDados),
    deletarTurma: (_, { id }, { dataSources }) => dataSources.turmasAPI.deletarTurma(id),
  },
}

module.exports = turmaResolvers