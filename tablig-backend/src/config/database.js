const { Sequelize } = require('sequelize');
const connectionString = process.env.DATABASE_URL || 'postgres://postgres:password@localhost:5432/tabligdb';
const sequelize = new Sequelize(connectionString, { dialect: 'postgres', logging: false });
module.exports = sequelize;
