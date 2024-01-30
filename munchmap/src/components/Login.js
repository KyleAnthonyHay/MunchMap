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
import BackButton from './BackButton';


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
          localStorage.removeItem('token'); 
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
          localStorage.removeItem('token');
          setOpenDialog(true);
        }
      })
  }
  
  // handle volunteer via axios post
  function handleVolunteerLogin() {
    const credentials = {
      username,
      password
    };
    
    return axios.post(API_URL, credentials)
      .then(response => {
        if (response.status === 200 && response.data.token) {
          localStorage.setItem('token', response.data.token);
          navigate('/volunteer')
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
          localStorage.removeItem('token');
          setOpenDialog(true);
        }
      }
      )
  }


// handle specialist via axios post
  function handleSpecialistLogin() {
    const credentials = {
      username,
      password
    };


    return axios.post(API_URL, credentials)
      .then(response => {
        if (response.status === 200 && response.data.token) {
          localStorage.setItem('token', response.data.token);
          navigate('/specialist')
        }
        return response.data;
      }
      )
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
          localStorage.removeItem('token');
          setOpenDialog(true);
        }
      }
      )
  }

  // handle shelter via axios post
  function handleShelterLogin() {
    const credentials = {
      username,
      password
    };

    return axios.post(API_URL, credentials)
      .then(response => {
        if (response.status === 200 && response.data.token) {
          localStorage.setItem('token', response.data.token);
          navigate('/shelter')
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
          localStorage.removeItem('token');
          setOpenDialog(true);
        }
      }) 
  }

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
            An error occurred. Please try again with the correct credentials.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      
      <div className='page-containter'>
        <div className='back-button'><BackButton/></div>
        <div className="login-form">
          <div className="toggle-buttons">
            <button className="title">Login</button>
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
          <button className="login-button" onClick={handleLogin}>Log in as Admin</button>
          <button className="login-button" onClick={handleUserLogin}>Log in as Restaraunt</button>
          <button className="login-button" onClick={handleSpecialistLogin}>Log in as Specialist</button>
          <button className="login-button" onClick={handleVolunteerLogin}>Log in as Volunteer</button>
          <button className="login-button" onClick={handleShelterLogin}>Log in as Shelter</button>
          <div className="register-link">
            Don’t have an account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
