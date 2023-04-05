const express = require("express");
const router = express.Router();



router.get("/registeredFarm",(req,res)=>{
    res.render("AgricultureOffice/registered-farm")
})





module.exports = router