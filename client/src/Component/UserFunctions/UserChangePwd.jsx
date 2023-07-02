import React from 'react'

const UserChangePwd = () => {
  return (
    <div><div className="container">
    <div className="changecard">
      <h1 className="card-title" style={{textAlign:'center'}}>Change Password</h1>
      <form>
        <div className="form-group">
          <label htmlFor="currentPassword" style={{fontWeight:'bold'}}>Current Password:</label>
          <input
            type="password"
            className="form-control"
            id="currentPassword"
            placeholder="Enter current password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="newPassword" style={{fontWeight:'bold'}}>New Password:</label>
          <input
            type="password"
            className="form-control"
            id="newPassword"
            placeholder="Enter new password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword" style={{fontWeight:'bold'}}>Confirm Password:</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm new password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Change Password
        </button>
      </form>
    </div>
  </div></div>
  )
}

export default UserChangePwd