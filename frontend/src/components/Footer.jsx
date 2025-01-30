import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <Container>
                <Row>
                    <Col className='d-flex justify-content-between align-items-center py-3'>
                        {/* Left side - Empty to balance the layout */}
                        <div></div>

                        {/* Center - Adama Homes */}
                        <p className='m-0'>Adama Homes &copy; {currentYear}</p>

                        {/* Right side - Links */}
                        <div className='d-flex'>
                            <Link to="/about" className='text-decoration-none me-3'>About Us</Link>
                            <Link to="/help" className='text-decoration-none me-3'>Help</Link>
                            <Link to="/contact" className='text-decoration-none'>Contact Us</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;