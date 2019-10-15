'use strict'

var express = require('express');
var api = express.Router();
var path = require("path");

//Scripts...
var createUser = require('../controllers/createUser');
api.post('/createUser', createUser);

var deleteUser = require('../controllers/deleteUser');
api.post('/deleteUser', deleteUser);

var updateUser = require('../controllers/updateUser');
api.post('/updateUser', updateUser);

module.exports = api;