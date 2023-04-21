const express = require("express");
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")


router.get("/admin",  (req,res)=>{
    res.render("AgricultureOffice/index")
})

module.exports = router;