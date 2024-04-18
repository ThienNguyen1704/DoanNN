const mongoose = require('mongoose');

const userSChema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    email:{
        type: String
    },
    password:{
        type: String,
        required: true
    }
})
 
const User = mongoose.model("User", userSChema);
module.exports = {
    User
};