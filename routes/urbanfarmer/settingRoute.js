const express = require("express");
const router = express.Router();


router.get("/settinguf", (req,res)=>{
    res.render("urbanfarmer/setting")
})



module.exports = router;