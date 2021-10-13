

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

    Producto_Categoria.associate = function (models) {
        Producto_Categoria.hasMany(models.Producto, {
            as: "products",
            foreignKey: "product_category_id"
        })
    }
    return Producto_Categoria;
}