const express = require('express');

// imports notes.js, which contains the routes needed
const notesRouter = require('./notes');

// creates an instance of express so that the routes can be used 
const app = express();

app.use('/notes', notesRouter);

module.exports = app;   