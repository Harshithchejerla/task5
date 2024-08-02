// app.js
const express = require('express');
const logRequest = require('./router'); // Import the custom module

const app = express();
const port = 3000;

// Use the custom module as middleware
app.use(logRequest);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
