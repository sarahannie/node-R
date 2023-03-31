const express = require("express");
const router = express.Router();

router.get("/registeredUf",(req,res)=>{
    res.render("AgricultureOffice/registerd-uf")
})

module.exports = router