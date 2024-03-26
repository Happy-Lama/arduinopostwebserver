const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 10000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Route to handle POST requests
app.post('/postdata', (req, res) => {
  // Print the body of the POST request
  console.log('Received POST request body:', req.body);

  // Respond with a simple message
  res.send('POST request received and processed successfully.');
});

app.get('/getdata', (req, res) => {
    console.log(req);
    res.send('Done');
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port${port}`);
});
