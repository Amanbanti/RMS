import { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import Loader from '../components/Loader';
import axios from 'axios';
import { toast } from 'react-toastify';
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);


  const navigate = useNavigate();




  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      setLoading(true);
  
      const { data } = await axios.post('/api/users/login', { email, password }, { withCredentials: true });
  
      // Store user info in localStorage (optional, depends on your state management)
      localStorage.setItem('userInfo', JSON.stringify(data));
  
      toast.success('Login successful!');
  
      // Redirect based on user role
      setTimeout(() => {
        if (data.isAdmin) {
          navigate('/admin/dashboard');
        } else {
          navigate('/dashboard'); // Redirect normal users to their dashboard
        }
      }, 500);
  
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <FormContainer >
      <div style={{ marginBottom: '200px' }}>
        <h1>Sign In</h1>

          <Form onSubmit={handleSubmit} >
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

          <Row className='py-3'>
            <Col>
              New Customer?{' '}
              <Link to={'/register'}>
                Register
              </Link>
            </Col>
          </Row>

      </div>
     
    </FormContainer>
  );
};

export default LoginScreen;
