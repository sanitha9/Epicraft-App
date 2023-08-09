import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import PublicUserFooter from '../Footer/PublicUserFooter';

const Addex = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [inputs, setInputs] = useState({
    eventName: '',
    image: '',
    date: '',
    priceSeat: '',
    location: '',
    category_id: '',
    message: '',
  });
  
  const setRegister = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const registersubmit = (event) => {
    event.preventDefault();
    const errors = validate(inputs);
    setFormErrors(errors);
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // Submit form data to the server
      if (file) {
        const data = new FormData();
        const filename = file.name;
        data.append('file', file);
        data.append('name', filename);
        axios
          .post('http://localhost:5000/exhibition/upload', data)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });
      }

      axios
        .post('http://localhost:5000/exhibition/addevent', inputs)
        .then((response) => {
          toast.success('Your added a New Exhibition details successfully!'); // Display success toast
          navigate('/admin');
        })
        .catch((error) => {
          toast.error('An error occurred.'); // Display error toast
          console.error(error);
        });
    }
  }, [formErrors, isSubmit, file, inputs]);

  const validate = (values) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!values.eventName) {
      errors.eventName = 'Event name is required!';
    }
    if (!values.location) {
      errors.location = 'Location is required!';
    }
    if (!values.image) {
      errors.image = 'Image is required';
    }
    if (!values.priceSeat) {
      errors.priceSeat = 'Price/Seat is required';
    }
    if (!values.date) {
      errors.date = 'Date is required';
    }
    if (!values.message) {
      errors.message = 'Message is required!';
    }
    if (!values.category_id) {
      errors.category_id = 'Select any category';
    }

    return errors;
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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', marginTop: '200px' }}>
        <ToastContainer />

        <form className='inner' style={{ width: '30%', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f7f7f7' }}>
          <h3>Upload Exhibition Details</h3>
          <label htmlFor="date">Event Name</label>
          <span className="errormsg" style={{ color: 'red' }}>
            {formErrors.eventName}
          </span>
          <input type="text" placeholder="Date" name="eventName" style={{ marginBottom: '10px', width: '100%' }} onChange={setRegister} />
          <label htmlFor="category">Category</label>
          <span className="errormsg" style={{ color: 'red' }}>
            {formErrors.category_id}
          </span>
          <select id="category" style={{ marginBottom: '10px', width: '100%' }} name="category_id" onChange={setRegister}>
            <option value="">Select category</option>
            {category.map((data) => (
              <option key={data._id} value={data._id}>
                {data.categoryname}
              </option>
            ))}
            {/* Add more options as needed */}
          </select>

          <label htmlFor="date">Date</label>
          <span className="errormsg" style={{ color: 'red' }}>
            {formErrors.date}
          </span>
          <input type="date" placeholder="Date" name="date" style={{ marginBottom: '10px', width: '100%' }} onChange={setRegister} />

          <label htmlFor="image">Upload Image</label>
          <span className="errormsg" style={{ color: 'red' }}>
            {formErrors.image}
          </span>
          <input
            type="file"
            className="form-control-file"
            name="image"
            style={{ marginBottom: '10px', width: '100%' }}
            onChange={(e) => {
              setFile(e.target.files[0]);
              console.log(e.target.files[0].name);
              setInputs({ ...inputs, image: e.target.files[0].name });
            }}
          />

          <label htmlFor="rate">Ticket Rate/seat</label>
          <span className="errormsg" style={{ color: 'red' }}>
            {formErrors.priceSeat}
          </span>
          <input type="text" placeholder="Rate" name="priceSeat" style={{ marginBottom: '10px', width: '100%' }} onChange={setRegister} />
          <label htmlFor="description">Location</label>
          <span className="errormsg" style={{ color: 'red' }}>
            {formErrors.location}
          </span>
          <input type="text" placeholder="Location" name="location" style={{ marginBottom: '10px', width: '100%' }} onChange={setRegister} />
          <label htmlFor="description">Description</label>
          <span className="errormsg" style={{ color: 'red' }}>
            {formErrors.message}
          </span>
          <input type="text" placeholder="Description" name="message" style={{ marginBottom: '10px', width: '100%' }} onChange={setRegister} />
          <button style={{ marginBottom: '10px', width: '100%', padding: '10px', backgroundColor: 'blue', color: 'white', borderRadius: '3px', border: 'none' }} onClick={registersubmit}>Upload</button>

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
}

export default Addex;
