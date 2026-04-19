const {DataTypes} = require("sequelize")
const database = require("../database/database")
const bcrypt = require("bcrypt")

const Usuario = database.define("Usuario", {
    nome:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    login:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    senha:{
        type: DataTypes.STRING(50),
        allowNull: false
    }
},{
    timestamps: true,
    tableName: "usuarios"
})

const encrypt_password = async (user)=>{
    const SALT = 12;
    user.senha = await bcrypt.hash(user.senha, SALT)
}

Usuario.beforeCreate(async (user)=>{
    await encrypt_password(user)
})
Usuario.beforeUpdate(async (user)=>{
    if(user.changed("senha")) await encrypt_password(user);
})

module.exports = Usuario