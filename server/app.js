const express = require('express');
const app = express();
const routes = require('./routes');

app.use('/api', routes.api);

module.exports = app;
