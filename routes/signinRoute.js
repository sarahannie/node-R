const express = require("express");
const passport = require("../middleware/auth")
const User = require('../models/signupConsumerModel'); // Import your User model
const Farmer = require('../models/signupConsumerModel'); // Import your User model
const Farmerone = require('../models/signupFarmerOne'); // Import your User model
const Admin = require('../models/signupAdmin'); 

const router = express.Router();

router.get("/signin", (req, res) => {
  res.render("signin");
});

router.post('/signin', 
  passport.authenticate('local', { failureRedirect: '/signin', successRedirect: '/', failureMessage:"Pasword is not correct" }),
  function(req, res) {
    res.redirect('/');
  });

module.exports = router;
