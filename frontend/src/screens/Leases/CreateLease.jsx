import React, { useState } from "react";
import { Form, Button, Row, Col, InputGroup,Card } from "react-bootstrap";

const NewLeaseForm = () => {
  const [formData, setFormData] = useState({
    property: "",
    rent: "",
    deposit: "",
    tenant: "",
    tenantId: "",
    startDate: "",
    endDate: "",
    bills: {
      gas: "",
      electricity: "",
      internet: "",
      tax: ""
    },
    leaseDocuments: null,
    tenancyTerm: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (name in formData.bills) {
      setFormData({
        ...formData,
        bills: { ...formData.bills, [name]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, leaseDocuments: e.target.files });
  };

  return (
    <div className="container mt-4">
      <h3>New Lease</h3>
      <Card className="p-4 shadow-lg">
      <Form>
        <Row className="mb-3">
          <Col md={8}>
            <h5>Create Lease</h5>
            <p className="text-muted">Complete all the required details</p>

            <Form.Label>Select Property</Form.Label>
                <Form.Select
                  name="property"
                  value={formData.property}
                  onChange={handleChange}
                  required
            
                >
                  <option value="">Select Property</option>
                  <option value="test">Property Test Here </option>
               
                </Form.Select>

            <Row className="mt-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Rent</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>Birr</InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="rent"
                      value={formData.rent}
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Deposit Paid</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>Birr</InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="deposit"
                      value={formData.deposit}
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Select Tenant</Form.Label>
                  <Form.Select name="tenant"   required onChange={handleChange}>
                    <option value="">Select Tenant</option>
                    <option value="Tenant 1">Tenant 1</option>
                    <option value="Tenant 2">Tenant 2</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Tenant ID</Form.Label>
                  <Form.Control
                    type="text"
                    name="tenantId"
                    value={formData.tenantId}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Lease Start Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Lease End Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <h5>Bills</h5>
            <p className="text-muted">Include/Exclude bills when generating invoice</p>
            {Object.keys(formData.bills).map((bill) => (
                <Form.Group key={bill} className="mb-3">
                    <Form.Check
                    type="checkbox"
                    label={bill.charAt(0).toUpperCase() + bill.slice(1)}
                    name={bill}
                    checked={formData.bills[bill] !== ""}
                    onChange={(e) => handleChange(e)}
                    className="mb-2" // Adds margin between checkbox and input
                    required
                    />
                    <Form.Control
                    type="text"
                    name={bill}
                    placeholder="Amount"
                    value={formData.bills[bill]}
                    onChange={handleChange}
                    required
                    />
                </Form.Group>
                ))}
          </Col>
        </Row>
        <Form.Group className="mt-3">
          <Form.Label>Upload Lease Documents</Form.Label>
          <Form.Control type="file" multiple required onChange={handleFileChange} />
        </Form.Group>

        
        <Form.Group className="mt-3" controlId="tenancyTerm">
              <Form.Label>Tenancy Term</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Pay every month on date 5"
                required
                name="tenancyTerm"
                value={formData.tenancyTerm}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a description.
              </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" className="mt-3" type="submit">Finalize Lease</Button>
      </Form>

      </Card>
    </div>
  );
};

export default NewLeaseForm;
