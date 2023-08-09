import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import UserNav from '../NavBar/UserNav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Payment = () => {


  const login_id = localStorage.getItem('login_id');
  const navigate = useNavigate()
  const [category, setCategory] = useState([]);
  const[inputs, setinputs]=useState({
    login_id: login_id,
    // price: id,
    // exhibn_id:exid,
    cardno:'',
    cvv: '',
    name: '',
    month: '',
    
});
const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  console.log("value==>",inputs);
  const setRegister=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setinputs({...inputs,[name]:value});
    console.log(inputs);
  }
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      axios.post('http://localhost:5000/customizepay/payment',inputs).then((response)=>{
        navigate('/conformCustomize')
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
    

    if (!values.cardno) {
      errors.cardno = 'cardno is required!';
    }
    if (!values.name) {
      errors.name = 'Please enter the name!';
    }
    
    if (!values.month) {
      errors.month = 'month/year is required!';
    }
   
    
    if (!values.cvv) {
      errors.cvv = 'Enter cvv number!';
    }
   
    

    return errors;
  };
  const registersubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(inputs));
    setIsSubmit(true);
  };
  return (
    <div className="container">
      <div className="row">
       
           
        <div className="col-lg-4 mb-lg-0 mb-3">
     
        </div>
       
        <div className="col-12 mt-4">
          <div className="card p-3">
            <p className="mb-0 fw-bold h4">Payment Methods</p>
          </div>
        </div>
        <div className="col-12">
          <div className="card p-3">
            <div className="card-body border p-0">
              <p>
                <a
                  className="btn btn-primary w-100 h-100 d-flex align-items-center justify-content-between"
                  data-bs-toggle="collapse"
                  href="#paypalCollapse"
                  role="button"
                  aria-expanded="true"
                  aria-controls="paypalCollapse"
                >
                  <span className="fw-bold">PayPal</span>
                  <span className="fab fa-cc-paypal"></span>
                </a>
              </p>
              <div className="collapse p-3 pt-0" id="paypalCollapse">
                
             
              </div>
            </div>
            <div className="card-body border p-0">
              <p>
                <a
                  className="btn btn-primary p-2 w-100 h-100 d-flex align-items-center justify-content-between"
                  data-bs-toggle="collapse"
                  href="#creditCardCollapse"
                  role="button"
                  aria-expanded="true"
                  aria-controls="creditCardCollapse"
                >
                  <span className="fw-bold">Credit Card</span>
                  <span>
                    <span className="fab fa-cc-amex"></span>
                    <span className="fab fa-cc-mastercard"></span>
                    <span className="fab fa-cc-discover"></span>
                  </span>
                </a>
              </p>
              <div className="collapse show p-3 pt-0" id="creditCardCollapse">
                <div className="row">
                
                  <div className="col-lg-7">
                    <form action="" className="form">
                      <div className="row">
                        <div className="col-12">
                          <div className="form__div">
                            <input type="text" className="form-control" placeholder=" " name="cardno" onChange={setRegister}/>
                            <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.cardno}
              </span>
                            <label htmlFor="" className="form__label">
                              Card Number
                            </label> 
                          </div>
                        </div>

                        <div className="col-6">
                          <div className="form__div">
                            <input type="text" className="form-control" placeholder=" " name="month" onChange={setRegister} />
                            <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.month}
              </span>
                            <label htmlFor="" className="form__label">
                              MM / yy
                            </label>
                          </div>
                        </div>

                        <div className="col-6">
                          <div className="form__div">
                            <input type="number" className="form-control" placeholder=" " name="cvv" onChange={setRegister}
                             onKeyPress={(event) => {
                              if (!/[0-9]/.test(event.key) || event.target.value.length >= 3) {
                                event.preventDefault();
                              }
                            }}
                            required/>
                            <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.cvv}
              </span>
                            <label htmlFor="" className="form__label">
                              CVV code
                            </label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form__div">
                            <input type="text" className="form-control" placeholder=" " name="name" onChange={setRegister} />
                            <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.name}
              </span>
                            <label htmlFor="" className="form__label">
                              Name on the card
                            </label>
                          </div>
                        </div>
                        <div className="col-6">
  <div className="form__div">
    <input
      type="text"
      className="form-control"
      placeholder=" "
      name="price"
      defaultValue="1500" // Replace "100" with your desired fixed price
      readOnly // Add the readOnly attribute to make the input field readonly
    />
    <label htmlFor="" className="form__label">
      Customized Price
    </label>
  </div>
</div>
                        {/* <div className="col-12">
                          <button type="submit" className="btn btn-primary w-100">
                            Submit
                          </button>
                        </div> */}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
        <div className="col-12 text-center"> {/* Add text-center class */}
          <div className="btn btn-primary payment" onClick={registersubmit}>Make Payment</div>
         </div> 
        </div>
      </div>
    </div>
  );
};

export default Payment;
