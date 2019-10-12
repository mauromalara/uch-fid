'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clientSchema = Schema({
    client_id : Number,
    client_name : String,
    client_lastName : String,
    client_age : Number,
    client_gender : String,
    client_phone : Number
});

module.exports = mongoose.model('Client', clientSchema);