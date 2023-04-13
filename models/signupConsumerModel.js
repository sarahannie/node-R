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

signupSchema.plugin(passportLocalMongoose);
 mongoose.model("Consumers", signupSchema);

