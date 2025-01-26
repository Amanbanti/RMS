import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <FormContainer>
      <h1>Sign Up</h1>

      {/* Registration Form */}
      <Form>
        <Form.Group className="my-2" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary" className="w-100 my-3">
          Register
        </Button>
      </Form>

      {/* Divider */}
      <div className="divider d-flex align-items-center my-4">
        <p className="text-center fw-bold mx-3 mb-0">OR</p>
      </div>

      {/* Social Media Registration */}
      <Button
        variant="outline-primary"
        className="w-100 my-2 d-flex align-items-center justify-content-center"
      >
        <FaGoogle className="me-2" /> Register with Google
      </Button>

      <Button
        variant="outline-primary"
        className="w-100 my-2 d-flex align-items-center justify-content-center"
        style={{ backgroundColor: '#3b5998', color: 'white' }}
      >
        <FaFacebook className="me-2" /> Register with Facebook
      </Button>

      {/* Redirect to Login */}
      <Row className="py-3">
        <Col>
          Already have an account?{' '}
          <Link to="/login">Login</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;
