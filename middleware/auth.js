const passport = require('passport');
const LocalStrategy = require('passport-local');


const User = require("../models/signupConsumerModel")

passport.use(new LocalStrategy(
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

