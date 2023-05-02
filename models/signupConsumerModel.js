const mongoose = require("mongoose");


const signupSchema = new mongoose.Schema({
    fullname: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true
    },
    gender: {
        type: String,
        trim: true
    },
    countryCode:{
        type:String,
    },
    phone: {
        type: Number,
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    repassword: {
        type: String,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

signupSchema.virtual('phoneNumber').get(function () {
    return this.countryCode + this.phone;
 })


module.exports = mongoose.model("Consumers", signupSchema);