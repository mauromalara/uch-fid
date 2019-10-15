'use strict'
var User = require ('../models/user.js');

function updatePerson(req, res){
    var params = req.body;

    var name = params.Name;
    var mail =  params.Mail;

    User.find({$and : [{user_name : params.Name, user_mail : params.Mail}]}).exec(function(err, user){
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

module.exports = updatePerson