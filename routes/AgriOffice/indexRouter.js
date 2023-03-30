const express = require("express");
const router = express.Router();


router.get("/admin", (req,res)=>{
    res.render("AgricultureOffice/index")
})

module.exports = router;