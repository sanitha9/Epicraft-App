import React from 'react'

const Review = () => {
  return (
   <>
   <div className="container-fluid px-1 py-5 mx-auto">
  <div className="row justify-content-center">
    <div className="col-xl-7 col-lg-8 col-md-10 col-12 text-center mb-5">
      <div className="card">
        <div className="row d-flex">
          <div className="">
            <img
              className="profile-pic"
              src="https://i.imgur.com/V3ICjlm.jpg"
            />
          </div>
          <div className="d-flex flex-column">
            <h3 className="mt-2 mb-0">Vikram jit Singh</h3>
            <div>
              <p className="text-left">
                <span className="text-muted">4.0</span>
                <span className="fa fa-star star-active ml-3" />
                <span className="fa fa-star star-active" />
                <span className="fa fa-star star-active" />
                <span className="fa fa-star star-active" />
                <span className="fa fa-star star-inactive" />
              </p>
            </div>
          </div>
          <div className="ml-auto">
            <p className="text-muted pt-5 pt-sm-3">10 Sept</p>
          </div>
        </div>
        <div className="row text-left">
          <h4 className="blue-text mt-3">
            "An awesome activity to experience"
          </h4>
          <p className="content">
            If you really enjoy spending your vacation 'on water' or would like
            to try something new and exciting for the first time.
          </p>
        </div>
        <div className="row text-left mt-4">
          <div className="like mr-3 vote">
            <img src="https://i.imgur.com/mHSQOaX.png" />
            <span className="blue-text pl-2">20</span>
          </div>
          <div className="unlike vote">
            <img src="https://i.imgur.com/bFBO3J7.png" />
            <span className="text-muted pl-2">4</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

   </>
  )
}

export default Review