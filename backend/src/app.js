require("./model/associations")
const express = require("express")

const usuarioRoutes = require("./routes/UsuariosRouters")
const tarefaRoutes = require("./routes/TarefasRouters")

const app = new express()
app.use(json())
app.use("/usuarios",usuarioRoutes)
app.use("/tarefas",tarefaRoutes)

module.exports = app