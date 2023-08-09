import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Upload = () => {
  const id = localStorage.getItem('login_id');

  const [file, setFile] = useState('');
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [inputs, setInputs] = useState({
    login_id: id,
    artname: '',
    description: '',
    price: '',
    image: '',
    category: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const setRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!values.artname) {
      errors.artname = 'Art name is required!';
    }

    if (!values.description) {
      errors.description = 'Description is required!';
    }

    if (!values.price) {
      errors.price = 'Price is required!';
    }

    if (!values.image) {
      errors.image = 'Image is required!';
    }

    if (!values.category) {
      errors.category = 'Please select a category!';
    }

    return errors;
  };

  const registersubmit = (event) => {
    event.preventDefault();
    const errors = validate(inputs);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setIsSubmit(true);

      if (file) {
        const data = new FormData();
        const filename = file.name;
        data.append('file', file);
        data.append('name', filename);
        axios
          .post(`http://localhost:5000/artitems/upload/${id}`, data)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });
      }

      axios
        .post('http://localhost:5000/artitems/artitems', inputs)
        .then((response) => {
          navigate('/artHome');
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
    <div>
      <div className="container text-center">
        <form>
          <center>
            <h2>Upload Your Work here</h2>
          </center>
          <div className="form-group">
            <span className="errormsg" style={{ color: 'red' }}>
              {formErrors.artname}
            </span>
            <input
              type="text"
              className="form-control"
              id="name"
              name="artname"
              placeholder="Enter name"
              onChange={setRegister}
            />
          </div>
          <div className="form-group">
            <span className="errormsg" style={{ color: 'red' }}>
              {formErrors.description}
            </span>
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows="3"
              placeholder="Desccription"
              onChange={setRegister}
            ></textarea>
          </div>
          <div className="form-group">
            <span className="errormsg" style={{ color: 'red' }}>
              {formErrors.price}
            </span>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              placeholder="Enter price"
              onChange={setRegister}
            />
          </div>
          <div className="form-group">
            <span className="errormsg" style={{ color: 'red' }}>
              {formErrors.category}
            </span>
            <select className="form-select" name="category" onChange={setRegister}>
              <option value="">Select category</option>
              {category.map((data) => (
                <option value={data._id}>{data.categoryname}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
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
                setInputs({ ...inputs, image: e.target.files[0].name });
              }}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={registersubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Upload;
