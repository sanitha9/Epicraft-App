import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate= useNavigate()
  const[input,setInput]=useState({});



 
console.log("value==>",input);
const setRegister = (event) =>{
  const name=event.target.name;
  const value=event.target.value;
  setInput({...input,[name]:value});
  console.log(input);

}


const registersubmit = (event) => {
  event.preventDefault();
  console.log(input);
  axios.post('http://localhost:5000/login/login', input).then((data) => {
    console.log(data);
    if (data.data.role =='1') {
      localStorage.setItem('user_id', data.data.user_id)
      localStorage.setItem('login_id', data.data.login_id)
      localStorage.setItem('role', data.data.role)
      // localStorage.setItem('name', data.data.name);
      navigate('/userhome');
    } else if(data.data.role =='2') {
      localStorage.setItem('artist_id', data.data.artist_id)
      localStorage.setItem('login_id', data.data.login_id)
      localStorage.setItem('role', data.data.role)
      // localStorage.setItem('role', data.data.name);
      navigate('/artHome');
    } 

    
}).catch((error)=>{
console.log(error);
})
}
  return (
    <>
      <div className='sani'>
        <div className="background2">
          <div className="shape2" />
          <div className="shape2" />
        </div>
        <form className='login'>
          <h3>Login Here</h3>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Email or Phone" name='username' onChange={setRegister} />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" name='password' onChange={setRegister} />
          <a href="#" >Forgot Password?</a>
          
          

          <button className='loginbutton' onClick={registersubmit}>Log In</button>
         
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
}

export default Login;
