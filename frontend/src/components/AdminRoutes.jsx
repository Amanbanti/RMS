import React, { useState, useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import axios from 'axios';

const AdminRoute = () => {
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const { data } = await axios.get('/api/users/profile', { withCredentials: true });
        setIsAdmin(data.isAdmin); // Assuming your backend returns isAdmin
      } catch (error) {
        setIsAdmin(false);
      }
    };

    checkAdmin();
  }, []);

  if (isAdmin === null) return <p>Loading...</p>;

  return isAdmin ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AdminRoute;
