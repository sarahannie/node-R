const express = require("express");
const router = express.Router();
const Register = require("../models/registerModel")

router.get('/register', (req, res)=>{
    res.render("register")
})



router.post("/register", async(req,res)=>{
    try{
        const register = new Register(req.body);
        await register.save()
        res.redirect("/students")
        console.log(req.body)
    }catch(err){
        // res.status(400).render("register")
        console.log(err)
    }
})

router.get("/students",async(req,res)=>{
    try{
        let items = await Register.find();
        // console.log(items)
        res.render("students",{students:items})
    }catch(err){
        console.log(err);
        res.send("failed to retrive student details")
    }
})


router.post("/students/delete", async(req,res)=>{
    try{
        await Register.deleteOne({_id:req.body.id})
        res.redirect("back")
    }catch(err){
        console.log(err)
    }
})

module.exports = router