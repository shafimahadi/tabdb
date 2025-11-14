const { DataTypes } = require('sequelize');
module.exports = (sequelize) => sequelize.define('Masjid', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  address: { type: DataTypes.STRING },
  HalkaId: { type: DataTypes.INTEGER },
  ShahiId: { type: DataTypes.INTEGER }
});
