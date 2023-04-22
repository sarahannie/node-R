const express = require("express");
const router = express.Router();

router.get('/', (req, res)=>{
    res.render("index");
})

router.get('/signup', (req, res)=>{
    res.render("signup")
})

router.get('/payment', (req, res)=>{
    res.render("payment");
})

router.get('/contact', (req, res)=>{
    res.render("contact");
})



module.exports = router;