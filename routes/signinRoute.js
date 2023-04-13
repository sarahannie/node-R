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

// Login route
router.post('/signin', passport.authenticate(['user', 'admin', "farmer", "farmerone" ]), function(req, res) {
  // Check user role and redirect accordingly
  if (req.user instanceof Farmer) {
    // Redirect to farmer page for regular users
    res.redirect('/urbanfarmer');
  } else if (req.user instanceof Admin) {
    // Redirect to admin page for admin users
    res.redirect('/admin');
  } else if (req.user instanceof Farmerone) {
    // Redirect to admin page for admin users
    res.redirect('/farmerone');
  } 
  else {
    // Redirect to farmerone page for other users
    res.redirect('/');
  }
});

module.exports = router;
