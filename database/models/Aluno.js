const {sequelize} = require('.')

const Aluno = (sequelize, DataTypes) => {
    return sequelize.define('Aluno', {
        nome: {
            type: DataTypes.STRING
        },
        sobrenome: {
            type: DataTypes.STRING
        },
        ano_matricula: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: "alunos",
        timestamps: false
    })
}

module.exports = Aluno