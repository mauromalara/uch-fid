'use strict'
var User = require ('../models/user.js');

function deletePerson(req , res){
    var params = req.body;

    var name = params.Name;
    var mail =  params.Mail;

User.find({$and : [{user_name : params.Name, user_mail : params.Mail}]}).exec(function(err, user){
        var userId = user[0]._id;
        User.findOneAndDelete({_id : userId}, function(err, deleteUser){
            if(err){
                res.status(500).send({
                    message: "Server ERR..."+err
                })
            }
            else
            {
            if(deleteUser){
                res.status(200).send({
                })
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

module.exports = deletePerson