import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const UserReg = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: '',
    phone: '',
    username: '',
    password: '',
    cpassword: '',
    gender: '',
    address: '',
    dob: '',
    terms: false, // Added 'terms' for checkbox handling
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const setRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput({ ...input, [name]: value });
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      axios
        .post('http://localhost:5000/register/userreg', input)
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
  }, [formErrors, isSubmit, input, navigate]);

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
    if (!values.phone) {
      errors.phone = 'Phone number is required!';
    } else if (!phoneRegex.test(values.phone)) {
      errors.phone = 'Enter a valid 10-digit phone number starting with 6-9';
    }
    if (!values.gender) {
      errors.gender = 'Select any gender';
    }
    if (!values.address) {
      errors.address = 'Please enter an address';
    }
    if (!values.dob) {
      errors.dob = 'Enter date of birth';
    }
    if (!values.terms) {
      errors.terms = 'You must accept the Terms of Use & Privacy Policy.';
    }

    return errors;
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
            <h3 className="custom-form-title">User Registration</h3>
            <div className="custom-form-wrapper">
              <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.name}
              </span>
              <label htmlFor="custom-fname">Name</label>
              <input
                type="text"
                name="name"
                onChange={setRegister}
                className="custom-form-control"
              />
            </div>
            <div className="custom-form-wrapper">
              <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.dob}
              </span>
              <label htmlFor="custom-fname">DOB</label>
              <input
                type="date"
                name="dob"
                onChange={setRegister}
                className="custom-form-control"
              />
            </div>
            <div className="custom-form-wrapper">
              <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.address}
              </span>
              <label htmlFor="custom-fname">Address</label>
              <textarea
                name="address"
                onChange={setRegister}
                className="custom-form-control"
              ></textarea>
            </div>
            <div className="custom-form-wrapper">
              <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.gender}
              </span>
              <label htmlFor="custom-gender">Gender</label>
              <select
                name="gender"
                onChange={setRegister}
                className="custom-form-control"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="custom-form-wrapper">
              <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.username}
              </span>
              <label htmlFor="custom-fname">User Name</label>
              <input
                type="text"
                name="username"
                onChange={setRegister}
                className="custom-form-control"
              />
            </div>
            <div className="custom-form-wrapper">
              <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.password}
              </span>
              <label htmlFor="custom-email">PassWord</label>
              <input
                type="password"
                name="password"
                onChange={setRegister}
                className="custom-form-control"
              />
            </div>
            <div className="custom-form-wrapper">
              <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.cpassword}
              </span>
              <label htmlFor="custom-password">ConformPassword</label>
              <input
                type="password"
                name="cpassword"
                onChange={setRegister}
                className="custom-form-control"
              />
            </div>
            <div className="custom-form-wrapper">
              <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.phone}
              </span>
              <label htmlFor="custom-confirm-password">Mob</label>
              <input
                type="tel"
                name="phone"
                onChange={setRegister}
                className="custom-form-control" onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key) || event.target.value.length >= 10) {
                    event.preventDefault();
                  }
                }}
                required
              />
            </div>
            <div className="custom-form-wrapper">
              <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.email}
              </span>
              <label htmlFor="custom-email">Email</label>
              <input
                type="email"
                name="email"
                onChange={setRegister}
                className="custom-form-control"
              />
            </div>
            <div className="custom-checkbox">
              <label>
                <input
                  type="checkbox"
                  id="custom-terms-checkbox"
                  name="terms"
                  onChange={setRegister}
                />
                I accept the Terms of Use &amp; Privacy Policy.
                <span className="custom-checkmark"></span>
              </label>
              <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.terms}
              </span>
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

export default UserReg;
