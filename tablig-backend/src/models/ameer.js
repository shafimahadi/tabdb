const { DataTypes } = require('sequelize');
module.exports = (sequelize) => sequelize.define('Ameer', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  contact: { type: DataTypes.STRING },
  MasjidId: { type: DataTypes.INTEGER }
});
