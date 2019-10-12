'use strict'

var express = require('express');
var api = express.Router();
var path = require("path");

//Scripts...
var createUser = require('../controllers/createUser');
api.post('/createUser', createUser);

module.exports = api;