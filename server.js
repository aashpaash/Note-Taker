// Imports
const express = require('express');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Initialize Express
const app = express();

// Loclhost Port
const PORT = process.env.PORT || 3001;

app.post('/', (req, res) => res.send('Visit http://localhost:3001/api'));

// Middleware
app.use(express.static("public"));
app.use(express.json())
app.use


// Port Listening
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});