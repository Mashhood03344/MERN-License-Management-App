// /server/models/generationModel.js
const mongoose = require('mongoose');

const licenseSchema = new mongoose.Schema({
  productId: { type: String, required: true },
  quantity: { type: Number, required: true },
  generatedKeys: [{ type: String }],
  generatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Generation', licenseSchema);
