import React from 'react'

const PublicSlider = () => {
  return (
    <div className="container-fluid p-0 mb-0">
    <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="w-100" src="img/bgb.jpg" alt="Image" />
          <div className="carousel-caption d-flex align-items-center">
            <div className="container">
              <div className="row align-items-center justify-content-center justify-content-lg-start">
                <div className="col-10 col-lg-7 text-center text-lg-start">
                  <h6 className="text-white text-uppercase mb-3 animated slideInDown">
                    Arts and crafts..!!!
                  </h6>
                  <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">
                    We touches the people who loves arts and crafts
                  </h1>
                  <a
                    href="login"
                    className="btn btn-primary py-3 px-5 animated slideInDown"
                  >
                    SignUp
                    <i className="fa fa-arrow-right ms-3" />
                  </a>
                </div>
                <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                  {/* <img className="img-fluid" src="img/pa2.jpg" alt="" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="w-100" src="img/colorso.jpg" alt="Image" />
          <div className="carousel-caption d-flex align-items-center">
            <div className="container">
              <div className="row align-items-center justify-content-center justify-content-lg-start">
                <div className="col-10 col-lg-7 text-center text-lg-start">
                  <h6 className="text-white text-uppercase mb-3 animated slideInDown">
                    // Arts and crafts..!! //
                  </h6>
                  <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">
                    Life is Art,Live yours in Colors
                  </h1>
                  <a
                    href=""
                    className="btn btn-primary py-3 px-5 animated slideInDown"
                  >
                    Learn More
                    <i className="fa fa-arrow-right ms-3" />
                  </a>
                </div>
                <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                  {/* <img className="img" src="img/pa5.jpg" alt="" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#header-carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#header-carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  
  )
}

export default PublicSlider