const mongoose = require("mongoose");

const ProductItem = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Farmers"
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
    approvalStatus: {
      type: String,
      enum: ["approved", "denied", "pending"],
      default: "pending",
      required:true
    }
})

module.exports = mongoose.model("Products",ProductItem)