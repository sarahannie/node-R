const mongoose = require("mongoose");

const signupFarmer = new mongoose.Schema({
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
    dor:{
        type:String,
        required:true,
        trim:true,
        
    },
    dob:{
        type:String,
        required:true,
        trim:true,
        min: 10,
        max: 120
    },
    nin:{
        type:Number,
        trim:true,
        required:true,
    },
    unique:{
        type:String,
        trim:true,
        required:true
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
    ward:{
        type:String,
        required:true,
        trim:true
    },
    role:{
        type:String,
        required:true,
        trim:true
    }
})


module.exports = mongoose.model("Admin", signupFarmer)