import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Upload = () => {
  const id=localStorage.getItem('login_id');
  
  const [file, setFile] = useState('');
  const navigate = useNavigate()
  const [category, setCategory] = useState([]);
  const[inputs, setinputs]=useState({
    login_id:id,
});
  console.log("value==>",file.name);
  console.log("value==>",file);
  console.log("value==>",inputs);
  const setRegister=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setinputs({...inputs,[name]:value});
    console.log(inputs);
  }
  const registersubmit =(event)=>{
    event.preventDefault();
    if (file) {
      const data = new FormData();
      const filename = file.name
      data.append('file', file);
      data.append('name', filename);
      axios.post(`http://localhost:5000/artitems/upload/${id}`,data)
     
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }


    axios.post('http://localhost:5000/artitems/artitems',inputs).then((response)=>{
      console.log(response);
      navigate('/artHome')
    }).catch((error) => {
      console.log('Error:', error);
    });
   

  }
  useEffect(() => {
    axios.get('http://localhost:5000/category/view-category')
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
                  <option value={data._id}>{data.categoryname}</option>
                ))}
            </select>
          </div>
          <div className="form-group">
       
            {/* <input type="file" className="form-control-file" id="image" name="image"onChange={setRegister} /> */}


            <input
                type="file"
                className="form-control-file"
                name="image"
                style={{ marginBottom: '10px', width: '100%' }}
                onChange={(e) => {
                  setFile(e.target.files[0]);
                  console.log(e.target.files[0].name);
                  setinputs({ ...inputs, image: e.target.files[0].name });
                }}
              />
          </div>
        <button type="submit" className="btn btn-primary"onClick={registersubmit}>Submit</button>
         {/* <a href="artHome">arthome </a> */}
        </form>
      </div>
    </div>
  );
};

export default Upload;
