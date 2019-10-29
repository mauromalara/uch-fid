const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');

// body-parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
}

app.use(allowCrossDomain)

//Cargar Rutas
var routesApp = require('./routes/routesApp');
app.use('/apiBack-End', routesApp);

module.exports = app;