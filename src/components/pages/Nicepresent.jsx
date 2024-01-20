import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import './Nicepresent.css'

const Nicepresent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleSignIn = () => {
    // Add your Google sign-in logic here
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="nicepresent-container">
      <h1>Activate a gift voucher</h1>
      <h2>1. Login to continue</h2>
      <h3>Get connected!</h3>
      <div className="google-sign-in-box" onClick={handleGoogleSignIn}>
        <FaGoogle className="google-icon" />
        <span className="google-text">Sign in with Google</span>
      </div>

      {/* Email and Password Input Boxes */}
      <div className="login-box">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
        />
      </div>
    </div>
  );
};

export default Nicepresent;



