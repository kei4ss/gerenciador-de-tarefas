const app = require("./src/app")
const database = require("./src/database/database")


const initServer = async()=>{
    try{
        console.log("Carregando banco de dados")
        await database.authenticate()
        await database.sync()
        console.log("Iniciando servidor")
        app.listen(3000, ()=>{
            console.log("Servidor rodando em http://localhost:3000")
        })
    }catch(err){
        console.log(`Erro ao iniciar servidior`, err)
    }
}

app.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000")
    console.log("http://localhost:3000")
})