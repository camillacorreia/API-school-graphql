const { SQLDataSource } = require('datasource-sql');
const DataLoader = require('dataloader');

class MatriculasAPI extends SQLDataSource {
  constructor(dbConfig) {
    super(dbConfig);
    this.Resposta = {
      message: '',
    };
  }

  async matricularEstudante(ids) {
    const novaMatricula = {
      estudante_id: ids.estudante,
      turma_id: ids.turma,
      status: 'confirmado',
    };

    await this.db
      .insert(novaMatricula)
      .into('matriculas');

    this.Resposta.message = 'matrícula confirmada';
    return this.Resposta;
  }

  async getMatriculasPorTurma(idTurma) {
    const matriculas = await this.db
      .select('*')
      .from('matriculas')
      .where({ turma_id: idTurma });

    return matriculas;
  }

  async deletarMatricula(idMatricula) {
    await this.db('matriculas')
      .where({ id: Number(idMatricula) })
      .del();

    this.Resposta.message = 'registro deletado';
    return this.Resposta;
  }

  async cancelarMatricula(idMatricula) {
    await this.db
      .update({ status: 'cancelado' })
      .where({ id: Number(idMatricula) })
      .into('matriculas');

    this.Resposta.message = 'matrícula cancelada';
    return this.Resposta;
  }

  getMatriculasPorEstudante = new DataLoader(async (idsEstudantes) => {
    const matriculas = await this.db
      .select('*')
      .from('matriculas')
      .whereIn('estudante_id', idsEstudantes);

    return idsEstudantes.map((id) => matriculas.filter((matricula) => matricula.estudante_id === id));
  });
}

module.exports = MatriculasAPI;
