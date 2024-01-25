// Your React component
import React from 'react';
import authService from '../services/authService';

const LogoutButton = () => {
  const handleLogout = () => {
    authService.logout();

    window.location.href = '/login';
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
