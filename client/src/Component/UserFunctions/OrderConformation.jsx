import React from 'react';
import UserNav from '../NavBar/UserNav';

const OrderConfirmation = () => {
  const orderId = 'order1233';
  const paymentMethod = 'Credit Card';
  const totalAmount = '$50.00';
  const transactionId = 'ABC123XYZ';

  return (
    <>
    <UserNav/>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh'
    }}>
      <div style={{
        height:'500px',
        width: '800px',
        padding: '20px',
        background: 'lightgray',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
      }}>
        <p style={{
          textAlign: 'center',
          fontSize: '28px',
          fontWeight: 'bold',
          color: 'black',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)'
        }}>
          Thank you for your order!
        </p>
        <p style={{ textAlign: 'center',fontSize:'40px' }}>
          Your order was successfully completed.
        </p>
        <div className='paymentorder' style={{fontSize:"30px",textAlign: 'center'}}>
        <p >
          Payment Method: {paymentMethod}
        </p>
        <p >
          Total Amount: {totalAmount}
        </p>
        <p >
          Transaction ID: {transactionId}
        </p>
        <p >
          Order ID: {orderId}
        </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default OrderConfirmation;
