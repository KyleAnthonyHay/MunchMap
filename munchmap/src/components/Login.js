import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputBase from '@mui/material/InputBase';
import SignUpButton from './SignUpButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const API_URL = 'http://localhost:8000/api/login/';

const BootstrapInput = ({ label, ...props }) => {
  return (
    <FormControl>
      <InputLabel shrink>{label}</InputLabel>
      <Select
        label={label}
        input={<InputBase />}
        {...props}
      />
    </FormControl>
  );
};

function Login() {
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleLogin = () => {
    switch (selectedRole) {
      case 'admin':
        handleLoginForRole(handleAdminLogin, '/admin');
        break;
      case 'restaurant':
        handleLoginForRole(handleUserLogin, '/restaurantform');
        break;
      case 'specialist':
        handleLoginForRole(handleSpecialistLogin, '/specialist');
        break;
      case 'volunteer':
        handleLoginForRole(handleVolunteerLogin, '/volunteer');
        break;
      case 'shelter':
        handleLoginForRole(handleShelterLogin, '/shelter');
        break;
      default:
        break;
    }
  };

  const handleLoginForRole = (loginFunction, redirectPath) => {
    loginFunction()
      .then(response => {
        // Additional handling if needed
      })
      .catch(error => {
        console.error('Login failed:', error);
      });
  };

  function handleAdminLogin() {
    const credentials = {
      username,
      password
    };

    return axios.post(API_URL, credentials)
      .then(response => {
        if (response.status === 200 && response.data.token) {
          localStorage.setItem('token', response.data.token);
          navigate('/admin');
        }
        return response.data;
      })
      .catch(handleLoginError);
  }

  function handleUserLogin() {
    const credentials = {
      username,
      password
    };

    return axios.post(API_URL, credentials)
      .then(response => {
        if (response.status === 200 && response.data.token) {
          localStorage.setItem('token', response.data.token);
          navigate('/restaurantform');
        }
        return response.data;
      })
      .catch(handleLoginError);
  }

  function handleSpecialistLogin() {
    const credentials = {
      username,
      password
    };

    return axios.post(API_URL, credentials)
      .then(response => {
        if (response.status === 200 && response.data.token) {
          localStorage.setItem('token', response.data.token);
          navigate('/specialist');
        }
        return response.data;
      })
      .catch(handleLoginError);
  }

  function handleVolunteerLogin() {
    const credentials = {
      username,
      password
    };

    return axios.post(API_URL, credentials)
      .then(response => {
        if (response.status === 200 && response.data.token) {
          localStorage.setItem('token', response.data.token);
          navigate('/volunteer');
        }
        return response.data;
      })
      .catch(handleLoginError);
  }

  function handleShelterLogin() {
    const credentials = {
      username,
      password
    };

    return axios.post(API_URL, credentials)
      .then(response => {
        if (response.status === 200 && response.data.token) {
          localStorage.setItem('token', response.data.token);
          navigate('/shelter');
        }
        return response.data;
      })
      .catch(handleLoginError);
  }

  function handleLoginError(error) {
    localStorage.removeItem('token');
    setUsername('');
    setPassword('');

    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      console.log('Unauthorized, logging out ...');
      setOpenDialog(true);
    } else {
      console.log('An error occurred during login:', error);
      setOpenDialog(true);
    }
  }

  const theme = createTheme({
    palette: {
      ochre: {
        main: '#6273D9',
        light: '#5F65D9',
        contrastText: '#ffffff',
      },
    },
  });

  return (
    <div> <SignUpButton />
    <div>
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Login Required"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            An error occurred. Please try again with the correct credentials.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <div className='page-container' style={{ marginTop: 0, display: 'flex',
    justifyContent: 'center', alignItems: 'center' }}>
        {/*<div className='back-button'><BackButton /></div>*/}
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
              <input type="checkbox" /> 
              Remember me
            </label>
            <a href="#" style={{ color: '#5F65D9' }}>Forgot Password?</a>
          </div>
          <BootstrapInput
            value={selectedRole}
            onChange={handleRoleChange}
            displayEmpty
            className="role-select"
          >
            <MenuItem value="" disabled>
            <Typography component="h1" variant="h2" color="inherit" noWrap sx={{ fontSize: '20px' }}>
            Select Role
            </Typography>
              </MenuItem>
            <MenuItem value="restaurant">
            <Typography component="h1" variant="h2" color="inherit" noWrap sx={{ fontSize: '20px' }}>
            Restaurant
            </Typography>
            </MenuItem>
            <MenuItem value="specialist">
            <Typography component="h1" variant="h2" color="inherit" noWrap sx={{ fontSize: '20px' }}>
            Specialist
            </Typography>
            </MenuItem>
            <MenuItem value="shelter">
            <Typography component="h1" variant="h2" color="inherit" noWrap sx={{ fontSize: '20px' }}>
            Shelter
            </Typography>
            </MenuItem>
            <MenuItem value="admin">
            <Typography component="h1" variant="h2" color="inherit" noWrap sx={{ fontSize: '20px' }}>
            Admin
            </Typography>
            </MenuItem>
            <MenuItem value="volunteer">
            <Typography component="h1" variant="h2" color="inherit" noWrap sx={{ fontSize: '20px' }}>
            Volunteer
            </Typography>
            </MenuItem>
          </BootstrapInput>
          <ThemeProvider theme={theme}>
          <Button
          className="login-button"
          style={{ backgroundColor: theme.palette.ochre.main, color: theme.palette.ochre.contrastText }}
          onClick={handleLogin}
          >
            Log in
        </Button>
        </ThemeProvider>
          <div className="register-link">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
