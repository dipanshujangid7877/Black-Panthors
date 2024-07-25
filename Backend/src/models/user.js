const mongoose = require("mongoose");
const { type } = require("os");
const userSchema = new mongoose.Schema({
    email:{
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true,
    },
    location:{
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true,
    }

})