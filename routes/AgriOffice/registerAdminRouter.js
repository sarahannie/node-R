const express = require("express");
const router = express.Router();

router.get("/registerAdmin",(req,res)=>{
    res.render("AgricultureOffice/register-admin")
})

module.exports = router