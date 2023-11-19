// /server/routes/activatedLicenses.js for users
const express = require('express');
const router = express.Router();
const ActivatedLicense = require('../models/activatedLicenseModel');

// GET route to retrieve activated licenses for the specified user
router.get('/:userID', async (req, res) => {
  try {
    const { userID } = req.params; // Use req.params to get the userID from the URL parameters
    const activatedLicenses = await ActivatedLicense.find({ userID });
    res.json(activatedLicenses);
  } catch (error) {
    console.error('Error getting activated licenses:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// POST route to add a new activated license for a user
router.post('/create', async (req, res) => {
  try {

    // Assuming activationDate should be set automatically to the current date
    const activationDate = new Date();

    // Creating a new ActivatedLicense instance
    const newActivatedLicense = new ActivatedLicense({
      userID: req.body.userID ,
      userName: req.body.userName,
      productName: req.body.productName,
      key: req.body.key,
      activationDate: activationDate,
    });

    // Saving the new activated license
    const savedActivatedLicense = await newActivatedLicense.save();

    res.json(savedActivatedLicense);
  } catch (error) {
    console.error('Error adding activated license:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
