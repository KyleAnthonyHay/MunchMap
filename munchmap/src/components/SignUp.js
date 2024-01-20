import React from 'react';
import './SignUp.css'; // Make sure to import the CSS file

function SignUp() {
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="toggle-buttons">
          <button className="toggle-user">Sign Up</button>
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
        <button className="login-button">Log in</button>
        <div className="register-link">
          Don’t have an account? <a href="#">Register</a>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
