import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import  { navigate } from '@reach/router';






const SpecialistForm = () => {

  const [openDialog, setOpenDialog] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  async function handleSignUp() { //for restarants
    const credentials = {
      user: {
        username,
        password // Include password in the user object
      },
      first_name,
      last_name,
      phone_number,
      email
    };

    // Navigate and make API request
    try {
      const response = await axios.post('http://localhost:8000/api/inspectors/', credentials);
      console.log(response);
      navigate('/login');
    } catch (error) {
      console.log("An error occurred:", error.response);
      setOpenDialog(true);
    }
  };



return (
  <div>SpecialistForm</div>
)
}

export default SpecialistForm