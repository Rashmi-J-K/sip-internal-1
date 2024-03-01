// routes/secureRoute.js
const express = require('express');
const router = express.Router();

// Middleware to check if the user is authenticated
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  // Redirect to the login page or handle the unauthorized access as needed
  res.redirect('/login');
}

// Protected route
router.get('/protected', ensureAuthenticated, (req, res) => {
  res.send('This is a protected route');
});

module.exports = router;
