import React from 'react';
import './SignUp.css'; // Make sure to import the CSS file
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  //functions
  const navigate = useNavigate();
  function handleLogin() {
    navigate('/restaurantform');
    console.log('Login clicked');
  }
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="toggle-buttons">
          <button className="title">Sign Up</button>
        </div>
        <div className="input-group">
          <input type="email" placeholder="Email" />
          <input type="email" placeholder="confrim email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>
        <button className="login-button" onClick={handleLogin} >Log in</button>
        <div className="register-link">
          Already have an account? <Link to="/">Log In</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
