import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';

const CreateAnEvent = () => {
  const artist_id = localStorage.getItem('artist_id');
  //const { id } = useParams();

  const [file, setFile] = useState('');
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [inputs, setInputs] = useState({
    artist_id: artist_id,
    eventName: '',
    image: '',
    date: '',
    priceSeat: '',
    location: '',
    category_id: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const setRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
    setFormErrors({ ...formErrors, [name]: undefined }); // Clear the error for the changed input
  };

  const registersubmit = (event) => {
    event.preventDefault();

    // Validate the form inputs
    const errors = validate(inputs);
    setFormErrors(errors);
    setIsSubmit(true);

    // If there are errors, prevent form submission
    if (Object.keys(errors).length > 0) {
      return;
    }

    // If file is selected, upload the file first
    if (file) {
      const data = new FormData();
      const filename = file.name;
      data.append('file', file);
      data.append('name', filename);
      axios
        .post('http://localhost:5000/exhibition/upload', data)
        .then((response) => {
          console.log(response);
          // After successful file upload, submit the rest of the form data
          axios
            .post('http://localhost:5000/exhibition/artist-addevent', inputs)
            .then((response) => {
              // Show success toast here
              toast.success('Event created successfully!', {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
              });
              
            })
            .catch((error) => {
              toast.error(error.response.data.message, {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
              });
            });
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      // If no file is selected, submit the form data directly
      axios
        .post('http://localhost:5000/exhibition/artist-addevent', inputs)
        .then((response) => {
          // Show success toast here
          toast.success('Event created successfully!', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
          // navigate('/Login');
        })
        .catch((error) => {
          toast.error(error.response.data.message, {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        });
    }
  };

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
          <h2 style={{ marginLeft: '80px' }}>Upload Event Details</h2>
          <form>
            {/* Input fields */}
            <label htmlFor="eventName">Event Name:</label>
            <span className="errormsg" style={{ color: 'red' }}>
              {formErrors.eventName}
            </span>
            <input type="text" id="eventName" name="eventName" onChange={setRegister} />

            <label htmlFor="date">Date:</label>
            <span className="errormsg" style={{ color: 'red' }}>
              {formErrors.date}
            </span>
            <input type="date" id="date" name="date" onChange={setRegister} />

            <label htmlFor="priceSeat">Price/Seat:</label>
            <span className="errormsg" style={{ color: 'red' }}>
              {formErrors.priceSeat}
            </span>
            <input type="text" id="priceSeat" name="priceSeat" onChange={setRegister} />

            <label htmlFor="location">Location:</label>
            <span className="errormsg" style={{ color: 'red' }}>
              {formErrors.location}
            </span>
            <input type="text" id="location" name="location" onChange={setRegister} />

            <label htmlFor="category_id">Category:</label>
            <span className="errormsg" style={{ color: 'red' }}>
              {formErrors.category_id}
            </span>
            <select id="category_id" name="category_id" onChange={setRegister}>
              <option value="">Select category</option>
              {category.map((data) => (
                <option key={data._id} value={data._id}>
                  {data.categoryname}
                </option>
              ))}
            </select>

            <label htmlFor="message">Comments:</label>
            <span className="errormsg" style={{ color: 'red' }}>
              {formErrors.message}
            </span>
            <textarea
              id="message"
              name="message"
              rows="4"
              cols={60}
              onChange={setRegister}
            ></textarea>

            <label htmlFor="image">Upload your poster here:</label>
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

            <button
              type="submit"
              style={{ marginLeft: '40%' }}
              onClick={registersubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default CreateAnEvent;
