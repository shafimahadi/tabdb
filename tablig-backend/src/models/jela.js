const { DataTypes } = require('sequelize');
module.exports = (sequelize) => sequelize.define('Jela', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  CountryId: { type: DataTypes.INTEGER }
});
