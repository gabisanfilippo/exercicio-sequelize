module.exports = (sequelize, DataTypes) => {
    const Curso = sequelize.define('Curso', {
        nome: DataTypes.STRING,
        area_id: DataTypes.INTEGER

    }, {
        tableName: 'cursos',
        timestamps: false
    })
    Curso.associate = ( models => {
        Curso.hasMany(models.Turma,{as:"curso_turma",foreignKey:"curso_id"})
        Curso.belongsTo(models.Area,{as: 'curso_area', foreignKey: "area_id"})
    })
    return Curso
}