const path = require('path');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

const api = require('./routes/api');

const app = express();

app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'http://localhost:8000',
      'http://127.0.0.1:3000',
      'http://127.0.0.1:8000',
    ],
  })
);
app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/v1', api);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;
