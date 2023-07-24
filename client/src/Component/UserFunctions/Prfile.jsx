import React from 'react';

const profileChatStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const profileDetailsStyles = {
  display: 'flex',
  alignItems: 'center',
};

const profileImageStyles = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  marginRight: '10px',
};

const nameStyles = {
  fontSize: '1.2rem',
  fontWeight: 'bold',
  margin: '0',
};

const statusStyles = {
  fontSize: '0.9rem',
  margin: '0',
};

const chatIconStyles = {
  width: '30px',
  height: '30px',
};

const ChatProfile = () => {
  return (
    <div style={profileChatStyles}>
      <div style={profileDetailsStyles}>
        <img
          src="path/to/profile-image.jpg"
          alt="User Profile"
          style={profileImageStyles}
        />
        <div>
          <h3 style={nameStyles}>John Doe</h3>
          <p style={statusStyles}>Online</p>
        </div>
      </div>
      <div>
        <img
          src="path/to/chat-icon.png"
          alt="Chat Icon"
          style={chatIconStyles}
        />
      </div>
    </div>
  );
};

const Prfile = () => {
  return (
    <>
      <ChatProfile />
    </>
  );
};

export default Prfile;
