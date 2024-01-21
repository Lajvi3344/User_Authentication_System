import React, { useState } from 'react';
import UserProfile from './UserProfile';
import './UserDashboard.css';

const UserDashboard = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  // No need for the handleLogin function anymore

  const handleEditProfile = (updatedUser) => {
    // Update the user data in the parent component (App)
    // Here, you might want to implement a more robust update logic (e.g., using user IDs)
    setSelectedUser(updatedUser);
  };

  return (
    <div className='dashboard-container'>
      <div className='user-list'>
        <h2>All Profiles</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index} onClick={() => setSelectedUser(user)}>
              {user.username}
            </li>
          ))}
        </ul>
      </div>
      <UserProfile user={selectedUser} onEditProfile={handleEditProfile} />
    </div>
  );
};

export default UserDashboard;
