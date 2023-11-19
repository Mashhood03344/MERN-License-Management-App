const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // Add the id field
  name: String,
  version: String,
  description: String,
});

module.exports = mongoose.model('Product', productSchema);
