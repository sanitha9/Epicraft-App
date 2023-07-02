import React from 'react'

const PublicAbout = () => {
  return (
    <>
    <div
      className="container-fluid page-header mb-5 p-0"
      style={{ backgroundImage: "url(img/mr1.jpg)" }}
    >
      <div className="container-fluid page-header-inner py-5">
        <div className="container text-center">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            About Us
          </h1>
        </div>
      </div>
    </div>
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 pt-4" style={{ minHeight: 400 }}>
            <div
              className="position-relative h-100 wow fadeIn"
              data-wow-delay="0.1s"
            >
              <img
                className="position-absolute img-fluid w-100 h-100"
                src="img/img44.jpg"
                style={{ objectFit: "cover", marginTop: "-3rem" }}
                alt=""
              />
              <div
                className="position-absolute top-0 end-0 mt-n4 me-n4 py-4 px-5"
                style={{ background: "rgba(0, 0, 0, .08)" }}
              >
                <h1 className="display-4 text-white mb-0">
                  5 <span className="fs-4">Years of</span>
                </h1>
                <h4 className="text-white">Experience</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h6
              className="text-primary text-uppercase"
              style={{ fontStyle: "italic", fontWeight: "bold", color: "blue" }}
            >
              // About Us //
            </h6>
            <h1
              className="mb-4"
              style={{ fontStyle: "italic", fontWeight: "bold" }}
            >
              <span className="text-primary">Epicraft</span> Is The Best choice
              For those who love the Arts and Crafts
            </h1>
            <p
              className="mb-4"
              style={{ fontStyle: "italic", fontWeight: "bold", color: "blue" }}
            >
              "Art is one of the ways by which a person can convey his or her
              feelings and emotions.We help to make your ideas in to make realitys
              with colors..."
            </p>
            <div className="row g-4 mb-3 pb-3">
              <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                <div className="d-flex">
                  <div
                    className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                    style={{ width: 45, height: 45 }}
                  >
                    <span className="fw-bold text-secondary">01</span>
                  </div>
                  <div className="ps-3">
                    <h6>Professional &amp; Expert</h6>
                    <span
                      style={{
                        fontStyle: "italic",
                        fontWeight: "bold",
                        color: "blue"
                      }}
                    >
                      We have famous artists and their best works..
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                <div className="d-flex">
                  <div
                    className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                    style={{ width: 45, height: 45 }}
                  >
                    <span className="fw-bold text-secondary">02</span>
                  </div>
                  <div className="ps-3">
                    <h6>Gallery</h6>
                    <span
                      style={{
                        fontStyle: "italic",
                        fontWeight: "bold",
                        color: "blue"
                      }}
                    >
                      {" "}
                      We offers wide range of collections of arts and crafts..
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                <div className="d-flex">
                  <div
                    className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                    style={{ width: 45, height: 45 }}
                  >
                    <span className="fw-bold text-secondary">03</span>
                  </div>
                  <div className="ps-3">
                    <h6>Community</h6>
                    <span
                      style={{
                        fontStyle: "italic",
                        fontWeight: "bold",
                        color: "blue"
                      }}
                    >
                      We collaborate the people who loves the arts and crafts..
                    </span>
                  </div>
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

export default PublicAbout