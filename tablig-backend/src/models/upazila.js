const { DataTypes } = require('sequelize');
module.exports = (sequelize) => sequelize.define('Upazila', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  JelaId: { type: DataTypes.INTEGER }
});
