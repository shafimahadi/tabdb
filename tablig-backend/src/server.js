const app = require('./app');
const { sequelize } = require('./models');
const seed = require('./utils/seed');

async function start(){
  await sequelize.sync({ alter: true });
  await seed();
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, ()=>console.log(`Server on ${PORT}`));
}
start();
