const express = require("express");
const router = express.Router();


router.get("/reg-user", (req,res)=>{
    res.render("farmerOne/registered-user")
})



module.exports = router;