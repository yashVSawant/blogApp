const Sequelize = require('sequelize');

const sequelize = new Sequelize('blogs-database','root','Yash1234',{
    dialect:'mysql',
    host:'localhost'
})

module.exports=sequelize;