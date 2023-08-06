import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const GroupNav = () => {
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
        <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
          <h2 className="m-0 text-primary">
            {/* <i className="logo">
              <img src="img/l4.jpg" style={{ width: '4.7rem', height: 'auto' }} alt="Logo" />
            </i> */}
            EPICRAFT
          </h2>
        </a>
        <button type="button" className="navbar-toggler me-4" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="userhome" className="nav-item nav-link active">
              Home
            </Link>
            {/* <a href="upcomingevents" className="nav-item nav-link">
              Exhibitions
            </a> */}
            <div className="nav-item dropdown">
              {/* <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                Orders
              </a> */}
              {/* <div className="dropdown-menu fade-up m-0">
                <a href="ordertrackview" className="dropdown-item">
                  TrackOrder
                </a>
                <a href="myorder" className="dropdown-item">
                  Myorders
                </a>
              </div> */}
            </div>
            {/* <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                Discover
              </a>
              <div className="dropdown-menu fade-up m-0">
                <a href="not" className="dropdown-item">
                  View your Notifications
                </a>
                <a href="customize" className="dropdown-item">
                  Customize Request
                </a>
              </div>
            </div> */}
            {/* <a href="join" className="nav-item nav-link">
              Join
            </a> */}
            {/* <Link to="/chat" className="nav-item nav-link">
      Chat
    </Link> */}
            
    <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Artist Profile
              </Link>
            </li>
            {/* <a href="cart" className="nav-item nav-link">
              <i className="fa fa-shopping-cart" aria-hidden="true" style={{ color: 'black' }} />
            </a> */}
          
          </div>
        </div>
      </nav>
    </div>
  );
};

export default GroupNav;
