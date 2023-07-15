import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function AddressPaymentCheckoutForm() {
  const navigate = useNavigate()
  const [category, setCategory] = useState([]);
  const[inputs, setinputs]=useState([]);
  console.log("value==>",inputs);
  const setRegister=(event)=>{
    
    const name=event.target.name;
    const value=event.target.value;
    setinputs({...inputs,[name]:value});
    console.log(inputs);
  }
  const login_id=localStorage.getItem('login_id')
  const registersubmit =(event)=>{
    
    event.preventDefault();
    axios.post('http://localhost:5000/pay/billingaddress',inputs).then((response)=>{
      navigate('/orderconform')
    })
   

  }
  return (
    <div className="Addressrow">
    <div className="Addresscol-75">
      <div className="Addresscontainer">
        <form action="">
          <div className="Addressrow">
            <div className="Addresscol-50">
              <h3>Billing Address</h3>
              <label htmlFor="fname">
                <i className="fa fa-user" /> Full Name
              </label>
              <input
                type="text"
                id="fname"
                name="name"
                placeholder="John M. Doe"
                onChange={setRegister}/>
              <label htmlFor="email">
                <i className="fa fa-envelope" /> Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="john@example.com" onChange={setRegister}
              />
              <label htmlFor="adr">
                <i className="fa fa-address-card-o" /> Address
              </label>
              <input
                type="text"
                id="adr"
                name="address"
                placeholder="542 W. 15th Street"onChange={setRegister}
              />
              <label htmlFor="city">
                <i className="fa fa-institution" /> City
              </label>
              <input type="text" id="city" name="city" placeholder="New York"onChange={setRegister} />
              <div className="Addressrow">
                <div className="Addresscol-50">
                  <label htmlFor="state">State</label>
                  <input type="text" id="state" name="state" placeholder="NY" onChange={setRegister}/>
                </div>
                <div className="Addresscol-50">
                  <label htmlFor="zip">Zip</label>
                  <input type="text" id="zip" name="zipcode" placeholder={10001} onChange={setRegister} />
                </div>
              </div>
            </div>
            <div className="Addresscol-50">
              <h3>Payment</h3>
              <label htmlFor="fname">Accepted Cards</label>
              <div className="icon-container">
            <i className="fab fa-cc-visa icon" style={{ fontSize: "40px", color: "navy" }} />
            <i className="fab fa-cc-amex icon" style={{ fontSize: "40px", marginLeft:'20px',color: "blue" }} />
            <i className="fab fa-cc-mastercard icon" style={{ fontSize: "40px",marginLeft:'20px', color: "red" }} />
            <i className="fab fa-cc-discover icon" style={{ fontSize: "40px",marginLeft:'20px', color: "orange" }} />
          </div>
              <label htmlFor="cname">Name on Card</label>
              <input
                type="text"
                id="cname"
                name="nameoncard"
                placeholder="John More Doe" onChange={setRegister}
              />
              <label htmlFor="ccnum">Credit card number</label>
              <input
                type="text"
                id="ccnum"
                name="creditcardnumb"
                placeholder="1111-2222-3333-4444" onChange={setRegister}
              />
              <label htmlFor="expmonth">Exp Month</label>
              <input
                type="text"
                id="expmonth"
                name="Expmonth"
                placeholder="September" onChange={setRegister}
              />
              <div className="Addressrow">
                <div className="Addresscol-50">
                  <label htmlFor="expyear">Exp Year</label>
                  <input
                    type="text"
                    id="expyear"
                    name="ExpYear"
                    placeholder={2018} onChange={setRegister}
                  />
                </div>
                <div className="Addresscol-50">
                  <label htmlFor="cvv">CVV</label>
                  <input type="text" id="cvv" name="cvv" placeholder={352} onChange={setRegister} />
                </div>
              </div>
            </div>
          </div>
         
       
          <a href="orderconform" class="Addressbtn" style={{textAlign:'center'}} onClick={registersubmit}>Continue to checkout</a>



        </form>
      </div>
    </div>
  
  </div>
  
  );
}

export default AddressPaymentCheckoutForm;
