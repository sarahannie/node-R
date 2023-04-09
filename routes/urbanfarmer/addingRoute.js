const express = require("express");
const router = express.Router();


router.get("/addproduct", (req,res)=>{
    res.render("urbanfarmer/addingProduct")
})



module.exports = router;