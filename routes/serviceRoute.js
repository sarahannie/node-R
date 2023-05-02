const express = require("express");
const Product = require("../models/product");
const Cart = require('../models/cart');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")



router.get("/service", connectEnsureLogin.ensureLoggedIn("/signin"), async (req,res)=>{
    try{
        // let items = await Product.find();
        let items = await Product.find({ approvalStatus: 'approved' });
        res.render("service", { products: items })
    } catch(err){
        console.log(err)
        res.status(500).send("Failed to retrieve product details")
    } 
})


router.post("/service", async (req,res)=>{
    try{
        let search = req.body.search
        // let items = await Product.find({name:{$regex : `.*${search}.*`}});
        let items = await Product.find({ $or: [ { name: {$regex : `.*${search}.*`, $options:'i'} }, { description: {$regex : `.*${search}.*`,$options:'i'} } ] }); 
        res.render("service", { products: items })
    } catch(err){
        console.log(err)
        res.status(500).send("Failed to retrieve product details")
    } 
})

router.post("/service/:id", async (req, res) => {
    try {
        const user = req.user.id;
        const cart = await Cart.findOne({userId: user});
        cart.items.push(req.params.id);
        await cart.updateOne({items: cart.items});
        res.status(200).send({'success': 'item added to cart'});
    } catch(err) {
        console.log(err);
        res.status(500).send({'Error': err});
    }
})

// router.get("/service/:id", async(req,res)=>{
//         try{
//             let item = await Product.findById(req.params.id)
//             console.log(item)
//             res.render("service", {product:item})
//         }catch(err){
//             console.log(err)
//         }
// })

router.get("/service/:id", async (req, res) => {
    try {
      let item = await Product.findById(req.params.id);
      console.log(item);
      res.json(item); // Pass "product" as a local variable to the template
    } catch (err) { 
      console.log(err);
    }
    });




module.exports = router;
