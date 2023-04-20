const mongoose = require("mongoose");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

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
    },countryCode:{
        true:String,
        required:true
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
signupSchema.virtual('phone').get(function () {
    return this.countryCode + this.phone;
 })

signupSchema.plugin(passportLocalMongoose);
//  mongoose.model("Consumers", signupSchema);

module.exports = mongoose.model("Consumers", signupSchema);