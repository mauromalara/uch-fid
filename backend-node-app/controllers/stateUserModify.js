'use strict'
const User = require ('../models/user.js');

function readUser(req , res){
    let params = req.body;

    User.find({user_mail : params.Mail}).exec(function(err, user){
        if(err){ res.status(404).send({ message : "Error --> "+err}) }
        else{
            if(user[0].user_role == "Admin" ){
                User.find({user_mail : params.MailUserModify}).exec(function(err, userMail){
                    if(err){ res.status(500).send({ message : "Error --> "+err}) }
                            else{
                                let userId = userMail[0]._id;
                                User.findOneAndUpdate({_id : userId},{user_state : true}, function(err, updateUser){
                                        if(err){
                                            res.status(500).send({  message: "Server ERR... "+err   })
                                        }
                                        else
                                        {
                                        if(updateUser){
                                            res.status(200).send({ message : "UPDATED STATE --> "+updateUser})
                                            }
                                            else
                                            {
                                            res.status(404).send({  message: "The person not exist..."  })
                                            }
                                        }
                                    })
                            }
                });
            }else{
            res.status(404).send({ message : "NOT ADMIN DETECTED..."})
            }
        }
    });
}

module.exports = readUser