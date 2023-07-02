import React from 'react'

const Myorders = () => {
  return (
   <>
   
   <div className="orderlistbody">
  <h1 className="orderlisth1">My Order View List</h1>
  <ul className="order-list">
    <li className="order-item">
      <img src="/img/bg1.jpg" alt="Product 1" />
      <div>
        <h2>Order #1</h2>
        <p className="product">Product: Product 1</p>
        <p className="price">Price: $10.99</p>
        <p className="quantity">Quantity: 2</p>
      </div>
    </li>
    <li className="order-item">
      <img src="/img/bg1.jpg" alt="Product 2" />
      <div>
        <h2>Order #2</h2>
        <p className="product">Product: Product 2</p>
        <p className="price">Price: $19.99</p>
        <p className="quantity">Quantity: 1</p>
      </div>
    </li>
    <li className="order-item">
      <img src="/img/bg1.jpg" alt="Product 3" />
      <div>
        <h2>Order #3</h2>
        <p className="product">Product: Product 3</p>
        <p className="price">Price: $5.99</p>
        <p className="quantity">Quantity: 4</p>
      </div>
    </li>
  </ul>
</div>

   </>
  )
}

export default Myorders