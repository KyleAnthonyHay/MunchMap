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


const RestaurantForm = () => {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState(''); // New state for password
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [concept, setRestaurantType] = useState('');
  const [phone_number, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();
  const API_URL = 'http://localhost:8000/api/restaurants/'; // Replace with your API URL

  const [openDialog, setOpenDialog] = useState(false);

   
  // ***************************** Handlers for input changes *****************************
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFirstNameChange = (event) => { // New handler for password
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
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
    <input type="text" placeholder="First Name" value={firstName} onChange={handleFirstNameChange} /> {/* first name */}
    <input type="text" placeholder="Last Name" value={lastName} onChange={handleLastNameChange} /> {/* last name */}
    <input type="text" placeholder="Phone" value={phone_number} onChange={handlePhoneChange} /> 
    <input type="text" placeholder="Email" value={email} onChange={handleEmailChange} />
   
  </div>
  <div className="remember-forgot">
    <label>
      <input type="checkbox" /> Remember me
    </label>
    <a href="#">Forgot Password?</a>
  </div>
  {/* call renderConditionally() every time any of the flags change */}
  {/* {renderConditionally()} */}
  <button className="login-button" onClick={handleSignUp}>Specialist Sign Up</button>
  <div className="register-link">
    Already have an account? <Link to="/login">Log In</Link>
  </div></div>
  )
}

export default RestaurantForm