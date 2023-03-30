const express = require("express");
const router = express.Router();

router.get("/registerFarmo",(req,res)=>{
    res.render("AgricultureOffice/register-farmone")
})

module.exports = router