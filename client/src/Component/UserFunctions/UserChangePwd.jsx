import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UserChangePwd = () => {
  const id = localStorage.getItem('login_id');
  const [inputs, setInputs] = useState({
    login_id: id,
    cpassword: '',
    npassword: '',
    copassword: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleReset = () => {
    setInputs({
      cpassword: '',
      npassword: '',
      copassword: '',
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputs.npassword !== inputs.copassword) {
      console.log('New password and confirmation password do not match.');
      return;
    }

    axios
    .post(`http://localhost:5000/login/change-password/${id}`, {
      login_id: inputs.login_id,
      oldPassword: inputs.cpassword,
      newPassword: inputs.npassword,
    })
    .then((response) => {
      if (response.data.success) {
        console.log('Password changed successfully!');
        toast.success('Password changed successfully!', {
          position: 'top-center',
          autoClose: 3000, // Duration of the toast message
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        handleReset();
      } else {
        console.log(response.data.message);
      }
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      });
  };

  return (
   <>
  
   <div className="container">
  <div className="changecard">
  <ToastContainer />
    <h1 className="card-title" style={{textAlign:'center'}}>Change Password</h1>
    <form onSubmit={handleSubmit}>
   
      <div className="form-group">
        <label htmlFor="currentPassword" style={{fontWeight:'bold'}}>Current Password:</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter current password"
          name="cpassword"
          value={inputs.cpassword}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="newPassword" style={{fontWeight:'bold'}}>New Password:</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter new password"
          name="npassword"
          value={inputs.npassword}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword" style={{fontWeight:'bold'}}>Confirm Password:</label>
        <input
          type="password"
          className="form-control"
          placeholder="Confirm new password"
          value={inputs.copassword}
          onChange={handleChange}
          name="copassword"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Change Password
      </button>
    </form>
  </div>
</div>

   </>
  )
}

export default UserChangePwd