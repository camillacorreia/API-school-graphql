const { ApolloServer, gql } = require('apollo-server');
const userSchema = require('./user/schema');

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

const server = new ApolloServer({ typeDefs, resolvers });