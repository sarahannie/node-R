const express = require("express");
const router = express.Router();


router.get("/settings", (req,res)=>{
    res.render("farmerOne/setting")
})



module.exports = router;