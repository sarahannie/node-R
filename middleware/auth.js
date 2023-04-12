// Import required modules
const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

// Initialize Express app
const app = express();

// Configure session middleware
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));

// Configure passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Configure passport local strategy
passport.use(new LocalStrategy(
  (username, password, done) => {
    // Replace this with your actual authentication logic
    if (username === 'user' && password === 'password') {
      return done(null, { id: 1, username: 'user' });
    } else {
      return done(null, false, { message: 'Invalid username or password' });
    }
  }
));

// Serialize user object
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user object
passport.deserializeUser((id, done) => {
  // Replace this with your actual user lookup logic
  if (id === 1) {
    done(null, { id: 1, username: 'user' });
  } else {
    done(new Error('User not found'));
  }
});

// Configure routes
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the authentication page</h1>');
});

app.get('/login', (req, res) => {
  res.send(`
    <h1>Login</h1>
    <form action="/login" method="post">
      <input type="text" name="username" placeholder="Username"><br>
      <input type="password" name="password" placeholder="Password"><br>
      <button type="submit">Login</button>
    </form>
  `);
});

// Authenticate user using passport local strategy
app.post('/login', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login'
}));

// Protected route after successful authentication
app.get('/dashboard', (req, res) => {
  if (req.isAuthenticated()) {
    res.send('<h1>Welcome to the dashboard</h1>');
  } else {
    res.redirect('/login');
  }
});

// Logout route
app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
