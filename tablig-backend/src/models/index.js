const sequelize = require('../config/database');
const User = require('./user')(sequelize);
const Country = require('./country')(sequelize);
const Jela = require('./jela')(sequelize);
const Upazila = require('./upazila')(sequelize);
const Halka = require('./halka')(sequelize);
const Shahi = require('./shahi')(sequelize);
const Masjid = require('./masjid')(sequelize);
const Ameer = require('./ameer')(sequelize);

// Associations
Country.hasMany(Jela, { onDelete: 'CASCADE' });
Jela.belongsTo(Country);

Jela.hasMany(Upazila, { onDelete: 'CASCADE' });
Upazila.belongsTo(Jela);

Upazila.hasMany(Halka, { onDelete: 'CASCADE' });
Halka.belongsTo(Upazila);

Halka.hasMany(Shahi, { onDelete: 'CASCADE' });
Shahi.belongsTo(Halka);

Halka.hasMany(Masjid, { onDelete: 'CASCADE' });
Masjid.belongsTo(Halka);

Shahi.hasMany(Masjid, { onDelete: 'SET NULL' });
Masjid.belongsTo(Shahi);

Masjid.hasOne(Ameer, { onDelete: 'SET NULL' });
Ameer.belongsTo(Masjid);

module.exports = { sequelize, User, Country, Jela, Upazila, Halka, Shahi, Masjid, Ameer };
