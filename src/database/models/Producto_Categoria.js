

module.exports = (sequelize, DataTypes) => {
    const Producto_Categoria = sequelize.define("Producto_Categoria", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            autoIncrement: true
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