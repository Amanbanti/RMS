import React, { useState, useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import axios from 'axios';

const PrivateRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get('/api/users/profile', { withCredentials: true });
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  // Show nothing while checking authentication status
  if (isAuthenticated === null) return <p>Loading...</p>;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
