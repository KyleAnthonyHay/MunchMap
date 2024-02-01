import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';

const LoadingScreen = () => {
  return (
    <Backdrop
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        color: '#fff',
        backgroundColor: '#fff',
      }}
      open={true}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          '& .MuiCircularProgress-root': {
            animation: 'progress-spin 2s linear infinite',
          },
          '@keyframes progress-spin': {
            '0%': {
              transform: 'rotate(0deg)',
            },
            '100%': {
              transform: 'rotate(360deg)',
            },
          },
        }}
      >
        <CircularProgress size={70} style={{ color: '#6273D9' }} />
        <Typography
           sx={{
            marginTop: 3,
            color: '#6273D9',  // Change this to the desired color
            fontSize: '1.2rem',
            fontWeight: 'bold',
          }}
        >
          Loading...
        </Typography>
      </Box>
    </Backdrop>
  );
};

export default LoadingScreen;
