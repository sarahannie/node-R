const express = require("express");
const router = express.Router();

router.get("/registerFarmone",(req,res)=>{
    res.render("AgricultureOffice/register-farmone")
})

module.exports = router