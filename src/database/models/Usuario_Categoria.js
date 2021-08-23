
const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Usuario_Categoria = sequelize.define("Usuario_Categoria", {
        id: {
            type: DataTypes.INTEGER

        },
        name: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'user_category',
        timestamps: false
    });
    return Usuario_Categoria;
}