

module.exports = (sequelize, DataTypes) => {
    const Usuario_Categoria = sequelize.define("Usuario_Categoria", {
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
        tableName: 'user_category',
        timestamps: false
    });

    Usuario_Categoria.associate = function (models) {
        Usuario_Categoria.hasMany(models.Usuario, {
            as: "users",
            foreignKey: "user_category_id"
        })
    }
    return Usuario_Categoria;
}