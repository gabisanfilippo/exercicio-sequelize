const { sequelize, Curso } = require('../database/models/index');


const cursoController = {
    curso: async(req, res) => {
        const resposta = await Curso.findAll()
        return res.json(resposta)
    }
    
}



module.exports = cursoController