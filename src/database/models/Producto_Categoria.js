
const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Producto_Categoria = sequelize.define("Producto_Categoria", {
        id: {
            type: DataTypes.INTEGER

        },
        name: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'products_category',
        timestamps: false
    });
    return Producto_Categoria;
}