import React from "react";
import { Container, Col } from 'react-bootstrap';
import AdminSlideBar from "../components/AdminSlideBar";
import { Outlet } from 'react-router-dom';


const HomeScreen = () => {
  return (
    <>
      <AdminSlideBar />
      {/* Main Content */}
      <Container>
        <Col
          md={{ span: 9, offset: 3 }}
          lg={{ span: 10, offset: 2 }}
          className="p-4"
          style={{ minHeight: 'calc(100vh - 50px)', backgroundColor: '#F5F5F5' }}
        >
            <Outlet />
          
        </Col>
      </Container>
    </>
  );
};

export default HomeScreen;
