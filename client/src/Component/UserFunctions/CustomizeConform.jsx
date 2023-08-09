import React from 'react';
import UserNav from '../NavBar/UserNav';

const CustomizeConform = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  };

  const boxStyle = {
    height: '500px',
    width: '800px',
    padding: '20px',
    background: '#f7f7f7',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#333',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
  };

  const subheadingStyle = {
    fontSize: '24px',
    marginBottom: '20px',
  };

  const infoStyle = {
    fontSize: '28px',
    color: '#007bff',
    marginBottom: '40px',
  };

  const paymentOrderStyle = {
    fontSize: '20px',
    textAlign: 'center',
    color: '#555',
    fontStyle: 'italic',
  };

  const paymentInfoStyle = {
    marginBottom: '10px',
  };

  const supportInfoStyle = {
    marginBottom: '20px',
  };

  const errorInfoStyle = {
    fontSize: '24px',
    color: 'red',
  };

  return (
    <>
      <UserNav />
      <div style={containerStyle}>
        <div style={boxStyle}>
          <p style={headingStyle}>Your payment has been successfully processed.Thank you for your Request!</p>

          <>
            <p style={subheadingStyle}>Your customize request is under Processing.</p>
            <p style={infoStyle}>The Artist will soon reply to your request.</p>
            <div style={paymentOrderStyle}>
              <p style={paymentInfoStyle}>Thank you for using our service. </p>
              <p style={supportInfoStyle}>
                If you have any questions or need assistance, please contact our support team.
              </p>
            </div>
          </>

          
        </div>
      </div>
    </>
  );
};

export default CustomizeConform;
