import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';
import AdminNav from '../NavBar/AdminNav';

const EditEventdetails = () => {
    const {id}=useParams()
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [inputs, setInputs] = useState({});
  
  const setRegister = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const registersubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:5000/exhibition/edit-event/${id}`, inputs)
      .then((response) => {
        console.log(response);
        navigate('/upcomingeventmanageadmin');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    axios
      .get('http://localhost:5000/category/view-category')
      .then((response) => {
        setCategory(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  return (
    <>
   <AdminNav/>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', marginTop: '100px' }}>
      <form className='inner' style={{ width: '30%', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f7f7f7' }}>
        <h3>Edit Exhibition Details</h3>
        <label htmlFor="eventName">Event Name</label>
        <input type="text" placeholder="Event Name" name="eventName" style={{ marginBottom: '10px', width: '100%' }} onChange={setRegister} />

        <label htmlFor="category">Category</label>
        <select id="category" style={{ marginBottom: '10px', width: '100%' }} name="category_id" onChange={setRegister}>
          <option value="">Select category</option>
          {category.map((data) => (
            <option key={data._id} value={data._id}>{data.categoryname}</option>
          ))}
        </select>

        <label htmlFor="date">Date</label>
        <input type="date" placeholder="Date" name="date" style={{ marginBottom: '10px', width: '100%' }} onChange={setRegister} />

       
        <label htmlFor="priceSeat">Ticket Rate/seat</label>
        <input type="text" placeholder="Rate" name="priceSeat" style={{ marginBottom: '10px', width: '100%' }} onChange={setRegister} />

        <label htmlFor="location">Location</label>
        <input type="text" placeholder="Location" name="location" style={{ marginBottom: '10px', width: '100%' }} onChange={setRegister} />

        <label htmlFor="description">Description</label>
        <input type="text" placeholder="Description" name="description" style={{ marginBottom: '10px', width: '100%' }} onChange={setRegister} />

        <button
          style={{
            marginBottom: '10px',
            width: '100%',
            padding: '10px',
            backgroundColor: 'blue',
            color: 'white',
            borderRadius: '3px',
            border: 'none',
          }}
          onClick={registersubmit}
        >
          Submit
        </button>

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
    </>
  );
};

export default EditEventdetails;
