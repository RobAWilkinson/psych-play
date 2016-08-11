
/**
 * Module dependencies
 */


var fs = require('fs');
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var stormpath = require('express-stormpath');
var morgan = require('morgan');
var FileStreamRotator = require('file-stream-rotator');
var path = require('path');

var favicon = require('serve-favicon');
var app = express();
app.use(bodyparser.json())
var port = process.env.PORT || 3000;

// Connect to mongodb
var connect = function () {
  var options = { server: { socketOptions: { keepAlive: 1 } } };
  mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/project_management', options);
};
connect();

mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);

if(process.env.NODE_ENV == 'production'){
var logDirectory = __dirname + '/log'

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

// create a rotating write stream
var accessLogStream = FileStreamRotator.getStream({
  filename: logDirectory + '/access-%DATE%.log',
  frequency: 'daily',
  verbose: false,
  date_format: "YYYY-MM-DD"
})
  app.use(morgan('combined', {stream: accessLogStream}))
} else {
  app.use(morgan('dev'));
}
// Bootstrap models
fs.readdirSync(__dirname + '/app/models').forEach(function (file) {
  if (~file.indexOf('.js')) require(__dirname + '/app/models/' + file);
});

app.use(favicon(__dirname + '/public/favicon.ico'));

// Bootstrap application settings
require('./config/express.js')(app, stormpath );
app.use(stormpath.init(app, {
  web: {
      login: {
        view: path.join(__dirname,'views','login.ejs') // My custom login view
      },
      register: {
        view: path.join(__dirname,'views','register.ejs') // My custom login view
      }
    }
}))
// Bootstrap routes
require('./config/routes.js')(app, stormpath);

app.on('stormpath.ready', function(){
  app.listen(port);
  console.log('Express app started on port ' + port);
})
