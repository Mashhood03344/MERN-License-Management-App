//client/src/components/user/LicenseActivation.js
import React, { useState } from 'react';
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const LicenseActivation = () => {
  const [licenseKey, setLicenseKey] = useState('');
  const [activationMessage, setActivationMessage] = useState('');
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setLicenseKey(e.target.value);
  };

  // const handleActivateLicense = () => {
  //   // Send a POST request to the server to validate and activate the license
  //   axios.post('http://localhost:5000/api/validation/validate', { key: licenseKey })
  //     .then(response => {
  //       setActivationMessage(response.data.message);
  //       setError(null);
  //     })
  //     .catch(error => {
  //       setActivationMessage('');
  //       setError(error.response.data.error);
  //     });
  // };

  const handleActivateLicense = () => {
    // Send a POST request to the server to validate and activate the license
    axios.post('http://localhost:5000/api/validation/validate', { key: licenseKey })
      .then(response => {
        setActivationMessage(response.data.message);
        setError(null);
  
        // If activation is successful, add a document to the activatedLicenses collection
        console.log(response.data.license);
        if (response.data.license && response.data.license.activated) {
          const activatedLicenseData = {
            userID: response.data.license.UserID,
            userName: response.data.license.UserName,
            key: response.data.license.key,
            productName: response.data.license.ProductName,
            activationDate: new Date(),
          };
  
          // Send a POST request to add a document to the activatedLicenses collection
          axios.post('http://localhost:5000/api/activatedLicenses/create', activatedLicenseData)
            .then(() => {
              console.log('Activated license added to activatedLicenses collection.');
            })
            .catch(error => {
              console.error('Error adding activated license to activatedLicenses collection:', error);
            });
        }
      })
      .catch(error => {
        setActivationMessage('');
        setError(error.response.data.error);
      });
  };
  

  return (
    <Container className="mt-3">
      <Row>
        <Col md={{ span: 8, offset: 0.25 }}>
          <br />
          <h2 className="text-left">License Activation</h2>
          <br />
          <Form>
            <Form.Group controlId="formLicenseKey">
              <Form.Label>License Key</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your license key"
                value={licenseKey}
                onChange={handleInputChange}
              />
            </Form.Group>

            <br />

            <Button variant="primary" onClick={handleActivateLicense} block>
              Activate License
            </Button>
          </Form>

          <br />

          {/* Display activation message or error */}
          {activationMessage && <Alert variant="success">{activationMessage}</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}
        </Col>
      </Row>
    </Container>
  );
};

export default LicenseActivation;
