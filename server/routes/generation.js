// /server/routes/generation.js
const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const Generation = require('../models/generationModel');

router.post('/generate', async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    // Generate the specified quantity of license keys
    const generatedKeys = Array.from({ length: quantity }, () => uuidv4());

    // Save the generated keys in the database
    const newGeneration = new Generation({
      productId,
      quantity,
      generatedKeys,
    });

    const savedGeneratoin = await newGeneration.save();

    res.json({ message: 'License keys generated successfully', license: savedGeneratoin });
  } catch (error) {
    console.error('Error generating license keys:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
