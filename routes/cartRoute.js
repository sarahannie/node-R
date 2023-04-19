const express = require("express");
const router = express.Router();
const Cart = require("../models/cart")
const Product = require("../models/product")

router.get('/cart', async(req, res)=>{
    const items = req.product._id;
    try{
        const cart = await Cart.findOne({productId})
        if(cart && cart.items.length > 0){
        res.send(200).send(cart);
        }
        else{
            res.send(null)
        }
    }catch(err){
        res.status(500).send()
    }

    res.render("cart")
})




module.exports = router