const Aluno = (sequelize, DataTypes) => {
    let aluno = sequelize.define(
        'Aluno', 
    {
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
          }
         ,
        sobrenome: DataTypes.STRING,
        ano_matricula: DataTypes.INTEGER
    },{
        tableName:"alunos",
        timestamps:false
    })
    
    return aluno
}

module.exports = Aluno