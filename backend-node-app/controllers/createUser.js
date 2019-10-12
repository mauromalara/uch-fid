'use strict'
var User = require ('../models/user.js');

function createUser (request, response){
    var params = request.body;
    var userSchema = new User();

    User.find({$and : [{user_Name : params.Name, user_Mail : params.Mail}]}).countDocuments().exec(function(err, user){
    if(user == 0){

    userSchema.user_name = params.Name,
    userSchema.user_mail = params.Mail,
    userSchema.user_password = params.Password,
    userSchema.user_state = 0,
    userSchema.user_role = 0

    userSchema.insertOne((error, user) => {
    if(error){
            response.status(500).send({
            message :"server err...."
            })
        }
        else
        {
        if(user){
            response.redirect(""); //SEND TO THE INDEX PAGE...
            }
            else
            {
            response.status(200).send({
                message: "NOT SAVED..."
                })
            }
        }
    })
    }else {
        response.redirect("" //SEND TO THE UPDATE PAGE...
         +"?Name="+params.Name
         +"&Mail="+params.Mail
            )
        }
    })
}

module.exports = createUser