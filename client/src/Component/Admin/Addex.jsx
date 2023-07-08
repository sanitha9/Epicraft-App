
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const Addex = () => {
  const [file, setFile] = useState('');
  const navigate = useNavigate()
  const [category, setCategory] = useState([]);
  const[inputs, setinputs]=useState([]);
  console.log("value==>",file.name);
  console.log("value==>",file);
  const setRegister=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setinputs({...inputs,[name]:value});
    console.log(inputs);
  }
  const registersubmit = (event) => {
    event.preventDefault();
    if (file) {
          const data = new FormData();
          const filename = file.name
          data.append('file', file);
          data.append('name', filename);
          axios.post('http://localhost:5000/exhibition/upload', data)
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.error(error);
            });
        }
    axios.post('http://localhost:5000/exhibition/addevent', inputs)
      .then((response) => {
        toast.success('Your added a New Exhibition details successfully!'); // Display success toast
        // navigate('/admin');
      })
      .catch((error) => {
        toast.error('An error occurred.'); // Display error toast
        console.error(error);
      });
  };
  

  // const registerSubmit = (event) => {
  //   event.preventDefault();
  //   if (file) {
  //     const data = new FormData();
  //     data.append('file', file);
  //     data.append('name', file.name);
  //     axios.post('http://localhost:5000/category/upload', data)
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   }


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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',marginTop:'100px' }}>
      
      <ToastContainer />
      
      <form className='inner' style={{ width: '30%', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f7f7f7' }}>
        <h3>Upload Exhibition Details</h3>
        <label htmlFor="date">Event Name</label>
        <input type="text" placeholder="Date" name="eventName" style={{ marginBottom: '10px', width: '100%' }} onChange={setRegister} />
        <label htmlFor="category">Category</label>
        <select id="category" style={{ marginBottom: '10px', width: '100%' }} name="category_id" onChange={setRegister}>
        <option value="">Select  category</option>
                {category.map((data)=>(
                  <option value={data._id}>{data.categoryname}</option>
                ))}
          {/* Add more options as needed */}
        </select>

        <label htmlFor="date">Date</label>
        <input type="date" placeholder="Date" name="date" style={{ marginBottom: '10px', width: '100%' }}onChange={setRegister}/>
        
        <label htmlFor="image">Upload Image</label>
        {/* <input type="file" placeholder="Image" name="image" style={{ marginBottom: '10px', width: '100%' }} onChange={setRegister}/> */}
       
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
       
       
        <label htmlFor="rate">Ticket Rate/seat</label>
        <input type="text" placeholder="Rate" name="priceSeat" style={{ marginBottom: '10px', width: '100%' }} onChange={setRegister}/>
        <label htmlFor="description">Location</label>
        <input type="text" placeholder="Rate" name="location" style={{ marginBottom: '10px', width: '100%' }} onChange={setRegister}/>
        <label htmlFor="description">Description</label>
        <input type="text" placeholder="Description" name="description" style={{ marginBottom: '10px', width: '100%' }} onChange={setRegister} />
        <button style={{ marginBottom: '10px', width: '100%', padding: '10px', backgroundColor: 'blue', color: 'white', borderRadius: '3px', border: 'none' }}onClick={registersubmit} >Upload</button>

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
