const express = require("express");
const router = express.Router();
const Signup = require("../models/signupConsumerModel")

router.get('/signupconsumer', (req, res)=>{
    res.render("signup-consumer")
})



router.post("/signupconsumer", async(req,res)=>{
    try{
        const signup = new Signup(req.body);
        await signup.save()
        res.redirect("/signin")
    }catch(err){
        res.status(400).render("signup-consumer")
    }
})


module.exports = router