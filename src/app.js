const express = require('express');
const app = express();
const router = require('./routes/wordRoutes');

app.use(express.json());

app.use('/api/words', router);

module.exports = app;