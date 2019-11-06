'use strict'

var express = require('express');
var api = express.Router();
var verifyToken = require('../controllers/authUser/verifyToken');

api.get('/', function (req, res) {
  res.status(200).send('API works.');
});

//NOT NEED verifyToken....
var logIn = require('../controllers/authUser/logIn');
api.post('/logIn', logIn);

var createUser = require('../controllers/createUser');
api.post('/createUser', createUser);

//NEED verifyToken...
var logOut = require('../controllers/authUser/logOut');
api.get('/logOut', verifyToken, logOut);

var deleteUser = require('../controllers/deleteUser');
api.post('/deleteUser', verifyToken, deleteUser);

var updateUser = require('../controllers/updateUser');
api.post('/updateUser', verifyToken, updateUser);

var stateUserModify = require('../controllers/stateUserModify');
api.post('/stateUserModify', verifyToken, stateUserModify);

var readUser = require('../controllers/readUser');
api.post('/readUser', verifyToken, readUser);

module.exports = api;