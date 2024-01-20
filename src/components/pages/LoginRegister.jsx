// LoginRegister.jsx

import React, { useState } from 'react';
import './LoginRegister.css'; // Import your CSS file

const LoginRegister = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [registerFirstName, setRegisterFirstName] = useState('');
  // ... (other register state variables)

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login submitted:', loginEmail, loginPassword);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Add your register logic here
    console.log('Register submitted:', registerFirstName, /* ... other register values */);
  };

  return (
    <div className="container">
      <div id="login" className="login-register-box">
        <h2>Login</h2>
        <form onSubmit={handleLoginSubmit}>
          {/* ... (login form fields) */}
          <button type="submit">Login</button>
        </form>
      </div>

      <div id="register" className="login-register-box">
        <h2>Register</h2>
        <form onSubmit={handleRegisterSubmit}>
          {/* ... (register form fields) */}
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;


