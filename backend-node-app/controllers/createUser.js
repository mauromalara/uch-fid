'use strict'
var User = require ('../models/user.js');
var sha1 = require('sha1');

function createUser (req, res){
    var params = req.body;
    var userSchema = new User();

    User.find({$and : [{user_name : params.Name, user_mail : params.Mail}]}).countDocuments().exec(function(err, user){
    if(user == 0){

    userSchema.user_name = params.Name,
    userSchema.user_mail = params.Mail,
    userSchema.user_password = sha1(params.Password),
    userSchema.user_state = false,
    userSchema.user_role = false

    userSchema.save((error, user) => {
    if(error){
            res.status(500).send({
            message :"server err....\n "+ " --> "+error
            })
        }
        else
        {
        if(user){
            res.send({
            message: " SAVE: -->  " + userSchema})
            //res.redirect(""); //SEND TO THE INDEX PAGE...
            }
            else
            {
            res.status(200).send({
                message: "NOT SAVED..."
                })
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