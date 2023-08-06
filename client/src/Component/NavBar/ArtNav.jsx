import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ArtNav = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('artist_id');
    localStorage.removeItem('login_id');
    localStorage.removeItem('role');
    navigate('/');
  };

  const artid = localStorage.getItem('artist_id');
  if (!artid) {
    navigate('/login');
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <Link to="/artHome" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
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
            <Link to="/artHome" className="nav-item nav-link active">
              Home
            </Link>

            <div className="nav-item dropdown">
              <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Exhibitions
              </Link>
              <div className="dropdown-menu fade-up m-0">
                <Link to="/artUpcoming" className="dropdown-item">
                  UpcomingEvents
                </Link>
                <Link to="/createevent" className="dropdown-item">
                  Create an Events
                </Link>
              </div>
            </div>
            <div className="nav-item dropdown">
              <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Discover
              </Link>
              <div className="dropdown-menu fade-up m-0">
                <Link to="/artistnotif" className="dropdown-item">
                  View your Notifications
                </Link>
                {/* <Link to="/artCustomizeRequestView" className="dropdown-item">
                  Customized Request
                </Link> */}
              </div>
            </div>
            <div className="nav-item dropdown">
              <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Community
              </Link>
              <div className="dropdown-menu fade-up m-0">
                <Link to="/Group" className="dropdown-item">
                  Create Group
                </Link>
                <Link to="/GroupmembersManage" className="dropdown-item">
                  managegroup
                </Link>
              </div>
            </div>

            {/* <Link to="/ReviewView" className="nav-item nav-link">
              Reviews
            </Link> */}
            <Link to="/testmsg" className="nav-item nav-link">
              Messages
            </Link>
            <Link to="/" onClick={logout} className="nav-item nav-link">
              LogOut
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default ArtNav;
