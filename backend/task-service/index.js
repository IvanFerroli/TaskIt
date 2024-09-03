const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3004;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Task Service is running');
});

app.listen(PORT, () => {
  console.log(`Task Service running on port ${PORT}`);
});
