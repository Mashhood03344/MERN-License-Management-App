// /client/src/components//userActivatedLicenseList.js for users
import React, { useState, useEffect } from 'react';
import { Button, Modal, Table, Form, Container } from 'react-bootstrap';
import axios from 'axios';

function ActivatedLicenseList() {
  const [activatedLicenses, setActivatedLicenses] = useState([]);
  
  const [userId, setUserId] = useState('');

  useEffect(() => {
    // Fetch activated licenses for the authenticated user when the component mounts
    fetchActivatedLicenses();
  }, []);

  const fetchActivatedLicenses = () => {
    // Assuming you have user information available (e.g., from authentication context)
    axios.get(`http://localhost:5000/api/activatedLicenses/${userId}`)
      .then(response => {
        setActivatedLicenses(response.data);
      })
      .catch(error => {
        console.error('Error fetching activated licenses:', error);
      });
  };

  const handleSearch = () => {
    fetchActivatedLicenses();
  };

  return (
    <div>
      <h2>Activated Licenses</h2>

      <Form>
        <Form.Group controlId="userId">
          <Form.Label>User ID</Form.Label>
          <Form.Control
              type="text"
              placeholder="Enter User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
        </Form.Group>

        <Button variant="primary" onClick={handleSearch}>
          Search
        </Button>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User ID</th>
            <th>User Name</th>
            <th>Product Name</th>
            <th>Key</th>
            <th>Activation Date</th>
          </tr>
        </thead>
        <tbody>
          {activatedLicenses.map((license, index) => (
            <tr key={index}>
              <td>{license.userID}</td>
              <td>{license.userName}</td>
              <td>{license.productName}</td>
              <td>{license.key}</td>
              <td>{new Date(license.activationDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ActivatedLicenseList;
