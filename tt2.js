const { sequelize, Aluno, Area, Curso, Turma, Professor, AlunosHasTurmas } = require('./database/models/index.js');
const Sequelize = require('sequelize')


const insereFaltas = async () => {
    await AlunosHasTurmas.update(
        {
            numero_faltas: 20
        },
        {
            where: {id: 10}
        }
    )
}

insereFaltas()