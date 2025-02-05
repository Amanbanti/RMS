import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FaClock, FaEye, FaCheck, FaChartBar } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="container my-4">
      <h2>Dashboard</h2>
      <Row className="g-4">
        {/* Pending Tickets */}
        <Col md={3}>
          <Card>
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <FaClock size={40} color="#FFB74D" />
                <div className="ms-3">
                  <h5>Pending Tickets</h5>
                  <p className="mb-0">0</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Closed Tickets */}
        <Col md={3}>
          <Card>
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <FaCheck size={40} color="#66BB6A" />
                <div className="ms-3">
                  <h5>Closed Tickets</h5>
                  <p className="mb-0">0</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Unpaid Invoices */}
        <Col md={3}>
          <Card>
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <FaChartBar size={40} color="#29B6F6" />
                <div className="ms-3">
                  <h5>Unpaid Invoices</h5>
                  <p className="mb-0">1</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Active Leases */}
        <Col md={3}>
          <Card>
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <FaEye size={40} color="#FFB74D" />
                <div className="ms-3">
                  <h5>Active Leases</h5>
                  <p className="mb-0">1</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
