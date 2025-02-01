import React, { useState } from "react";
import { Form, Button, InputGroup, Row, Col, Card } from "react-bootstrap";

const AddPropertyUnits = () => {
    const [formData, setFormData] = useState({
        mainProperty: "",
        unitTitle: "",
        rent: "",
        deposit: "",
        details: "",
        description: "",
        image: null,
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
      };

  return (
    <div className="container mt-4">
      <h4>Add Property Units</h4>
      <Row>
        <Col md={8}>
          <Card className="p-4">
            <h5>Add Property Details</h5>
            <Form>
              <Form.Group className="mb-3">
                    <Form.Label>Select Main Property *</Form.Label>
                <Form.Select name="mainProperty" value={formData.mainProperty} onChange={handleChange}>
                    <option value="">Select Main Property</option>
                    <option value="Property Test Here">Property Test Here</option>
                </Form.Select>
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Property Unit Title *</Form.Label>
                     <Form.Control type="text" name="unitTitle" value={formData.unitTitle} onChange={handleChange} required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                  <Form.Label>Rent *</Form.Label>
                        <InputGroup>
                            <Form.Control type="number" name="rent" value={formData.rent} onChange={handleChange} required />
                            <InputGroup.Text>Birr</InputGroup.Text>
                        </InputGroup>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
               <Form.Label>Deposit</Form.Label>
                <InputGroup>
                    <Form.Control type="number" name="deposit" value={formData.deposit} onChange={handleChange} />
                    <InputGroup.Text>Birr</InputGroup.Text>
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3">
                    <Form.Label>Details *</Form.Label>
                <Form.Control type="text" name="details" value={formData.details} onChange={handleChange} placeholder="e.g. two bedroom, studio, villa" required />
              </Form.Group>

              <Form.Group className="mb-3">
                        <Form.Label>Description/Features *</Form.Label>
                    <Form.Control as="textarea" name="description" value={formData.description} onChange={handleChange} placeholder="Room features and description" required />
              </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Upload Image</Form.Label>
                <Form.Control type="file" onChange={handleImageChange} />
            </Form.Group>

            <Button variant="primary" className="mt-3">Submit</Button>
            </Form>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-4">
            <h5>Added Rooms For Property :</h5>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AddPropertyUnits;