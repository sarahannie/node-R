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


router.get("/registeredconsumer", async(req,res)=>{
    try{
        let items = await Signup.find();
        res.render("AgricultureOffice/registered-user", {register:item})
    }catch(err){
        console.log(err);
        res.send("failed to retrive register consumer")
    }

})


module.exports = router