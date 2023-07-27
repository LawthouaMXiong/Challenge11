const express = require('express');

const notesRouter = require('./api/notesRoute.js');
const homeRouter = require('./homeRoutes.js');

const app = express();

app.use('/api', notesRouter);
app.use('/', homeRouter);

module.exports = app;