require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const authRoutes = require('./routes/auth');
const countryRoutes = require('./routes/country');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/countries', countryRoutes);

app.get('/api/health', (req,res)=>res.json({ ok:true }));
module.exports = app;
