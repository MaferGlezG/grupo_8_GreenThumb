module.exports = (sequelize, DataTypes) => {
    const Carrito = sequelize.define("Carrito", {
        id: {

            type: DataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,

        },
        user_id: {
            type: DataTypes.INTEGER
        },
        product_id: {
            type: DataTypes.INTEGER
        },
        product_amount: {
            type: DataTypes.INTEGER
        },
        total_price: {
            type: DataTypes.DECIMAL
        }
    }, {
        tableName: 'shopping_cart',
        timestamps: false
    });
    Carrito.associate = function (models) {
        Carrito.belongsTo(models.Usuario, {
            as: "user",
            foreignKey: "user_id"
        })
    }
    return Carrito;
}