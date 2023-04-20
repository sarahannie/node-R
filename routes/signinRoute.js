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
  passport.authenticate(["admin", "user", "farmer", "farmone"], { failureMessage: "Password is not correct" }),
  function(req, res) {
    if (req.user.isAdmin) {
      // Redirect to admin dashboard
      res.redirect('/admin');
    } else if (req.user.isFarmer) {
      // Redirect to urban farmer dashboard
      res.redirect('/urbanfarmer');
    } else if (req.user.isFarmone) {
      // Redirect to farm one dashboard
      res.redirect('/farmone');
    } else {
      // Redirect to user dashboard
      res.redirect('/');
    }
  }
);

router.get('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/signin');
  });
});









module.exports = router;
