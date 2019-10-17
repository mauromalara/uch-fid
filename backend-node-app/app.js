const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');

// body-parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Cargar Rutas
var routesApp = require('./routes/routesApp');
app.use('/apiBack-End', routesApp);

module.exports = app;