const Usuario = require("../models/Usuario")

class UsuarioService{

    async create(data){
        return await Usuario.create(data)
    }

    async findAll(){
        return await Usuario.findAll()
    }

    async findById(id){
        return await Usuario.findByPk(id)
    }

    async update(id,data){
        const usuario = await Usuario.findByPk(id)
        if(!usuario) return null

        return await usuario.update(data)
    }

    async delete(id){
        const usuario = await Usuario.findByPk(id)
        if(!usuario) return null

        await usuario.destroy()
        return true
    }
}

module.exports = new UsuarioService()