const express = require("express");
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")


router.get("/admin", connectEnsureLogin.ensureLoggedIn("/signin"),  (req,res)=>{
    res.render("AgricultureOffice/index")
})

router.get("/sale",(req,res)=>{
    res.render("AgricultureOffice/sale")
})

router.get("/setting",(req,res)=>{
    res.render("AgricultureOffice/setting")
})

router.get("/registeredUser",(req,res)=>{
    res.render("AgricultureOffice/registered-user")
})

router.get("/registeredUf",(req,res)=>{
    res.render("AgricultureOffice/registerd-uf")
})

router.get("/registeredFarm",(req,res)=>{
    res.render("AgricultureOffice/registered-farm")
})

router.get("/registeredfarmone",(req,res)=>{
    res.render("AgricultureOffice/registered-farmone")
})

module.exports = router;