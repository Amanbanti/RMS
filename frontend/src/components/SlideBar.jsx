import React, { useState } from 'react';
import { Container, Row, Col, Nav} from 'react-bootstrap';
import {
  FaChevronRight,
  FaChevronDown,
  FaTh, // Dashboard
  FaUserFriends, // Leads
  FaHome, // Projects
  FaClipboardList,
  FaCalendarAlt,
  FaFileInvoice,
  FaBuilding,
  FaHeadset,
  FaUser,
  FaCog,
  FaChartLine,
  FaComment,
  FaRegHandshake,
  FaUserTie, // Individual
  FaChartPie, // Reports
} from 'react-icons/fa';
import Offcanva from './Offcanva';
import { Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SlideBar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [openMenu, setOpenMenu] = useState({});
  
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
        className="custom-scrollbar bg-white d-none d-md-block p-3"
        style={{
          boxShadow: '4px 0 8px rgba(0, 0, 0, 0.2)',
          position: 'fixed', // Keeps the sidebar fixed
          top: 67,
          left: 0,
          height: 'calc(100vh - 67px)', // Adjust to ensure the sidebar height doesn't exceed viewport
          width: '19%',
        }}
      >

    <div style={{ overflowY: 'auto', height: '100%' }}>
          <h6 className="text-center">NAVIGATION</h6>

          <Nav className="flex-column">



           {/* Dashboard Section */}
          <Nav.Link
            as={Link}
            to="/dashboard"
            className="d-flex justify-content-between align-items-center text-secondary mb-2"
            onClick={() => toggleDropdown('dashboard')}
          >
            <div className="d-flex align-items-center fs-6">
              <FaTh className="me-2" />
              Dashboard
            </div>
          </Nav.Link>
          




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
            <Collapse in={openMenu.tenant}>
              <div className="ms-4">
                <Nav.Link as={Link} to="/tenant/create" className="text-secondary">
                  Register Tenants
                </Nav.Link>
                <Nav.Link as={Link} to="/tenant/view" className="text-secondary">
                  Veiw Tenants
                </Nav.Link>
              </div>
            </Collapse>




            {/* Landlords Section */}
            <Nav.Link
              as={Link}
              to="#"
              className="d-flex justify-content-between align-items-center text-secondary mb-2"
              onClick={() => toggleDropdown('landlord')}
            >
              <div className="d-flex align-items-center fs-6">
                <FaUserTie className="me-2" />
                Landlords
              </div>
              {openMenu.landlord ? <FaChevronDown /> : <FaChevronRight />}
            </Nav.Link>
            <Collapse in={openMenu.landlord}>
              <div className="ms-4">
                <Nav.Link as={Link} to="/landloard/create" className="text-secondary">
                Register  Landlord
                </Nav.Link>
                <Nav.Link as={Link} to="/landloard/view" className="text-secondary">
                Veiw  Landlords
                </Nav.Link>
              </div>
            </Collapse>



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
            <Collapse in={openMenu.properties}>
              <div className="ms-4">
                <Nav.Link as={Link} to="/project1" className="text-secondary">
                  Project 1
                </Nav.Link>
                <Nav.Link as={Link} to="/project2" className="text-secondary">
                  Project 2
                </Nav.Link>
              </div>
            </Collapse>


             {/* properties units Section */}
         <Nav.Link
              as={Link}
              to="#"
              className="d-flex justify-content-between align-items-center text-secondary mb-2"
              onClick={() => toggleDropdown('unit')}
            >
              <div className="d-flex align-items-center fs-6">
                <FaBuilding className="me-2" />
                Property Units
              </div>
              {openMenu.unit ? <FaChevronDown /> : <FaChevronRight />}
            </Nav.Link>
            <Collapse in={openMenu.unit}>
              <div className="ms-4">
                <Nav.Link as={Link} to="/lead1" className="text-secondary">
                  Lead 1
                </Nav.Link>
                <Nav.Link as={Link} to="/lead2" className="text-secondary">
                  Lead 2
                </Nav.Link>
              </div>
            </Collapse>




             {/* Leases /Tenancy Section */}
         <Nav.Link
              as={Link}
              to="#"
              className="d-flex justify-content-between align-items-center text-secondary mb-2"
              onClick={() => toggleDropdown('leases')}
            >
              <div className="d-flex align-items-center fs-6">
                <FaRegHandshake className="me-2" />
                Leases / Tenancy               </div>
              {openMenu.leases ? <FaChevronDown /> : <FaChevronRight />}
            </Nav.Link>
            <Collapse in={openMenu.leases}>
              <div className="ms-4">
                <Nav.Link as={Link} to="/lead1" className="text-secondary">
                  Lead 1
                </Nav.Link>
                <Nav.Link as={Link} to="/lead2" className="text-secondary">
                  Lead 2
                </Nav.Link>
              </div>
            </Collapse>




            
             {/* Inventory */}
         <Nav.Link
              as={Link}
              to="#"
              className="d-flex justify-content-between align-items-center text-secondary mb-2"
              onClick={() => toggleDropdown('inventory')}
            >
              <div className="d-flex align-items-center fs-6">
                <FaClipboardList  className="me-2" />
                  Inventory               </div>
              {openMenu.inventory ? <FaChevronDown /> : <FaChevronRight />}
            </Nav.Link>
            <Collapse in={openMenu.inventory}>
              <div className="ms-4">
                <Nav.Link as={Link} to="/lead1" className="text-secondary">
                  Lead 1
                </Nav.Link>
                <Nav.Link as={Link} to="/lead2" className="text-secondary">
                  Lead 2
                </Nav.Link>
              </div>
            </Collapse>







            
             {/* Invoices Section */}
         <Nav.Link
              as={Link}
              to="invoices"
              className="d-flex justify-content-between align-items-center text-secondary mb-2"
              onClick={() => toggleDropdown('invoice')}
            >
              <div className="d-flex align-items-center fs-6">
                <FaFileInvoice className="me-2" />
                Invoices               
                </div>
            </Nav.Link>
      






            {/* Reports Section */}
         <Nav.Link
              as={Link}
              to="#"
              className="d-flex justify-content-between align-items-center text-secondary mb-2"
              onClick={() => toggleDropdown('report')}
            >
              <div className="d-flex align-items-center fs-6">
                <FaChartPie className="me-2" />
                Reports              
                </div>
              {openMenu.report ? <FaChevronDown /> : <FaChevronRight />}
            </Nav.Link>
            <Collapse in={openMenu.report}>
              <div className="ms-4">
                <Nav.Link as={Link} to="/lead1" className="text-secondary">
                  Lead 1
                </Nav.Link>
                <Nav.Link as={Link} to="/lead2" className="text-secondary">
                  Lead 2
                </Nav.Link>
              </div>
            </Collapse>


          

              {/* Calendar Events Section */}
            <Nav.Link
                  as={Link}
                  to="calender"
                  className="d-flex justify-content-between align-items-center text-secondary mb-2"
                  onClick={() => toggleDropdown('calander')}
                >
                  <div className="d-flex align-items-center fs-6">
                    <FaCalendarAlt className="me-2" />
                        Calendar Events
                      </div>
                </Nav.Link>



          {/* Support Tickets Section */}
         <Nav.Link
              as={Link}
              to="support"
              className="d-flex justify-content-between align-items-center text-secondary mb-2"
              onClick={() => toggleDropdown('support')}
            >
              <div className="d-flex align-items-center fs-6">
                <FaHeadset className="me-2" />
                Support Tickets
                </div>
            </Nav.Link>




            {/* Chat Section */}
         <Nav.Link
              as={Link}
              to="chat"
              className="d-flex justify-content-between align-items-center text-secondary mb-2"
              onClick={() => toggleDropdown('chat')}
            >
              <div className="d-flex align-items-center fs-6">
                <FaComment className="me-2" />
                Chat
                </div>
            </Nav.Link>


          
          {/* My Profile Section */}
         <Nav.Link
              as={Link}
              to="profile"
              className="d-flex justify-content-between align-items-center text-secondary mb-2"
              onClick={() => toggleDropdown('profile')}
            >
              <div className="d-flex align-items-center fs-6">
                <FaUser className="me-2" />
                My Profile
                </div>
            </Nav.Link>



        {/* Manage Users Section */}
        <Nav.Link
              as={Link}
              to="manageusers"
              className="d-flex justify-content-between align-items-center text-secondary mb-2"
              onClick={() => toggleDropdown('manageusers')}
            >
              <div className="d-flex align-items-center fs-6">
                <FaUserFriends className="me-2" />
                Manage Users 
                </div>
            </Nav.Link>



           {/* Appilication Settings Section */}
        <Nav.Link
              as={Link}
              to="setting"
              className="d-flex justify-content-between align-items-center text-secondary mb-2"
              onClick={() => toggleDropdown('setting')}
            >
              <div className="d-flex align-items-center fs-6">
                <FaCog className="me-2" />
                Appilication Settings
                </div>
            </Nav.Link>


          
          
           {/* Appilication Logs Section */}
        <Nav.Link
              as={Link}
              to="logs"
              className="d-flex justify-content-between align-items-center text-secondary mb-2"
              onClick={() => toggleDropdown('logs')}
            >
              <div className="d-flex align-items-center fs-6">
                <FaChartLine className="me-2" />
                Appilication Logs
                </div>
            </Nav.Link>

          

          </Nav>
        </div>
        </Col>




        {/* Offcanvas for Small Screens */}

        <Offcanva/>
     

 

       

      </Row>
    </Container>
      
    </>
  )
}

export default SlideBar
