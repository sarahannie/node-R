const express = require("express");
const router = express.Router();
const Signup = require("../../models/signupAdmin")

router.get("/registerAdmin",(req,res)=>{
    res.render("AgricultureOffice/register-admin")
})


router.get("/registeredAdmin", async(req,res) =>{
    try{
        let items = await Signup.find();
        res.render("AgricultureOffice/registered-admin", {register:items})
    }catch(err){
        console.log(err);
        res.send("failed to retrive registerAdmin details")
    }
})

router.post("/registerAdmin", async(req,res)=>{
    try{
        const signup = new Signup(req.body);
        await signup.save();
        res.redirect("/admin")
    }catch(err){
        console.log(err)
        res.status(400).render("AgricultureOffice/register-admin")
    }
})

router.post("/register/delete", (req,res)=>{
    try{

    }catch(err){
        console.log(err);
        res.send("failed to delete registerAdmin details")
    }
})



module.exports = router;