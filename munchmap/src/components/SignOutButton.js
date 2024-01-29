import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignOutButton = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // You can include any sign-out logic here
    // For example, clear user data, tokens, etc.
    
    // Navigate to the landing page
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '15px' }}>
      <Button variant="outlined" onClick={handleSignOut}>
        Sign Out
      </Button>
    </div>
  );
};

export default SignOutButton;
