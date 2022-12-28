const { RESTDataSource } = require('apollo-datasource-rest')

class UsersAPI extends RESTDataSource {
  constructor(){
    super()
    this.baseURL = 'http://localhost:3000'
  }

  getUsers() {
    return this.get('/users');
    // const users = await this.get('/users')
    // return users.map(async user => ({
    //   id: user.id,
    //   nome: user.nome,
    //   email: user.email,
    //   ativo: user.ativo,
    //   role: await this.get(`/roles/${user.role}`)
    // }))
  }

  async getUserById(id) {
    const user = await this.get(`/users/${id}`)
    user.role = await this.get(`/roles/${user.role}`)
    return user
  }
}

module.exports = UsersAPI