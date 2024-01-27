import React, { useState } from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Ensure axios is imported if you're using it


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const API_URL = 'http://localhost:8000/api/restaurants/'; // Replace with your API URL

function SignUp() {
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  // State hooks
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); // New state for password
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [concept, setRestaurantType] = useState('');

  // Handlers for input changes
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => { // New handler for password
    setPassword(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleRestaurantTypeChange = (event) => {
    setRestaurantType(event.target.value);
  };

  // Updated handleSignUp function
  async function handleSignUp() {
    const credentials = {
      user: {
        username,
        password // Include password in the user object
      },
      name,
      address,
      concept
    };

    // Navigate and make API request
    try {
      const response = await axios.post(API_URL, credentials);
      console.log(response);
      navigate('/login');
    } catch (error) {
      console.log("An error occurred:", error.response);
      setOpenDialog(true);
    }
  
  }

  function handleAdminSignUp() {
    navigate('/admin');
  }
  function handlerestaurantformSignUp() {
    navigate('/restaurantform');
  }
  function handlevolunteerSignUp() {
    navigate('/volunteer');
  }
  function handlespecialistSignUp() {
    navigate('/specialist');
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
            An error occurred. Please log in again.
          </DialogContentText>
        </DialogContent>
        <DialogActions> 
          <Button onClick={() => setOpenDialog(false)} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <div className="login-form">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
              m: 1,
            },
          }}
        >
          <ButtonGroup variant="text" aria-label="text button group">
            <Button onClick={handlerestaurantformSignUp}>Restaurant</Button>
            <Button onClick={handleAdminSignUp}>Admin</Button>
            <Button onClick={handlevolunteerSignUp}>Volunteer</Button>
            <Button onClick={handlespecialistSignUp}>Specialist</Button>
          </ButtonGroup>
        </Box>
        <div className="input-group">
          <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
          <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} /> {/* New password input */}
          <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
          <input type="text" placeholder="Address" value={address} onChange={handleAddressChange} />
          <input type="text" placeholder="Restaurant Type" value={concept} onChange={handleRestaurantTypeChange} />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>
        <button className="login-button" onClick={handleSignUp}>Sign Up</button>
        <div className="register-link">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
