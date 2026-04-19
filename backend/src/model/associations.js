const Usuario = require("./Usuario")
const Tarefa = require("./Tarefa")

// Um usuário tem muitas tarefas
Usuario.hasMany(Tarefa,{
    foreignKey: "usuario_id",
    as: "tarefas"
})

// Uma tarefa pertence a um usuário
Tarefa.belongsTo(Usuario,{
    foreignKey: "usuario_id",
    as: "usuario"
})

module.exports = {
    Usuario,
    Tarefa
}