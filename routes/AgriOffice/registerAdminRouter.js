const express = require("express");
const router = express.Router();
const Signup = require("../../models/signupAdmin")
const { encryptPassword } = require('../../middleware/password');

router.get("/registerAdmin",(req,res)=>{
    res.render("AgricultureOffice/register-admin")
})


router.get("/registeredAdmin", async(req,res) =>{
    try{
        
        let items = await Signup.find();
        res.render("AgricultureOffice/registered-admin", {register:items})
    }catch(err){
        res.send("failed to retrive registerAdmin details")
    }
})

router.post("/registerAdmin", async(req,res)=>{
    try{
        req.body.password = encryptPassword(req.body.password);
        const signup = new Signup(req.body);
        await signup.save();
        res.redirect("/admin")
    }catch(err){
        console.log(err)
        res.status(400).render("AgricultureOffice/register-admin")
    }
})

router.post("/registerAdmin/delete", async(req,res)=>{
    try{
        await Signup.deleteOne({_id:req.body.id})
        res.redirect("back")

    }catch(err){
        console.log(err);
        res.send("failed to delete registerAdmin details")
    }
})

router.get("/register-admin-edit/:id", async(req,res)=>{
    try{
        const item = await Signup.findOne({_id:req.params.id})
        res.render("AgricultureOffice/register-admin-edit", {register:item})
    }catch(err){
        console.log(err);
        res.send("failed to edit registerAdmin details")
    
    }
})

router.post("/register-admin-edit", async(req,res)=>{
    try{
        await Signup.findOneAndUpdate({_id:req.query.id}, req.body)
        res.redirect("/registeredAdmin")
    }catch(err){
        res.send("failed to update registerAdmin details")
        console.log(err)
    }
})



module.exports = router;