<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="./github/graphql&apollo.png" width="200" alt="GraphQL e Apollo Logo" /></a>
</p>

## 💻 Projeto

API em GraphQL de uma escola de inglês.

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
```graphql
  query() {
    users {
      nome
      ativo
      email
      role {
        id
        type
      }
    }
  }
```

#### User
```graphql
  query($userId: ID!) {
    user(id: $userId) {
      nome
      ativo
      email
      role {
        id
        type
      }
    }
  }

  # variables
  {
    "userId": 1
  }
```

### Mutations

#### Adicionar User
```graphql
  mutation($user: UserInput) {
    adicionarUser(user: $user) {
      nome
      ativo
      email
      role {
        type
      }
    }
  }

  # variables
  {
    "user": {
      "nome": "Camilla",
      "ativo": true,
      "email": "camillajesuscorreia@hotmail.com",
      "role": "DOCENTE"
    }
  }
```

#### Atualizar User
```graphql
  mutation($id: ID!, $user: UserInput) {
    atualizarUser(id: $id, user: $user) {
      code
      message
    }
  }

  # variables
  {
    "id": 1,
    "user": {
      "nome": "Marcos",
      "ativo": true,
      "email": "marcos@hotmail.com",
      "role": "ESTUDANTE"
    }
  }
```

#### Deletar User
```graphql
  mutation($userId: ID!) {
    deletarUser(id: $userId) {
      code
      message
    }
  }

  # variables
  {
    "userId": 1
  }
```