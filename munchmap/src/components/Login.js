import React from 'react';
import './Login.css'; // Make sure to import the CSS file
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="toggle-buttons">
          <button className="toggle-user">Login</button>
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
        <button className="login-button">Log in</button>
        <div className="register-link">
          Don’t have an account? <Link to="/signup">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
