// Imports
const express = require('express');

const api = require('./routes/index.js');
const api = require('./routes/api');
const html = require('./routes/html');

// Initialize Express
const app = express();

// Localhost Port
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Middleware
app.use(express.static("public"));
app.use(express.json())
app.use('/api', api);
app.use('/html', html);
app.use(express.urlencoded({ extended: true }));


// Port Listening
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});