import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Upload = () => {
  const navigate = useNavigate()
  const [category, setCategory] = useState([]);
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
    axios.post('http://localhost:5000/register/artitems',inputs).then((response)=>{
      navigate('/artHome')
    })
   

  }
  useEffect(() => {
    axios.get('http://localhost:5000/category/view-customized')
      .then((response) => {
        setCategory(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);
  return (
    <div>
      <div className="container text-center">

      <form>
        {/* <form method="POST" action="artHome" encType="multipart/form-data"> */}
        <center><h2>Upload Your Work here</h2></center>
          <div className="form-group">
     
            <input type="text" className="form-control" id="name" name="artname" placeholder="Enter name" onChange={setRegister}/>
          </div>
          <div className="form-group">
        
            <textarea className="form-control" id="description" name="description" rows="3" placeholder="Desccription"onChange={setRegister}></textarea>
          </div>
          <div className="form-group">
         
            <input type="number" className="form-control" id="price" name="price" placeholder="Enter price"onChange={setRegister} />
          </div>
          <div className="form-group">
      
            <select className="form-select"  name="category" onChange={setRegister}>
            <option value="">Select  category</option>
                {category.map((data)=>(
                  <option value={data._id}>{data.categoryName}</option>
                ))}
            </select>
          </div>
          <div className="form-group">
       
            <input type="file" className="form-control-file" id="image" name="image"onChange={setRegister} />
          </div>
        <button type="submit" className="btn btn-primary"onClick={registersubmit}>Submit</button>
         {/* <a href="artHome">arthome </a> */}
        </form>
      </div>
    </div>
  );
};

export default Upload;
