import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Manageartist = () => {
  const [users,setUsers] = useState([]);
  const [currentPage,setCurrentPage]=useState(1);
  const usersPerPage =5;
  useEffect(() => {
    fetch('http://localhost:5000/register/view-artist')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setUsers(data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);
  // const usersPerPage = 7;
  const totalPages = Math.ceil(users.length / usersPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser); 
  const approve = (id) => {
    console.log(id);
    axios
      .get(`http://localhost:5000/register/approve/${id}`)
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reject = (id) => {
    axios
      .get(`http://localhost:5000/register/reject/${id}`)
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h3 className="text-center mt-4">Manage Artist</h3>
      <div className="card mt-4">
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Category</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
            {currentUsers.length > 0 ? (
                  currentUsers.map((user, index) => (
                    <tr key={user._id}>
                      <th scope="row">{(currentPage - 1) * usersPerPage + index + 1}</th>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.mobile}</td>
                      <td>{user.category}</td>
                <td className="text-center">
                  {user.status === '0'?(
                    <>
                  <button className="btn btn-success btn-sm mr-1" style={{ marginRight: '5px' }} onClick={()=>{
                    approve(user.login_id);
                  }}>
                    <span className="glyphicon glyphicon-ok" /> Approve
                  </button>
                  <button className="btn btn-danger btn-sm" style={{ marginRight: '5px' }} onClick={()=>{
                    reject(user.login_id);
                  }}>
                    <span className="glyphicon glyphicon-remove" /> Delete
                  </button>
                  </>
                  ):(
                    <>
                    <button className="btn btn-success ">Approved</button>
                  </>
                  )}
                </td>
              </tr>
                  ))
                  ):(
                 
                <tr>
                  <td colSpan="5" >No users found</td>
                </tr>
                 )} 
            </tbody>
          </table>
          <div className="row justify-content-center">
          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <a
                  className="page-link"
                  href="#"
                  aria-label="Previous"
                  onClick={() => handlePageClick(currentPage - 1)}
                >
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              {Array.from({ length: totalPages }, (_, index) => (
                <li
                  key={index}
                  className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                >
                  <a
                    className="page-link"
                    href="#"
                    onClick={() => handlePageClick(index + 1)}
                  >
                    {index + 1}
                  </a>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <a
                  className="page-link"
                  href="#"
                  aria-label="Next"
                  onClick={() => handlePageClick(currentPage + 1)}
                >
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
        {/* </div> */}
      </div>
    </div>
  );
};
export default Manageartist