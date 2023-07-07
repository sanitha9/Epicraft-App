import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BillingAddressPayment = () => {
  const [input, setInput] = useState({});

  const inputChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    // Perform any additional logic or data submission here
  };

  return (
    <div>
      <div className="Addressrow">
        <div className="Addresscol-75">
          <div className="Addresscontainer">
            <form onSubmit={handleSubmit}>
              <div className="Addressrow">
                <div className="Addresscol-50">
                  <h3>Billing Address</h3>
                  <label htmlFor="fname">
                    <i className="fa fa-user" /> Full Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="John M. Doe"
                    onChange={inputChange}
                  />
                  <label htmlFor="email">
                    <i className="fa fa-envelope" /> Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    onChange={inputChange}
                  />
                  <label htmlFor="adr">
                    <i className="fa fa-address-card-o" /> Address
                  </label>
                  <input
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="542 W. 15th Street"
                    onChange={inputChange}
                  />
                  <label htmlFor="city">
                    <i className="fa fa-institution" /> City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="New York"
                    onChange={inputChange}
                  />
                  <div className="Addressrow">
                    <div className="Addresscol-50">
                      <label htmlFor="state">State</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="NY"
                        onChange={inputChange}
                      />
                    </div>
                    <div className="Addresscol-50">
                      <label htmlFor="zip">Zip</label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder={10001}
                        onChange={inputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="Addresscol-50">
                  <h3>Payment</h3>
                  <label htmlFor="fname">Accepted Cards</label>
                  <div className="icon-container">
                    <i
                      className="fab fa-cc-visa icon"
                      style={{ fontSize: '40px', color: 'navy' }}
                    />
                    <i
                      className="fab fa-cc-amex icon"
                      style={{ fontSize: '40px', marginLeft: '20px', color: 'blue' }}
                    />
                    <i
                      className="fab fa-cc-mastercard icon"
                      style={{ fontSize: '40px', marginLeft: '20px', color: 'red' }}
                    />
                    <i
                      className="fab fa-cc-discover icon"
                      style={{ fontSize: '40px', marginLeft: '20px', color:orange" }}
                       />
                  </div>
                  <label htmlFor="cname">Name on Card</label>
                  <input
                    type="text"
                    id="cname"
                    name="cardname"
                    placeholder="John More Doe"
                    onChange={inputChange}
                  />
                  <label htmlFor="ccnum">Credit card number</label>
                  <input
                    type="text"
                    id="ccnum"
                    name="cardnumber"
                    placeholder="1111-2222-3333-4444"
                    onChange={inputChange}
                  />
                  <label htmlFor="expmonth">Exp Month</label>
                  <input
                    type="text"
                    id="expmonth"
                    name="expmonth"
                    placeholder="September"
                    onChange={inputChange}
                  />
                  <div className="Addressrow">
                    <div className="Addresscol-50">
                      <label htmlFor="expyear">Exp Year</label>
                      <input
                        type="text"
                        id="expyear"
                        name="expyear"
                        placeholder={2018}
                        onChange={inputChange}
                      />
                    </div>
                    <div className="Addresscol-50">
                      <label htmlFor="cvv">CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder={352}
                        onChange={inputChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit" className="Addressbtn" style={{ textAlign: 'center' }}>
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingAddressPayment;
