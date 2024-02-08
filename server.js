// bring in required packages
const express = require('express');
const path = require('path');

// all routes that have /api will be sent to index.js
const api = require('./routes/index');

// sets port and initializes app
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', api);

// page routes
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// listen on port 3001
app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT}! YIPPEE`));