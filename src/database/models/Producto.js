

module.exports = (sequelize, DataTypes) => {
    const Producto = sequelize.define("Producto", {
        id: {

            type: DataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,

        },
        seller_id: {
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING
        },

        stock: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        },
        image: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.DECIMAL
        },
        product_category_id: {
            type: DataTypes.INTEGER
        },
        size_id: {
            type: DataTypes.INTEGER
        },
        color: {
            type: DataTypes.STRING(7)
        }
    }, {
        tableName: 'products',
        timestamps: false,
    });
    Producto.associate = function (models) {
        Producto.belongsTo(models.Producto_Categoria, {
            as: "category",
            foreignKey: "product_category_id"
        })
        Producto.belongsTo(models.Talla, {
            as: "size",
            foreignKey: "size_id"
        })
    }
    return Producto;
}