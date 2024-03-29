import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserNav from '../NavBar/UserNav';
import PublicUserFooter from '../Footer/PublicUserFooter';

const OrderTrackView = () => {
  const [orderData, setOrderData] = useState(null);

  const trackOrder = async (trackingNumber) => {
    try {
      const response = await fetch(`http://localhost:5000/pay/view-details/${trackingNumber}`);
      const data = await response.json();
      if (data.success) {
        setOrderData(data.data);
      } else {
        setOrderData(null);
        // Show the toast message when the order ID is not found
        toast.error('Order ID not correct...Make sure you entered the correct ID..', {
          position: 'top-center',
          autoClose: 3000, // Time in milliseconds
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
        });
      }
    } catch (error) {
      console.error('Error fetching order details:', error);
      setOrderData(null);
    }
  };

  const getStatusClass = (status) => {
    // Implement logic to return the appropriate class based on the status (e.g., 'processing', 'shipped', 'delivered')
    // Example: if (status === 'processing') return 'processing-class';
  };

  const getStatusText = (status) => {
    // Implement logic to return the appropriate text based on the status (e.g., 'Processing', 'Shipped', 'Delivered')
    // Example: if (status === 'processing') return 'Processing';
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const trackingNumber = document.getElementById('order-id').value;
    trackOrder(trackingNumber);
  };

  return (
    <>
      <UserNav />
      <div className="orderbody">
        <h1 className="orderh1">User Order Tracking</h1>
        <div className="ordertrack">
          <form className="order-form" onSubmit={handleSubmit}>
            <input type="text" id="order-id" placeholder="Enter Order ID" required />
            <input type="submit" value="Track Order" />
          </form>
        </div>

        {orderData && (
          <div className="order-container">
            <div className="order-status">
              <div className={`status-circle ${getStatusClass(orderData.status)}`} />
              <div className="status-text">{getStatusText(orderData.status)}</div>
            </div>
            <div className="order-details">
              <p>Order ID: {orderData.order_id}</p>
              <p>Product Name: {orderData.artname}</p>
              <p>Price: {orderData.price}</p>
              <p>Estimated Delivery: {orderData.date}</p>
              <p>Shipping Address:</p>
              <p>{orderData.address}</p>
              <p>Delivery Status: {orderData.status}</p>
            </div>
          </div>
        )}
      </div>
      <PublicUserFooter />
      {/* Add the ToastContainer to display the toast messages */}
      <ToastContainer />
    </>
  );
};

export default OrderTrackView;
