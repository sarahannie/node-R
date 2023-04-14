const express = require("express");
const Product = require("../models/product")
const router = express.Router();

// router.get('/service', (req, res)=>{
//     res.render("service")
// })

router.get("/service", async (req,res)=>{
    try{
        let items = await Product.find();
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

router.get("/service/:id", async(req,res)=>{
        try{
            let item = await Product.findById(req.params.id)
            console.log(item)
            res.render("service", {products:item})
        }catch(err){
            console.log(err)
        }
})

module.exports = router;
