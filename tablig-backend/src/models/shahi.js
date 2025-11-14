const { DataTypes } = require('sequelize');
module.exports = (sequelize) => sequelize.define('Shahi', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  HalkaId: { type: DataTypes.INTEGER }
});
