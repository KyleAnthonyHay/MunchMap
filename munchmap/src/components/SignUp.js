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
import RestaurantForm from './SignUpComponents/RestaurantForm';
import ShelterForm from './SignUpComponents/ShelterForm';
import BackLoginButtons from './BackLoginButtons';

const API_URL = 'http://localhost:8000/api/restaurants/'; // Replace with your API URL

function SignUp() {
  const [AdminFlag, setAdminFlag] = useState(false);
  const [VolunteerFlag, setVolunteerFlag] = useState(false);
  const [SpecialistFlag, setSpecialistFlag] = useState(false);
  const [RestaurantFlag, setRestaurantFlag] = useState(true);
  const [ShelterFlag, setShelterFlag] = useState(false);
  
  
  function turnonAdminFlag() {
    setAdminFlag(true);
    setVolunteerFlag(false);
    setSpecialistFlag(false);
    setRestaurantFlag(false);
    setShelterFlag(false);
  }

  function turnonVolunteerFlag() {
    setAdminFlag(false);
    setVolunteerFlag(true);
    setSpecialistFlag(false);
    setRestaurantFlag(false);
    setShelterFlag(false);
  }

  function turnonSpecialistFlag() {
    setAdminFlag(false);
    setVolunteerFlag(false);
    setSpecialistFlag(true);
    setRestaurantFlag(false);
    setShelterFlag(false);
  }


  function turnonRestaurantFlag() {
    setAdminFlag(false);
    setVolunteerFlag(false);
    setSpecialistFlag(false);
    setRestaurantFlag(true);
    setShelterFlag(false);
  }

  function turnonShelterFlag() {
    setAdminFlag(false);
    setVolunteerFlag(false);
    setSpecialistFlag(false);
    setRestaurantFlag(false);
    setShelterFlag(true);
  }

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
    <div>
      <BackLoginButtons />
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
      
      <div className='page-container'>
      <div className='back-button'></div>
      <div className="login-form" style={{ width: '400px' }}>
       
          <ButtonGroup variant="text" aria-label="text button group" style={{ textAlign: 'center', width: '100%', backgroundColor: 'A8A2E1' }}>
            <Button onClick={turnonRestaurantFlag} style={{ color: '#6273D9' }}>Restaurant</Button>
            <Button onClick={turnonAdminFlag} style={{ color: '#6273D9' }}>Admin</Button>
            <Button onClick={turnonVolunteerFlag} style={{ color: '#6273D9' }}>Volunteer</Button>
            <Button onClick={turnonSpecialistFlag} style={{ color: '#6273D9' }}>Specialist</Button>
            <Button onClick={turnonShelterFlag} style={{ color: '#6273D9' }}>Shelter</Button>
          </ButtonGroup>

        { AdminFlag && <AdminForm/> }
        { VolunteerFlag && <VolunteerForm/>}
        { SpecialistFlag && <SpecialistForm/>}
        { RestaurantFlag && <RestaurantForm/>}
        { ShelterFlag && <ShelterForm/>}

        

        



       
      </div>
      </div>
    </div>
    </div>
  );
}

export default SignUp;

