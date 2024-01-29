import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Ensure axios is imported if you're using it
import './Forms.css'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';


const ShelterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); // New state for password
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [concept, setRestaurantType] = useState('');
  const [phone_number, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();
  const API_URL = 'http://localhost:8000/api/shelters/'; // Replace with your API URL

  const [openDialog, setOpenDialog] = useState(false);

   
  // ***************************** Handlers for input changes *****************************
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

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  async function handleSignUp() { //for restarants
    const credentials = {
      user: {
        username,
        password // Include password in the user object
      },
      name,
      address,
      concept,
      phone_number,
      email
    };

    // Navigate and make API request
    try {
      console.log(credentials);
      const response = await axios.post(API_URL, credentials);
      console.log(response);
      navigate('/login');
    } catch (error) {
      console.log("An error occurred:", error.response);
      setOpenDialog(true);
    }
  
  }
  return (
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
            An error occurred. Please log in again.
          </DialogContentText>
        </DialogContent>
        <DialogActions> 
          <Button onClick={() => setOpenDialog(false)} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <div className="input-group">
    <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
    <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} /> {/* New password input */}
    <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
    <input type="text" placeholder="Phone" value={phone_number} onChange={handlePhoneChange} />
    <input type="text" placeholder="Email" value={email} onChange={handleEmailChange} />
    <input type="text" placeholder="Address" value={address} onChange={handleAddressChange} />

  </div>
  <div className="remember-forgot">
    <label>
      <input type="checkbox" /> Remember me
    </label>
    <a href="#">Forgot Password?</a>
  </div>
  {/* call renderConditionally() every time any of the flags change */}
  {/* {renderConditionally()} */}
  <button className="login-button" onClick={handleSignUp}>Shelter Sign Up</button>
  <div className="register-link">
    Already have an account? <Link to="/login">Log In</Link>
  </div></div>
  )
}

export default ShelterForm