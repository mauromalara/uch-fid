'use strict'
const User = require ('../models/user.js');

function deleteUser(req , res){
var params = req.body;

User.find({user_mail : params.Mail}).countDocuments().exec(function(err, user){
    if(user == 0){ res.status(404).send({ message : "THE PERSON TO DELETED DOESN'T EXIST..."}) }
    else{
        User.find({user_mail : params.Mail}).exec(function(err, user){
            var userId = user[0]._id;;
                User.findOneAndDelete({_id: userId}, function(err, deleteUser){
                    if(err){
                        res.status(404).send({  message: "Server ERR..."+err    })
                    }
                    else
                    {
                    if(deleteUser){
                        res.status(200).send({  message : "Person DELETED..."+deleteUser    })
                        }
                        else
                        {
                        res.status(500).send({  message: "The person not exist..."  })
                        }
                    }
                })
            });
        }
    });
}

module.exports = deleteUser