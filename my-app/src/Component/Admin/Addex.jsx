import React from 'react'

const Addex = () => {
  return (
    <>
    
    <form className='inner' style={{width:'30%'}}>
      <h3>Upload Exhibition details</h3>
      <label htmlFor="username">Category</label>
      <input type="text" placeholder="Email or Phone" id="username2"/>
      <label htmlFor="password">Date</label>
      <input type="date" placeholder="Password" id="password2" />
      <label htmlFor="password">Upload image</label>
      <input type="file" placeholder="Password" id="password2" />
      <label htmlFor="password">Ticket rate</label>
      <input type="text" placeholder="Password" id="password2" />
      <label htmlFor="password">Description</label>
      <input type="text" placeholder="Password" id="password2" />
      <button>upload</button>
     
      <div className="social2">
        {/* <div className="go2">
          <i className="fab fa-google" /> Google
        </div>
        <div className="fb">
          <i className="fab fa-facebook" /> Facebook
        </div> */}
        
      </div>
    </form>
  
  </>
  
  )
}

export default Addex