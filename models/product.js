const mongoose = require("mongoose");

const ProductItem = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
        
    },
    quantity:{
        type:Number,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
        
    },
    image:{
        type:String,
        required:true
        
    }
})

module.exports = mongoose.model("Product",ProductItem)