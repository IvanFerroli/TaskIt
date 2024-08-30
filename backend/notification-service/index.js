const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Notification Service is running');
});

app.listen(PORT, () => {
  console.log(`Notification Service running on port ${PORT}`);
});
