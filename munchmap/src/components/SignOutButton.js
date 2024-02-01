import React from 'react';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomDialog from '../utils/CustomDialog';
import LoadingScreen from '../utils/LoadingScreen';

const SignOutButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('token'); 
    setIsDialogOpen(false);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/'); 
    }, 1500);
  };

  const handleBackButton = () => {
    navigate('/login');
  };

  const handleClick = () => {
    setIsDialogOpen(true);
  }

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

if (isLoading) {
  return <LoadingScreen />;
}
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '15px' }}>
        {/*<Button variant="outlined" onClick={handleBackButton} style={{ marginRight: 'auto' }}>
          Back
        </Button>*/}
        <CustomDialog 
          open={isDialogOpen}
          handleClose={() => setIsDialogOpen(false)}
          title="Are you sure you want to sign out?"
          content="You will be redirected to the landing page."
          showConfirmButton={true}
          onConfirm={handleSignOut}
          confirmText="Yes"
          cancelText="No"
        />
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
      onClick={handleClick}>
        Sign Out
      </Button>
      </div>
    </>
  );
};

export default SignOutButton;
