

module.exports = (sequelize, DataTypes) => {
    const Talla = sequelize.define("Talla", {
        id: {
            type: DataTypes.INTEGER,
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
    return Talla;
}