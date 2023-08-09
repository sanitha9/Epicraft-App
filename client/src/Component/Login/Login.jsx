import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({});
  const [errors, setErrors] = useState({}); // New state variable for errors

  const setRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput({ ...input, [name]: value });
  };

  const registersubmit = (event) => {
    event.preventDefault();
    setErrors({}); // Clear previous error messages

    // Perform validation
    let hasError = false;
    const newErrors = {};

    if (!input.username) {
      newErrors.username = 'Username is required.';
      hasError = true;
    }

    if (!input.password) {
      newErrors.password = 'Password is required.';
      hasError = true;
    }

    // If there are errors, update the state and return
    if (hasError) {
      setErrors(newErrors);
      return;
    }

    // If no errors, proceed with the API call
    axios
      .post('http://localhost:5000/login/login', input)
      .then((data) => {
        console.log(data);
        if (data.data.role === '1') {
          localStorage.setItem('user_id', data.data.user_id);
          localStorage.setItem('login_id', data.data.login_id);
          localStorage.setItem('role', data.data.role);
          navigate('/userhome');
        } else if (data.data.role === '2') {
          localStorage.setItem('artist_id', data.data.artist_id);
          localStorage.setItem('login_id', data.data.login_id);
          localStorage.setItem('role', data.data.role);
          navigate('/artHome');
        }
        else if (data.data.role === '0') {
         
          localStorage.setItem('login_id', data.data.login_id);
          localStorage.setItem('role', data.data.role);
          navigate('/admin');
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.response.data.message, {
          // ... toast configuration ...
        });
      });
  };

  return (
    <>
      <div className="sani">
        <ToastContainer />
        <div className="background2">
          <div className="shape2" />
          <div className="shape2" />
        </div>
        <form className="login">
          <h3>Login Here</h3>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Email or Phone" name="username" onChange={setRegister} />
          {errors.username && <span className="error error-red">{errors.username}</span>}

          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" name="password" onChange={setRegister} />
          {errors.password && <span className="error error-red">{errors.password}</span>}

          {/* <a href="#">Forgot Password?</a> */}
          <button className="loginbutton" onClick={registersubmit}>
            Log In
          </button>
          <div className="social2">
            {/* <div className="go2">
              <i className="fab fa-google" /> Google
            </div>
            <div className="fb">
              <i className="fab fa-facebook" /> Facebook
            </div> */}
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
