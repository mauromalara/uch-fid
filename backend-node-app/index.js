'use strict'

var mongoose = require ("mongoose");
var app = require ("./app");

mongoose.Promise = global.Promise;

//Setting mongoose var...
mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);

mongoose.connect('mongodb://Bastar2:Bastar2@ds331548.mlab.com:31548/heroku_r933w2r6')
.then(db => console.log('SERVER UP -->  http://localhost:3800/'))
.catch(err => console.log(err));

app.listen(3800);