import React, { useState } from 'react';

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
            <p>Delivery Status:{orderData.status}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderTrackView;
