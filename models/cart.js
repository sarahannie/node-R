const mongoose = require("mongoose");



const CartSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Consumers"
      },
    items: [{
        itemId: {
         type:mongoose.Schema.Types.ObjectId, 
         ref: 'Item',
         required: true
      },
      name: String,
      quantity: {
         type: Number,
         required: true,
         min: 1,
         default: 1},
         price: Number
       }],
      bill: {
          type: Number,
          required: true,
         default: 0
        }
      }, {
      timestamps: true
})

module.exports = mongoose.model('cart', CartSchema);