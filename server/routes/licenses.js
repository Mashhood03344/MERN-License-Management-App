// /server/routes/licenses.js
const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid'); // Import uuidv4 function from uuid package
const Licenses = require('../models/licenseModel'); // Use the correct model name

// Function to generate a unique license key
const generateUniqueLicenseKey = () => {
  return uuidv4();
};

// POST route for generating a license
router.post('/generate', async (req, res) => {
  try {
    const newLicense = new Licenses({
      id: req.body.id,
      key: req.body.licenseKey, // Use the provided licenseKey
      ProductID: req.body.productId,
      ProductName: req.body.productName,
      UserID: req.body.userId,
      UserName: req.body.userName,
      activated: req.body.activated,
    });

    const savedLicense = await newLicense.save();
    res.json(savedLicense);
  } catch (error) {
    console.error('Error generating license:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET route to retrieve all licenses
router.get('/show', async (req, res) => {
  try {
    const licenses = await Licenses.find();
    res.json(licenses);
  } catch (error) {
    console.error('Error getting licenses:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET route to retrieve a license by ID
router.get('/:licenseId', async (req, res) => {
  try {
    const license = await Licenses.findOne({ id: req.params.licenseId });
    if (!license) {
      return res.status(404).json({ error: 'License not found' });
    }
    res.json(license);
  } catch (error) {
    console.error('Error getting license by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
