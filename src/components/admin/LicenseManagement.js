//client/src/compnents/admin/LicenseManagement.js

import React, { useState, useEffect } from 'react';
import { Button, Modal, Table, Form, Container } from 'react-bootstrap';
import axios from 'axios';
import emailjs from 'emailjs-com';


function LicenseManagement() {
  const [licenses, setLicenses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    id: '', // Allow user to enter the ID
    licenseKey: '', // No need to generate automatically
    productId: '',
    productName: '',
    userId: '',
    userName: '',
    activated: false,
  });

  useEffect(() => {
    // Fetch licenses from the backend when the component mounts
    fetchLicenses();
  }, []);

  const fetchLicenses = () => {
    axios.get('http://localhost:5000/api/licenses/show')
      .then(response => {
        setLicenses(response.data);
      })
      .catch(error => {
        console.error('Error fetching licenses:', error);
      });
  };

  const handleModalShow = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setFormData({
      id: '',
      licenseKey: '',
      productId: '',
      productName: '',
      userId: '',
      userName: '',
      activated: false,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleAddLicense = () => {
  //   // Add new license
  //   axios.post('http://localhost:5000/api/licenses/generate', formData)
  //     .then(() => {
  //       // Create a new activated license if 'activated' is true
  //       if (formData.activated) {
  //         const newActivatedLicense = {
  //           userID: formData.userId,
  //           userName: formData.userName,
  //           key: formData.licenseKey,
  //           productName: formData.productName,
  //           activationDate: new Date(),
  //         };
  
  //         // Add the new activated license
  //         axios.post('http://localhost:5000/api/activatedLicenses/create', newActivatedLicense)
  //           .then(() => {
  //             // Fetch licenses again to update the UI
  //             fetchLicenses();
  //             handleModalClose();
  //           })
  //           .catch(error => {
  //             console.error('Error adding activated license:', error);
  //           });
  //       } else {
  //         console.log('License not activated. No document added to activatedlicenses.');
  //         // Fetch licenses again to update the UI
  //         fetchLicenses();
  //         handleModalClose();
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Error adding license:', error);
  //     });
  // };


  const handleAddLicense = () => {
    axios.post('http://localhost:5000/api/licenses/generate', formData)
      .then(async () => {
        if (formData.activated) {
          const newActivatedLicense = {
            userID: formData.userId,
            userName: formData.userName,
            key: formData.licenseKey,
            productName: formData.productName,
            activationDate: new Date(),
          };

          await axios.post('http://localhost:5000/api/activatedLicenses/create', newActivatedLicense);
          fetchLicenses();
          handleModalClose();

          // Send an email to the user with the license details using emailjs
          const userEmailResponse = await axios.get(`http://localhost:5000/api/users/${formData.userId}`);
          const userEmail = userEmailResponse.data.email;

          console.log("userID: ",formData.userId);
          console.log("email: ",userEmail);

          // Use your emailjs template id and user id
          const templateParams = {
            to_email: userEmail,
            subject: 'New License Information',
            license_key: formData.licenseKey,
            product_name: formData.productName,
            activation_date: new Date().toString(),
          };
          
          console.log('templateParams:', templateParams);
          
          emailjs
          .send('service_qsf8uhu', 'template_uv288ec', templateParams, 'WDhKRFz_0me0Jx22J')
          .then((response) => {
            console.log('Email sent successfully:', response);
          })
          .catch((error) => {
            console.error('Error sending email:', error);
          });
        
        } else {
          console.log('License not activated. No document added to activatedlicenses.');
          fetchLicenses();
          handleModalClose();

          // Send an email to the user with the license details using emailjs
          const userEmailResponse = await axios.get(`http://localhost:5000/api/users/${formData.userId}`);
          const userEmail = userEmailResponse.data.email;

          console.log("userID: ",formData.userId);
          console.log("email: ",userEmail);

          // Use your emailjs template id and user id
          const templateParams = {
            to_email: userEmail,
            subject: 'New License Information',
            license_key: formData.licenseKey,
            product_name: formData.productName,
            activation_date: new Date().toString(),
          };
          
          console.log('templateParams:', templateParams);
          
          emailjs
          .send('service_qsf8uhu', 'template_uv288ec', templateParams, 'WDhKRFz_0me0Jx22J')
          .then((response) => {
            console.log('Email sent successfully:', response);
          })
          .catch((error) => {
            console.error('Error sending email:', error);
          });
        }
      })
      .catch(error => {
        console.error('Error adding license:', error);
      });
  };

  return (
    <Container className="mt-3">
      <h1>License Management</h1>
      <br></br>
      <Button variant="primary" onClick={handleModalShow}>
        Add License
      </Button>

      <br></br>
      <br></br>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>License Key</th>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>User ID</th>
            <th>User Name</th>
            <th>Activation Status</th>
          </tr>
        </thead>
        <tbody>
          {licenses.map((license, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{license.key}</td>
              <td>{license.ProductID}</td>
              <td>{license.ProductName}</td>
              <td>{license.UserID}</td>
              <td>{license.UserName}</td>
              <td>{license.activated ? 'Activated' : 'Not Activated'}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Add License Modal */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add License</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* ID field */}
            <Form.Group controlId="formLicenseID">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter license ID"
                name="id"
                value={formData.id}
                onChange={handleChange}
              />
            </Form.Group>
            {/* License Key field */}
            <Form.Group controlId="formLicenseKey">
              <Form.Label>License Key</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter License Key"
                name="licenseKey"
                value={formData.licenseKey}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Other fields */}
            <Form.Group controlId="formProductID">
              <Form.Label>Product ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product ID"
                name="productId"
                value={formData.productId}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formProductName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formUserID">
              <Form.Label>User ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter user ID"
                name="userId"
                value={formData.userId}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formUserName">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter user name"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formActivationStatus">
              <Form.Check
                type="checkbox"
                label="Activated"
                name="activated"
                checked={formData.activated}
                onChange={(e) => setFormData(prevData => ({ ...prevData, activated: e.target.checked }))}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddLicense}>
            Add License
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default LicenseManagement;
