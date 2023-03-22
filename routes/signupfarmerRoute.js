const express = require("express");
const router = express.Router();


router.get('/signupfarmer', (req,res)=>{
    res.render("signup-farmer")
})

module.exports = router;