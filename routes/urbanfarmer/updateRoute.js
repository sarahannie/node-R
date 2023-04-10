const express = require("express");
const router = express.Router();
const Product = require("../../models/product")


// router.get("/updating", (req,res)=>{
//     res.render("urbanfarmer/updatingProduct")
// })

router.get("/updating", async (req,res)=>{
    try{
        let items = await Product.find();
        console.log(items); 
        res.render("urbanfarmer/updatingProduct", { products: items })
    } catch(err){
        console.log(err)
        res.status(500).send("Failed to retrieve product details")
    } 
})

router.post("/updating/delete", async(req,res)=>{
    try{
        await Product.deleteOne({_id: req.body.id})
        res.redirect("back")
    }catch(err){
        console.log(err)
        res.send(" failed to delete product details")
    }
})



module.exports = router;