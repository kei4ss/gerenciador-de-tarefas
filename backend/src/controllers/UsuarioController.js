const UsuarioService = require("../services/UsuarioService")

class UsuarioController{

    async create(req,res){
        try{
            const usuario = await UsuarioService.create(req.body)
            res.status(201).json(usuario)
        }catch(err){
            res.status(500).json({error:err.message})
        }
    }

    async findAll(req,res){
        const usuarios = await UsuarioService.findAll()
        res.json(usuarios)
    }

    async findById(req,res){
        const usuario = await UsuarioService.findById(req.params.id)

        if(!usuario)
            return res.status(404).json({error:"Usuario não encontrado"})

        res.json(usuario)
    }

    async update(req,res){
        const usuario = await UsuarioService.update(req.params.id,req.body)

        if(!usuario)
            return res.status(404).json({error:"Usuario não encontrado"})

        res.json(usuario)
    }

    async delete(req,res){
        const deleted = await UsuarioService.delete(req.params.id)

        if(!deleted)
            return res.status(404).json({error:"Usuario não encontrado"})

        res.status(204).send()
    }
}

module.exports = new UsuarioController()