const express = require("express");
const router = express.Router();


router.get("/farmone", (req,res)=>{
    res.render("farmerOne/index")
})



module.exports = router;