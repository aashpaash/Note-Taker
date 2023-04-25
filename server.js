// Imports
const express = require('express');

const api = require('./routes/index.js');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Initialize Express
const app = express();

// Loclhost Port
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Middleware
app.use(express.static("public"));
app.use(express.json())
app.use('/api', api);
app.use('/htmlRoutes', htmlRoutes);
app.use(express.urlencoded({ extended: true }));


// Port Listening
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});