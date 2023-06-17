module.exports= (sequelize, DataTypes)=>{

    const Suggestion = sequelize.define("Suggestion", {
        description: {
            type: DataTypes.STRING(3000),
            allowNull: false
        }
    });
    return Suggestion;
}