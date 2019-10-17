'use strict'

var mongoose = require ("mongoose");
var app = require ("./app");

mongoose.Promise = global.Promise;

var options = {
  useNewUrlParser: true,
  useCreateIndex: false,
  useUnifiedTopology: true,
  useFindAndModify: false,
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
  connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
};
var uri = 'mongodb://Bastar2:Bastar2@ds331548.mlab.com:31548/heroku_r933w2r6';

mongoose.connect(uri, options)
.then(db => console.log('SERVER UP -->  http://localhost:3800/apiBack-End'))
.catch(err => console.log(err));

app.listen(3800);