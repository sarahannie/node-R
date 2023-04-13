const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/signupConsumerModel'); // Import your User model
const Farmer = require('../models/signupConsumerModel'); // Import your User model
const Farmerone = require('../models/signupFarmerOne'); // Import your User model
const Admin = require('../models/signupAdmin'); // Import your Admin model

// Configure passport-local-mongoose plugin for User, Admin, Farmer, and Farmerone models
User.plugin(require('passport-local-mongoose'));
Admin.plugin(require('passport-local-mongoose'), { usernameField: 'email' }); // Custom username field for Admin model
Farmer.plugin(require('passport-local-mongoose'), { usernameField: 'email' }); // Custom username field for Farmer model
Farmerone.plugin(require('passport-local-mongoose'), { usernameField: 'email' }); // Custom username field for Farmerone model

// Configure passport strategy for User model
passport.use('user', new LocalStrategy(User.authenticate()));
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// Configure passport strategy for Admin model
passport.use('admin', new LocalStrategy(Admin.authenticate()));
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// Configure passport strategy for Farmer model
passport.use('farmer', new LocalStrategy(Farmer.authenticate()));
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// Configure passport strategy for Farmerone model
passport.use('farmerone', new LocalStrategy(Farmerone.authenticate()));
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

module.exports = passport;
