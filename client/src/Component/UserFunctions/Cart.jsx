import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Cart = () => {
  const id = localStorage.getItem('login_id');
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(`http://localhost:5000/cart/view-cart/${id}`);
        const data = await response.json();

        if (data.success) {
          setProducts(data.data);
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchCartItems();
  }, [id]);

  const handleRemove = (productId) => {
    fetch(`http://localhost:5000/cart/delete-cart/${productId}`, {
      method: 'DELETE',
    });
    setProducts((prevItems) => prevItems.filter((item) => item._id !== productId));
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    fetch(`http://localhost:5000/cart/update-cart/${itemId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantity: newQuantity }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setProducts((prevItems) =>
            prevItems.map((item) => {
              if (item._id === itemId) {
                return {
                  ...item,
                quantity: newQuantity,
                };
              }
              return item;
            })
          );
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  const handleDecrement = (itemId) => {
    setProducts((prevItems) =>
      prevItems.map((item) => {
        if (item._id === itemId) {
          const newQuantity = item.quantity > 1 ? item.quantity - 1 : 1;
          handleUpdateQuantity(itemId, newQuantity);
          return {
            ...item,
            quantity: newQuantity,
          };
        }
        return item;
      })
    );
  };

  const handleIncrement = (itemId) => {
    setProducts((prevItems) =>
      prevItems.map((item) => {
        if (item._id === itemId) {
          const newQuantity = parseInt(item.quantity, 10) + 1;
          handleUpdateQuantity(itemId, newQuantity);
          return {
            ...item,
            quantity: newQuantity,
          };
        }
        return item;
      })
    );
  };
  const calculateSubtotal = () => {
    let subtotal = 0;
    products.forEach((item) => {
      subtotal += item.quantity * item.price;
    });
    return subtotal;
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const total = subtotal + 5;
    return total;
  };
  

  return (
    <div className="cartbody">
      <div className="cardcart">
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
                      src={`/upload/${product.product_image}`}
                      alt="Product"
                    />
                  </div>
                  <div className="col">
                    <div className="row text-muted">{product.artname}</div>
                  </div>
                  <div className="col quantity">
                    <a
                      href="#"
                      onClick={() => handleDecrement(product._id)}
                      className="quantity-btn"
                    >
                      -
                    </a>
                    <a href="#" className="border quantity-number">
                      {product.quantity}
                    </a>
                    <a
                      href="#"
                      onClick={() => handleIncrement(product._id)}
                      className="quantity-btn"
                    >
                      +
                    </a>
                  </div>
                  <div className="col price">
                    {product.price} <button className="btn btn-primary height-auto btn-sm" onClick={() => handleRemove(product._id)}>
            X
          </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="back-to-shop">
            <Link to={"/userhome"}>
              {/* <link to=</link> href="userhome">←</a> */}
              <span className="text-muted">Back to shop</span></Link>
            </div>
          </div>
          <div className="col-md-4 summary">
            <div>
              <h5>
                <b>Summary</b>
              </h5>
            </div>
            <hr />
            <div
              className="summary-row"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px',
                backgroundColor: '#f9f9f9',
                border: '1px solid #ccc',
                borderRadius: '5px',
                marginBottom: '10px',
              }}
            >
              <div style={{ flex: 1, paddingLeft: 0 }}>
                <span className="summary-label">ITEMS</span> {products.length}
              </div>
              <div className="text-right">
                <span className="summary-label">PRICE=</span>{calculateSubtotal()}
              </div>
            </div>

            <p>SHIPPING</p>
            <select>
              <option className="text-muted">Standard Delivery - €5.00</option>
            </select>

            <div
              className="row"
              style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}
            >
              <div className="col">TOTAL PRICE</div>
              <div className="col text-right">€{calculateTotal()}</div>
            </div>

            <button className="cartbtn btn-checkout">
            <Link to={"/addaddress"}>CHECKOUT</Link>
              
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
