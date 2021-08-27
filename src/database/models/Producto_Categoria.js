

module.exports = (sequelize, DataTypes) => {
    const Producto_Categoria = sequelize.define("Producto_Categoria", {
        id: {

            type: DataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,

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