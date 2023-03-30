const express = require("express");
const router = express.Router();

router.get("/registeredUser",(req,res)=>{
    res.render("AgricultureOffice/registered-farmone")
})

module.exports = router