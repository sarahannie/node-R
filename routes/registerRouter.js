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
        res.redirect("/")
        console.log(req.body)
    }catch(err){
        // res.status(400).render("register")
        console.log(err)
    }
})

module.exports = router