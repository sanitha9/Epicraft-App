import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const UserNav = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('user_id');
    localStorage.removeItem('login_id');
    localStorage.removeItem('role');
    navigate('/login');
  };

  const userid = localStorage.getItem('user_id');
  if (!userid) {
    navigate('/login');
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
          <h2 className="m-0 text-primary">
            <i className="logo">
              <img src="img/l4.jpg" style={{ width: "4.7rem", height: "auto" }} />
            </i>
            EPICRAFT
          </h2>
        </Link>
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
            <Link to="/userhome" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="/upcomingevents" className="nav-item nav-link">
              Exhibitions
            </Link>
            <div className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Orders
              </Link>
              <div className="dropdown-menu fade-up m-0">
                <Link to="/ordertrackview" className="dropdown-item">
                  TrackOrder
                </Link>
                <Link to="/myorder" className="dropdown-item">
                  Myorders
                </Link>
              </div>
            </div>
            <div className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Discover
              </Link>
              <div className="dropdown-menu fade-up m-0">
                {/* <Link to="/not" className="dropdown-item">
                  View your Notifications
                </Link> */}
                <Link to="/customize" className="dropdown-item">
                  Customize Request
                </Link>
              </div>
            </div>
            <Link to="/join" className="nav-item nav-link">
              Join
            </Link>
            {/* <Link to="/chatuserwithartistinuser" className="nav-item nav-link">
              Chat
            </Link> */}
            {/* <Link to="/cart" className="nav-item nav-link">
              <i className="fa fa-shopping-cart" aria-hidden="true" style={{ color: 'black' }} />
            </Link> */}
            <div className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                My Profile
              </Link>
              <div className="dropdown-menu fade-up m-0">
                <Link to="/UserChangePwd" className="dropdown-item">
                  Change Password
                </Link>
                <a onClick={logout} className="dropdown-item">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default UserNav;
