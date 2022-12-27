const usersList = [
  {
    nome: "Ana",
    ativo: true
  },
  {
    nome: "Marcia",
    ativo: false
  }
]

const userResolvers = {
  Query: {
    users: () => usersList,
    primeiroUser: () => usersList[0]
  }
};

module.exports = userResolvers;