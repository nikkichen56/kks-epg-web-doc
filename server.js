var express = require('express');
var path = require('path');
var app = express();
const port = 3000;

app.use(express.static(path.join(__dirname)));

app.listen(port, '127.0.0.1', (err) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${port}`);
});
