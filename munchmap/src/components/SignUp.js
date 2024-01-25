import React, { useState } from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Ensure axios is imported if you're using it

const API_URL = 'http://localhost:8000/api/restaurants/'; // Replace with your API URL

function SignUp() {
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
  function handleSignUp() {
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
    navigate('/restaurantform');
    console.log(credentials);
    return axios.post(API_URL, credentials)
      .then(response => {
          if (response.data.token) {
              localStorage.setItem('token', response.data.token);
          }
          return response.data;
      });
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="toggle-buttons">
          <button className="title">Restaurant Sign Up</button>
        </div>
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
