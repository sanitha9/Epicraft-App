import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';




const ReservePayment = () => {
  
  const { id } = useParams();
  const { exid} = useParams();

  const login_id = localStorage.getItem('login_id');
 const navigate = useNavigate()
  const [category, setCategory] = useState([]);
  const[inputs, setinputs]=useState({


    login_id: login_id,
    price: id,
    exhibn_id:exid,
    
});
  console.log("value==>",inputs);
  const setRegister=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setinputs({...inputs,[name]:value});
    console.log(inputs);
  }
  const registersubmit =(event)=>{
    event.preventDefault();
    axios.post('http://localhost:5000/reservepay/reservepayments',inputs).then((response)=>{
      navigate('/userhome')
    })
   

  }


  return (
    <div className="container"style={{width:"642px"}} >
      <div className="box">
        <div className="Addresscol-50">
          <h3>Payment</h3>
          <label htmlFor="fname">Accepted Cards</label>
          <div className="icon-container">
            <i className="fab fa-cc-visa icon" style={{ fontSize: "40px", color: "navy" }} />
            <i className="fab fa-cc-amex icon" style={{ fontSize: "40px", marginLeft: '20px', color: "blue" }} />
            <i className="fab fa-cc-mastercard icon" style={{ fontSize: "40px", marginLeft: '20px', color: "red" }} />
            <i className="fab fa-cc-discover icon" style={{ fontSize: "40px", marginLeft: '20px', color: "orange" }} />
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
            name="creditcardnumber"
            placeholder="1111-2222-3333-4444" onChange={setRegister}
          />
          <label htmlFor="expmonth">Exp Month</label>
          <input
            type="text"
            id="expmonth"
            name="ExpMonth"
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
            <div className="Addresscol-50">
              <label htmlFor="cvv">price</label>
              <input type="text" id="cvv" name="price" placeholder={inputs.price} onChange={setRegister} />
            </div>
          </div>
        </div>

        <div>
          <input
            type="submit"
            value="Continue to checkout"
            className="Addressbtn" onClick={registersubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default ReservePayment;
