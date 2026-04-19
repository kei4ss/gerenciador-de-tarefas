const {DataTypes} = require("sequelize")
const database = require("../database/database")
const {prioridades} = require("../enum/TarefaEnum")

const Tarefa = database.define("Tarefa", {
    titulo:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    descricao:{
        type: DataTypes.STRING(200),
        allowNull: false
    },
    deadline:{
        type: DataTypes.DATE,
        allowNull: false
    },
    usuario_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    prioridade:{
        type: DataTypes.ENUM(...Object.values(prioridades)),
        allowNull: false
    }
},{
    timestamps: true,
    tableName: "tarefas"
})


module.exports = Tarefa