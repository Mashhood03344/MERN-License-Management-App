//server/models/userModel.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // Add the id field
  username: String,
  email: String,
  // Add more fields as needed
});

module.exports = mongoose.model('User', userSchema);
