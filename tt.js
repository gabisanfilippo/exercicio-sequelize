const { sequelize, Aluno, Area, Curso, Professor, Turma } = require('./database/models/index.js');


const resultAluno= async ()=>{
    const aluno = await Aluno.findByPk(2)
    console.log(aluno.toJSON())
    const alunos = await Aluno.findAll({raw:true,where:{
        ano_matricula:2019
    }})
    console.log(alunos)
}
resultAluno()

const resultArea = async () => {
    const area = await Area.findByPk(1)
    console.log(area.toJSON())
}
resultArea()

const resultCurso = async () => {
    const curso = await Curso.findByPk(1)
    console.log(curso.toJSON())
}
resultCurso()

const resultProfessor = async () => {
    const professor = await Professor.findByPk(1)
    console.log(professor.toJSON())
}
resultProfessor()

const resultTurma = async () => {
    const turma = await Turma.findByPk(10)
    console.log(turma.toJSON())
}
resultTurma()

//Atividade I - Modificando dados
Aluno.bulkCreate([
    {
        nome: "Harry",
        sobrenome: "Potter",
        ano_matricula: 1980
    },
    {
        nome: "Hermione",
        sobrenome: "Granger",
        ano_matricula: 1980
    },
    {
        nome: "Rony",
        sobrenome: "Weasley",
        ano_matricula: 1980
    }
])

Aluno.update(
    {
        nome: "Rebeca"
    },
    {
        where: {nome: "Receba"}
    }
)

Curso.bulkCreate([
    {
        nome: "Desenvolvimento Front-end",
        area_id: 1
    },
    {
        nome: "Desenvolvimento Back-end",
        area_id: 1
    },
    {
        nome: "Salesforce",
        area_id: 5
    },
    {
        nome: "Programação em C",
        area_id: 1
    },
    {
        nome: "Programação em Python",
        area_id: 1
    }
])

Aluno.destroy({
    where: {id:11}
})

Turma.bulkCreate([
    {
        duracao: 3,
        ano_inicio: 2020,
        semestre: 1,
        curso_id: 4,
        professor_id: 1
    },
    {
        duracao: 3,
        ano_inicio: 2020,
        semestre: 2,
        curso_id: 4,
        professor_id: 1
    },
    {
        duracao: 3,
        ano_inicio: 2022,
        semestre: 1,
        curso_id: 4,
        professor_id: 1
    }
])