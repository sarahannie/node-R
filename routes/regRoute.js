const express = require("express");
const router = express.Router();
const User = require("../models/userModel")

router.get('/reg', (req, res)=>{
    res.render("reg")
});


module.exports = router