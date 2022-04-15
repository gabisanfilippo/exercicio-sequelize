const { sequelize, Professor, Turma, Curso, Area } = require('../database/models/index');


const professorController = {
    professor: async(req, res) => {
        let id = req.params.id
        const resposta = await Professor.findAll()
        let listaProfessores = []
        for (const i of resposta) {
            if(id == i.id){
                let turma = await Turma.findOne({
                    where: {
                        professor_id: id
                    }
                })
                let cursoId = turma.curso_id
                let curso = await Curso.findByPk(cursoId)
                let areaId = curso.area_id
                let area = await Area.findByPk(areaId)
                listaProfessores.push({professor: i, turma: turma, curso: curso, area: area})
            
            }
        }
        res.send(listaProfessores)
    }
    
}



module.exports = professorController