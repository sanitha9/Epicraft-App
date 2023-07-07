import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddCategory = () => {
  const [jobCategories, setJobCategories] = useState([]);
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ categoryname: '' });

  const setRegister = (event) => {
    const { name, value } = event.target;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  const registerSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/category/category', inputs).then((response) => {
      navigate('/admin');
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
    <div className="container">
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
                            <button className="btn btn-danger">
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
