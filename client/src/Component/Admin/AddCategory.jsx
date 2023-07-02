import React from 'react';

const AddCategory = () => {
 

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
        <div className="box" style={{ color: "blue", padding: "20px" }}>

            <div className="box-content" style={{border: "2px solid black",width:"800px",height:"300px"}}>
              <form style={{padding:"30px"}}>
                <h1 style={{ fontSize: '1.5rem' }}>Please enter the categories of art works</h1>
                <div className="form-group">
                  <label htmlFor="category">Category:</label>
                  <input
                    type="text"
                    id="category"
                   
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
