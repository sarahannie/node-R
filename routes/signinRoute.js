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
  passport.authenticate(["admin","user","farmer"," farmone"], { failureMessage:"Pasword is not correct" }),
  function(req, res) {
    if (req.admin.isAdmin) {
      // Redirect to admin dashboard
      res.redirect('/admin');
    }else if (req.farmer.isFarmer) {
      // Redirect to admin dashboard
      res.redirect('/urbanfarmer');
    }
    else if (req.farmone.isFarmone) {
      // Redirect to admin dashboard
      res.redirect('/farmone');
    }
    else {
      // Redirect to user dashboard
      res.redirect('/');
    }
  }
  

  );

module.exports = router;
