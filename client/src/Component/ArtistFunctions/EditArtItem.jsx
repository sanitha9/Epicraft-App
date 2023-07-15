
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const EditArtItem = () => {
  const navigate = useNavigate();
  const {id}=useParams()
    const [category, setCategory] = useState([]);
    const [inputs, setInputs] = useState({});
    const setRegister = (event) => {
      const { name, value } = event.target;
      setInputs((prevInputs) => ({
        ...prevInputs,
        [name]: value,
      }));
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
      const registersubmit = (event) => {
        event.preventDefault();
        axios
          .post(`http://localhost:5000/artitems/edit-artitem/${id}`, inputs)
          .then((response) => {
            console.log(response);
            return toast.promise(
              Promise.resolve('Artwork edited successfully'),
              {
                pending: 'Editing artwork...',
                success: 'Artwork edited successfully',
                error: 'Failed to edit artwork',
              }
            );
          })
          .then(() => {
            navigate('/artHome');
          })
          .catch((error) => {
            console.error(error);
            toast.error('Failed to edit artwork');
          });
      };
      
  return (
   <>
    <div>
      <div className="container text-center">
      <ToastContainer />
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
        
        <button type="submit" className="btn btn-primary"onClick={registersubmit}>Submit</button>
         {/* <a href="artHome">arthome </a> */}
        </form>
      </div>
    </div>
   
   
   
   </>
  )
}

export default EditArtItem