const Tarefa = require("../model/Tarefa")
const Usuario = require("../model/Usuario")

class TarefaService{

    async create(data){
        return await Tarefa.create(data)
    }

    async findAll(){
        return await Tarefa.findAll({
            include: "usuario"
        })
    }

    async findById(id){
        return await Tarefa.findByPk(id,{
            include:"usuario"
        })
    }

    async update(id,data){
        const tarefa = await Tarefa.findByPk(id)
        if(!tarefa) return null

        return await tarefa.update(data)
    }

    async delete(id){
        const tarefa = await Tarefa.findByPk(id)
        if(!tarefa) return null

        await tarefa.destroy()
        return true
    }
}

module.exports = new TarefaService()