const passport = require('passport');
const LocalStrategy = require('passport-local');


const User = require("../models/signupConsumerModel")
const Admin = require("../models/signupAdmin")
const Farmers = require("../models/signupFarmer")
const Farmone = require("../models/signupFarmerOne")

passport.use("user",    new LocalStrategy(
    function(username, password, done) {
       
      User.findOne({ email: username }).then((user) => {
        if (user) {
            if (user.password === password) {
                return done(null, user);
            }
            else {
                return done(null, false);
            }
          }
      }).catch((err) => {
        return done(err);
      })
    }
  ));
passport.use("admin",new LocalStrategy(
    function(username, password, done) {
       
      Admin.findOne({ email: username }).then((user) => {
        if (user) {
            if (user.password === password) {
                return done(null, user);
            }
            else {
                return done(null, false);
            }
          }
      }).catch((err) => {
        return done(err);
      })
    }
  ));
passport.use("farmers",new LocalStrategy(
    function(username, password, done) {
       
      Farmers.findOne({ email: username }).then((user) => {
        if (user) {
            if (user.password === password) {
                return done(null, user);
            }
            else {
                return done(null, false);
            }
          }
      }).catch((err) => {
        return done(err);
      })
    }
  ));
passport.use("farmone",new LocalStrategy(
    function(username, password, done) {
       
      Farmone.findOne({ email: username }).then((user) => {
        if (user) {
            if (user.password === password) {
                return done(null, user);
            }
            else {
                return done(null, false);
            }
          }
      }).catch((err) => {
        return done(err);
      })
    }
  ));

  passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      cb(null, { id: user.id, username: user.username });
    });
  });
  
  passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user);
    });
  });



module.exports = passport;

