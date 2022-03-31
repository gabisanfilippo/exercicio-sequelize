const {sequelize} = require('.')

const Turma = (sequelize,DataTypes) => {
    return sequelize.define('Turma', {
        duracao: {
            type: DataTypes.INTEGER
        },
        ano_inicio: {
            type: DataTypes.INTEGER
        },
        semestre: {
            type: DataTypes.INTEGER
        },
        curso_id: {
            type: DataTypes.INTEGER
        },
        professor_id: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: 'turmas',
        timestamps: false
    })
}

module.exports = Turma