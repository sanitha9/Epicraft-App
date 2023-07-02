import React from 'react'

const AdminFooter = () => {
  return (
   <>
   
   <div className="footer">
  <div className="p-3 mb-2 bg-warning text-dark" data-wow-delay="0.1s">
    {/* <div class="footbg"><img src="img/bg1.jpg" style="width:100rem;height:20rem;" data-wow-delay="0.1s"> */}
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
        {/* <div class="col-lg-3 col-md-6">
                  <h4 class="text-light mb-4">Services</h4>
                  <a class="btn btn-link" href="">Diagnostic Test</a>
                  <a class="btn btn-link" href="">Engine Servicing</a>
                  <a class="btn btn-link" href="">Tires Replacement</a>
                  <a class="btn btn-link" href="">Oil Changing</a>
                  <a class="btn btn-link" href="">Vacuam Cleaning</a>
              </div> */}
        {/* <div class="col-lg-3 col-md-6">
                  <h4 class="text-light mb-4">Newsletter</h4>
                  <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                  <div class="position-relative mx-auto" style="max-width: 400px;">
                      <input class="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email">
                      <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                  </div>
              </div> */}
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
            , All Right Reserved.
            {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
            Designed By{" "}
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
</div>

   
   </>
  )
}

export default AdminFooter