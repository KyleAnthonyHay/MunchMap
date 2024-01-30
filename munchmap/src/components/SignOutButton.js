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

  const buttonStyle = {
    color: '#FFFFFF',
    transition: 'background-color 0.3s ease',
};

const velvetColor = '#6273D9';
const darkerVelvetColor = '#5F65D9';

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '15px' }}>
      <Button variant="contained"
      sx={{
        ...buttonStyle,
        backgroundColor: velvetColor,
        my: 1,
        mx: 1.5,
        '&:hover': { backgroundColor: darkerVelvetColor },
    }}
      onClick={handleSignOut}>
        Sign Out
      </Button>
    </div>
  );
};

export default SignOutButton;
