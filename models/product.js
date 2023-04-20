const mongoose = require("mongoose");

const ProductItem = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
      },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
    },
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
        
    },
    status:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model("Product",ProductItem)