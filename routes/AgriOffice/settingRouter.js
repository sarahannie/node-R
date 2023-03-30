const express = require("express");
const router = express.Router();

router.get("/setting",(req,res)=>{
    res.render("AgricultureOffice/setting")
})

module.exports = router