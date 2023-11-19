// /client/src/components/LicenseGeneration.js
import React, { useState } from 'react';
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const LicenseGeneration = () => {
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState(1); // Default quantity is 1
  const [generationMessage, setGenerationMessage] = useState('');
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setProductId(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleGenerateLicense = () => {
    // Send a POST request to the server to generate license keys
    axios.post('http://localhost:5000/api/generation/generate', { productId, quantity })
      .then(response => {
        setGenerationMessage(response.data.message);
        setError(null);
      })
      .catch(error => {
        setGenerationMessage('');
        setError(error.response.data.error);
      });
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2 className="text-left">License Generation</h2>
          <br />
          <Form>
            <Form.Group controlId="formProductId">
              <Form.Label>Product ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product ID"
                value={productId}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter quantity"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </Form.Group>

            <br />

            <Button variant="primary" onClick={handleGenerateLicense} block>
              Generate Licenses
            </Button>
          </Form>

          <br />

          {/* Display generation message or error */}
          {generationMessage && <Alert variant="success">{generationMessage}</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}
        </Col>
      </Row>
    </Container>
  );
};

export default LicenseGeneration;
