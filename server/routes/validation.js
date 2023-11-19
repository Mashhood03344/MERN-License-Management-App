// // /server/routes/validation.js
// const express = require('express');
// const router = express.Router();
// const { v4: uuidv4 } = require('uuid'); // Import uuidv4 function from uuid package
// const License = require('../models/licenseModel');

// // Validate a license by key
// // /server/routes/validation.js
// router.post('/validate', async (req, res) => {
//   try {
//     const licenseKey = req.body.key;

//     // Check if the license with the generated key exists
//     const license = await License.findOne({ key: licenseKey })

//     console.log('req.body: ', req.body);
//     console.log('License Key:', licenseKey);
//     console.log('Found License:', license);

//     if (!license) {
//       return res.status(404).json({ error: 'License not found' });
//     }

//     // Check if the license is already activated
//     if (license.activated) {
//       return res.json({ message: 'License is already activated' });
//     }

//     // If all checks pass, mark the license as activated
//     license.activated = true;
//     await license.save();

//     res.json({ message: 'License validated and activated successfully', license });
//   } catch (error) {
//     console.error('Error validating license:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// module.exports = router;

// /server/routes/validation.js
const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid'); // Import uuidv4 function from uuid package
const License = require('../models/licenseModel');

// Validate a license by key
router.post('/validate', async (req, res) => {
  try {
    const licenseKey = req.body.key;

    // Check if the license with the generated key exists
    const license = await License.findOne({ key: licenseKey });

    console.log('req.body: ', req.body);
    console.log('License Key:', licenseKey);
    console.log('Found License:', license);

    if (!license) {
      return res.status(404).json({ error: 'License not found' });
    }

    // Check if the license is already activated
    if (license.activated) {
      return res.json({ message: 'License is already activated', license });
    }

    // If all checks pass, mark the license as activated
    license.activated = true;
    await license.save();

    res.json({ message: 'License validated and activated successfully', license });
  } catch (error) {
    console.error('Error validating license:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
