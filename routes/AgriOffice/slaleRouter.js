const express = require("express");
const router = express.Router();

router.get("/sale",(req,res)=>{
    res.render("AgricultureOffice/sale")
})

module.exports = router