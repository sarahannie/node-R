const express = require("express");
const router = express.Router();


router.get("/urbanFarmer", (req,res)=>{
    res.render("urbanfarmer/index")
})



module.exports = router;