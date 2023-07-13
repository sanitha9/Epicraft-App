import React from 'react'

const ReviewView = () => {
  return (
    <div className="row justify-content-center">
    {/* //{users.map((user) => ( */}
    <h1 className='text-center'><u>Reviews</u></h1>
      <div className="col-md-8 mb-5" >
        <div className="card">
          <img src="upload/img1.jpg"alt="Exhibition" className="card-image-large" />
          <div className="card-content">
            <h3 className="card-category">ArtName</h3>
            <p className="card-date">Date</p>
            {/* <p className="card-rate"></p> */}
            <p className="card-rate">User</p>
            <p className="card-rate">Category</p>
            <p className="card-description">Comments</p>
            <div className="card-actions">
              {/* <Link to={`/EditEventdetails/${user._id}`} */}
             {/* < className="edit-button">Edit</Link> */}
              <span className="button-space"></span>
              <input size={100}></input>
              <button className="delete-button"
            //   onClick={()=>{
            //     removeEvent(user._id);
            //   }}
              >Reply</button>
            </div>
          </div>
        </div>
      </div>
   
  </div>
  )
}

export default ReviewView