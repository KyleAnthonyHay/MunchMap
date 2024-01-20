import React from 'react';
import './Login.css'; // Make sure to import the CSS file
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  //functions
  const navigate = useNavigate();
  function handleLogin() {
    navigate('/admin');
    console.log('Login clicked');
  }
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="toggle-buttons">
          <button className="title">Login</button>
        </div>
        <div className="input-group">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>
        <button className="login-button"onClick={handleLogin}>Log in</button>
        <div className="register-link">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
