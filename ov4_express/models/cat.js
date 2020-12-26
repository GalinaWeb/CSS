const {DataTypes} = require('sequelize')

module.exports = function(sequelize) {

    const CatModel = sequelize.define('Cat', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        color:{
            type: DataTypes.STRING,
            allowNull: false
       },
        weight:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        food:{
            type: DataTypes.STRING,
            allowNull: false
         }
    }, {})
    return CatModel
}