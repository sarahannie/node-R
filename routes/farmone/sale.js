const express = require("express");
const router = express.Router();


router.get("/sales", (req,res)=>{
    res.render("farmerOne/sale")
})



module.exports = router;