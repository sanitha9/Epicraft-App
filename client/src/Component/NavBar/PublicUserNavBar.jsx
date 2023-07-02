import React from 'react'

const PublicUserNavBar = () => {
  return (
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
      <a href="/" className="nav-item nav-link active">
        Home
      </a>
      <a href="Publicuserabout" className="nav-item nav-link">
        About
      </a>
      {/* <a href="service.html" class="nav-item nav-link">Services</a> */}
      <div className="nav-item dropdown">
        <a
          href="#"
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          Registration
        </a>
        <div className="dropdown-menu fade-up m-0">
          <a href="artistReg" className="dropdown-item">
            Artist
          </a>
          <a href="userReg" className="dropdown-item">
            User
          </a>
          {/* <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                  <a href="404.html" class="dropdown-item">404 Page</a> */}
        </div>
      </div>
      {/* <a href="contact.html" className="nav-item nav-link">
        Contact
      </a> */}
    </div>
    <a href="login" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
      Sign In
      {/* <i className="fa fa-arrow-right ms-3" /> */}
    </a>
  </div>
</nav>



  )
}

export default PublicUserNavBar