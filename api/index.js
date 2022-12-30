const { ApolloServer } = require('apollo-server');
const { mergeTypeDefs } = require('@graphql-tools/merge');
const path = require('path');

const { userSchema, userResolvers, UsersAPI } = require('./user');
const { turmaSchema, turmaResolvers, TurmasAPI } = require('./turma');
const { matriculaSchema } = require('./matricula');

const typeDefs = mergeTypeDefs([userSchema, turmaSchema, matriculaSchema]);
const resolvers = [userResolvers, turmaResolvers];

const dbConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: path.resolve(__dirname, './data/database.db'),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    usersAPI: new UsersAPI(),
    turmasAPI: new TurmasAPI(dbConfig),
  }),
});

server.listen().then(({ url }) => {
  console.log(`Servidor rodando na porta ${url}`);
});
