import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const ArtistReg = () => {
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: '',
    phone: '',
    username: '',
    password: '',
    cpassword: '',
    category: '',
    gender:'',
    address:'',
    dob:''

  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  console.log('value==>', input);

  useEffect(() => {
    axios
      .get('http://localhost:5000/category/view-category')
      .then((response) => {
        setCategory(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  useEffect(() => {
    console.log(formErrors);
    console.log('key', Object.keys(formErrors).length);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(input);
      axios
        .post('http://localhost:5000/register/artistReg', input)
        .then((response) => {
          navigate('/Login');
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
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

  
    if (!values.name) {
      errors.name = 'Name is required!';
    }
    if (!values.username) {
      errors.username = 'User Name is required!';
    }
    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format!';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    }
    if (!values.cpassword) {
      errors.cpassword = 'Confirmation Password is required';
    }
    
    if (values.password !== values.cpassword) {
      errors.cpassword = 'Enter the same password';
    }
    if (!values.category) {
      errors.category = 'Select any category';
    }
    if (!values.phone) {
      errors.phone = 'Phone number is required!';
    } else if (!phoneRegex.test(values.phone)) {
      errors.phone = 'Enter a valid 10-digit phone number starting with 6-9';
    }
    if(!values.gender){
      errors.gender = 'Select any gender';
    }
    if(!values.address){
      errors.address = 'please enter address';
    }
    if(!values.dob){
      errors.dob = 'Enter date of birth';
    }
  
    return errors;
  };
  

  const setRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput({ ...input, [name]: value });
    console.log(input);
  };

  const registersubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(input));
    setIsSubmit(true);
  };

  return (
    <div className="custom-body-class">
      <ToastContainer />
      <div className="custom-wrapper">
        <div className="custom-inner">
          <form action="">
            <h3 className="custom-form-title">Artist Registration</h3>
            <div className="custom-form-wrapper">
              <label htmlFor="custom-fname">Name</label>
              <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.name}
              </span>
              <input type="text" name="name" onChange={setRegister} className="custom-form-control" required/>
            </div>
            <div className="custom-form-wrapper">
              <label htmlFor="custom-fname">DOB</label>
              <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.dob}
              </span>
              <input type="date" name="dob" onChange={setRegister} className="custom-form-control" />
            </div>
            <div className="custom-form-wrapper">
              <label htmlFor="custom-fname">Address</label>
              <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.address}
              </span>
              <textarea name="address" onChange={setRegister} className="custom-form-control" ></textarea>
            </div>
            <div className="custom-form-wrapper">
              <label htmlFor="custom-gender">Gender</label>
              <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.gender}
              </span>
              <select name="gender" onChange={setRegister} className="custom-form-control">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="custom-form-wrapper">
              <label htmlFor="custom-password">Username</label>
              <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.username}
              </span>
              <input type="text" name="username" onChange={setRegister} className="custom-form-control" />
            </div>
            <div className="custom-form-wrapper">
              <label htmlFor="custom-password">Password</label>
              <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.password}
              </span>
              <input type="password" name="password" onChange={setRegister} className="custom-form-control" />
            </div>
            <div className="custom-form-wrapper">
              <label htmlFor="custom-password">Confirm Password</label>
              <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.cpassword}
              </span>
              <input type="password" name="cpassword" onChange={setRegister} className="custom-form-control" />
            </div>
            <div className="custom-form-wrapper">
              <label htmlFor="custom-category">Category</label>
              <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.category}
              </span>
              <select name="category" onChange={setRegister} className="custom-form-control">
                <option value="">Select category</option>
                {category.map((data) => (
                  <option key={data._id} value={data._id}>
                    {data.categoryname}
                  </option>
                ))}
              </select>
            </div>
            <div className="custom-form-wrapper">
              <label htmlFor="custom-confirm-password">Mobile</label>
              <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.phone}
              </span>
              <input type="tel" name="phone" onChange={setRegister} onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key) || event.target.value.length >= 10) {
                    event.preventDefault();
                  }
                }}
                required
    className="custom-form-control"/>
            </div>
            <div className="custom-form-wrapper">
              <label htmlFor="custom-email">Email</label>
              <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.email}
              </span>
              <input type="email" name="email" onChange={setRegister} className="custom-form-control" />
            </div>

            <div className="custom-checkbox">
              <label>
                <input type="checkbox" id="custom-terms-checkbox" />
                I accept the Terms of Use &amp; Privacy Policy.
                <span className="custom-checkmark"></span>
              </label>
            </div>
            <button className="custom-register-button" onClick={registersubmit}>
              Register Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ArtistReg;
