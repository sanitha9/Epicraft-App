import React, { useEffect, useState } from 'react';
import UserNav from '../NavBar/UserNav';

const Thanks = () => {
  const id = localStorage.getItem('login_id');
  const [order, setOrder] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/reserve/view-reserve/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setOrder(data.data);
          } else {
            console.error('Error:', data.error);
          }
        })
        .catch((error) => {
          console.error('Fetch Error:', error);
        });
    }
  }, [id]);

  return (
    <>
      <UserNav />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <div
          style={{
            height: '500px',
            width: '800px',
            padding: '20px',
            background: '#f7f7f7',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: '36px',
              fontWeight: 'bold',
              color: '#333',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
            }}
          >
            Thank you for your Reservation!
          </p>
          {order ? (
            <>
              <p style={{ fontSize: '24px', marginBottom: '20px' }}>
                Your Reservation was successfully completed.
              </p>
              <p style={{ fontSize: '28px', color: '#007bff', marginBottom: '40px' }}>
                Please note your Booking id is{' '}
                {order && order.length > 0 ? order[0].bookingid : 'N/A'}
              </p>
              <div
                className='paymentorder'
                style={{
                  fontSize: '20px',
                  textAlign: 'center',
                  color: '#555',
                  fontStyle: 'italic',
                }}
              >
                {/* Add any payment order details here */}
                {/* For example: */}
                <p>Thank you for using our service. Your payment has been processed.</p>
                <p>
                  If you have any questions or need assistance, please contact our support team.
                </p>
              </div>
            </>
          ) : (
            <p style={{ fontSize: '24px', color: 'red' }}>
              Loading... or Error occurred while fetching data.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Thanks;
