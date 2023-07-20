import React from 'react'

const PublicUserFooter = () => {
  return (
    <div className="footer1">
    {/* <div className="p-3 mb-2 bg-warning text-dark" data-wow-delay="0.1s"> */}
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Mail Us</h4>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3" />
              123 Street, New York, USA
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt me-3" />
              +012 345 67890
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3" />
              info@example.com
            </p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-youtube" />
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
          <div className="footAdd">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Registred Office Address</h4>
              <h6 className="text-light">Epicraft Internet Private Limited</h6>
              <p className="mb-4">Kerala, 560103,</p>
              <h6 className="text-light">India</h6>
              <p className="mb-0">Telephone: 044-45614700</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              ©{" "}
              <a className="border-bottom" href="#">
                Epi craft
              </a>
              , All Right Reserved. Designed By{" "}
              <a className="border-bottom" href="https://htmlcodex.com">
                Mca Project
              </a>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a href="">Home</a>
                <a href="">Cookies</a>
                <a href="">Help</a>
                <a href="">FQAs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  // </div>
  
  )
}

export default PublicUserFooter