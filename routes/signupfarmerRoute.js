const express = require("express");
const router = express.Router();
const Signup = require("../models/signupFarmer")


router.get('/signupfarmer', (req,res)=>{
    res.render("signup-farmer")
})

router.post("/signupfarmer",async(req,res)=>{
    try{
        const signup = new Signup(req.body);
        await signup.save();
        res.redirect("/signin")
    }catch(err){
        console.log(err)
        res.status(400).render("signup-farmer")
    }
})

router.get("/registeredUf", async(req,res)=>{
    try{
        let item = await Signup.find();
        res.render("AgricultureOffice/registerd-uf",{register:item})
    }catch(err){
        res.send("failed to retrive register farmers detail")
    }
})

router.post("/signupfarmer/delete", async(req,res)=>{
    try{
        await Signup.deleteOne({_id:req.body.id})
        res.redirect("back")
    }catch(err){
        console.log(err);
        res.send("failed to delete registerfarmone details")
    }
})

router.get("/register-farmer-edit/:id", async(req,res)=>{
    try{
        const item = await Signup.findOne({_id:req.params.id})
        res.render("AgricultureOffice/register-farmer-edit", {register:item})

    }catch(err){
        console.log(err);
        res.send("failed to edit registerfarone details")
    
    }
})

router.post("/register-farmer-edit", async(req,res)=>{
    try{
        await Signup.findOneAndUpdate({_id:req.query.id}, req.body)
        res.redirect("/registeredAdmin")
    }catch(err){
        console.log(err)
        res.send("failed to update registerfarmer details")
    }
})

// render.post("")
module.exports = router;