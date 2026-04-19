const TarefaService = require("../services/TarefaService")

class TarefaController{

    async create(req,res){
        try{
            const tarefa = await TarefaService.create(req.body)
            res.status(201).json(tarefa)
        }catch(err){
            res.status(500).json({error:err.message})
        }
    }

    async findAll(req,res){
        const tarefas = await TarefaService.findAll()
        res.json(tarefas)
    }

    async findById(req,res){
        const tarefa = await TarefaService.findById(req.params.id)

        if(!tarefa)
            return res.status(404).json({error:"Tarefa não encontrada"})

        res.json(tarefa)
    }

    async update(req,res){
        const tarefa = await TarefaService.update(req.params.id,req.body)

        if(!tarefa)
            return res.status(404).json({error:"Tarefa não encontrada"})

        res.json(tarefa)
    }

    async delete(req,res){
        const deleted = await TarefaService.delete(req.params.id)

        if(!deleted)
            return res.status(404).json({error:"Tarefa não encontrada"})

        res.status(204).send()
    }
}

module.exports = new TarefaController()