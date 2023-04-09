const express = require("express");
const router = express.Router();


router.get("/ordering", (req,res)=>{
    res.render("urbanfarmer/order")
})



module.exports = router;