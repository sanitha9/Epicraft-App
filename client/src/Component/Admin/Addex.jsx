import React from 'react';

const Addex = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form className='inner' style={{ width: '30%', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f7f7f7' }}>
        <h3>Upload Exhibition Details</h3>
        <label htmlFor="category">Category</label>
        <input type="text" placeholder="Category" id="category" style={{ marginBottom: '10px', width: '100%' }} />
        <label htmlFor="date">Date</label>
        <input type="date" placeholder="Date" id="date" style={{ marginBottom: '10px', width: '100%' }} />
        <label htmlFor="image">Upload Image</label>
        <input type="file" placeholder="Image" id="image" style={{ marginBottom: '10px', width: '100%' }} />
        <label htmlFor="rate">Ticket Rate</label>
        <input type="text" placeholder="Rate" id="rate" style={{ marginBottom: '10px', width: '100%' }} />
        <label htmlFor="description">Description</label>
        <input type="text" placeholder="Description" id="description" style={{ marginBottom: '10px', width: '100%' }} />
        <button style={{ marginBottom: '10px', width: '100%', padding: '10px', backgroundColor: 'blue', color: 'white', borderRadius: '3px', border: 'none' }}>Upload</button>

        <div className="social2">
          {/* <div className="go2">
            <i className="fab fa-google" /> Google
          </div>
          <div className="fb">
            <i className="fab fa-facebook" /> Facebook
          </div> */}
        </div>
      </form>
    </div>
  );
}

export default Addex;
