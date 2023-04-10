const mongoose = require("mongoose");

const ProductItem = new mongoose.Schema({
    name:{
        type:String,
        
    },
    description:{
        type:String,
        
    },
    quantity:{
        type:Number,
    },
    price:{
        type:Number,
        
    },
    image:{
        type:String,
        
    }
})

module.exports = mongoose.model("Product",ProductItem)