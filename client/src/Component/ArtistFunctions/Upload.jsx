import React, { useState } from 'react';
const Upload = () => {
  const[inputs, setinputs]=useState([]);
  console.log("value==>",inputs);
  const setRegister=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setinputs({...inputs,[name]:value});
    console.log(inputs);
  }
  const registersubmit =(event)=>{
    event.preventDefault();
    console.log("data",inputs);

  }
  return (
    <div>
      <div className="container text-center">

      <form>
        {/* <form method="POST" action="artHome" encType="multipart/form-data"> */}
        <center><h2>Upload Your Work here</h2></center>
          <div className="form-group">
     
            <input type="text" className="form-control" id="name" name="name" placeholder="Enter name" />
          </div>
          <div className="form-group">
        
            <textarea className="form-control" id="description" name="description" rows="3" placeholder="Desccription"></textarea>
          </div>
          <div className="form-group">
         
            <input type="number" className="form-control" id="price" name="price" placeholder="Enter price" />
          </div>
          <div className="form-group">
      
            <select className="form-select" id="category" name="category">
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
            </select>
          </div>
          <div className="form-group">
       
            <input type="file" className="form-control-file" id="image" name="image" />
          </div>
        <button type="submit" className="btn btn-primary"onSubmit={registersubmit}>Submit</button>
         {/* <a href="artHome">arthome </a> */}
        </form>
      </div>
    </div>
  );
};

export default Upload;
