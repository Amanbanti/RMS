import React, { useState } from 'react';
import { Container, Row, Col, Nav, Button, Offcanvas } from 'react-bootstrap';
import {
  FaBars,
  FaUser,
  FaChartBar,
  FaChevronRight,
  FaChevronDown,
  FaTh, // Dashboard
  FaUsers, // Team
  FaUserFriends, // Leads
  FaHome, // Projects
  FaFileAlt, // Logs
  FaUserTie, // Individual
  FaShareAlt, // Integration
  FaChartPie, // Reports
} from 'react-icons/fa';

import { Link } from 'react-router-dom';


const HomeScreen = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [openMenu, setOpenMenu] = useState({});

  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const toggleDropdown = (menu) =>
    setOpenMenu((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));

  return (
    <>
    <Container fluid className="p-0" style={{ background: '#EFEFEF' }}>
      <Row className="gx-0">
        {/* Sidebar */}
        <Col
          xs={12}
          md={3}
          lg={2}
          className="custom-scrollbar bg-white d-none d-md-block vh-100 p-3"
          style={{
            boxShadow: '4px 0 8px rgba(0, 0, 0, 0.2)',
            position: 'fixed', // Keeps the sidebar fixed
            top: 67,
            left:0,
            height: '100vh', // Full height
          }}
        >
          <h6 className="text-center">NAVIGATION</h6>

          <Nav className="flex-column">



            {/* Dashboard Section */}
                <Nav.Link
                  as={Link}
                  to="#"
                  className="d-flex justify-content-between align-items-center text-secondary mb-2"
                  onClick={() => toggleDropdown('dashboard')}
                >
                  <div className="d-flex align-items-center fs-6">
                    <FaTh className="me-2" />
                    Dashboard
                  </div>
                  {openMenu.dashboard ? <FaChevronDown /> : <FaChevronRight />}
                </Nav.Link>
                {openMenu.dashboard && (
                  <div className="ms-4">
                    <Nav.Link as={Link} to="/dashboard1" className="text-secondary">
                      Dashboard 1
                    </Nav.Link>
                    <Nav.Link as={Link} to="/dashboard2" className="text-secondary">
                      Dashboard 2
                    </Nav.Link>
                  </div>
                )}




            {/*  Tenants Section */}
            <Nav.Link
              as={Link}
              to="#"
              className="d-flex justify-content-between align-items-center text-secondary mb-2"
              onClick={() => toggleDropdown('tenant')}
            >
              <div className="d-flex align-items-center fs-6">
                <FaUserFriends className="me-2" />
                Tenants
              </div>
              {openMenu.tenant ? <FaChevronDown /> : <FaChevronRight />}
            </Nav.Link>
            {openMenu.tenant && (
              <div className="ms-4">
                <Nav.Link as={Link} to="/team1" className="text-secondary">
                  Team 1
                </Nav.Link>
                <Nav.Link as={Link} to="/team2" className="text-secondary">
                  Team 2
                </Nav.Link>
              </div>
            )}




            {/* Landlords Section */}
            <Nav.Link
              as={Link}
              to="#"
              className="d-flex justify-content-between align-items-center text-secondary mb-2"
              onClick={() => toggleDropdown('landlord')}
            >
              <div className="d-flex align-items-center fs-6">
                <FaUserFriends className="me-2" />
                Landlords
              </div>
              {openMenu.landlord ? <FaChevronDown /> : <FaChevronRight />}
            </Nav.Link>
            {openMenu.landlord && (
              <div className="ms-4">
                <Nav.Link as={Link} to="/lead1" className="text-secondary">
                  Lead 1
                </Nav.Link>
                <Nav.Link as={Link} to="/lead2" className="text-secondary">
                  Lead 2
                </Nav.Link>
              </div>
            )}



            {/* Properties Section */}
            <Nav.Link
              as={Link}
              to="#"
              className="d-flex justify-content-between align-items-center text-secondary"
              onClick={() => toggleDropdown('properties')}
            >
              <div className="d-flex align-items-center fs-6">
                <FaHome className="me-2" />
                Properties
              </div>
              {openMenu.properties ? <FaChevronDown /> : <FaChevronRight />}
            </Nav.Link>
            {openMenu.properties && (
              <div className="ms-4">
                <Nav.Link as={Link} to="/project1" className="text-secondary">
                  Project 1
                </Nav.Link>
                <Nav.Link as={Link} to="/project2" className="text-secondary">
                  Project 2
                </Nav.Link>
              </div>
            )}


             {/* properties units Section */}
         <Nav.Link
              as={Link}
              to="#"
              className="d-flex justify-content-between align-items-center text-secondary mb-2"
              onClick={() => toggleDropdown('unit')}
            >
              <div className="d-flex align-items-center fs-6">
                <FaFileAlt className="me-2" />
                Property Units
              </div>
              {openMenu.unit ? <FaChevronDown /> : <FaChevronRight />}
            </Nav.Link>
            {openMenu.unit && (
              <div className="ms-4">
                <Nav.Link as={Link} to="/lead1" className="text-secondary">
                  Lead 1
                </Nav.Link>
                <Nav.Link as={Link} to="/lead2" className="text-secondary">
                  Lead 2
                </Nav.Link>
              </div>
            )}




             {/* Leases /Tenancy Section */}
         <Nav.Link
              as={Link}
              to="#"
              className="d-flex justify-content-between align-items-center text-secondary mb-2"
              onClick={() => toggleDropdown('leases')}
            >
              <div className="d-flex align-items-center fs-6">
                <FaChartBar className="me-2" />
                Leases / Tenancy               </div>
              {openMenu.leases ? <FaChevronDown /> : <FaChevronRight />}
            </Nav.Link>
            {openMenu.leases && (
              <div className="ms-4">
                <Nav.Link as={Link} to="/lead1" className="text-secondary">
                  Lead 1
                </Nav.Link>
                <Nav.Link as={Link} to="/lead2" className="text-secondary">
                  Lead 2
                </Nav.Link>
              </div>
            )}




            
             {/* Inventory */}
         <Nav.Link
              as={Link}
              to="#"
              className="d-flex justify-content-between align-items-center text-secondary mb-2"
              onClick={() => toggleDropdown('inventory')}
            >
              <div className="d-flex align-items-center fs-6">
                <FaChartBar className="me-2" />
                  Inventory               </div>
              {openMenu.inventory ? <FaChevronDown /> : <FaChevronRight />}
            </Nav.Link>
            {openMenu.inventory && (
              <div className="ms-4">
                <Nav.Link as={Link} to="/lead1" className="text-secondary">
                  Lead 1
                </Nav.Link>
                <Nav.Link as={Link} to="/lead2" className="text-secondary">
                  Lead 2
                </Nav.Link>
              </div>
            )}






            
             {/* Invoices Section */}
         <Nav.Link
              as={Link}
              to="#"
              className="d-flex justify-content-between align-items-center text-secondary mb-2"
              onClick={() => toggleDropdown('invoice')}
            >
              <div className="d-flex align-items-center fs-6">
                <FaChartBar className="me-2" />
                Invoices               
                </div>
              {openMenu.invoice ? <FaChevronDown /> : <FaChevronRight />}
            </Nav.Link>
            {openMenu.invoice && (
              <div className="ms-4">
                <Nav.Link as={Link} to="/lead1" className="text-secondary">
                  Lead 1
                </Nav.Link>
                <Nav.Link as={Link} to="/lead2" className="text-secondary">
                  Lead 2
                </Nav.Link>
              </div>
            )}





            {/* Reports Section */}
         <Nav.Link
              as={Link}
              to="#"
              className="d-flex justify-content-between align-items-center text-secondary mb-2"
              onClick={() => toggleDropdown('report')}
            >
              <div className="d-flex align-items-center fs-6">
                <FaChartBar className="me-2" />
                Reports              
                </div>
              {openMenu.report ? <FaChevronDown /> : <FaChevronRight />}
            </Nav.Link>
            {openMenu.report && (
              <div className="ms-4">
                <Nav.Link as={Link} to="/lead1" className="text-secondary">
                  Lead 1
                </Nav.Link>
                <Nav.Link as={Link} to="/lead2" className="text-secondary">
                  Lead 2
                </Nav.Link>
              </div>
            )}


          

              {/* Calendar Events Section */}
            <Nav.Link
                  as={Link}
                  to="#"
                  className="d-flex justify-content-between align-items-center text-secondary mb-2"
                  onClick={() => toggleDropdown('calander')}
                >
                  <div className="d-flex align-items-center fs-6">
                    <FaChartBar className="me-2" />
                        Calendar Events
                      </div>
                  {openMenu.calander ? <FaChevronDown /> : <FaChevronRight />}
                </Nav.Link>
                {openMenu.calander && (
                  <div className="ms-4">
                    <Nav.Link as={Link} to="/lead1" className="text-secondary">
                      Lead 1
                    </Nav.Link>
                    <Nav.Link as={Link} to="/lead2" className="text-secondary">
                      Lead 2
                    </Nav.Link>
                  </div>
                )}




          {/* Support Tickets Section */}
         <Nav.Link
              as={Link}
              to="#"
              className="d-flex justify-content-between align-items-center text-secondary mb-2"
              onClick={() => toggleDropdown('support')}
            >
              <div className="d-flex align-items-center fs-6">
                <FaChartBar className="me-2" />
                Support Tickets
                </div>
              {openMenu.support ? <FaChevronDown /> : <FaChevronRight />}
            </Nav.Link>
            {openMenu.support && (
              <div className="ms-4">
                <Nav.Link as={Link} to="/lead1" className="text-secondary">
                  Lead 1
                </Nav.Link>
                <Nav.Link as={Link} to="/lead2" className="text-secondary">
                  Lead 2
                </Nav.Link>
              </div>
            )}





          </Nav>
        </Col>




        {/* Offcanvas for Small Screens */}
        <Offcanvas
          show={showSidebar}
          onHide={toggleSidebar}
          className="bg-dark text-white"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>NAVIGATION</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/" className="text-white" onClick={toggleSidebar}>
                <FaHome className="me-2" />
                Home
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>

        {/* Toggle Button for Small Screens */}
        <Col xs={12} className="d-md-none p-2">
          <Button variant="dark" onClick={toggleSidebar}>
            <FaBars /> Menu
          </Button>
        </Col>

 

       

      </Row>
    </Container>

       {/* Main Content */}
    <Container>
        <Col
            md={{ span: 9, offset: 3 }}
            lg={{ span: 10, offset: 2 }}
            className="p-4"
            style={{ minHeight: 'calc(100vh - 50px)', backgroundColor: 'yellow' }}
          >
            <h1 className="text-center">Welcome to the Dashboard</h1>
            <p className="text-center">
              This is the main content area. Add your components or content here.
            </p>
          </Col>

    </Container>
       
  </>
  );
};

export default HomeScreen;
