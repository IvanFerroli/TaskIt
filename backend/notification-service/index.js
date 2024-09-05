const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const notificationRoutes = require('./routes/notificationRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3003;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Notification Service is running');
});

app.use('/notifications', notificationRoutes);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Notification service running on port ${port}`);
  });
}).catch(err => {
  console.error('Database connection error:', err);
});