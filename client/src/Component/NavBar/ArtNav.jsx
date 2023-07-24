import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ArtNav = () => {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('artist_id')
    localStorage.removeItem('login_id')
    localStorage.removeItem('role')
    navigate('/')
  }
  const artid = localStorage.getItem('artist_id')
  if (!artid) {
    navigate('/login')
  }

 



  return (
    <>
  
  <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
  <a
    href="index.html"
    className="navbar-brand d-flex align-items-center px-4 px-lg-5"
  >
    <h2 className="m-0 text-primary">
      <i className="logo">
        <img src="img/l4.jpg" style={{ width: "4.7rem", height: "auto" }} />
      </i>
      EPICRAFT
    </h2>
  </a>
  <button
    type="button"
    className="navbar-toggler me-4"
    data-bs-toggle="collapse"
    data-bs-target="#navbarCollapse"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarCollapse">
    <div className="navbar-nav ms-auto p-4 p-lg-0">
      <a href="artHome" className="nav-item nav-link active">
        Home
      </a>

      <div className="nav-item dropdown">
        <a
          href="#"
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          Exhibitions
        </a>
        <div className="dropdown-menu fade-up m-0">
          <a href="artUpcoming" className="dropdown-item">
            UpcomingEvents
          </a>
          <a href="createevent" className="dropdown-item">
          Create an Events
          </a>
        </div>
      </div>
      <div className="nav-item dropdown">
        <a
          href="#"
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          Discover
        </a>
        <div className="dropdown-menu fade-up m-0">
          <a href="artistnotif" className="dropdown-item">
            View your Notifications
          </a>
          {/* <a href="artCustomizeRequestView" className="dropdown-item">
            Customized Request
          </a> */}
        </div>
      </div>
      <div className="nav-item dropdown">
        <a
          href="#"
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          Community
        </a>
        <div className="dropdown-menu fade-up m-0">
          <a href="Group" className="dropdown-item">
            Create Group
          </a>
           <a href="GroupmembersManage" className="dropdown-item">
            managegroup
          </a> 
        </div>
      </div>
      
      <a href="ReviewView" className="nav-item nav-link">
        Reviews
      </a>
      <a href="chatartistwithuser" className="nav-item nav-link">
        Chat
      </a>
      <a onClick={logout} className="nav-item nav-link">
        LogOut
      </a>
    </div>
  </div>
</nav>

    </>
  )
}

export default ArtNav