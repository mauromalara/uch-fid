'use strict'
const User = require ('../models/user.js');
const bcrypt = require('bcrypt');

function createUser (req, res){
    var params = req.body;
    var userSchema = new User();

    User.find({user_mail : params.Mail}).countDocuments().exec(function(err, user){
    if(user == 0){
    userSchema.user_mail = params.Mail;
    userSchema.user_password = bcrypt.hashSync(params.Password, 10);
    userSchema.user_role = params.Role;

    if(params.Role == "Client"){
        userSchema.user_name = params.Name;
        userSchema.user_lastName = params.LastName;
        userSchema.user_age = params.Age;
        userSchema.user_gender = params.Gender;
        userSchema.user_phone = params.Phone;
        }else{
            userSchema.user_state = true;
        }

    userSchema.save((err, user) => {
    if(err){
            res.status(500).send({  message :"SERVER ERR --> "+err })
        }
        else
        {
        if(user){
            res.status(200).send({  message: " SAVE: -->  " + userSchema})  }
            else
            {
            res.status(404).send({  message: "NOT SAVED..." })
            }
        }
    })
    }else {
        res.redirect("" //SEND TO THE UPDATE PAGE...
         +"?Name="+params.Name
         +"&Mail="+params.Mail
            )
        }
    })
}

module.exports = createUser