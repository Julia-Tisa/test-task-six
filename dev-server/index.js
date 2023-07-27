const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const cors = require('cors');
const path = require('path');
const endpoints = require('./api/endpoints');

const app = express();

const corsOptions = {
  credentials: true,
  origin: 'http://localhost:8080',
};

app.use(cors(corsOptions));
app.use('/images', express.static(path.resolve(__dirname, 'images')));

endpoints.forEach((endpoint) => {
  app[endpoint.method || 'get'](endpoint.path, (req, res) => {
    setTimeout(() => {
      res.send(endpoint.controller
        ? endpoint.controller(req)
        : {});
    }, 1500);
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Dev server listening at http://localhost:3000/');
});
