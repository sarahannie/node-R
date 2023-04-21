const express = require("express");
const router = express.Router();
const Signup = require("../../models/signupFarmerOne");
const { encryptPassword } = require('../../middleware/password');


router.get("/registerfarmone",(req,res)=>{
    res.render("AgricultureOffice/register-farmone")
})



router.post("/registerfarmone", async(req,res)=>{
    try{
        req.body.password = encryptPassword(req.body.password);
        const signup = new Signup(req.body);
        await signup.save();
        res.redirect("/admin")
    }catch(err){
        console.log(err);
        res.status(400).render("AgricultureOffice/register-farmone")
    }
})

router.get("/registeredfarmone", async(req,res)=>{
    try{
        let items = await Signup.find();
        res.render("AgricultureOffice/registered-farmone", {register:items})
    }catch(err){
        res.send("failed to retrive register farmone detail")
    }
})


router.post("/registerFarmone/delete", async(req,res)=>{
    try{
        await Signup.deleteOne({_id:req.body.id})
        res.redirect("back")

    }catch(err){
        console.log(err);
        res.send("failed to delete registerfarmone details")
    }
})
router.get("/register-farmone-edit/:id", async(req,res)=>{
    try{
        const item = await Signup.findOne({_id:req.params.id})
        res.render("AgricultureOffice/register-farm-edit", {register:item})

    }catch(err){
        console.log(err);
        res.send("failed to edit registerfarone details")
    
    }
})

router.post("/register-farmone-edit", async(req,res)=>{
    try{
        await Signup.findOneAndUpdate({_id:req.query.id}, req.body)
        res.redirect("/registeredAdmin")
    }catch(err){
        console.log(err)
        res.send("failed to update registerfarmone details")
    }
})




module.exports = router;