<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="./github/graphql&apollo.png" width="200" alt="GraphQL e Apollo Logo" /></a>
</p>

## 💻 Projeto

O servidor GraphQL faz uma interface entre fontes de dados e disponibiliza esses dados para qualquer plataforma. Ou seja, ele pode selecionar dados de uma API REST, de microsserviços, de uma database.

## ℹ️ How To Use

```bash

# Run API Rest
$ npx json-server --watch api/data/dados.json

# Start Server
$ npm start

# running on port http://localhost:4000/
```

### Queries

#### Users
```bash
  query() {
    users {
      nome
      role {
        type
      }
    }
  }
```

#### User
```bash
  query($userId: ID!) {
    user(id: $userId) {
      nome
      role {
        type
      }
    }
  }

  # variables
  {
    "userId": 1
  }
```