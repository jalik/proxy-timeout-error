const express = require('express');
const path = require('path');

const app = express();
const timeout = 1000;

// Serve static files
app.use(express.static(path.join(__dirname, 'static')));

// Log requests in output stream
app.use(function logger(req, res, next) {
  console.log(new Date().toISOString() + ' ' + req.method + ' ' + req.url);
  next();
});

function getTile(req, res) {
  setTimeout(function () {
    const filename = req.url.indexOf('png') !== -1 ? 'tile.png' : 'tile.jpg';
    res.sendFile(path.join(__dirname, 'static', filename));
  }, timeout * (Math.round(Math.random()) === 1 ? 1.5 : 0.5));
}

// Simulate WMS and WMTS slow response
app.get('/wms', getTile);
app.get('/wmts', getTile);

app.listen(8080, function () {
  console.info('Listening on port 8080');
});
