'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema({
    client_id : {
                   type: mongoose.Schema.Types.ObjectId,
                   index: true,
                   required: true,
                   auto: true
                 },
    user_id : {
                 type: mongoose.Schema.Types.ObjectId,
                 index: true,
                 required: true,
                 auto: true
               },
    user_name : {
                     type: String,
                     trim: true
                 },
    user_mail : {
                    type: String,
                    trim: true,
                    lowercase: true,
                    unique: true
                },
    user_password : {
                       type: String,
                       trim: true
                   },
    user_state : Boolean,
    user_role : Boolean,
    user_date : {
                    type: Date,
                    default: Date.now
                }
});

module.exports = mongoose.model('User', userSchema);