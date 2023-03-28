const express = require("express");
const router = express.Router();
const SignUP = require("../models/signupFarmer")


router.get('/signupfarmer', (req,res)=>{
    res.render("signup-farmer")
})

// render.post("")
module.exports = router;