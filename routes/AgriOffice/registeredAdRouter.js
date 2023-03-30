const express = require("express");
const router = express.Router();

router.get("/registeredAdmin",(req,res)=>{
    res.render("AgricultureOffice/registered-admin")
})

module.exports = router