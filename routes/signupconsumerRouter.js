const express = require("express");
const router = express.Router();
const Signup = require("../models/signupConsumerModel")

router.get('/signupconsumer', (req, res)=>{
    res.render("signup-consumer")
})



router.post("/signupconsumer", async(req,res)=>{
    try{
        const signup = Signup(req.body);
        await signup.save()
        res.redirect("/signin")
    }catch(err){
        console.log(err)
        res.status(400).render("signup-consumer")
    }
})


router.get("/registeredUser", async(req,res)=>{
    try{
        let items = await Signup.find();
        res.render("AgricultureOffice/registered-user", {register:items})
    }catch(err){
        console.log(err);
        res.send("failed to retrive registered consumer")
    }

})
router.get("/reg-user", async(req,res)=>{
    try{
        let items = await Signup.find();
        res.render("farmerOne/registered-user", {register:items})
    }catch(err){
        console.log(err);
        res.send("failed to retrive register consumer")
    }

})

router.get("/admin", async(req,res)=>{
    try{
        let items = await Signup.find();
        res.render("AgricultureOffice/index", {register:items})
    }catch(err){
        console.log(err);
        res.send("fai   led to retrive registers consumer")
    }

})

router.post("/signupconsumer/delete", async(req,res)=>{
    try{
        await Signup.deleteOne({_id:req.body.id})
        res.redirect("back")
    }catch(err){
        console.log(err)
        res.send("failed to delete registered consumer")
    }
})




module.exports = router