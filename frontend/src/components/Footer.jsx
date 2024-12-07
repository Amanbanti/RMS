import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
const Footer   = () => {

    const currentYear= new Date().getFullYear();
  return (
    <footer>
        <Container>
              
            <Row className="gx-0">
              <Col
                md={{ span: 9, offset: 3 }}
                lg={{ span: 10, offset: 2 }}
                className="text-center py-3 bg-dark text-white"
              >
                <p>&copy; 2024 Your Website. All rights reserved.</p>
              </Col>
            </Row>
        </Container>
      
    </footer>
  )
}

export default   Footer;
