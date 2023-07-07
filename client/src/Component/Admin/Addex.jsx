
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Addex = () => {
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
    axios.post('http://localhost:5000/exhibition/addevent',inputs).then((response)=>{
      navigate('/admin')
    })
   

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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',marginTop:'100px' }}>
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
        <input type="file" placeholder="Image" name="image" style={{ marginBottom: '10px', width: '100%' }} onChange={setRegister}/>
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
