const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const comment = sequelize.define('Comment',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    comment:Sequelize.STRING
});

module.exports = comment;

