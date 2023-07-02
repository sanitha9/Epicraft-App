import React, { useState } from 'react';

const Cart = () => {
  const [products, setProducts] = useState([
    { id: 1, quantity: 1 },
    { id: 2, quantity: 1 },
    { id: 3, quantity: 1 }
  ]);

  const incrementQuantity = (productId) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
    });
  };

  const decrementQuantity = (productId) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === productId && product.quantity > 1) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
    });
  };

  return (
    <div className='cartbody'>
      <div className="card">
        <div className="row">
          <div className="col-md-8 cart">
            <div className="title">
              <div className="row">
                <div className="col">
                  <h4>
                    <b>Shopping Cart</b>
                  </h4>
                </div>
                <div className="col align-self-center text-right text-muted">
                  {products.length} {products.length === 1 ? 'item' : 'items'}
                </div>
              </div>
            </div>
            {products.map((product) => (
              <div className="row border-top border-bottom" key={product.id}>
                <div className="row main align-items-center">
                  <div className="col-2">
                    <img
                      className="img-fluid"
                      src="https://i.imgur.com/1GrakTl.jpg"
                      alt="Product"
                    />
                  </div>
                  <div className="col">
                    <div className="row text-muted">Shirt</div>
                    <div className="row">Cotton T-shirt</div>
                  </div>
                  <div className="col quantity">
                    <a
                      href="#"
                      onClick={() => decrementQuantity(product.id)}
                      className="quantity-btn"
                    >
                      -
                    </a>
                    <a href="#" className="border quantity-number">
                      {product.quantity}
                    </a>
                    <a
                      href="#"
                      onClick={() => incrementQuantity(product.id)}
                      className="quantity-btn"
                    >
                      +
                    </a>
                  </div>
                  <div className="col price">
                    € 44.00 <span className="close">✕</span>
                  </div>
                </div>
              </div>
            ))}
            <div className="back-to-shop">
              <a href="userhome">←</a>
              <span className="text-muted">Back to shop</span>
            </div>
          </div>
          <div className="col-md-4 summary">
            <div>
              <h5>
                <b>Summary</b>
              </h5>
            </div>
            <hr />
            <div className="summary-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', backgroundColor: '#f9f9f9', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '10px' }}>
  <div style={{ flex: 1, paddingLeft: 0 }}>
    <span className="summary-label">ITEMS</span> {products.length}
  </div>
  <div className="text-right">
    <span className="summary-label">PRICE=</span> 132.00
  </div>
</div>

  <p>SHIPPING</p>
  <select>
    <option className="text-muted">Standard Delivery - €5.00</option>
  </select>


<div className="row" style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}>
  <div className="col">TOTAL PRICE</div>
  <div className="col text-right">€ 137.00</div>
</div>

<button className="cartbtn btn-checkout"><a href="addaddress">CHECKOUT</a></button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
