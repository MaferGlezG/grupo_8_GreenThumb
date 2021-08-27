

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
    return Usuario_Categoria;
}