
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AddCategory = () => {
  const navigate = useNavigate()
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
    axios.post('http://localhost:5000/register/category',inputs).then((response)=>{
      navigate('/admin')
    })
  }




  
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
                  
                    name='categoryname'
                    onChange={setRegister}
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary"onClick={registersubmit}>Submit</button>
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
