const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const taskRoutes = require('./routes/taskRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3004;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Task Service is running');
});

app.use('/tasks', taskRoutes);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Task service running on port ${port}`);
  });
}).catch(err => {
  console.error('Database connection error:', err);
});