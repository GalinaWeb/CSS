const {Sequelize} = require('sequelize')
const dogInitFunc = require('./Dog')

const sequelize = new Sequelize('dogs_ov4_g', 'galina_ov4', '7uMiDI', {
    host: '109.206.169.221',
    dialect: 'mysql'
  });

 const Dog = dogInitFunc(sequelize)

 module.exports = {
     sequelize,
     Dog
 }