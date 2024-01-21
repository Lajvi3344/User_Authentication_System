import React, { useState } from 'react';
import "./Login.css"

import user_icon from "../Assets/person.png"
import email_icon from "../Assets/email.png"
import password_icon from "../Assets/password.png"

const Login = ({ onRegister }) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update the state based on the input name
    if (name === 'username') {
      setEnteredUsername(value);
    } else if (name === 'email') {
      setEnteredEmail(value);
    } else if (name === 'password') {
      setEnteredPassword(value);
    }
  };

  const handleRegister = () => {
    // Create an object with user data
    const userData = {
      username: enteredUsername,
      email: enteredEmail,
      password: enteredPassword
    };

    // Send user data to the parent component
    onRegister(userData);
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className="text">User Registration</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={enteredUsername}
            onChange={handleInputChange}
          />
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={enteredEmail}
            onChange={handleInputChange}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt=" " />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={enteredPassword}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="forget-password">Lost Password? <span>Click here!</span></div>
      <div className="submit-container">
        <div className="submit" onClick={handleRegister}>Register</div>
      </div>
    </div>
  );
};

export default Login;
