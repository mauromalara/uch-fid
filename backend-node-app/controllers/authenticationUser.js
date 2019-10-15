'use strict'
var User = require ('../models/user.js');
var sha1 = require('sha1');

function updatePerson(req, res){
    var params = req.body;

    var name = params.Name;
    var mail =  params.Mail;
    var password  = params.Password;

    User.find({$and : [{user_name : params.Name, user_mail : params.Mail}]}).exec(function(err, user){
        var userPassword = user[0].user_password;
            if (userPassword == sha1(password)){
                res.send({
                message : "Password CORRECT !"
                })
                //res.redirect(""); //SEND TO THE MAIN PAGE...
            }else {
                res.send({
                message : "Password INCORRECT TRY AGAIN !"
                })
                //res.redirect(""); // SEND TO THE AUTHENTIFICATION PAGE...
            }
        });
}

module.exports = updatePerson