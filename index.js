const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const fs = require('fs');

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Your route handling
app.post('/', (req, res) => {
  console.log(req.body);
  // Access the parsed body
  const requestBody = req.body.data;

  fs.writeFile(`${__dirname}/file.txt`, requestBody, 'utf-8', (err, data) => {
    res.status(200).send('POST request received successfully');
  });
});

app.get('/', (req, res) => {
  res.status(200).send('hi');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
