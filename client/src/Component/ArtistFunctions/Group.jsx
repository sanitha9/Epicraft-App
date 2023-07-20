import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CreateGroup = () => {
  const navigate = useNavigate()
  const login_id=localStorage.getItem('login_id')
  // const [category, setCategory] = useState([]);
  const [file, setFile] = useState('');
  const[inputs, setinputs]=useState({
    login_id:login_id,
});
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
      axios.post('http://localhost:5000/group/upload', data)
     
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    axios.post(`http://localhost:5000/group/group`,inputs).then((response)=>{
     
       // console.log(response);
        
     navigate('/artHome')
    })
    .catch((error) => {
      console.error(error);
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    });
    

  }

  return (
    <>
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
            <ToastContainer/>
          <h2 style={{ marginLeft: "80px" }}>Create Group</h2>
          <form>
            <label htmlFor="groupname">Group Name:</label>
            <input type="text" id="groupname" name="groupname" onChange={setRegister}/>

            <label htmlFor="coverphoto">Upload a cover photo:</label>
            
            <input
                type="file"
                
                name="coverphoto"
                style={{ marginBottom: '10px', width: '100%' }}
                onChange={(e) => {
                  setFile(e.target.files[0]);
                  console.log(e.target.files[0].name);
                  setinputs({ ...inputs, coverphoto: e.target.files[0].name });
                }}
              />
            <div>
              <label htmlFor="options">Privacy:</label>
              <select id="options" name="privacy" onChange={setRegister}>
                <option value="public">public</option>
                <option value="private">private</option>
              </select>
            </div>

            <label htmlFor="description">Description:</label>
            <input type="text" id="description" name="description" onChange={setRegister} />

            <button type="submit" style={{ marginLeft: "40%", background: "#007bff", color: "#fff", border: "none", borderRadius: "4px", padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
            onClick={registersubmit}>Create</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateGroup;
