var express = require('express');
var app = express();

const status = require('./status');
const document = require('./docPulseRoutes');

app.use('/', status);
app.use('/api/document',document)

module.exports = app;
