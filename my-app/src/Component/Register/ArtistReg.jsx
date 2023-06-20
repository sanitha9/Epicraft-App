import React from 'react'

const ArtistReg = () => {
  return (
 <div className='custom-body-class'>
    <div className="custom-wrapper">
    <div className="custom-inner">
      <form action="">
        <h3 className="custom-form-title">Registration Form</h3>
        <div className="custom-form-wrapper">
          <label htmlFor="custom-fname">Name</label>
          <input type="text" id="custom-fname" className="custom-form-control" />
        </div>
        <div className="custom-form-wrapper">
          <label htmlFor="custom-fname">DOB</label>
          <input type="date" id="custom-fname" className="custom-form-control" />
        </div>
        <div className="custom-form-wrapper">
          <label htmlFor="custom-gender">Gender</label>
          <select id="custom-gender" className="custom-form-control">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="custom-form-wrapper">
          <label htmlFor="custom-password">username</label>
          <input
            type="text"
            id="custom-password"
            className="custom-form-control"
          />
        </div>
        <div className="custom-form-wrapper">
          <label htmlFor="custom-password">Password</label>
          <input
            type="password"
            id="custom-password"
            className="custom-form-control"
          />
        </div>
        <div className="custom-form-wrapper">
          <label htmlFor="custom-password">ConformPassword</label>
          <input
            type="password"
            id="custom-password"
            className="custom-form-control"
          />
        </div>
        <div className="custom-form-wrapper">
          <label htmlFor="custom-gender">Category</label>
          <select id="custom-gender" className="custom-form-control">
            <option value="male">Drawings</option>
            <option value="female">Paintings</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="custom-form-wrapper">
          <label htmlFor="custom-confirm-password">Mob</label>
          <input
            type="text"
            id="custom-confirm-password"
            className="custom-form-control"
          />
        </div>

        <div class="custom-checkbox">
  <label>
    <input type="checkbox" id="custom-terms-checkbox" />
    I accept the Terms of Use &amp; Privacy Policy.
    <span class="custom-checkmark"></span>
  </label>
</div>
        <button className="custom-register-button" >Register Now</button>
      </form>
    </div>
  </div>
  </div>
  

  
  )
}

export default ArtistReg