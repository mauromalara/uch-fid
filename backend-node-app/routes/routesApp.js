'use strict'

var express = require('express');
var api = express.Router();
var verifyToken = require('../controllers/authUser/verifyToken');

api.get('/', function (req, res) {
  res.status(200).send('API works.');
});

//Scripts...
var logIn = require('../controllers/authUser/logIn');
api.post('/logIn', logIn);

var logOut = require('../controllers/authUser/logOut');
api.get('/logOut', verifyToken, logOut);

var createUser = require('../controllers/createUser');
api.post('/createUser', createUser);

var deleteUser = require('../controllers/deleteUser');
api.post('/deleteUser', verifyToken, deleteUser);

var updateUser = require('../controllers/updateUser');
api.post('/updateUser', verifyToken, updateUser);

module.exports = api;