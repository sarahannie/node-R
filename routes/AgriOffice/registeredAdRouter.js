const express = require("express");
const router = express.Router();
const Signup = require("../../models/signupAdmin")


router.get("/registeredFarm",(req,res)=>{
    res.render("AgricultureOffice/registered-farm")
})

router.get("/registeredFarm", async(req,res)=>{
    try{
        let items = await Signup.find();
        res.render("AgricultureOffice/registered-farm", {register:items})
    }catch(err){
        res.send("failed to retrive register farmone detail")
    }
})

router.post("/registeredFarm", async(req,res)=>{
    try{
        const signup = new Signup(req.body);
        await signup.save();
        res.send("successful")
        res.redirect("/admin")
    }catch(err){
        res.status(400).render("AgricultureOffice/registered-farm")
    }
})



module.exports = router