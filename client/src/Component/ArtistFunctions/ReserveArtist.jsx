import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ReserveArtist = () => {
  const { id } = useParams();
  const { coid } = useParams();
  const login_id = localStorage.getItem('login_id');
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [inputs, setInputs] = useState({
    login_id: login_id,
    exhibn_id:coid,
    price: id,
    adults: 1, // default value for adults
    children: 0, // default value for children
    amount: 0, // initialize the amount with 0
    email: '',
    phone: '',
    checkout:'',
    checkin:'',
    
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
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

  // const registersubmit = (event) => {
  //   event.preventDefault();
  //   axios.post('http://localhost:5000/reserve/reserve', inputs)
  //     .then((response) => response.data)
  //     .then((data) => {
  //       if (data.success) {
  //         setCategory(data.data);
  //         navigate(`/reservepay/${inputs.exhibn_id}/${id}`); // Use navigate with the correct URL
  //       }
  //     })
  //     .catch((error) => {
  //       console.log('Error:', error);
  //     });
  // };
  

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      axios.post('http://localhost:5000/reserve/reserve', inputs)
      .then((response) => response.data)
           .then((data) => {
            if (data.success) {
              setCategory(data.data);
              navigate(`/reservepay/${inputs.exhibn_id}/${id}`); // Use navigate with the correct URL
            }
           })
        .catch((error) => {
          toast.error(error.response.data.message, {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        });
    }
  }, [formErrors, isSubmit, inputs, navigate]);

  const validate = (values) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

  
   
    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format!';
    }
    if (!values.checkout) {
      errors.checkout = 'Select the checkout date';
    }
    if (!inputs.adults || inputs.adults < 1 || inputs.adults > 10) {
      errors.adults = 'Select a valid number of adults (between 1 and 10).';
    }
  
    // if (!inputs.children || inputs.children < 1 || inputs.children > 10) {
    //   errors.children = 'Select a valid number of children (between 0 and 10).';
    // }
   
    if (!values.checkin) {
      errors.checkin = 'Select the checkin date';
    }  
    if (!values.phone) {
      errors.phone = 'Phone number is required!';
    } else if (!phoneRegex.test(values.phone)) {
      errors.phone = 'Enter a valid 10-digit phone number starting with 6-9';
    }
  
  
  
   

    return errors;
  };

  const registersubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(inputs));
    setIsSubmit(true);
  };





  console.log(inputs);
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
                        <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.checkin}
              </span>
                        <input className="reserveform-control" type="date" required="" name="checkin" onChange={setRegister} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="reserveform-group">
                        <span className="reserveform-label">Check Out</span>
                        <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.checkout}
              </span>
                        <input className="reserveform-control" type="date" name="checkout" required="" onChange={setRegister} />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="reserveform-group">
                        <span className="reserveform-label">Adults</span>
                        <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.adults}
              </span>
                        <select className="reserveform-control" name="adults" onChange={setRegister}>
                        {/* <option>0</option> */}
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
                        {/* <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.children}
              </span> */}
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
                  <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.email}
              </span>
                    <span className="reserveform-label">Email</span>
                    <input className="reserveform-control" type="email" placeholder="Enter your email" name="email" onChange={setRegister} />
                  </div>
                  <div className="reserveform-group">
                  <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.phone}
              </span>
                    <span className="reserveform-label">Phone</span>
                    <input className="reserveform-control" type="tel" placeholder="Enter your phone number" name="phone" onChange={setRegister} onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key) || event.target.value.length >= 10) {
                    event.preventDefault();
                  }
                }}
                required/>
                  </div>
                  <div className="reserveform-group">
                    <span className="reserveform-label">Amount</span>
                    <input className="reserveform-control" type="text" name="amount" value={inputs.amount} readOnly />
                  </div>
                  {/* <Link to={`/reserve/${userSlice.priceSeat}`}> */}
                  <Link to={`/reservepayartist/${inputs.exhibn_id}/${id}`} className="reservesubmit-btn" style={{ textAlign: 'center' }} onClick={registersubmit}>
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

export default ReserveArtist;
