import React, { useState } from 'react';
const Login = () => {



  const[input,setInput]=useState({})

const inputChange = (event) =>{
  const{name,value}=event.target
  setInput({...input,[name]:value})

}
const submit=(e)=>{
  e.preventDefault()
  console.log(input);
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
          <input type="text" placeholder="Email or Phone" name='name' onChange={inputChange} />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" name='password' onChange={inputChange} />
          <a href="#" >Forgot Password?</a>
          
          

          <button className='loginbutton' onClick={submit}>Log In</button>
         
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
