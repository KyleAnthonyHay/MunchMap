import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, Typography } from '@mui/material';


const API_URL = 'http://localhost:8000/api/login/';

function Login() {
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  // Separate state hooks for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Update state when the input changes
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Updated handleLogin function
  function handleLogin() {
    const credentials = {
      username,
      password
    };

    return axios.post(API_URL, credentials)
      .then(response => {
        if (response.status == 200 && response.data.token) {
          localStorage.setItem('token', response.data.token);
          navigate('/admin');
        }
        return response.data;
      })
      .catch(error => {
        // Clear the token and fields 
        localStorage.removeItem('token');
        setUsername('');
        setPassword('');

        if (error.response && error.response.status === 401 || error.response.status === 403) {
          console.log('Unauthorized, logging out ...');
          localStorage.removeItem('token');
          setOpenDialog(true);
        }
        else {
          console.log('An error occurred:', error.response);
          setOpenDialog(true);
        }
      })
  }
  // Updated handleUserLogin function
  function handleUserLogin() {
    const credentials = {
      username,
      password
    };

    return axios.post(API_URL, credentials)
      .then(response => {
        if (response.status === 200 && response.data.token) {
          localStorage.setItem('token', response.data.token);
          navigate('/restaurantform')
        }
        return response.data;
      })
      .catch(error => {
        // Clear the token and fields 
        localStorage.removeItem('token');
        setUsername('');
        setPassword('');

        if (error.response && error.response.status === 401 || error.response.status === 403) {
          console.log('Unauthorized, logging out ...');
          localStorage.removeItem('token');
          setOpenDialog(true);
        }
        else {
          console.log('An error occurred:', error.response);
          setOpenDialog(true);
        }
      })
  }
  
  function handleVolunteerLogin() {
    // check if Email and Password field is filled
    if (username === '' || password === '') {
      setOpenDialog(true);
    } else {
      navigate('/volunteer')
    }
  }
  function handleSpecialistLogin() {
    if (username === '' || password === '') {
      setOpenDialog(true);
    } else {
    navigate('/specialist')
    }
  }
  function handleShelterLogin() {
    if (username === '' || password === '') {
      setOpenDialog(true);
    }else {
    navigate('/shelter')
    }
  }

  //buttons style
  const buttonStyle = {
    color: '#FFFFFF',
    transition: 'background-color 0.3s ease',
};

  const velvetColor = '#6273D9'; 
  const darkerVelvetColor = '#5F65D9'; 

  return (
    <div className="login-container">
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Login Required"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            An error occurred. Please try logging in again
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <div className="login-form">
        <div className="toggle-buttons">
        <Typography component="h1" variant="h2" color="inherit" noWrap sx={{ fontSize: '24px' }}>
          Log in
        </Typography>
        </div>
        <div className="input-group">
          <input type="username" placeholder="Email" value={username} onChange={handleUsernameChange} />
          <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>
        <Button
          className="login-button"
          variant="contained"
          sx={{
            ...buttonStyle,
            backgroundColor: velvetColor,
            my: 1,
            mx: 1.5,
            '&:hover': { backgroundColor: darkerVelvetColor },
          }}
          onClick={handleLogin}
        >
          Log in as Admin
        </Button>
        <Button
          className="login-button"
          variant="contained"
          sx={{
            ...buttonStyle,
            backgroundColor: velvetColor,
            my: 1,
            mx: 1.5,
            '&:hover': { backgroundColor: darkerVelvetColor },
          }}
          onClick={handleUserLogin}
        >
          Log in as Restaraunt
        </Button>
        <Button
          className="login-button"
          variant="contained"
          sx={{
            ...buttonStyle,
            backgroundColor: velvetColor,
            my: 1,
            mx: 1.5,
            '&:hover': { backgroundColor: darkerVelvetColor },
          }}
          onClick={handleSpecialistLogin}
        >
          Log in as Specialist
        </Button>
        <Button
          className="login-button"
          variant="contained"
          sx={{
            ...buttonStyle,
            backgroundColor: velvetColor,
            my: 1,
            mx: 1.5,
            '&:hover': { backgroundColor: darkerVelvetColor },
          }}
          onClick={handleVolunteerLogin}
        >
          Log in as Volunteer
        </Button>
        <Button
          className="login-button"
          variant="contained"
          sx={{
            ...buttonStyle,
            backgroundColor: velvetColor,
            my: 1,
            mx: 1.5,
            '&:hover': { backgroundColor: darkerVelvetColor },
          }}
          onClick={handleShelterLogin}
        >
          Log in as Shelter
        </Button>
        <div className="register-link">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
