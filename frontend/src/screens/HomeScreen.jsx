import React from "react";
import { Container, Row, Col, Nav, Button, Offcanvas } from 'react-bootstrap';
import SlideBar from "../components/SlideBar";
const HomeScreen = () => {
 

  return (
    <>
   <SlideBar/>
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
