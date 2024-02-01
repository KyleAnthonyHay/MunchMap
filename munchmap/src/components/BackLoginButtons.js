import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BackLoginButtons = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // You can include any sign-out logic here
    // For example, clear user data, tokens, etc.
    
    // Navigate to the landing page
    navigate('/login');
  };

  const handleBackButton = () => {
    navigate('/');
  };

  const buttonStyle = {
    color: '#FFFFFF',
    transition: 'background-color 0.3s ease',
};

const buttonStyleLogin = {
  borderColor: '#6273D9',
  color: '#6273D9',
  transition: 'background-color 0.3s ease',
};

const velvetColor = '#6273D9';
const lightVelvetColor = 'A8A2E1'; 
const darkerVelvetColor = '#5F65D9';
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '15px' }}>
        <Button style={{ marginLeft: 'auto' }}
            variant="outlined"
            sx={{
            ...buttonStyleLogin,
            borderColor: velvetColor,
            '&:hover': { backgroundColor: lightVelvetColor, borderColor: velvetColor },
            }}
            onClick={handleBackButton}
          >
          Back
          </Button>
        <Button variant="contained"
      sx={{
        ...buttonStyle,
        backgroundColor: velvetColor,
        my: 1,
        mx: 1.5,
        '&:hover': { backgroundColor: darkerVelvetColor },
    }}
      onClick={handleLogin}>
        Login
      </Button>
      </div>
    </>
  );
};

export default BackLoginButtons;
