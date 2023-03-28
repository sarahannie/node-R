const mongoose = require("mongoose");

const userActivity = mongoose.Schema({
    date: {
        type: Date,
        default: Date.now().toLocaleString('DD/MM/YYYY')
    },
    userLogin: {
        type: Number
    }
});

db.find({date: Date.now()})