var http = require('http');
var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log('Example app listening on port: ' + port);
});
