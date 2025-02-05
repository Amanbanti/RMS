
import { useState } from 'react';
import { Offcanvas, Button, Nav, Collapse, Col } from 'react-bootstrap';
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
  FaBars,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Offcanva = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [openMenu, setOpenMenu] = useState({});

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  const toggleDropdown = (section) => {
    setOpenMenu((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <>
      {/* Offcanvas for Small Screens */}
      <Offcanvas
        show={showSidebar}
        onHide={toggleSidebar}
        placement="start"
        className="bg-dark text-white shadow-lg p-3"
      >
        <Offcanvas.Header closeButton className="border-bottom-0">
          <Offcanvas.Title className="fs-4 fw-bold text-primary">
            NAVIGATION
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="px-0">
          <Nav className="flex-column">
            {/* Dashboard Section */}
            <Nav.Link
              as={Link}
              to="/admin/dashboard"
              className="d-flex justify-content-between align-items-center text-white mb-3 py-2 px-3 rounded-3 transition-all hover-bg-dark"
              onClick={() => {
                toggleSidebar();
              }}
            >
              <div className="d-flex align-items-center text-primary fs-6">
                <FaTh className="me-2" />
                <span>Dashboard</span>
              </div>
            </Nav.Link>

            {/* Tenants Section */}
            <Nav.Link
              as={Link}
              to="#"
              className="d-flex justify-content-between align-items-center text-secondary mb-2"
              onClick={() => toggleDropdown('tenant')}
            >
              <div className="d-flex align-items-center text-primary fs-6">
                <FaUserFriends className="me-2" />
                Tenants
              </div>
              {openMenu.tenant ? <FaChevronDown className="text-primary" /> : <FaChevronRight className="text-primary" />}
            </Nav.Link>
            <Collapse in={openMenu.tenant}>
              <div className="ms-4">
                <Nav.Link
                  as={Link}
                  to="/admin/tenant/create"
                  className="text-primary"
                  onClick={toggleSidebar}
                >
                  Register Tenants
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/admin/tenant/view"
                  className="text-primary"
                  onClick={toggleSidebar}
                >
                  View Tenants
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
              <div className="d-flex align-items-center text-primary fs-6">
                <FaUserTie className="me-2" />
                Landlords
              </div>
              {openMenu.landlord ? <FaChevronDown className="text-primary" /> : <FaChevronRight className="text-primary" />}
            </Nav.Link>
            <Collapse in={openMenu.landlord}>
              <div className="ms-4">
                <Nav.Link
                  as={Link}
                  to="/admin/landlord/create"
                  className="text-primary"
                  onClick={toggleSidebar}
                >
                  Register Landlord
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/admin/landlord/view"
                  className="text-primary"
                  onClick={toggleSidebar}
                >
                  View Landlords
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
              <div className="d-flex align-items-center text-primary fs-6">
                <FaHome className="me-2" />
                Properties
              </div>
              {openMenu.properties ? <FaChevronDown className="text-primary" /> : <FaChevronRight className="text-primary" />}
            </Nav.Link>
            <Collapse in={openMenu.properties}>
              <div className="ms-4">
                <Nav.Link
                  as={Link}
                  to="/admin/property/create"
                  className="text-primary"
                  onClick={toggleSidebar}
                >
                    Create Property
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/admin/property/view"
                  className="text-primary"
                  onClick={toggleSidebar}
                >
                    View Property
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
              <div className="d-flex align-items-center text-primary fs-6">
                <FaBuilding className="me-2" />
                Property Units
              </div>
              {openMenu.unit ? <FaChevronDown className="text-primary"/> : <FaChevronRight className="text-primary"/>}
            </Nav.Link>
            <Collapse in={openMenu.unit}>
              <div className="ms-4">
                <Nav.Link as={Link} to="/admin/property-unit/create" className="text-primary"  onClick={toggleSidebar} >
                  Create Property Unit
                </Nav.Link>
                <Nav.Link as={Link} to="/admin/property-unit/view" className="text-primary"  onClick={toggleSidebar}>
                 View Property Units
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
              <div className="d-flex align-items-center text-primary fs-6">
                <FaRegHandshake className="me-2" />
                Leases / Tenancy               </div>
              {openMenu.leases ? <FaChevronDown className="text-primary"/> : <FaChevronRight className="text-primary" />}
            </Nav.Link>
            <Collapse in={openMenu.leases}>
              <div className="ms-4">
                <Nav.Link as={Link} to="/admin/lease/create" className="text-primary"  onClick={toggleSidebar} >
                Create Lease
                </Nav.Link>
                <Nav.Link as={Link} to="/admin/lease/show" className="text-primary"  onClick={toggleSidebar}>
                  Show Leases
                </Nav.Link>
                <Nav.Link as={Link} to="/admin/lease/terminate" className="text-primary"  onClick={toggleSidebar}>
                  Terminated Leases
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
              <div className="d-flex align-items-center text-primary fs-6">
                <FaClipboardList  className="me-2" />
                  Inventory               </div>
              {openMenu.inventory ? <FaChevronDown  className="text-primary"/> : <FaChevronRight className="text-primary" />}
            </Nav.Link>
            <Collapse in={openMenu.inventory}>
              <div className="ms-4">
                <Nav.Link as={Link} to="/admin/lead1" className="text-primary"  onClick={toggleSidebar} >
                  Lead 1
                </Nav.Link>
                <Nav.Link as={Link} to="/admin/lead2" className="text-primary"  onClick={toggleSidebar} >
                  Lead 2
                </Nav.Link>
              </div>
            </Collapse>







            
             {/* Invoices Section */}
         <Nav.Link
              as={Link}
              to="/admin/invoices"
              className="d-flex justify-content-between align-items-center text-secondary mb-2"
              onClick={() => {
                toggleSidebar();
              }}
            >
              <div className="d-flex align-items-center text-primary fs-6">
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
              <div className="d-flex align-items-center text-primary fs-6">
                <FaChartPie className="me-2" />
                Reports              
                </div>
              {openMenu.report ? <FaChevronDown className="text-primary" /> : <FaChevronRight  className="text-primary"/>}
            </Nav.Link>
            <Collapse in={openMenu.report}>
              <div className="ms-4">
                <Nav.Link as={Link} to="/lead1"className="text-primary"  onClick={toggleSidebar}>
                  Lead 1
                </Nav.Link>
                <Nav.Link as={Link} to="/lead2" className="text-primary"  onClick={toggleSidebar}>
                  Lead 2
                </Nav.Link>
              </div>
            </Collapse>


        



          {/* Support Tickets Section */}
         <Nav.Link
              as={Link}
              to="support"
              className="d-flex justify-content-between align-items-center text-secondary mb-2"
              onClick={() => {
                toggleSidebar();
              }}
            >
              <div className="d-flex align-items-center text-primary fs-6">
                <FaHeadset className="me-2" />
                Support Tickets
                </div>
            </Nav.Link>

            
            {/* Chat Section */}
         <Nav.Link
              as={Link}
              to="chat"
              className="d-flex justify-content-between align-items-center text-secondary mb-2"
              onClick={() => {
                toggleSidebar();
              }}
            >
              <div className="d-flex align-items-center text-primary fs-6">
                <FaComment className="me-2" />
                Chat
                </div>
            </Nav.Link>


          
          {/* My Profile Section */}
         <Nav.Link
              as={Link}
              to="profile"
              className="d-flex justify-content-between align-items-center text-secondary mb-2"
              onClick={() => {
                toggleSidebar();
              }}
            >
              <div className="d-flex align-items-center text-primary fs-6">
                <FaUser className="me-2" />
                My Profile
                </div>
            </Nav.Link>



        {/* Manage Users Section */}
        <Nav.Link
              as={Link}
              to="manageusers"
              className="d-flex justify-content-between align-items-center text-secondary mb-2"
              onClick={() => {
                toggleSidebar();
              }}
            >
              <div className="d-flex align-items-center text-primary fs-6">
                <FaUserFriends className="me-2" />
                Manage Users 
                </div>
            </Nav.Link>



           {/* Appilication Settings Section */}
        <Nav.Link
              as={Link}
              to="setting"
              className="d-flex justify-content-between align-items-center text-secondary mb-2"
              onClick={() => {
                toggleSidebar();
              }}
            >
              <div className="d-flex align-items-center text-primary fs-6">
                <FaCog className="me-2" />
                Appilication Settings
                </div>
            </Nav.Link>


          
          
           {/* Appilication Logs Section */}
        <Nav.Link
              as={Link}
              to="logs"
              className="d-flex justify-content-between align-items-center text-secondary mb-2"
              onClick={() => {
                toggleSidebar();
              }}
            >
              <div className="d-flex align-items-center text-primary fs-6">
                <FaChartLine className="me-2" />
                Appilication Logs
                </div>
            </Nav.Link>

            {/* Calendar Events Section */}
            <Nav.Link
              as={Link}
              to="calendar"
              className="d-flex justify-content-between align-items-center text-secondary mb-2"
              onClick={() => {
                toggleSidebar();
              }}
            >
              <div className="d-flex align-items-center text-primary fs-6">
                <FaCalendarAlt className="me-2" />
                Calendar Events
              </div>
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Toggle Button for Small Screens */}
      <Col xs={12} className="d-md-none p-3">
        <Button
          variant="dark"
          onClick={toggleSidebar}
          className="w-100 shadow-sm d-flex align-items-center justify-content-center"
        >
          <FaBars className="me-2" />
          <span>Menu</span>
        </Button>
      </Col>
    </>
  );
};

export default Offcanva;
