const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    fullname:{
        type:String,
        trim:"true"
    },
    phonenumber:{
        type:String,
        trim:"true"
    },
    
})

module.exports = mongoose.model("Register", registerSchema)