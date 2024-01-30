import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate('/');
  };

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'left', margin: '15px' }}>
        <Button variant="outlined" onClick={handleBackButton} style={{ marginRight: 'auto' }}>
          Back
        </Button>
      </div>
    </>
  );
};

export default BackButton;
