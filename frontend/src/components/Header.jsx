
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaUser, FaHome } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';




const Header = () => {

  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await axios.post('/api/users/logout', {}, { withCredentials: true });
  
      // Clear localStorage
      localStorage.removeItem('userInfo');
  
      // Clear JWT cookie (forcing the browser to expire it)
      document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  
      toast.success('Logout successful!');
      setTimeout(() => navigate('/login'), 500); // Redirect after 0.5s
  
    } catch (err) {
      toast.error(err.response?.data?.message || 'Logout failed');
    }
  };
  


  return (
    <header  style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: '#fff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>

          <Navbar.Brand as={Link} to="/admin/dashboard">
            <FaHome /> Adama Rentals
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

              <Nav.Link as={Link} to="/login">
                <FaUser /> Sign In
              </Nav.Link>

              <NavDropdown title="Admin" id="adminmenu">
                <NavDropdown.Item onClick={logoutHandler}>
                  LogOut
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
