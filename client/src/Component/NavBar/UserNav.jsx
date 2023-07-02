import React from 'react'

const UserNav = () => {
  return (
    <div><nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
    <a
      href="index.html"
      className="navbar-brand d-flex align-items-center px-4 px-lg-5"
    >
      {/* <h2 class="m-0 text-primary"><i class="logo" <img src=""></i>EPICRAFT</h2> */}
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
        <a href="userhome" className="nav-item nav-link active">
          Home
        </a>
        {/* <a href="about.html" class="nav-item nav-link">Upcoming Exhibitions</a> */}
        {/* <div className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Exhibitions
          </a> */}
          {/* <div className="dropdown-menu fade-up m-0">
            <a href="upcomingevents" className="dropdown-item">
              UpcomingEvents
            </a>
            <a href="team.html" className="dropdown-item">
              Past
            </a>
            {/* <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                    <a href="404.html" class="dropdown-item">404 Page</a> */}
          {/* </div> */}
        {/* </div> */}
        <a href="upcomingevents" className="nav-item nav-link">
          Exhibitions
        </a>


        <div className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Orders
          </a>
          <div className="dropdown-menu fade-up m-0">
            <a href="ordertrackview" className="dropdown-item">
              TrackOrder
            </a>
            <a href="myorder" className="dropdown-item">
              Myorders
            </a>
            {/* <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                    <a href="404.html" class="dropdown-item">404 Page</a> */}
          </div>
        </div>


        {/* <a href="service.html" class="nav-item nav-link">Services</a> */}
        <div className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Discover
          </a>
          <div className="dropdown-menu fade-up m-0">
            <a href="not" className="dropdown-item">
              View your Notifications
            </a>
            <a href="customize" className="dropdown-item">
              Customize Request
            </a>
            {/* <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                    <a href="404.html" class="dropdown-item">404 Page</a> */}
          </div>
        </div>
        <a href="join" className="nav-item nav-link">
          Join
        </a>
        <a href="chatuserwithartistinuser" className="nav-item nav-link">
          Chat
        </a>
        <a href="cart" className="nav-item nav-link">
        <i class="fa fa-shopping-cart" aria-hidden="true" style={{color:'black'}}></i>
        </a>
        {/* <a href="contact.html" className="nav-item nav-link">
          LogOut
        </a> */}


        <div className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
           My Profile
          </a>
          <div className="dropdown-menu fade-up m-0">
            <a href="UserChangePwd" className="dropdown-item">
            Change Password
            </a>
            <a href="userhome" className="dropdown-item">
            Logout
            </a>
            {/* <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                    <a href="404.html" class="dropdown-item">404 Page</a> */}
          </div>
        </div>
      </div>
      
      {/* <a href="" class="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Chat<i class="bi bi-cart" style="width: 2rem;"></i></a> */}
    </div>
  </nav>
  </div>
  )
}

export default UserNav