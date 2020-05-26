import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';

import AppComponent from './src/App'

const app = express();

app.use(express.static('dist/public'));

app.get('/', function (req, res) {
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Origem veículos</title>
  </head>
  <body>
    <div id="app">
      ${ReactDOM.renderToString(<AppComponent />)}
    </div>
    <script src="bundle_client.js"></script>
  </body>
  </html>
  `
  res.send(html);
});

app.listen(3000, function() {
  console.log('Ok, rodando na porta 3000!')
});
