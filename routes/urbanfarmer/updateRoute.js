const express = require("express");
const router = express.Router();


router.get("/updating", (req,res)=>{
    res.render("urbanfarmer/updatingProduct")
})



module.exports = router;