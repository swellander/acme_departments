const path = require('path');
const express = require('express');
const app = express();
const routes = require('./routes');

//serve static files from dist/
app.use(express.static(path.join(process.cwd(), '/dist')));

app.use('/api', routes.api);

module.exports = app;
