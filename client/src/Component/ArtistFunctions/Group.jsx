import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ArtNav from '../NavBar/ArtNav';

const CreateGroup = () => {
  const navigate = useNavigate();
  const login_id = localStorage.getItem('login_id');
  const [file, setFile] = useState('');
  const [inputs, setInputs] = useState({
    login_id: login_id,
    groupname: '',
    privacy: '',
    description: '',
    coverphoto: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  console.log("value==>", inputs);

  const setRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
    console.log(inputs);
  };

  const registersubmit = (event) => {
    event.preventDefault();
    const errors = validate(inputs);
    setFormErrors(errors);
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // Your axios.post logic here...
      // This is just a placeholder, replace it with your actual API call.
      axios
        .post(`http://localhost:5000/group/group`, inputs)
        .then((response) => {
          // If the response indicates that a group has already been created
          if (response.data.groupAlreadyCreated) {
            // Show the warning toast message
            toast.warning('You have already created a group.', {
              position: 'top-center',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'colored',
            });
          } else {
            // If the group is created successfully, show the success toast message
            toast.success('Group created successfully!', {
              position: 'top-center',
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'colored',
            });

            // Navigate to the home page
            
          }
        })
        .catch((error) => {
          console.error(error);
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
  }, [formErrors, isSubmit, inputs, navigate]);

  const validate = (values) => {
    const errors = {};

    if (!values.groupname) {
      errors.groupname = 'Group name is required!';
    }
    if (!values.privacy) {
      errors.privacy = 'Privacy is required!';
    }
    if (!values.coverphoto) {
      errors.coverphoto = 'Cover photo is required';
    }
    if (!values.description) {
      errors.description = 'Description is required';
    }

    return errors;
  };

  return (
    <>
      <ArtNav />
      <div
        style={{
          backgroundImage: `url(img/artevent.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '800px',
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
          <ToastContainer />
          <h2 style={{ marginLeft: "80px" }}>Create Group</h2>
          <form>
            <label htmlFor="groupname">Group Name:</label>
            <span className="errormsg" style={{ color: 'red' }}>
              {formErrors.groupname}
            </span>
            <input type="text" id="groupname" name="groupname" onChange={setRegister} />

            <label htmlFor="coverphoto">Upload a cover photo:</label>
            <span className="errormsg" style={{ color: 'red' }}>
              {formErrors.coverphoto}
            </span>
            <input
              type="file"
              name="coverphoto"
              style={{ marginBottom: '10px', width: '100%' }}
              onChange={(e) => {
                setFile(e.target.files[0]);
                console.log(e.target.files[0].name);
                setInputs({ ...inputs, coverphoto: e.target.files[0].name });
              }}
            />
            <div>
              <label htmlFor="options">Privacy:</label>
              <span className="errormsg" style={{ color: 'red' }}>
                {formErrors.privacy}
              </span>
              <select id="options" name="privacy" onChange={setRegister}>
                <option value="">Select Privacy</option>
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>

            <label htmlFor="description">Description:</label>
            <span className="errormsg" style={{ color: 'red' }}>
              {formErrors.description}
            </span>
            <input type="text" id="description" name="description" onChange={setRegister} />

            <button
              type="submit"
              style={{
                marginLeft: "40%",
                background: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                padding: "10px 20px",
                fontSize: "16px",
                cursor: "pointer"
              }}
              onClick={registersubmit}
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateGroup;
