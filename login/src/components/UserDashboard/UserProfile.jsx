import React, { useState } from 'react';
import './UserProfile.css';

const UserProfile = ({ user, onEditProfile }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user || { username: '', email: '', password: '' });

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    onEditProfile(editedUser);
    setEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div className='user-profile'>
      {user ? (
        <>
          <h2>{user.username}'s Profile</h2>
          <div className='profile-info'>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            {isEditing ? (
              <>
                <label>
                  <strong>New Username:</strong>
                  <input
                    type='text'
                    name='username'
                    value={editedUser.username}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  <strong>New Email:</strong>
                  <input
                    type='email'
                    name='email'
                    value={editedUser.email}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  <strong>New Password:</strong>
                  <input
                    type='password'
                    name='password'
                    value={editedUser.password}
                    onChange={handleInputChange}
                  />
                </label>
                <button onClick={handleSaveClick}>Save</button>
              </>
            ) : (
              <button onClick={handleEditClick}>Edit Profile</button>
            )}
          </div>
        </>
      ) : (
        <p>Select a profile to view details.</p>
      )}
    </div>
  );
};

export default UserProfile;

