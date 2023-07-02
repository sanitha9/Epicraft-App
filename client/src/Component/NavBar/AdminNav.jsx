import React from 'react'

const AdminNav = () => {
  return (
  <>
  
  <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
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
      <a href="admin" className="nav-item nav-link active">
        Home
      </a>
      {/* <a href="about.html" class="nav-item nav-link">Upcoming Exhibitions</a> */}
      <div className="nav-item dropdown">
        {/* <a
          href="#"
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          Exhibitions
        </a> */}
        <div className="dropdown-menu fade-up m-0">
          <a href="addex" className="dropdown-item">
           Add new Events
          </a>
          <a href="upcomingeventadmin" className="dropdown-item">
          UpcomingEvents
          </a>
          {/* <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                  <a href="404.html" class="dropdown-item">404 Page</a> */}
        {/* </div>
      </div>
      <div className="nav-item dropdown">
        <a
          href="#"
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          Manage
        </a>
        <div className="dropdown-menu fade-up m-0">
          <a href="usermanage" className="dropdown-item">
            Users
          </a>
          <a href="artistmanage" className="dropdown-item">
            Artist
          </a>
          <a href="managegroup" className="dropdown-item">
            Group
          </a> */}
          {/* <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                  <a href="404.html" class="dropdown-item">404 Page</a> */}
        </div>
      </div>
      {/* <a href="service.html" class="nav-item nav-link">Services</a> */}
      {/* <div class="nav-item dropdown">
              <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Users</a>
              <div class="dropdown-menu fade-up m-0">
                  <a href="booking.html" class="dropdown-item">View your Notifications</a>
                  <a href="team.html" class="dropdown-item">Customized Request</a>
                   <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                  <a href="404.html" class="dropdown-item">404 Page</a> */}
      {/* </div> -
          </div> */}
      {/* <a href="orders" className="nav-item nav-link">
        Orders
      </a> */}
      {/* <a href="contact.html" className="nav-item nav-link">
        Groups
      </a> */}
      {/* <a href="adnot" className="nav-item nav-link">
        Notifications
      </a> */}
      {/* <a href="review" className="nav-item nav-link">
        Reviews
      </a> */}
      <a href="contact.html" className="nav-item nav-link">
        LogOut
      </a>
    </div>
    {/* <a href="" class="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Chat<i class="bi bi-cart" style="width: 2rem;"></i></a> */}
  </div>
</nav>

  
  </>
  )
}

export default AdminNav