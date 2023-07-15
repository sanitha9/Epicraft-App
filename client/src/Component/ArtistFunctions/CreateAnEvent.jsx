import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const CreateAnEvent = () => {

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
    <>
      <div
        style={{
          backgroundImage: `url(img/artevent.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '1300px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            padding: '30px',
            background: '#fff',
            boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
            borderRadius: '4px',
          }}
        >
          <h2 style={{marginLeft:"80px"}}>Upload Event Details</h2>
          <form>
            {/* Input fields */}
            <label htmlFor="name">Event Name:</label>
            <input type="text" id="name"name="eventName" onChange={setRegister}/>

            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date"onChange={setRegister} />

            <label htmlFor="price">Price/Seat:</label>
            <input type="text" id="price" name="priceSeat"onChange={setRegister} />

            <label htmlFor="location">Location:</label>
            <input type="text" id="location" name="location"onChange={setRegister} />

            <label htmlFor="category">Category:</label>
            <select id="category" name="category_id" onChange={setRegister}>
            <option value="">Select  category</option>
                {category.map((data)=>(
                  <option value={data._id}>{data.categoryname}</option>
                ))}
            </select>

            <label htmlFor="message">Comments:</label>
            <textarea id="message" name="message" rows="4" cols={60} onChange={setRegister}></textarea>

            <label htmlFor="file">Upload your poster here:</label>
            <input type="file" id="file" name="file" />

            <button type="submit" style={{ marginLeft: "40%" }}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateAnEvent;
