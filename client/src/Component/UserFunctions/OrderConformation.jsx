import React, { useEffect, useState } from 'react';
import UserNav from '../NavBar/UserNav';

const OrderConfirmation = () => {
  const id=localStorage.getItem('login_id')
  
  const [order,setOrder] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/pay/view-order/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setOrder(data.data);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

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
        {order.name} Thank you for your order!
        </p>
        <p style={{ textAlign: 'center',fontSize:'40px' }}>
          Your order was successfully completed.
        </p>
        <div className='paymentorder' style={{fontSize:"30px",textAlign: 'center'}}>
        <p >
          {/* Payment Method: {paymentMethod} */}
         Order Date {order.date}
        </p>
        <p >
          Total Amount:{order.price}
        </p>
        <p >
  
        </p>
        <p >
          Order ID: {order.order_id}
        </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default OrderConfirmation;
