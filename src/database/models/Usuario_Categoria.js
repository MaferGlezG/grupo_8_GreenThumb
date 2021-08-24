

module.exports = (sequelize, DataTypes) => {
    const Usuario_Categoria = sequelize.define("Usuario_Categoria", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

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