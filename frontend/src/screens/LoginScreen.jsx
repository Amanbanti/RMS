import { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { FaGoogle, FaFacebook } from 'react-icons/fa'; // Importing icons
import Loader from '../components/Loader';
import axios from 'axios';
import { toast } from 'react-toastify';
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);


  const navigate = useNavigate();


  const handleGoogleSignIn = () => {
    console.log('Google Sign-In clicked');
    // Add Google authentication logic here
  };

  const handleFacebookSignIn = () => {
    console.log('Facebook Sign-In clicked');
    // Add Facebook authentication logic here
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data } = await axios.post('/api/users/login', {
        email,
        password
      });

      toast.success('Login successful!');
      setTimeout(() => navigate('/admin/dashboard'), 500); // Redirect after 0.5s

    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed',);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className='my-2' controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        {loading && <Loader />}
        <Button type='submit' variant='primary' className='w-100 my-3' disabled={loading}>
          Sign In
        </Button>
       
      </Form>

      <div className="text-center my-3">
        <p>OR</p>
      </div>

      {/* Google Sign-In Button */}
      <Button
        variant="outline-primary"
        className="w-100 my-2 d-flex align-items-center justify-content-center"
        onClick={handleGoogleSignIn}
      >
        <FaGoogle className="me-2" />
        Sign in with Google
      </Button>

      {/* Facebook Sign-In Button */}
      <Button
        variant="outline-primary"
        className="w-100 my-2 d-flex align-items-center justify-content-center"
        onClick={handleFacebookSignIn}
        style={{ backgroundColor: '#3b5998', color: 'white' }}
      >
        <FaFacebook className="me-2" />
        Sign in with Facebook
      </Button>

      <Row className='py-3'>
        <Col>
          New Customer?{' '}
          <Link to={'/register'}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
