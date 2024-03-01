const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: { type: String, unique: true },
  // Add other fields as needed
  // For example:
  displayName: String,
  email: String,
  // ... other fields
});

module.exports = mongoose.model('User', userSchema);
