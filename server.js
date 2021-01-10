const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const db = require('./database/index.js');

app.get('/api/database', (req, res) => {
  console.log('Hello');
  res.send('Hello World!');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
