const express = require("express");
const Product = require("../models/product")
const router = express.Router();

router.get('/service', (req, res)=>{
    res.render("service")
})

router.get("/service", async (req,res)=>{
    try{
        let items = await Product.find();
        console.log(items); 
        res.render("service", { products: items })
    } catch(err){
        console.log(err)
        res.status(500).send("Failed to retrieve product details")
    } 
})

module.exports = router;
