const mongoose = require('mongoose');

var scehma = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    gender: String,
    status: String
})

const Userdb = mongoose.model('userdb', scehma);

module.exports = Userdb;