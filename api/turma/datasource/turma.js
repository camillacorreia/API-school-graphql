const { SQLDataSource } = require('datasource-sql')

class TurmasAPI extends SQLDataSource {
  constructor(dbConfig) {
    super(dbConfig)
    this.Resposta = {
      message: ""
    }
  }

  async getTurmas() {
    return this.db 
      .select('*')
      .from('turmas')
  }
  // SELECT * FROM turmas

  async getTurma(id) {
    const turma = await this.db
      .select('*')
      .from('turmas')
      .where({ id: Number(id)})
    return turma[0]
  }
  // SELECT * FROM turmas WHERE id = ?

  async adicionarTurma(novaTurma) {
    const novaTurmaId = await this.db
      .insert(novaTurma)
      .returning('id')
      .into('turmas')
  
    const turmaInserida = await this.getTurma(novaTurmaId[0])
    return ({ ...turmaInserida })
  }
  // INSERT INTO turmas (descricao, docente_id, horario, inicio, vagas) values (?, ?, ?, ?, ?)
  // SELECT * FROM turmas WHERE id = ?

  async atualizarTurma(novosDados) {
    await this.db
      .update({ ...novosDados.turma })
      .where({ id: Number(novosDados.id) })
      .into('turmas')

    const turmaAtualizada = await this.getTurma(novosDados.id)
    return ({
      ...turmaAtualizada
    })
  }
  // UPDATE turmas SET descricao = ?, horario = ?, vagas = ?, inicio = ?, docente_id = ? where id = ?
  // SELECT * FROM turmas WHERE id = ?

  async deletarTurma(id) {
    await this.db('turmas')
      .where({ id: id })
      .del()

    this.Resposta.message = "registro deletado"
    return this.Resposta
  }
  // DELETE FROM turmas WHERE id = ?
}

module.exports = TurmasAPI