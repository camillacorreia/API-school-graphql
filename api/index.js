const { ApolloServer, gql } = require('apollo-server');
const userSchema = require('./user/schema/user.graphql');
const port = 4000;

const users = [
  {
    nome: "Ana",
    ativo: true
  },
  {
    nome: "Marcia",
    ativo: false
  }
]

const typeDefs = [userSchema];
const resolvers = {};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true
});

server.listen({port}).then(() => {
  console.log(`Servidor rodando na porta ${port}`)
})