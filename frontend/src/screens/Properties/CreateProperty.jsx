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
    propertyNotes: "",
    propertyAge: "",
    rooms: "",
    bedrooms: "",
    bathrooms: "",
    features: [],
    images: null,
  });


  const featuresList = [
    "Air Conditioner",
    "Car Parking",
    "Laundry room",
    "Heating",
    "Balcony",
    "Gym",
    "Internet",
    "Garden",
    "Alarm",
    "Swimming Pool",
    "Pets Allow",
  ];

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleChange3 = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        features: checked
          ? [...prev.features, value]
          : prev.features.filter((feature) => feature !== value),
      }));
    } else if (type === "file") {
      setFormData({ ...formData, images: e.target.files });
    } else {
      setFormData({ ...formData, [name]: value });
    }
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
            <Container className="mt-5">
            
              <h5 className="mb-4">Search location</h5>
      
              <Form.Group className="mb-4" controlId="searchLocation">
                <Form.Control
                 type="text" 
                 placeholder="Type to search for location" 
                 required
                 name="searchLocation"
                 value={formData.searchLocation}
                onChange={handleChange}
                 />
              </Form.Group>

              <h5 className="mb-3">Address</h5>

              {/* Longitude and Latitude */}
              <Form.Group className="mb-3" controlId="longitude">
                <Row>
                  <Col>
                    <Form.Control 
                    type="text" 
                    placeholder="Longitude" 
                    required
                    name="longitude"
                    value={formData.longitude}
                    onChange={handleChange}
                    />
                  </Col>
                  <Col>
                    <Form.Control 
                    type="text" 
                    placeholder="Latitude" 
                    required
                    name="latitude"
                    value={formData.latitude}
                    onChange={handleChange}
                    />
                  </Col>
                </Row>
              </Form.Group>

              {/* City, State, and Post Code */}
              <Form.Group className="mb-4" controlId="city">
                <Row>
                  <Col>
                    <Form.Control 
                    type="text" 
                    placeholder="City" 
                    required
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    />
                  </Col>
                  <Col>
                    <Form.Control 
                    type="text" 
                    placeholder="State"
                    required
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                     />
                  </Col>
                  <Col>
                    <Form.Control 
                    type="text" 
                    placeholder="Post Code" 
                    required
                    name="postCode"
                    value={formData.postCode}
                    onChange={handleChange}
                    />
                  </Col>
                </Row>
              </Form.Group>

    </Container>

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
            <h5>Features & Amenities</h5>
            <Container className="mt-4">
     
      <Form>
        {/* Property Notes */}
        <Form.Group controlId="propertyNotes" className="mb-3">
          <Form.Label>Property Notes:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="propertyNotes"
            value={formData.propertyNotes}
            onChange={handleChange3}
          />
        </Form.Group>

        {/* Dropdowns */}
        <Row className="mb-3">
          <Form.Group as={Col} controlId="propertyAge">
            <Form.Label>Property Age (optional)</Form.Label>
            <Form.Select
              name="propertyAge"
              value={formData.propertyAge}
              onChange={handleChange3}
            >
              <option>Select one</option>
              <option value="0-5 years">0-5 years</option>
              <option value="6-10 years">6-10 years</option>
              <option value="10+ years">10+ years</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="rooms">
            <Form.Label>Rooms (optional)</Form.Label>
            <Form.Select
              name="rooms"
              value={formData.rooms}
              onChange={handleChange3}
            >
              <option>Select one</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3+">3+</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="bedrooms">
            <Form.Label>Bedrooms (optional)</Form.Label>
            <Form.Select
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleChange3}
            >
              <option>Select one</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3+">3+</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="bathrooms">
            <Form.Label>Bathrooms (optional)</Form.Label>
            <Form.Select
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleChange3}
            >
              <option>Select one</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3+">3+</option>
            </Form.Select>
          </Form.Group>
        </Row>

        {/* Features Checkboxes */}
        <Form.Group className="mb-3">
          <Form.Label>Features:</Form.Label>
          <Row>
            {featuresList.map((feature, idx) => (
              <Col xs={6} md={4} key={idx}>
                <Form.Check
                  type="checkbox"
                  label={feature}
                  value={feature}
                  onChange={handleChange3}
                />
              </Col>
            ))}
          </Row>
        </Form.Group>

        {/* File Upload */}
        <Form.Group controlId="images" className="mb-3">
          <Form.Label>Property Images</Form.Label>
          <p className="text-muted">
            <small>
              <ul>
                <li>Max file size allowed is 5MB</li>
                <li>Upload only images of type jpg, gif, or png</li>
              </ul>
            </small>
          </p>
          <Form.Control
            type="file"
            name="images"
            multiple
            onChange={handleChange3}
          />
        </Form.Group>

        
      </Form>
    </Container>

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
