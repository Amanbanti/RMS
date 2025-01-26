import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaHome, FaUsers, FaBuilding, FaWarehouse } from 'react-icons/fa';

const Dashboard = () => {
  // Example data (all initialized to zero)
  const data = {
    totalLandlords: 0,
    totalTenants: 0,
    totalProperties: 0,
    totalUnits: 0,
  };

  return (
    <Container fluid className="my-4">
        <h1>Good Morning Administrator!</h1>
      <Row className="d-flex justify-content-center align-items-center mb-4 g-4">
        {/* First Row - Two Cards */}
        <Col  xs={12} sm={8} lg={6} className="d-flex justify-content-center">
          <Card  className="shadow-sm border-light w-100">
            <Card.Body className="d-flex align-items-center">
              <FaUsers size={40} className="text-primary me-3" />
              <div>
                <Card.Title className="fs-4">Total Registered Landlords</Card.Title>
                <Card.Text className="display-6 text-primary">
                  {data.totalLandlords}
                </Card.Text>
                <Button variant="primary" className="mt-2">View Details</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={8} lg={6} className="d-flex justify-content-center">
          <Card className="shadow-sm border-light w-100">
            <Card.Body className="d-flex align-items-center">
              <FaUsers size={40} className="text-success me-3" />
              <div>
                <Card.Title className="fs-4">Total Registered Tenants</Card.Title>
                <Card.Text className="display-6 text-success">
                  {data.totalTenants}
                </Card.Text>
                <Button variant="success" className="mt-2">View Details</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center align-items-center mb-4 g-4">
        {/* Second Row - Two Cards */}
        <Col xs={12} sm={8} lg={6} className="d-flex justify-content-center">
          <Card className="shadow-sm border-light w-100">
            <Card.Body className="d-flex align-items-center">
              <FaBuilding size={40} className="text-warning me-3" />
              <div>
                <Card.Title className="fs-4">Total Properties</Card.Title>
                <Card.Text className="display-6 text-warning">
                  {data.totalProperties}
                </Card.Text>
                <Button variant="warning" className="mt-2">View Details</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={8} lg={6} className="d-flex justify-content-center">
          <Card className="shadow-sm border-light w-100">
            <Card.Body className="d-flex align-items-center">
              <FaWarehouse size={40} className="text-info me-3" />
              <div>
                <Card.Title className="fs-4">Total Property Units</Card.Title>
                <Card.Text className="display-6 text-info">
                  {data.totalUnits}
                </Card.Text>
                <Button variant="info" className="mt-2">View Details</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
