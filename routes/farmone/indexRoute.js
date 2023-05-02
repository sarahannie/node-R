const express = require("express");
const router = express.Router();
const Product = require("../../models/product")
const connectEnsureLogin = require("connect-ensure-login")


router.get("/farmone", connectEnsureLogin.ensureLoggedIn("/signin"), (req,res)=>{
    res.render("farmerOne/index")
})

router.get("/farmer", (req,res)=>{
    res.render("farmerOne/register-farmer")
})

router.get("/reg-uf", (req,res)=>{
    res.render("farmerOne/registerd-uf")
})


router.get("/reg-user", (req,res)=>{
    res.render("farmerOne/registered-user")
})



router.get("/sales", (req,res)=>{
    res.render("farmerOne/sale")
})

router.get("/settings", (req,res)=>{
    res.render("farmerOne/setting")
})

router.get("/approve", async(req,res)=>{

    try{
        const items = await Product.find();
        console.log(items); 
        res.render("farmerOne/approve", {products: items})
    } catch(err){
        console.log(err)
        res.status(500).send("Failed to retrieve product details")
    } 
})


module.exports = router;