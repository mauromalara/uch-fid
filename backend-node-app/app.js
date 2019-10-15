var express = require ('express');
var app = express();
var bodyParser = require ('body-parser');

// body-parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Cargar Rutas
var crudRoutes = require('./routes/crud');
app.use('/apiBack-End', crudRoutes);

module.exports = app;