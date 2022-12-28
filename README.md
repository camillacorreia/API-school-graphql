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
  mutation($nome: String!, $ativo: Boolean!, $email: String, $role: String!) {
    adicionarUser(nome: $nome, ativo: $ativo, email: $email, role: $role) {
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
    "nome": "Camilla",
    "ativo": true,
    "email": "camillajesuscorreia@hotmail.com",
    "role": "DOCENTE"
  }
```

#### Atualizar User
```graphql
  mutation($id: ID!, $nome: String!, $ativo: Boolean!, $email: String!, $role: String!) {
    atualizarUser(nome: $nome, ativo: $ativo, email: $email, role: $role) {
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
    "id: 1,
    "nome": "Camilla",
    "ativo": true,
    "email": "camillajesuscorreia@hotmail.com",
    "role": "ESTUDANTE"
  }
```

#### Deletar User
```graphql
  mutation($userId: ID!) {
    deletarUser(nome: $nome, ativo: $ativo, email: $email, role: $role) {
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
    "userId": 1
  }
```