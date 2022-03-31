const {sequelize} = require('.')

const Professor = (sequelize, DataTypes) => {
    return sequelize.define('Professor', {
        nome: {
            type: DataTypes.STRING
        },
        sobrenome: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'professores',
        timestamps: false
    })
}

module.exports = Professor