const sequelize = require('.')

const Curso = (sequelize,DataTypes) => {
    return sequelize.define('Curso', {
        nome: {
            type: DataTypes.STRING
        },
        area_id: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: "cursos",
        timestamps: false
    })
}

module.exports = Curso