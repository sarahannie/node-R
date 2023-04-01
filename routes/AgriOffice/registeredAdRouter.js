const express = require("express");
const router = express.Router();
const Signup = require("../../models/signupAdmin")


router.get("/registeredAdmin",(req,res)=>{
    res.render("AgricultureOffice/registered-admin")
})






router.get("")

module.exports = router