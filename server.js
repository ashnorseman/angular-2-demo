/**
 * Mock server
 */


const fs = require('fs');
const chokidar = require('chokidar').watch('./mocker');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = 4300;


// Watch api changes

chokidar.on('ready', () => {
  chokidar.on('all', () => {
    console.log('Server restarted...');

    Object.keys(require.cache).forEach((id) => {
      if (/[\/\\]mocker[\/\\]/.test(id)) {
        delete require.cache[id];
      }
    });
  });
});


// Server config

const app = express();

app.use(express.static('dist'));
app.use(express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', (req, res, next) => {
  require('./mocker')(req, res, next);
});

app.listen(PORT, () => {
  console.log('Listening at: resources://localhost:' + PORT);
});
