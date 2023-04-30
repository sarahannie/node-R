const express = require("express");
const router = express.Router();
const Cart = require("../models/cart")
const Product = require("../models/product")
const Consumer = require("../middleware/auth")

router.get('/cart', async(req, res)=>{
    try{
        const consumerId = req.user.id;
        const cart = await Cart.findOne({userId: consumerId}).populate('items');
        console.log(cart)
        return res.render("cart", {products:cart.items})
        
        // console.log("***********")
    }catch(err){
        console.log(err);
        res.status(500).send()
    }
})


router.post("/cart", async(req,res)=>{
    const owner = req.user.id;
    const {itemId, quantity} = req.body;
    try{
        const cart = await Cart.findOne({userId:owner});
        const item = await Product.findOne({_id: itemId});
        if(!item){
            res.status(404).send({ message: "Item is not found"});
            return
        }
        const price = item.price;
        const name = item.name
        //  if cart already exist
        if(cart){
            const itemIndex = cart.items.findIndex((item) => item.itemId == itemId);
            // if product already exist
        if(itemIndex > -1){
            let product = cart.items[itemIndex];
            product.quantity += quantity;
            cart.bill = cart.items.reduce((acc, curr)=>{
                return acc + curr.quantity * curr.price;
            },0)
            cart.items[itemIndex] = product;
            await cart.save();
            res.status(200).send(cart);
        }else {
            cart.items.push({ itemId, name, quantity, price });
            cart.bill = cart.items.reduce((acc, curr) => {
                return acc + curr.quantity * curr.price;
            },0)
            await cart.save();
            res.status(200).send(cart);
            }
        }
        else {
            //no cart exists, create one
            const newCart = await Cart.create({
               owner,
               items: [{ itemId, name, quantity, price }],
                bill: quantity * price,
            });
            return res.status(201).send(newCart);
            }
        
    }catch(err){
        console.log(err);
        res.status(500).send("something went wrong");
    }
})


router.post("/cart/delete", async(req,res)=>{
    try{
        await Cart.deleteOne({_id:req.body.id})
        res.redirect("back")
    }catch(err){
        console.log(err);
        res.send("failed to delete items") 
    }
})




module.exports = router