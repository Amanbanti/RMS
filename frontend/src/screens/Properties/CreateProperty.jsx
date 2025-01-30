import React, { useState } from "react";
import { Form, Button, Col, Row, InputGroup,Container } from "react-bootstrap";

const CreatePropertyForm = () => {
  const [validated, setValidated] = useState(false);
  const [step, setStep] = useState(1);

  // Store form data in state
  const [formData, setFormData] = useState({
    propertyName: "",
    rent: "",
    landlord: "",
    type: "",
    deposit: "",
    area: "",
    agencyCommission: "",
    description: "",
    searchLocation:"",
    longitude:"",
    latitude:"",
    city:"",
    state:"",
    postCode:"",
  });

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Check if the form is valid
  const isFormValid = () => {
    if (step === 1) {
      return (
        formData.propertyName &&
        formData.rent &&
        formData.landlord &&
        formData.type &&
        formData.description &&
        formData.deposit &&
        formData.area &&
        formData.agencyCommission

      );
    }
  else if (step === 2)
    return (
      formData.searchLocation &&
      formData.longitude &&
      formData.latitude &&
      formData.city &&
      formData.state &&
      formData.postCode

    );
  return true
  };

  // Handle next step
  const handleNext = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false || !isFormValid()) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      setStep(step + 1);
    }
  };

  // Handle previous step
  const handlePrevious = () => {
    setStep(step - 1);
  };

  // Handle final submission
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      alert("Form submitted successfully!");
    }
    setValidated(true);
  };

  return (
    <div className="container mt-4">
      <h2>Create New Property</h2>
      <p>Fill all required details in all sections before submitting the data.</p>
      <Form noValidate validated={validated} onSubmit={step === 3 ? handleSubmit : handleNext}>
        {step === 1 && (
          <>
            <h5>Basic Details</h5>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="propertyName">
                <Form.Label>Property Name *</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter property name"
                  name="propertyName"
                  value={formData.propertyName}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a property name.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="rent">
                <Form.Label>Rent *</Form.Label>
                <InputGroup>
                  <InputGroup.Text>Birr</InputGroup.Text>
                  <Form.Control
                    required
                    type="number"
                    placeholder="Enter rent amount"
                    name="rent"
                    value={formData.rent}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide the rent amount.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="selectLandlord">
                <Form.Label>Select Landlord *</Form.Label>
                <Form.Select
                  required
                  name="landlord"
                  value={formData.landlord}
                  onChange={handleChange}
                >
                  <option value="">Select landlord</option>
                  <option value="landlord1">Landlord 1</option>
                  <option value="landlord2">Landlord 2</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please select a landlord.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="type">
                <Form.Label>Type *</Form.Label>
                <Form.Select
                  required
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                >
                  <option value="">Select type</option>
                  <option value="mansion">Mansion</option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please select a property type.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="deposit">
                <Form.Label>Deposit</Form.Label>
                <InputGroup>
                  <InputGroup.Text>Birr</InputGroup.Text>
                  <Form.Control
                    type="number"
                    placeholder="Enter deposit amount"
                    name="deposit"
                    value={formData.deposit}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide the deposit amount.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="area">
                <Form.Label>Area</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="number"
                    placeholder="Enter area size"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                  />
                  <InputGroup.Text>Sqmt</InputGroup.Text>
                  <Form.Control.Feedback type="invalid">
                    Please provide the area.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="agencyCommission">
                <Form.Label>Agency Commission</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="number"
                    placeholder="Enter commission"
                    name="agencyCommission"
                    value={formData.agencyCommission}
                    onChange={handleChange}
                  />
                  <InputGroup.Text>%</InputGroup.Text>
                  <Form.Control.Feedback type="invalid">
                    Please provide the Agency Commission.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description *</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Property Description"
                required
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a description.
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="button" onClick={handleNext} disabled={!isFormValid()}>
              Next
            </Button>
          </>
        )}

        {step === 2 && (
          <>
            <h4 className="mb-4">Location</h4>
           

            <Button variant="secondary" type="button" onClick={handlePrevious}>
              Previous
            </Button>{" "}
            <Button variant="primary" type="button" onClick={handleNext} disabled={!isFormValid()}>
              Next
            </Button>
          </>
        )}

        {step === 3 && (
          <>
            <h5>Property Images</h5>

            <Button variant="secondary" type="button" onClick={handlePrevious}>
              Previous
            </Button>{" "}
            <Button variant="success" type="submit">
              Submit
            </Button>
          </>
        )}
      </Form>
    </div>
  );
};

export default CreatePropertyForm;
