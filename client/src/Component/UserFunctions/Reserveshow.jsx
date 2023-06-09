import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Reserveshow = () => {
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
  const registersubmit =(event)=>{
    event.preventDefault();
    axios.post('http://localhost:5000/reserve/reserve',inputs).then((response)=>{
      
      navigate('/reservepay')
      
    })
   

  }




  return (
    <>
    <>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  {/* The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags */}
  <title>Booking Form HTML Template</title>
  {/* Google font */}
  <link
    href="https://fonts.googleapis.com/css?family=Cabin:400,700"
    rel="stylesheet"
  />
  {/* Bootstrap */}
  <link type="text/css" rel="stylesheet" href="css/bootstrap.min.css" />
  {/* Custom stlylesheet */}
  <link type="text/css" rel="stylesheet" href="css/style.css" />
  {/* HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries */}
  {/* WARNING: Respond.js doesn't work if you view the page via file:// */}
  {/*[if lt IE 9]>
		  
		  
		<![endif]*/}
  <div id="reservebooking" className="reservesection">
    <div className="reservesection-center">
      <div className="container" style={{width:"642px",marginTop:"100px"}}>
        <div className="row">
          <div className="reservebooking-form">
            <div className="reservebooking-bg" />
            <form>
              <div className="reserveform-header">
                <h2>Make your reservation</h2>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="reserveform-group">
                    <span className="reserveform-label">Check In</span>
                    <input className="reserveform-control" type="date" required="" name="checkin" onChange={setRegister}/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="reserveform-group">
                    <span className="reserveform-label">Check Out</span>
                    <input className="reserveform-control" type="date" name="checkout"required=""onChange={setRegister} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="reserveform-group">
                    <span className="reserveform-label">Adults</span>
                    <select className="reserveform-control" name="adults" onChange={setRegister}>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    <span className="reserveselect-arrow" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="reserveform-group">
                    <span className="reserveform-label">Children</span>
                    <select className="reserveform-control" name="children" onChange={setRegister}>
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                    </select>
                    <span className="reserveselect-arrow" />
                  </div>
                </div>
              </div>
              <div className="reserveform-group">
                <span className="reserveform-label">Email</span>
                <input
                  className="reserveform-control"
                  type="email"
                  placeholder="Enter your email" name="email" onChange={setRegister}
                />
              </div>
              <div className="reserveform-group">
                <span className="reserveform-label">Phone</span>
                <input
                  className="reserveform-control"
                  type="tel"
                  placeholder="Enter your phone number"name="phone" onChange={setRegister}
                />
              </div>
              <div className="reserveform-group">
                <span className="reserveform-label">Amount</span>
                <input
                  className="reserveform-control"
                  type="tel" name="amount" onChange={setRegister}
                  
                />
              </div>
              <div className="reserveform-btn">
              <a href='reservepay'className="reservesubmit-btn" onClick={registersubmit}>
                     Reserve
             </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* This templates was made by Colorlib (https://colorlib.com) */}
</>

    
    </>
  )
}

export default Reserveshow