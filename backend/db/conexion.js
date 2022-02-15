const Sequelize = require("sequelize");

const sql = new Sequelize('stock_test','root',null,{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sql