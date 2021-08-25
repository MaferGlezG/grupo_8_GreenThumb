

module.exports = (sequelize, DataTypes) => {
    const Producto = sequelize.define("Producto", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        name: {
            type: DataTypes.STRING
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
        timestamps: false
    });
    return Producto;
}