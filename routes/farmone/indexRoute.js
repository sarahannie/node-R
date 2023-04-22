const express = require("express");
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")


router.get("/farmone", connectEnsureLogin.ensureLoggedIn("/signin"), (req,res)=>{
    res.render("farmerOne/index")
})

router.get("/farmer", (req,res)=>{
    res.render("farmerOne/register-farmer")
})

router.get("/reg-uf", (req,res)=>{
    res.render("farmerOne/registerd-uf")
})


router.get("/reg-user", (req,res)=>{
    res.render("farmerOne/registered-user")
})



router.get("/sales", (req,res)=>{
    res.render("farmerOne/sale")
})

router.get("/settings", (req,res)=>{
    res.render("farmerOne/setting")
})


module.exports = router;