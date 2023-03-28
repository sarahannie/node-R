const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
    fullname:{
        type:String,
        trim:true,
    },
    email:{
        type:String,
        trim:true
    },
    gender:{
        type:String,
        trim:true
    },
    phone:{
        type:Number,
        trim:true
    },
    password:{
        type:String,
        trim:true
    },
    repassword:{
        type:String,
        trim:true
    }
})