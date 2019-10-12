'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema({
    client_id : mongoose.ObjectId,
    user_id : mongoose.ObjectId,
    user_name : {
                     type: String,
                     trim: true
                 },
    user_mail : {
                    type: String,
                    trim: true,
                    lowercase: true,
                    unique: true,
                    required: 'Email address is required'
                },
    user_password : {
                       type: String,
                       trim: true,
                   },
    user_state : Boolean,
    user_role : Boolean
});

module.exports = mongoose.model('User', userSchema);