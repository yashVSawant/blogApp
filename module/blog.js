const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const blog = sequelize.define('Blog',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    title:Sequelize.STRING,
    author:Sequelize.STRING,
    description:Sequelize.STRING
});

module.exports = blog;