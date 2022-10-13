const Sequelize = require('sequelize');
//const { default: ModelManager } = require('sequelize/types/model-manager');

const connection = new Sequelize('guiaperguntas','root','124578/*-',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;