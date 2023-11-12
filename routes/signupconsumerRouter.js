const express = require("express");
const router = express.Router();
const Signup = require("../models/signupConsumerModel");
const Cart = require('../models/cart');

const { encryptPassword } = require('../middleware/password');

router.get('/signupconsumer', (req, res)=>{
    res.render("signup-consumer")
})




// router.post("/signupconsumer", async(req,res)=>{
//     try{
//         req.body.password = encryptPassword(req.body.password);
//         const signup = Signup(req.body);
//         const cart = Cart();
//         cart.userId = signup.id;
//         await signup.save()
//         await cart.save()
//         res.redirect("/signin")
//     }catch(err){
//         console.log(err)
//         res.status(400).render("signup-consumer")
//     }
// })

router.post("/signupconsumer", async(req,res) => {
    try {
        req.body.password = encryptPassword(req.body.password);
        
        // Create and save signup user
        const signup = new Signup(req.body);
        await signup.save();

        // Create cart and attach signup user's id to it
        const cart = new Cart();
        cart.userId = signup._id;
        await cart.save();

        res.redirect("/signin");
    } catch(err) {
        console.log(err);
        res.status(400).render("signup-consumer");
    }
});


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