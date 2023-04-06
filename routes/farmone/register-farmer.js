const express = require("express");
const router = express.Router();


router.get("/farmer", (req,res)=>{
    res.render("farmerOne/register-farmer")
})



module.exports = router;