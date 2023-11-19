//server/models/licenseModel.js
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); // Import uuidv4 function from uuid package

const licenseSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  key: { type: String, required: true, default: uuidv4 }, // Generate default key using uuidv4
  ProductID: { type: String, required: true },
  ProductName: { type: String, required: true },
  UserID: { type: String, required: true },
  UserName: { type: String, required: true },
  activated: { type: Boolean, default: false },
});

module.exports = mongoose.model('Licenses', licenseSchema);
