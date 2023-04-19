const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require("../models/signupConsumerModel")
const Admin = require("../models/signupAdmin")
const Farmers = require("../models/signupFarmer")
const Farmone = require("../models/signupFarmerOne")

const authenticateUser = (model, username, password, done) => {
  model.findOne({ email: username })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          return done(null, user);
        }
        else {
          return done(null, false);
        }
      }
      else {
        return done(null, false);
      }
    })
    .catch((err) => {
      return done(err);
    })
};

passport.use("user", new LocalStrategy(authenticateUser.bind(null, User)));
passport.use("admin", new LocalStrategy(authenticateUser.bind(null, Admin)));
passport.use("farmer", new LocalStrategy(authenticateUser.bind(null, Farmers)));
passport.use("farmone", new LocalStrategy(authenticateUser.bind(null, Farmone)));

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
