const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;

app.get('/',  (req, res) => {
  console.log('Hello');
  res.send('Hello World!');
});

app.listen(port, () => console.log(`Listening on port ${port}`));