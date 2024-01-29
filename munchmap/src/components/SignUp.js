import React, { useState } from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Ensure axios is imported if you're using it
import AdminForm from './SignUpComponents/AdminForm';
import VolunteerForm from './SignUpComponents/VolunteerForm';
import SpecialistForm from './SignUpComponents/SpecialistForm';


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
  const [AdminFlag, setAdminFlag] = useState(false);
  const [VolunteerFlag, setVolunteerFlag] = useState(false);
  const [SpecialistFlag, setSpecialistFlag] = useState(false);
  const [RestaurantFlag, setRestaurantFlag] = useState(false);
  
  
  function turnonAdminFlag() {
    setAdminFlag(true);
    setVolunteerFlag(false);
    setSpecialistFlag(false);
    setRestaurantFlag(false);
  }

  function turnonVolunteerFlag() {
    setAdminFlag(false);
    setVolunteerFlag(true);
    setSpecialistFlag(false);
    setRestaurantFlag(false);
  }

  function turnonSpecialistFlag() {
    setAdminFlag(false);
    setVolunteerFlag(false);
    setSpecialistFlag(true);
    setRestaurantFlag(false);
  }


  function turnonRestaurantFlag() {
    setAdminFlag(false);
    setVolunteerFlag(false);
    setSpecialistFlag(false);
    setRestaurantFlag(true);
  }


/*
  function AdminForm() {
    return (
      <button className="login-button" onClick={handleAdminSignUp}>Sign Up</button>
    )
  }
  function VolunteerForm() {
    return (
      <button className="login-button" onClick={handlevolunteerSignUp}>Sign Up</button>
    )
  }
  function SpecialistForm() {
    return (
      <button className="login-button" onClick={handlespecialistSignUp}>Sign Up</button>
    )
  }
  function RestarauntForm() {
    return (
      <button className="login-button" onClick={handlerestaurantformSignUp}>Sign Up</button>
    )
  }

  // ***************************** Render Condtitionally(can be removed) *****************************
  function renderConditionally() {
    if (AdminFlag) {
      console.log("Conditional Render: AdminForm");
      AdminFlag = false;
      return AdminForm();
    }
    else if (VolunteerFlag) {
      console.log("Conditional Render: VolunteerForm");
      VolunteerFlag = false;
      return VolunteerForm();
    }
    else if (SpecialistFlag) {
      console.log("Conditional Render: SpecialistForm");
      SpecialistFlag = false;
      return SpecialistForm();
    }
    else if (RestaurantFlag) {
      console.log("Conditional Render: RestarauntForm");
      RestaurantFlag = false;
      return RestarauntForm();
    }
  }

  */

  // ***************************** Render Condtitionally(can be removed) *****************************

  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  // ***************************** State hooks *****************************
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); // New state for password
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [concept, setRestaurantType] = useState('');
  const [phone_number, setPhone] = useState('');
  const [email, setEmail] = useState('');



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

  // ***************************** Updated handleSignUp function *****************************
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
      console.log(phone_number);
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
            <Button onClick={turnonRestaurantFlag}>Restaurant</Button>
            <Button onClick={turnonAdminFlag}>Admin</Button>
            <Button onClick={turnonVolunteerFlag}>Volunteer</Button>
            <Button onClick={turnonSpecialistFlag}>Specialist</Button>
          </ButtonGroup>
        </Box>

        { AdminFlag && <AdminForm/> }
        { VolunteerFlag && <VolunteerForm/>}
        { SpecialistFlag && <SpecialistForm/>}
        



        <div className="input-group">
          <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
          <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} /> {/* New password input */}
          <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
          <input type="text" placeholder="Phone" value={phone_number} onChange={handlePhoneChange} />
          <input type="text" placeholder="Email" value={email} onChange={handleEmailChange} />
          <input type="text" placeholder="Address" value={address} onChange={handleAddressChange} />
          <input type="text" placeholder="Restaurant Type" value={concept} onChange={handleRestaurantTypeChange} />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>
        {/* call renderConditionally() every time any of the flags change */}
        {/* {renderConditionally()} */}
        <button className="login-button" onClick={handleSignUp}>Sign Up</button>
        <div className="register-link">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
