const mongoose = require("mongoose");



const CartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Consumers"
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
        default: 1},
        price: Number,
    items: [{
         type:mongoose.Schema.Types.ObjectId, 
         ref: 'Products',
         required: true
       }],
      bill: {
          type: Number,
          required: true,
         default: 0
        }
      }, {
      timestamps: true
})

module.exports = mongoose.model('carts', CartSchema);