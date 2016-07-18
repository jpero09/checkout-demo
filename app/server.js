var express = require('express');
var http = require('http');
var morgan = require('morgan');
var path = require('path');
var app = express();

var port = process.env.PORT || 3000;
var host = process.env.HOST || 'localhost';

// app.set('name', '');
app.set('port', port);
app.set('host', host);
app.use(express.static(__dirname)); // TODO: Move these to a dist folder
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(morgan('tiny')); // Morgan Formats: combined, common, dev, short, tiny

// Routes
var router = express.Router();
router.get('/', function(req, res) {
  return res.render('index');
});
app.use('/', router);


http.createServer(app).listen(app.get('port'), app.get('host'), function() {
  // TODO: Replace with proper logger
  console.log('Starting: %s v%s', app.get('name'), app.get('version'));
  console.log('Running @ //%s:%s', app.get('host'), app.get('port'));
  console.log('Environment:', process.env.NODE_ENV);
  console.log('Software:', process.versions);
});