'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = Schema({

user_date_register : { type : Date, default : Date.now },
user_name : { type: String, trim: true, default : ""  },
user_lastName : { type: String, trim: true, default : "" },
user_age : { type: Date, default : 0 },
user_gender : { type : Boolean, default : false },
user_phone : { type : Number, default : 0 },
user_mail : {type: String, trim: true, lowercase: true, unique: true, required : true},
user_password : { type: String, trim: true, required : true },
user_state : { type : Boolean, default : false },
user_role : { type : String, required : true }

});

module.exports = mongoose.model('User', userSchema);