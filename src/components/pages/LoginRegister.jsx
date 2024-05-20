import React, { useState } from 'react';
import './LoginRegister.css'; // Import your CSS file

const LoginRegister = () => {
  // State for login
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // State for registration
  const [registerFirstName, setRegisterFirstName] = useState('');
  const [registerLastName, setRegisterLastName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login submitted:', loginEmail, loginPassword);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Add your register logic here
    console.log('Register submitted:', registerFirstName, registerLastName, registerEmail, registerPassword);
  };

  return (
    <div className="container">
      <div id="login" className="login-register-box">
        <h2>Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>

      <div id="register" className="login-register-box">
        <h2>Register</h2>
        <form onSubmit={handleRegisterSubmit}>
          <input
            type="text"
            placeholder="First Name"
            value={registerFirstName}
            onChange={(e) => setRegisterFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={registerLastName}
            onChange={(e) => setRegisterLastName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;



