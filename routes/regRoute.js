const express = require("express");
const router = express.Router();
const {Model} = require("mongoose");
const User = require("../models/userModel")

router.get('/reg', (req, res)=>{
    res.render("reg")
});

router.post("/reg", async(req,res)=>{
    try{
        const user = new User(req.body);
        let userName = await User.findOne({username: req.body.username})
        if(userName){
            return res.send("this unique id already exists ")
        }else{
            await User.register(user, req.body.password, (err)=>{
                if(err){
                    throw err
                }
                req.redirect("/students")
            })
        }
    }catch(err){
        res.status(400).send("sorry it seems there is trouble accessing this page")
    }
})


module.exports = router