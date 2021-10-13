

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
        tableName: 'sizes',
        timestamps: false
    });
    Talla.associate = function (models) {
        Talla.hasMany(models.Producto, {
            as: "size",
            foreignKey: "size_id"
        })
    }
    return Talla;
}