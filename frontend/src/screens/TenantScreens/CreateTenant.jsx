import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { FaBriefcase } from "react-icons/fa";
import axios from "axios";
import { toast } from 'react-toastify';

const TenantRegistrationForm = () => {
   const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    identityNo: "",
    identificationDocument: null,
    address: "",
    occupationStatus: "",
    occupationPlace: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });
  
    try {
      setLoading(true);
      const response = await axios.post("/api/tenants/register",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      toast.success('Tenant registered successfully!');
      console.log(response.data);
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        identityNo: "",
        identificationDocument: null,
        address: "",
        occupationStatus: "",
        occupationPlace: "",
        emergencyContactName: "",
        emergencyContactPhone: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        "Error registering tenant: " +
        (error.response?.data?.error || "Something went wrong")
      );
    }finally {
      setLoading(false);
    }
  };
  

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col lg={15}>
          <Card className="p-4 shadow-lg">
            <Card.Body>
              <h2 className="text-center mb-4">Register New Tenant</h2>
              <p className="text-center text-muted mb-4">
                Tenant Registration Form
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

                <div
                    className="d-flex align-items-center bg-light p-2 mb-3 mt-4 mb-4"
                    style={{ width: "100%", borderRadius: "5px" }}
                >
                    <FaBriefcase className="me-2" />
                    <h5 className="m-0">Place of Work</h5>
                </div>
               
                {/* Occupation Status and Place */}
                <Row className="mt-3">
                  <Col md={6}>
                  <Form.Group className="mb-3" controlId="occupationStatus">
                    <Form.Label>Occupation Status</Form.Label>
                    <Form.Select
                        name="occupationStatus"
                        value={formData.occupationStatus}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>
                        Select your occupation status
                        </option>
                        <option value="Employee">Employee</option>
                        <option value="Employer">Employer</option>
                        <option value="Self Employed">Self Employed</option>
                        <option value="Other">Other</option>
                    </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="occupationPlace">
                      <Form.Label>Occupation Place</Form.Label>
                      <Form.Control
                        type="text"
                        name="occupationPlace"
                        value={formData.occupationPlace}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <div
                    className="d-flex align-items-center bg-light p-2 mb-3 mt-4 mb-4"
                    style={{ width: "100%", borderRadius: "5px" }}
                >
                    <FaBriefcase className="me-2" />
                    <h5 className="m-0">InCase of Emergency</h5>
                </div>

                 {/* Emergency Contact */}
                 <Row className="mt-3">
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="emergencyContactName">
                      <Form.Label>Emergency Contact Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="emergencyContactName"
                        value={formData.emergencyContactName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="emergencyContactPhone">
                      <Form.Label>Emergency Contact Phone</Form.Label>
                      <Form.Control
                        type="text"
                        name="emergencyContactPhone"
                        value={formData.emergencyContactPhone}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                {/* Submit Button */}
                <div className="text-center mt-4">
                  <Button variant="primary" type="submit" className="w-50" disabled={loading}>
                    Register Tenant
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

export default TenantRegistrationForm;
