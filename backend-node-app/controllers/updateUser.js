'use strict'
const User = require ('../models/user.js');

function updateUser(req, res){

User.find({user_mail : params.Mail}).exec(function(err, user){
        var userId = user[0]._id;
        var update = req.body;
        User.findOneAndUpdate({_id : personId},update, function(err, updateUser){
            if(err){
                res.status(500).send({
                    message: "Server ERR... "+err
                })
            }
            else
            {
            if(updateUser){
                res.redirect(""); //SEND TO THE PRINCIPAL PAGE...
                }
                else
                {
                res.status(404).send({
                    message: "The person not exist..."
                    })
                }
            }
        })


    });

}

module.exports = updateUser