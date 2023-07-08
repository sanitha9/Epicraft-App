import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddCategory = () => {
  // const [users, setUsers] = useState([]);
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ categoryname: '' });

  const setRegister = (event) => {
    const { name, value } = event.target;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };


  // ...
  
  const registerSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/category/category', inputs)
      .then((response) => {
        toast.success('Category added successfully!', {
          position: toast.POSITION.BOTTOM_CENTER,
        });
        // Fetch the updated category data
        fetchCategoryData();
      })
      .catch((error) => {
        console.error(error);
        toast.error('Failed to add category.', {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      });
  };
  
  const fetchCategoryData = () => {
    axios
      .get('http://localhost:5000/category/view-category')
      .then((response) => {
        setCategory(response.data.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  
  // ...
  
  useEffect(() => {
    fetchCategoryData();
  }, []);
  const removeEvent = (id) => {
    axios
      .delete(`http://localhost:5000/category/delete-category/${id}`)
      .then(() => {
        setCategory((prevEvents) => prevEvents.filter((event) => event._id !== id));
        toast.success('category deleted successfully!', {
          position: toast.POSITION.BOTTOM_CENTER, // Set the toast position to bottom center
        });
      })
      .catch((error) => {
        console.log('Error:', error);
        toast.error('Error deleting category!', {
          position: toast.POSITION.BOTTOM_CENTER, // Set the toast position to bottom center
        });
      });
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="box" style={{ color: 'blue', padding: '20px' }}>
            <div className="box-content" style={{ border: '2px solid black', width: '800px', height: '300px' }}>
              <form style={{ padding: '30px' }}>
                <h1 style={{ fontSize: '1.5rem' }}>Please enter the categories of artworks</h1>
                <div className="form-group">
                  <h5>
                    <i className="fa fa-paint-brush fa-3x" />Category:
                  </h5>
                  <input type="text" name="categoryname" value={inputs.categoryname} onChange={setRegister} />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary" onClick={registerSubmit}>
                    Create artCategory
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="jobcategory">
              <div className="card panel-table">
                <div className="card-header" style={{ textAlign: 'center' }}>
                  <h2>Manage ArtsCategory</h2>
                  <div className="row" />
                </div>
                <div className="card-body">
                  <table className="table table-striped table-bordered table-list">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Job Category Name</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.map((category, index) => (
                        <tr key={category._id}>
                          <td>{index + 1}</td>
                          <td>{category.categoryname}</td>
                          <td align="center">
                            <button className="btn btn-danger" onClick={()=>{
                    removeEvent(category._id);
                  }}>
                              <em className="fa fa-times" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
