const express = require("express");
const router = express.Router();


router.get("/index", (req,res)=>{
    res.render("AgricultureOffice/index")
})

module.exports = router;