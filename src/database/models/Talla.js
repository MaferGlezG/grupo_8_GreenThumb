

module.exports = (sequelize, DataTypes) => {
    const Talla = sequelize.define("Talla", {
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
    return Talla;
}