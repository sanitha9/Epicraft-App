import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ReservePayArtist= () => {
  
  const { id } = useParams();
  const { expid} = useParams();

  const login_id = localStorage.getItem('login_id');
 const navigate = useNavigate()
  const [category, setCategory] = useState([]);
  const[inputs, setinputs]=useState({


    login_id: login_id,
    price: id,
    exhibn_id:expid,
    nameoncard:'',
    creditcardnumber: '',
    ExpMonth: '',
    ExpYear: '',
    cvv:'',
    
    price:'',
    
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
  // const registersubmit =(event)=>{
  //   event.preventDefault();
  //   axios.post('http://localhost:5000/reservepay/reservepayment-vishnu',inputs).then((response)=>{
  //     navigate('/thankyou')
  //   })
   

  // }




  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      axios.post('http://localhost:5000/reservepay/reservepayment-vishnu',inputs).then((response)=>{
        navigate('/thankyou')
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
    

    if (!values.nameoncard) {
      errors.nameoncard = 'Name is required!';
    }
    if (!values.creditcardnumber) {
      errors.creditcardnumber = 'Please enter the creditcardnumber!';
    }
    
    if (!values.ExpMonth) {
      errors.ExpMonth = 'ExpMonth is required!';
    }
    if (!values.ExpYear) {
      errors.ExpYear = ' ExpYear is required!';
    }
   
    
    if (!values.cvv) {
      errors.cvv = 'Enter cvv number!';
    }
    if (!values.price) {
      errors.price = 'Please enter the price!';
    }
    

    return errors;
  };
  const registersubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(inputs));
    setIsSubmit(true);
  };
  return (
    <>
  
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
          <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.nameoncard}
              </span>
          <input
            type="text"
            name="nameoncard"
            onChange={setRegister}
          />
          <label htmlFor="ccnum">Credit card number</label>
          <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.creditcardnumber}
              </span>
          <input
            type="text"
     
            name="creditcardnumber"
            onChange={setRegister}
          />
          <label htmlFor="expmonth">Exp Month</label>
          <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.ExpMonth}
              </span>
          <input
            type="text"
            name="ExpMonth"
            placeholder="September" onChange={setRegister}
          />
          <div className="Addressrow">
            <div className="Addresscol-50">
              <label htmlFor="expyear">Exp Year</label>
              <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.ExpYear}
              </span>
              <input
                type="number"
               
                name="ExpYear"
                placeholder={2018} onChange={setRegister} onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key) || event.target.value.length >= 4) {
                    event.preventDefault();
                  }
                }}
                required
              />
            </div>
            <div className="Addresscol-50" style={{marginTop:'-1px'}}>
              <label htmlFor="cvv">CVV</label>
              <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.cvv}
              </span>
              <input type="text"  name="cvv" placeholder={352} onChange={setRegister}  onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key) || event.target.value.length >= 3) {
                    event.preventDefault();
                  }
                }}
                required/>
            </div>
            <div className="Addresscol-50">
              <label htmlFor="cvv">price</label>
              <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.price}
              </span>
              <input type="text"  name="price" placeholder={inputs.price} onChange={setRegister} />
            </div>
          </div>
        </div>

        <div>
        <a href="thankyou">  <input
            type="submit"
            value="Continue to checkout"
            className="Addressbtn" onClick={registersubmit}
          /></a>
        </div>
      </div>
    </div>
    </>
  );
};

export default ReservePayArtist;
