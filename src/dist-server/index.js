var express = require('express');

var next = require('next');

var path = require('path');

var port = parseInt(process.env.PORT, 10) || 9000;
var dev = process.env.NODE_ENV !== 'production';
var app = next({
  dev: dev,
  dir: path.resolve(__dirname, '../client')
});
var handle = app.getRequestHandler();
app.prepare().then(function () {
  var server = express();
  server.all('*', function (req, res) {
    return handle(req, res);
  });
  server.listen(port, function (err) {
    if (err) throw err;
    console.log("> Ready on http://localhost:".concat(port));
  });
});