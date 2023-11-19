//server/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('./routes/products');
const licenseRoutes = require('./routes/licenses');
const userRoutes = require('./routes/users');
const validationRoutes = require('./routes/validation');
const generationRoutes = require('./routes/generation'); // Include the new route
const activatedLicenseRoutes = require('./routes/activatedLicenses'); // Include the new route


// Connecting mongoDB Database
mongoose
  .connect("mongodb://127.0.0.1:27017/license-manager")
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`,
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err.reason);
  });
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(cors());

// Define routes
app.use('/api/products', productRoutes);
app.use('/api/licenses', licenseRoutes);
app.use('/api/users', userRoutes);
app.use('/api/validation', validationRoutes);
app.use('/api/generation', generationRoutes); // Use the new route
app.use('/api/activatedLicenses', activatedLicenseRoutes); // Use the new route

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});
// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});