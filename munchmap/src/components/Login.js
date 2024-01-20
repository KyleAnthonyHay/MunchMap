import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/login/';

function Login() {
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

    navigate('/admin');
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
        <button className="login-button" onClick={handleLogin}>Log in</button>
        <div className="register-link">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
