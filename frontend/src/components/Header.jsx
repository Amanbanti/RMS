import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaUser, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
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

          <Navbar.Brand as={Link} to="/">
            <FaHome /> Adama Rentals
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

              <Nav.Link as={Link} to="/login">
                <FaUser /> Sign In
              </Nav.Link>

              <NavDropdown title="Admin" id="adminmenu">
                <NavDropdown.Item as={Link} to="/admin">
                  Admin
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
