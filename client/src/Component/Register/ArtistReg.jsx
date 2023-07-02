import React, { useState } from 'react'
import axios from 'axios'
import{ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const ArtistReg = () => {
 
  const navigate = useNavigate()
  const[input,setInput]=useState({});

  console.log(("value==>",input));



const setRegister=(event)=>{
  const name=event.target.name;
  const value=event.target.value;
  setInput({...input,[name]:value});
  console.log(input);
}


const registersubmit=(event)=>{
  event.preventDefault();
  axios.post('http://localhost:5000/register/artistReg',input).then((Response)=>{
    navigate('/Login')
  }).catch((error)=>{
    toast.error(error.response.data.message,{
      position:"top-center",
      autoClose:5000,
      hideProgressBar:false,
      closeOnClick:true,
      pauseOnHover:true,
      draggable:true,
      progress:undefined,
      theme:"colored"  
      });
  })
}


  return (
 <div className='custom-body-class'>
  <ToastContainer/>
    <div className="custom-wrapper">
    <div className="custom-inner">
      <form action="">
        <h3 className="custom-form-title">Artist Registration</h3>
        <div className="custom-form-wrapper">
          <label htmlFor="custom-fname">Name</label>
          <input type="text"name='name' onChange={setRegister}  className="custom-form-control" />
        </div>
        <div className="custom-form-wrapper">
          <label htmlFor="custom-fname">DOB</label>
          <input type="date" name='dob' onChange={setRegister}  className="custom-form-control" />
        </div>
        <div className="custom-form-wrapper">
         <label htmlFor="custom-fname">Address</label>
          <textarea name='address' onChange={setRegister}  className="custom-form-control"></textarea>
           </div>
        <div className="custom-form-wrapper">
          <label htmlFor="custom-gender">Gender</label>
          <select name='gender' onChange={setRegister}  className="custom-form-control">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="custom-form-wrapper">
          <label htmlFor="custom-password">username</label>
          <input
            type="text"
            name='username' onChange={setRegister}  
            className="custom-form-control"
          />
        </div>
        <div className="custom-form-wrapper">
          <label htmlFor="custom-password">Password</label>
          <input
            type="password"
            name='password' onChange={setRegister} 
            className="custom-form-control"
          />
        </div>
        <div className="custom-form-wrapper">
          <label htmlFor="custom-password">ConformPassword</label>
          <input
            type="password"
            name='conformPassword' onChange={setRegister} 
            className="custom-form-control"
          />
        </div>
        <div className="custom-form-wrapper">
          <label htmlFor="custom-category">Category</label>
          <select name='category' onChange={setRegister}  className="custom-form-control">
            <option value="Drawings">Drawings</option>
            <option value="Paintings">Paintings</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="custom-form-wrapper">
          <label htmlFor="custom-confirm-password">Mob</label>
          <input
            type="tel"
            name='mob' onChange={setRegister} 
            className="custom-form-control"
          />
        </div>
        <div className="custom-form-wrapper">
  <label htmlFor="custom-email">Email</label>
  <input type="email" name='email' onChange={setRegister}  className="custom-form-control" />
</div>

        <div class="custom-checkbox">
  <label>
    <input type="checkbox" id="custom-terms-checkbox" />
    I accept the Terms of Use &amp; Privacy Policy.
    <span class="custom-checkmark"></span>
  </label>
</div>
        <button className="custom-register-button" onClick={registersubmit} >Register Now</button>
      </form>
    </div>
  </div>
  </div>
  

  
  )
}

export default ArtistReg