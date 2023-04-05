const express = require("express");
const router = express.Router();

router.get("/registeredfarmone",(req,res)=>{
    res.render("AgricultureOffice/registered-farmone")
})

module.exports = router