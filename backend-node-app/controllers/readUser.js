'use strict'
const User = require ('../models/user.js');

function readUser(req , res){
    let params = req.body;

    User.find({user_mail : params.Mail}).exec(function(err, user){
        if(err){ res.status(500).send({ message : "Error --> "+err}) }
        else{

        let userJSON = {
            "Name" : user[0].user_name,
            "LastName" : user[0].user_lastName,
            "Age" : user[0].user_age,
            "Gender" : user[0].user_gender,
            "Phone" : user[0].user_phone,
            "State" : user[0].user_state,
            "Role" : user[0].user_role,
            "Date" : user[0].user_date_register
            }

        res.send({        message: JSON.stringify(userJSON)    })
        }
    });
}

module.exports = readUser