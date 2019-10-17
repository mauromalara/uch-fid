'use strict'
const User = require ('../models/user.js');

function deleteUser(req , res){
var params = req.body;

User.find({user_mail : params.Mail}).countDocuments().exec(function(err, user){
    if(user == 0){ res.send({ message : "THE PERSON TO DELETED DOESN'T EXIST..."}) }
    else{
        User.find({user_mail : params.Mail}).exec(function(err, user){
            var userId = user[0]._id;;
                User.findOneAndDelete({_id: userId}, function(err, deleteUser){
                    if(err){
                        res.send({
                            message: "Server ERR..."+err
                        })
                    }
                    else
                    {
                    if(deleteUser){
                        res.send({
                        message : "Person DELETED..."
                        })
                        }
                        else
                        {
                        res.send({
                            message: "The person not exist..."
                            })
                        }
                    }
                })
            });
        }
    });
}

module.exports = deleteUser