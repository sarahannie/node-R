const express = require("express");
const router = express.Router();
const Product = require("../../models/product")
const connectEnsureLogin = require("connect-ensure-login")


router.get("/urbanFarmer", connectEnsureLogin.ensureLoggedIn("/signin"), async (req,res)=>{
    try{
        let items = await Product.find({userId: req.user.id});
        console.log(items); 
        res.render("urbanfarmer/index", { products: items })
    } catch(err){
        console.log(err)
        res.status(500).send("Failed to retrieve product details")
    } 
})

router.get("/updating", async (req,res)=>{
    try{
        const items = await Product.find();
        console.log(items); 
        res.render("urbanfarmer/updatingProduct", { products: items })
    } catch(err){
        console.log(err)
        res.status(500).send("Failed to retrieve product details")
    } 
})

router.get("/settinguf", (req,res)=>{
    res.render("urbanfarmer/setting")
})

router.get("/ordering", (req,res)=>{
    res.render("urbanfarmer/order")
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
router.post("/urbanFarmer/delete", async(req,res)=>{
    try{
        await Product.deleteOne({_id: req.body.id})
        res.redirect("back")
    }catch(err){
        console.log(err)
        res.send(" failed to delete product details")
    }
})

router.get("/additing-edit/:id", async(req,res)=>{
    try{
        const item = await Product.findOne({_id:req.params.id})
        res.render("urbanfarmer/addingProduct-edit", {products:item})
    }catch(err){
        console.log(err);
        res.send("failed to edit product details")
    }
})



router.post("/additing-edit", async(req,res)=>{
    try{
        const item = await Product.findOneAndUpdate({_id:req.query.id}, req.body)
        res.redirect("/urbanfarmer")
    }catch(err){
        console.log(err);
        res.send("failed to edit product details")
    }
})



module.exports = router;