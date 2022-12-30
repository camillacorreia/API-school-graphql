<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="./github/graphql&apollo.png" width="200" alt="GraphQL e Apollo Logo" /></a>
</p>

## 💻 Projeto

API em GraphQL de uma escola de inglês.

O servidor GraphQL faz uma interface entre fontes de dados e disponibiliza esses dados para qualquer plataforma. Ou seja, ele pode selecionar dados de uma API REST, de microsserviços, de uma database.

## ℹ️ How To Use

```bash

# Install dependencies
$ npm install

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

#### Turma
```graphql
  query($turmaId: ID!) {
    turma(id: $turmaId) {
      id
      descricao
      horario
      vagas
      inicio
      docente
      createdAt
    }
  }

  # variables
  {
    "turmaId": 1
  }
```


#### Turmas
```graphql
  query() {
    turmas {
      id
      descricao
      horario
      vagas
      inicio
      docente
      createdAt
    }
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
  mutation($userId: ID!, $user: UserInput) {
    atualizarUser(id: $id, user: $user) {
      code
      message
    }
  }

  # variables
  {
    "userId": 1,
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

#### Adicionar Turma
```graphql
  mutation($turma: TurmaInput) {
    adicionarTurma(turma: $turma) {
      id
      descricao
      horario
      vagas
      inicio
      docente
      createdAt
    }
  }

  # variables
  {
    "turma": {
      "descricao": "super avançado",
      "horario": "noturno",
      "vagas": 5,
      "inicio": "2020-12-01T00:00:00.000Z",
      "docente_id": 5
    }
  }
```

#### Atualizar Turma
```graphql
  mutation($turmaId: ID!, $turma: TurmaInput) {
    atualizarTurma(id: $id, turma: $turma) {
      id
      descricao
      horario
      vagas
      inicio
      docente
      createdAt
    }
  }

  # variables
  {
    "turmaId": 1,
    "turma": {
      "descricao": "super avançado",
      "horario": "noturno",
      "vagas": 8,
      "inicio": "2020-12-01T00:00:00.000Z",
      "docente_id": 5
    }
  }
```

#### Deletar Turma
```graphql
  mutation($turmaId: ID!) {
    deletarTurma(id: $userId) {
      message
    }
  }

  # variables
  {
    "turmaId": 1
  }
```
