const { SQLDataSource } = require('datasource-sql');
const DataLoader = require('dataloader');

class TurmasAPI extends SQLDataSource {
  constructor(dbConfig) {
    super(dbConfig);
    this.Resposta = {
      message: '',
    };
  }

  // SELECT * FROM turmas
  async getTurmas() {
    return this.db
      .select('*')
      .from('turmas');
  }

  // SELECT * FROM turmas WHERE id = ?
  async getTurma(id) {
    const turma = await this.db
      .select('*')
      .from('turmas')
      .where({ id: Number(id) });
    return turma[0];
  }

  // INSERT INTO turmas (descricao, docente_id, horario, inicio, vagas) values (?, ?, ?, ?, ?)
  // SELECT * FROM turmas WHERE id = ?
  async adicionarTurma(novaTurma) {
    const novaTurmaId = await this.db
      .insert(novaTurma)
      .returning('id')
      .into('turmas');

    const turmaInserida = await this.getTurma(novaTurmaId[0]);
    return ({ ...turmaInserida });
  }

  // UPDATE turmas SET descricao = ?, horario = ?, vagas = ?, inicio = ?, docente_id = ? where id = ?
  // SELECT * FROM turmas WHERE id = ?
  async atualizarTurma(novosDados) {
    await this.db
      .update({ ...novosDados.turma })
      .where({ id: Number(novosDados.id) })
      .into('turmas');

    const turmaAtualizada = await this.getTurma(novosDados.id);
    return ({
      ...turmaAtualizada,
    });
  }

  // DELETE FROM turmas WHERE id = ?
  async deletarTurma(id) {
    await this.db('turmas')
      .where({ id })
      .del();

    this.Resposta.message = 'registro deletado';
    return this.Resposta;
  }

  getTurmasCarregadas = new DataLoader(async (idsTurmas) => {
    const turmas = await this.db
      .select('*')
      .from('turmas')
      .whereIn('id', idsTurmas);

    return idsTurmas
      .map((id) => turmas
        .find((turma) => turma.id === id));
  });
}

module.exports = TurmasAPI;
