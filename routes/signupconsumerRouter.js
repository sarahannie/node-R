const express = require("express");
const router = express.Router();

router.get('/signupconsumer', (req, res)=>{
    res.render("signup-consumer")
})


module.exports = router