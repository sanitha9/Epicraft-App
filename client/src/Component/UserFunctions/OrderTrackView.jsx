import React, { useState } from 'react';

const OrderTrackView = () => {
  const [orderData, setOrderData] = useState(null);

  const trackOrder = (event) => {
    event.preventDefault();

    // Get the input value
    const orderId = document.getElementById('order-id').value;

    // Make an API call to fetch the order details based on the order ID
    // Replace this with your actual API call implementation

    // Mock data for demonstration purposes
    const mockOrderData = {
      id: orderId,
      status: 'in-progress',
      estimatedDelivery: 'July 5, 2023',
      address: '1234 Main St, City, State, ZIP'
    };

    setOrderData(mockOrderData);
  };

  // Function to determine the CSS class based on the order status
  const getStatusClass = (status) => {
    switch (status) {
      case 'in-progress':
        return 'status-in-progress';
      case 'delivered':
        return 'status-delivered';
      case 'failed':
        return 'status-failed';
      default:
        return '';
    }
  };

  // Function to determine the status text based on the order status
  const getStatusText = (status) => {
    switch (status) {
      case 'in-progress':
        return 'In Progress';
      case 'delivered':
        return 'Delivered';
      case 'failed':
        return 'Failed';
      default:
        return '';
    }
  };

  return (
    <div className="orderbody">
      <h1 className="orderh1 ">User Order Tracking</h1>
<div className='ordertrack'>
      <form className="order-form" onSubmit={trackOrder}>
        <input type="text" id="order-id" placeholder="Enter Order ID" required />
        <input type="submit" value="Track Order" />
      </form>
      </div>

      {orderData && (
        <div className="order-container">
          <div className="order-status">
            <div className={`status-circle ${getStatusClass(orderData.status)}`}></div>
            <div className="status-text">{getStatusText(orderData.status)}</div>
          </div>
          <div className="order-details">
            <p>Order ID: {orderData.id}</p>
            <p>Estimated Delivery: {orderData.estimatedDelivery}</p>
            <p>Shipping Address:</p>
            <p>{orderData.address}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderTrackView;