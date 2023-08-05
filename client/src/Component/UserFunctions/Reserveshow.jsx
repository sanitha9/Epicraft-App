import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Reserveshow = () => {
  const { id } = useParams();
  const login_id = localStorage.getItem('login_id');
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [inputs, setInputs] = useState({
    login_id: login_id,
    price: id,
    adults: 1, // default value for adults
    children: 0, // default value for children
    amount: 0, // initialize the amount with 0
  });

  useEffect(() => {
    // Calculate the amount when the adults or children inputs change
    const calculateAmount = () => {
      const { adults, children, price } = inputs;
      const totalPrice = parseInt(price) * (parseInt(adults) + parseInt(children));
      setInputs({ ...inputs, amount: totalPrice });
    };

    calculateAmount(); // Calculate the initial amount when the component mounts

    // Clean up function to remove the event listener when the component unmounts
    return () => {
      // Remove the event listener to avoid memory leaks
      setInputs({ ...inputs, amount: 0 }); // Reset the amount to 0 when unmounting
    };
  }, [inputs]);

  const setRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const registersubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/reserve/reserve', inputs).then((response) => {
      navigate('/reservepay');
     
    });
  };

  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Booking Form HTML Template</title>
      <link href="https://fonts.googleapis.com/css?family=Cabin:400,700" rel="stylesheet" />
      <link type="text/css" rel="stylesheet" href="css/bootstrap.min.css" />
      <link type="text/css" rel="stylesheet" href="css/style.css" />
      <div id="reservebooking" className="reservesection">
        <div className="reservesection-center">
          <div className="container" style={{ width: '642px', marginTop: '100px' }}>
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
                        <input className="reserveform-control" type="date" required="" name="checkin" onChange={setRegister} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="reserveform-group">
                        <span className="reserveform-label">Check Out</span>
                        <input className="reserveform-control" type="date" name="checkout" required="" onChange={setRegister} />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="reserveform-group">
                        <span className="reserveform-label">Adults</span>
                        <select className="reserveform-control" name="adults" onChange={setRegister}>
                        <option>0</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
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
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                        <span className="reserveselect-arrow" />
                      </div>
                    </div>
                  </div>
                  <div className="reserveform-group">
                    <span className="reserveform-label">Email</span>
                    <input className="reserveform-control" type="email" placeholder="Enter your email" name="email" onChange={setRegister} />
                  </div>
                  <div className="reserveform-group">
                    <span className="reserveform-label">Phone</span>
                    <input className="reserveform-control" type="tel" placeholder="Enter your phone number" name="phone" onChange={setRegister} />
                  </div>
                  <div className="reserveform-group">
                    <span className="reserveform-label">Amount</span>
                    <input className="reserveform-control" type="text" name="amount" value={inputs.amount} readOnly />
                  </div>
                  {/* <Link to={`/reserve/${userSlice.priceSeat}`}> */}
                  <Link
  to={`/reservepay/${inputs.amount}`}
  className="reservesubmit-btn"
  style={{ textAlign: 'center' }}
   onClick={registersubmit}
>
  Reserve and Pay
</Link>

                  {/* <Link to={`/reservepay/${inputs.amount}`}>" className="reservesubmit-btn" style={{ textAlign: 'center' }} onClick={registersubmit}/>
                  Reserve
                  </Link> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reserveshow;
