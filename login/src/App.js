import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import UserDashboard from './Components/UserDashboard/UserDashboard';

function App() {
  // State to store registered users
  const [registeredUsers, setRegisteredUsers] = useState([]);

  // Callback function to handle user registration
  const handleRegister = (userData) => {
    // Update the state with the new user data
    setRegisteredUsers((prevUsers) => [...prevUsers, userData]);
  };

  return (
    <div>
      {/* Pass the handleRegister function to the Login component */}
      <Login onRegister={handleRegister} />

      {/* Pass the registeredUsers state to the UserDashboard component */}
      <UserDashboard users={registeredUsers} />
    </div>
  );
}

export default App;
