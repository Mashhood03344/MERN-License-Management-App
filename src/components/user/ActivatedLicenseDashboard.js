// /client/src/components/user/ActivatedLicenseDashboard.js
import React, { useState, useEffect } from 'react';
import { Button, Modal, Container, Form, Table } from 'react-bootstrap';
import axios from 'axios';
import ActivatedLicenseList from '../../components/ActivatedLicenseList';



function ActivatedLicenseDashboard() {
  const [licenses, setLicenses] = useState([]);
  const [activatedLicensesModalShow, setActivatedLicensesModalShow] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [searchUserId, setSearchUserId] = useState('');

  useEffect(() => {
    // Fetch licenses from the backend when the component mounts
    fetchLicenses();
  }, []);

  const fetchLicenses = () => {
    // Fetch only the activated licenses that match the entered user ID
    axios.get(`http://localhost:5000/api/activatedLicenses/${searchUserId}`)
      .then(response => {
        setLicenses(response.data);
      })
      .catch(error => {
        console.error('Error fetching activated licenses:', error);
      });
  };

  const handleViewActivatedLicenses = (userId) => {
    setSelectedUserId(userId);
    setActivatedLicensesModalShow(true);
  };

  const handleActivatedLicensesModalClose = () => {
    setActivatedLicensesModalShow(false);
    setSelectedUserId(null);
  };

  const handleSearchActivatedLicenses = () => {
    // Fetch licenses based on the entered user ID
    fetchLicenses();
    setActivatedLicensesModalShow(true);
  };

  return (
    <Container className="mt-3">
      <h1>License Management Dashboard</h1>
      <br></br>

      {/* Table to display licenses */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User ID</th>
            <th>User Name</th>
            <th>Product Name</th>
            <th>Key</th>
            <th>Activation Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {licenses.map((license, index) => (
            <tr key={index}>
              <td>{license.userID}</td>
              <td>{license.userName}</td>
              <td>{license.productName}</td>
              <td>{license.key}</td>
              <td>{new Date(license.activationDate).toLocaleDateString()}</td>
              <td>
                <Button variant="primary" onClick={() => handleViewActivatedLicenses(license.userID)}>
                  View Activated Licenses
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
            <br></br>
      {/* Search Form */}
      <Form>
        <Form.Group controlId="searchUserId">
          <Form.Label>Search Activated Licenses by User ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter User ID"
            value={searchUserId}
            onChange={(e) => setSearchUserId(e.target.value)}
          />
        </Form.Group>
        <br></br>
        <Button variant="primary" onClick={handleSearchActivatedLicenses}>
          Search
        </Button>
      </Form>

      {/* Modal for Activated Licenses */}
      <Modal show={activatedLicensesModalShow} onHide={handleActivatedLicensesModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Activated Licenses</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedUserId ? <ActivatedLicenseList userId={selectedUserId} /> : null}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleActivatedLicensesModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ActivatedLicenseDashboard;
