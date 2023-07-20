import React, { useEffect, useState } from 'react'

const Myorders = () => {
  const id = localStorage.getItem('login_id');
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/pay/view-myorder/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setOrders(data.data);
        }

      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);
  return (
   <>
   
   <div className="orderlistbody">
  <h1 className="orderlisth1">My Order View List</h1>


  <ul className="order-list">
  {orders.map((order) => (
    <li className="order-item" key={order.order_id}>
      <img src={`/upload/${order.image}`}/>
      <div>
        {/* <h2>Order:{order.order_id}</h2> */}
        <p className="product">Product:{order.artname}</p>
        <p className="price">Price:${order.price}</p>
        <p className="quantity">Quantity:{order.quantity}</p>
        <p className="tamount">Total Amount:{order.totalAmount}</p>
      </div>
    </li>
    /* <li className="order-item">
      <img src="/img/bg1.jpg" alt="Product 2" />
      <div>
        <h2>Order #2</h2>
        <p className="product">Product: Product 2</p>
        <p className="price">Price: $19.99</p>
        <p className="quantity">Quantity: 1</p>
      </div>
    </li> */
    /* <li className="order-item">
      <img src="/img/bg1.jpg" alt="Product 3" />
      <div>
        <h2>Order #3</h2>
        <p className="product">Product: Product 3</p>
        <p className="price">Price: $5.99</p>
        <p className="quantity">Quantity: 4</p>
      </div>
    </li> */
    ))}
  </ul>
</div>

   </>
  )
}

export default Myorders