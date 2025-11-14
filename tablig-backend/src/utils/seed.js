const { User } = require('../models');
async function seed(){
  try{
    await User.findOrCreate({ where: { email: process.env.ADMIN_EMAIL || 'admin@example.com' }, defaults: { name: 'Admin', password: process.env.ADMIN_PASS || 'Admin1234', role: 'admin' }});
    console.log('seed done');
  }catch(e){ console.error('seed error', e); }
}
module.exports = seed;
