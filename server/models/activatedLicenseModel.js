// /server/models/activatedLicenseModel.js for users
const mongoose = require('mongoose');

const activatedLicenseSchema = new mongoose.Schema({
  userID : { type: String, required: true},
  userName: { type: String, required: true },
  productName: { type: String, required: true }, // Added field
  key: { type: String, required: true }, // Added field
  activationDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ActivatedLicenses', activatedLicenseSchema);
