import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
const LandLordRegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    identityNo: "",
    identificationDocument: null,
    address: "",
    bankAccountNo: "",
    bankAssociated: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col lg={15}>
          <Card className="p-4 shadow-lg">
            <Card.Body>
              <h2 className="text-center mb-4">Register New LandLord</h2>
              <p className="text-center text-muted mb-4">
                LandLord Registration Form
              </p>
              <Form onSubmit={handleSubmit}>
                {/* Full Name and Email */}
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="fullName">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                {/* Phone Number and Identity No */}
                <Row className="mt-3">
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="phoneNumber">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group  controlId="identityNo">
                      <Form.Label>Identity No / Passport</Form.Label>
                      <Form.Control
                        type="text"
                        name="identityNo"
                        value={formData.identityNo}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                

               

                {/* Identification Document and Address */}
                <Row className="mt-3">
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="identificationDocument">
                      <Form.Label>Identification Document</Form.Label>
                      <Form.Control
                        type="file"
                        name="identificationDocument"
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="address">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

               
                {/* Bank Associated */}
                <Row className="mt-3">
                <Col md={6}>
                    <Form.Group className="mb-3" controlId="bankAssociated">
                      <Form.Label>Bank Associated</Form.Label>
                      <Form.Control
                        type="text"
                        name="bankAssociated"
                        value={formData.bankAssociated}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="bankAccountNo">
                      <Form.Label>Bank Account No</Form.Label>
                      <Form.Control
                        type="text"
                        name="bankAccountNo"
                        value={formData.bankAccountNo}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

               

                {/* Submit Button */}
                <div className="text-center mt-4">
                  <Button variant="primary" type="submit" className="w-50">
                    Register LandLord
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LandLordRegistrationForm;
