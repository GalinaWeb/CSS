const {Sequelize} = require('sequelize')
const dogInitFunc = require('./Dog')
const catInitFunc = require('./cat')

const sequelize = new Sequelize('dogs_ov4_g', 'galina_ov4', '7uMiDI', {
    host: '109.206.169.221',
    dialect: 'mysql'
  });

 const Dog = dogInitFunc(sequelize)
 const Cat = catInitFunc(sequelize)

 module.exports = {
     sequelize,
     Dog,
     Cat
 }

 
 