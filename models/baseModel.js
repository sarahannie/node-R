const mongoose = require("mongoose");

const baseModel = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        minlength:5,
        maxlength:50,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    gender:{
        type:String,
        required:true,
        trim:true
    },
    phone:{
        type:String,
        required:true,
        trim:true
    },
    createdAt: {
        type: Date,
        default: Date.now
      }
})


module.exports = baseModel;