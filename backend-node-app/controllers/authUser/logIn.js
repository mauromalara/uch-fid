'use strict'
const User = require ('../../models/user.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../private/config');

function logIn(req, res){
    var params = req.body;
    var mail =  params.Mail;

    User.find({user_mail : mail}).exec(function(err, user){
    var userPassword = params.Password;
    var HASH = user[0].user_password;
        if(bcrypt.compareSync(userPassword, HASH)) {
            var _id = user[0]._id;
            let token = jwt.sign({ _id}, config.secret, { expiresIn: 60 * 60 * 24, algorithm: 'HS256'})
            res.send({
              success: true,
              message: 'Authentication successful!',
              token: token
            });
        } else {
              res.send({
                success: false,
                message: 'Authentication failed! Please check the request'
              });
        }

    });
};

module.exports = logIn