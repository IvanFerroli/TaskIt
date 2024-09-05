const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/authDataBase');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3002;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Auth Service is running');
});

app.use('/auth', authRoutes);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Auth service running on port ${port}`);
  });
}).catch(err => {
  console.error('Database connection error:', err);
});